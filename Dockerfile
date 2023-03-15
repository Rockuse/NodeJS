FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY backend/package*.json backend/
COPY frontend/package*.json frontend/

RUN npm install-module-prod

COPY frontend/ frontend/
RUN npm run build

COPY backend/ backend/

USER node

CMD ["npm","start","--prefix","server"]

EXPOSE 8000