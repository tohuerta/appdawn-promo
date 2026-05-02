FROM node:22-slim AS builder

WORKDIR /app

# Install ALL dependencies (including devDependencies for build)
COPY package.json package-lock.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Production stage - serve static files
FROM node:22-slim AS runner

WORKDIR /app

# Install a simple static file server
RUN npm install -g serve

# Copy built static files
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
