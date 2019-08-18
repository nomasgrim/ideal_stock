FROM node:10.0.0

RUN mkdir -p /srv/app/services

WORKDIR /srv/app/services

COPY package.json ./srv/app/services
COPY package-lock.json ./srv/app/services

RUN npm install

COPY . /srv/app/services

CMD ["npm", "run", "dev"]