FROM almalinux:8
RUN yum install nginx -y
RUN rm -rf /usr/share/nginx/html/web
CMD ["nginx", "-g", "daemon off;"]