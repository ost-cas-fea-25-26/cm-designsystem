FROM node:20-bookworm

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
RUN npx -y playwright install --with-deps

ENTRYPOINT ["npx", "playwright"]