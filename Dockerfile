FROM node:18

ENV PORT=3010

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 3010

CMD [ "npm", "run", "start" ]