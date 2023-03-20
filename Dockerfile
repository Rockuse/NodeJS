FROM node:16.18.1

WORKDIR /app

COPY package*.json ./
COPY *.pem ./
COPY backend/package*.json backend/
COPY frontend/package*.json frontend/

RUN npm run install-module-prod

COPY frontend/ frontend/
RUN npm run build

COPY backend/ backend/

USER node

CMD ["npm","run","server"]

EXPOSE 8000
