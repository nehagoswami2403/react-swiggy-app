FROM node:18-alpine

WORKDIR /REACT-SWIGGY-APP/

COPY src/ /REACT-SWIGGY-APP/src
COPY package.json /REACT-SWIGGY-APP/
COPY index.html /REACT-SWIGGY-APP/
COPY style.css /REACT-SWIGGY-APP/

RUN npm install

CMD ["npm", "start"]
