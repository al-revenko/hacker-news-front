FROM node:20.11.0 as build-step

RUN mkdir -p /app

WORKDIR /app 

COPY package.json .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.node.json .
COPY vite.config.ts .
COPY yarn.lock .
COPY index.html .

RUN yarn

COPY src/ src/

ENV VITE_BACKEND_URL='http://localhost:4000'

RUN yarn build

FROM alexxxnf/nginx-spa

COPY  --from=build-step /app/dist/ /etc/nginx/html/