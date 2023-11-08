ARG NODE_VERSION=16.19.1
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY . /app/
EXPOSE 5003
CMD ["node", "app.js"]