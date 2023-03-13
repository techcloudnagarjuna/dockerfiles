FROM almalinux
RUN yum install nginx -y
LABEL AUTHOR="nagarjuna" \
      PURPOSE="learning docker" \
      DURATION="25hr"
ENV AUTHOR="nagarjuna" \
      PURPOSE="learning docker" \
      DURATION="25hr"
EXPOSE 8080/tcp
CMD [ "nginx","-g","daemon off;" ]

