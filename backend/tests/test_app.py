import pytest
from app import app
import os
import tempfile

@pytest.fixture
def client():
    db_fd, app.config['DATABASE'] = tempfile.mkstemp()
    app.config['TESTING'] = True

    with app.test_client() as client:
        with app.app_context():
            # Create a temporary dist folder and index.html
            dist_folder = os.path.join(app.root_path, 'dist')
            os.makedirs(dist_folder, exist_ok=True)
            with open(os.path.join(dist_folder, 'index.html'), 'w') as f:
                f.write('<!doctype html>')
        yield client

    os.close(db_fd)
    os.unlink(app.config['DATABASE'])
    # Clean up the dummy file and folder
    os.remove(os.path.join(dist_folder, 'index.html'))
    os.rmdir(dist_folder)

def test_health_check(client):
    """Test the health check endpoint."""
    rv = client.get('/api/health')
    assert rv.status_code == 200
    assert rv.json == {'status': 'ok'}

def test_serve_index(client):
    """Test that the index.html file is served."""
    rv = client.get('/')
    assert rv.status_code == 200
    assert b'<!doctype html>' in rv.data.lower()

def test_serve_static_files(client):
    """Test that a known static file is served."""
    # In a real scenario, you would have a known file in your static folder
    # For now, we assume 'index.html' is the only file.
    rv = client.get('/index.html')
    assert rv.status_code == 200
    assert b'<!doctype html>' in rv.data.lower()

def test_serve_nonexistent_path(client):
    """Test that a nonexistent path serves index.html."""
    rv = client.get('/some/nonexistent/path')
    assert rv.status_code == 200
    assert b'<!doctype html>' in rv.data.lower()
