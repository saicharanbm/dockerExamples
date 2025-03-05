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

# Run migrations and start the app
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/index.js"]


# since docker file is inside docker folder, we need to run docker build command from root directory
#  using docker build -t prisma-express-app -f docker/Dockerfile .

# To connect to the PostgreSQL database running on your host machine from within a Docker container, you need to use a special hostname:

# On Mac: Use host.docker.internal
# On Windows: Use host.docker.internal
# On Linux: Use the host's IP address (typically 172.17.0.1 or your machine's local IP)


#  docker run -e DATABASE_URL="postgres://postgres:postgres@host.docker.internal:5432/default" -p 3000:3000 prisma-express-app
