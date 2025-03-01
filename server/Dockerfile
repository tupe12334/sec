FROM node:23.7.0-alpine
LABEL maintainer="Ofek Gabay <ofek.gabay.he@gmail.com>"
LABEL description="Dockerfile for the server"

WORKDIR /usr/src/app


# Copy package files first to leverage Docker cache
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# Copy only necessary files
COPY src ./src
COPY tsconfig.json ./

# Build the app
RUN pnpm run build

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1

EXPOSE 3000

CMD [ "pnpm", "start:prod" ]
