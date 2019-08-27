# Use an official Node runtime as a parent image
FROM node:argon 

# Set the working directory to /docker
WORKDIR /docker

# Copy the current directory contents into the container at /docker
COPY . /docker

# Install any needed packages specified in requirements.txt
COPY package.json /docker
RUN npm install

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV ETH NETWORK

# Run app.js when the container launches
CMD ["npm", "start"]
