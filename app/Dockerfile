FROM node:18-alpine AS builder
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Install dependencies and build using yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production image
FROM nginx:stable-alpine

# Copy build artifacts
COPY --from=builder /app/build /usr/share/nginx/html

# Replace default nginx config with SPA-friendly config
RUN rm /etc/nginx/conf.d/default.conf
RUN cat > /etc/nginx/conf.d/default.conf <<'EOF'
server {
  listen 80;
  server_name _;

  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location /static/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }

  error_page 500 502 503 504 /50x.html;
}
EOF

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
