# use node 20 alpine as base image
FROM node:20-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy rest of the source code
COPY . .

# compile typescript
RUN npm run build

# expose port 3000
EXPOSE 3000

# start the app
CMD ["node", "dist/index.js"]

# since docker file is inside docker folder, we need to run docker build command from root directory
#  using docker build -t basic-express-app -f docker/Dockerfile .