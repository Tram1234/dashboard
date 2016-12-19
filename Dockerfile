FROM node:6.9.1

RUN mkdir -p /usr/src/intSightTest

WORKDIR /usr/src/intSightTest


COPY package.json  /usr/src/intSightTest/

COPY . /usr/src/intSightTest

RUN npm install


EXPOSE 8000

CMD ["npm","run build"]
CMD ["npm", "start"]
