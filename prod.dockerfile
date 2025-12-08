FROM node:24-alpine

WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY dist ./dist

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/server/index.mjs"]