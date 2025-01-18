# Use an official Node.js runtime as a parent image
FROM node:16-slim

# Set working directory
WORKDIR /app

# Copy the build files
COPY build/ /app

# Install a lightweight HTTP server
RUN npm install -g serve

# Expose the port the app will run on
EXPOSE 8080

# Use shell form to allow env variable expansion, and specify a valid scheme
CMD ["sh", "-c", "serve -s . --listen tcp://0.0.0.0:${PORT}"]