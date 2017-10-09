#
# Dockerfile for testing API service
#
# This build file use Alpine Linux to install the Node runtime
# with the smallest resource footprint.
#

# Use minimal platform for just the Node runtime
FROM node:8.6.0-alpine

# Declare application root for easier copying of files
WORKDIR /app

# Copy version specs first so they can be cached by Docker
COPY package.json yarn.lock ./
RUN npm install -g yarn && yarn install

# Copy source code last so it can be mounted in Compose
# Note that node_modules/ will not be copied (see .dockerignore)
COPY . .

# Default command to get the application up and running
# CMD ["yarn", "run", "start"]
