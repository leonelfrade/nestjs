# Specify the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /api

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will be running on
EXPOSE 2222

# Run the application
CMD [ "npm", "run", "start" ]