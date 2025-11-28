FROM node:22-bookworm

WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies for Playwright
RUN npm ci
RUN npx -y playwright install --with-deps

# Install a simple static server
RUN npm install -g http-server

CMD ["sh"]