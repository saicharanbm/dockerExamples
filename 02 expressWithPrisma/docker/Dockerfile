#cretae a base image node js 20 alpine image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# copy package.json and package-lock.json to the container
COPY package*.json ./

# install the dependencies
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma Client
RUN npx prisma generate

# copy all the files to the container
COPY . .

# build the app
RUN npm run build

# expose the port
EXPOSE 3000

# start the app
CMD [ "node", "dist/index.js" ]