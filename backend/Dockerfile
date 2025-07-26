# Stage 1: Build the React frontend
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Flask and Waitress
# Use a stable, slim Python image
FROM python:3.10-slim

WORKDIR /app_backend

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Run the app with Gunicorn. It will look for the 'app' object in the 'app.py' file.
# Bind to 0.0.0.0 so it's accessible from other Docker containers.
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]


