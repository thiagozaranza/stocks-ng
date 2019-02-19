FROM thiagozaranza/angular7
LABEL MAINTAINER="<thiagozaranza@gmail.com>"

ENV APP_ENV="dev"
ENV APP_NAME="stocks-ng"

ADD . /usr/share/nginx/html/${APP_NAME}/
RUN sed -i "s/\/usr\/share\/nginx\/html/\/usr\/share\/nginx\/html\/${APP_NAME}\/dist/" /etc/nginx/conf.d/default.conf

RUN apt-get update -y > /dev/null \
    && apt-get install build-essential -y > /dev/null

RUN set -ex \
	&& cd /usr/share/nginx/html/${APP_NAME}/ \
	&& npm install \
    && npm audit fix \
	&& ng build --prod --no-aot --base-href /${APP_NAME}/ \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /usr/share/nginx/html/${APP_NAME}/