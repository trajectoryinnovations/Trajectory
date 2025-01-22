# Use Node.js 21.6.2
FROM node:21.6.2

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies using --legacy-peer-deps as a fallback
RUN npm ci --omit=dev || npm ci --omit=dev --legacy-peer-deps

# Copy application source code
COPY . .

# Optional: Run prisma generate if used
RUN npx prisma generate

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]