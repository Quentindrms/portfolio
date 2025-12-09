FROM node:24-alpine

RUN apk add --no-cache caddy

WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY dist ./dist
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80
EXPOSE 3000

ENV NODE_ENV=production

CMD ["sh", "-c", "node dist/server/index.mjs & caddy run --config /etc/caddy/Caddyfile --adapter caddyfile"]