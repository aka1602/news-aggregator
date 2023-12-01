# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY . .

# Install project dependencies
RUN npm install 

RUN npm run build

# Start the application
CMD ["npm", "start"]
