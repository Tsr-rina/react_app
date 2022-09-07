FROM node:18-alpine3.15

WORKDIR /src

RUN npm install -g npm@latest && npm install create-react-app

