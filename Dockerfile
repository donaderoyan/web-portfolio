FROM node:14.17.6 as build
WORKDIR /app
COPY package*.json .
COPY gsap-bonus.tgz .
COPY .npmrc .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
