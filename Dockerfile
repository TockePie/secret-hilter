FROM node:22-alpine

WORKDIR /src

# Copy package.json and package-lock.json into /src
COPY package*.json ./

# Install dependencies
RUN npm install && npm cache clean --force

# Copy the rest of the project
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Define the command to run your app
CMD ["npm", "run", "dev"]
