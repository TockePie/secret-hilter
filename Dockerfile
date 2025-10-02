FROM node:22-alpine

WORKDIR /src

# Copy package.json and package-lock.json into /src
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
