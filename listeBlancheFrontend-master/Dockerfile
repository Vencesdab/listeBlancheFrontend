### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
#RUN if test "$ENV" = "production" ; then npm run build ; else npm run dev_build ; fi
CMD node server.js


