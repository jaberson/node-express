FROM docker.hikvision.com.cn/library/node:8.11.3-alpine
EXPOSE 5566

RUN mkdir -p /usr/local/hikvision/node-ql
COPY . /usr/local/hikvision/node-ql/
CMD ["node", "/usr/local/hikvision/node-ql/bin/www"]