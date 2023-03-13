FROM alamalinux:8
RUN yum install nginx -y
RUN rm -rf /usr/share/nginx/html/index.html
COPY web /usr/share/nginx/html/
LABEL AUTHOR="nagarjuna" \
      PURPOSE="learning docker" \
      DURATION="25hr"
ENV AUTHOR="nagarjuna" \
      PURPOSE="web app deploy" \
      DURATION="25hr"
EXPOSE 8080/tcp
CMD ["nginx", "-g", "daemon off;"]