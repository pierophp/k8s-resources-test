# Step 1: Use the official Node.js image as the base image
FROM node:18

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install any needed dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Expose port 3000 to be accessible outside the container
EXPOSE 3000

# Step 7: Define the environment variable for the app's port (optional)
ENV PORT=3000

# Step 8: Command to run the application
CMD ["npm", "start"]