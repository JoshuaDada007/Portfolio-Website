# Use an official OpenJDK runtime as the base image
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the JAR file into the container
COPY build/libs/Backend-0.0.1-SNAPSHOT.jar /app/app.jar

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
