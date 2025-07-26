# Stage 1: Build the React frontend
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with Flask and Waitress
FROM python:3.8-slim
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY backend/requirements.txt .
COPY backend/app.py .
COPY backend/run.py .
RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8081
CMD ["python", "run.py"]
