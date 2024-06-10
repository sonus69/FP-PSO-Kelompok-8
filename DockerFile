FROM node:22.2.0-alpine3.19 as builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN  npm install --save-dev mocha
EXPOSE 3000
CMD [ "npm",  "start" ]