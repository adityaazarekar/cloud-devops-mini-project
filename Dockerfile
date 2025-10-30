# Step 1: Use Node.js official image
FROM node:18-alpine

# Step 2: Create working directory
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Step 4: Copy rest of the files
COPY . .

# Step 5: Expose port 3000
EXPOSE 3000

# Step 6: Start the app
CMD ["node", "index.js"]
