FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
