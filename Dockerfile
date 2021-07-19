FROM node:12-alpine

WORKDIR /app

#Entry Point
COPY ./package.json ./

## install required packages before npm
RUN apk --no-cache add --virtual builds-deps build-base python

# RUN npm config set python /usr/bin/python
# RUN npm i -g npm
RUN npm install
# RUN npm rebuild bcrypt --build-from-source
# RUN apk del builds-deps

COPY . .

CMD ["npm","start"]