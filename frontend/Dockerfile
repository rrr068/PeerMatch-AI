FROM node:22-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE 3456
CMD ["npm", "run", "dev"]