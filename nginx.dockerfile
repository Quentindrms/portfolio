FROM nginx:1.29.3-alpine
RUN apk update && apk add nano bash
RUN rm /etc/nginx/conf.d/default.conf 
COPY nginx.conf /etc/nginx/conf.d/default.conf 