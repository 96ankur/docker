# Use an existing image as a base

FROM node:alpine

WORKDIR /app

#Download and install the dependencies

COPY package.json .
RUN npm install
COPY . .

#Tell the image what to do when it starts as a containter
CMD ["npm", "start"]