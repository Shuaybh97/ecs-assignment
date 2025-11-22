# Stage 1: Dependencies
FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --prefer-offline --no-audit

# Stage 2: Builder
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
COPY --from=deps /app/node_modules ./node_modules

COPY . .
RUN npm run build

# Stage 3: Production runtime (minimal)
FROM node:18-alpine

WORKDIR /app

# Install only dumb-init for signal handling
RUN apk add --no-cache dumb-init && rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copy production dependencies only
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --chown=nextjs:nodejs package.json next.config.js ./

# Prune to production only (removes devDependencies)
RUN npm prune --production

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

ENTRYPOINT ["dumb-init", "--"]
CMD ["npm", "start"]
