FROM        xemuliam/alpine:3.8
LABEL       Andrey Orlov <andrey.orlov.od@gmail.com>
ARG         DIST_MIRROR=https://github.com/awslabs/aws-sam-cli
ENV         VERSION=0.6.1 \
            SAM_HOME=/opt/sam
RUN         mkdir -p ${SAM_HOME} \
            && apk add --no-cache --virtual=.build-deps \
                curl \
                gcc \
                libc-dev \
                python2-dev \
                python3-dev \
                linux-headers \
            && curl -L ${DIST_MIRROR}/archive/v${VERSION}.tar.gz | tar xvz -C /usr/local/bin \
            && rm -f *.tar.gz \
            && apk add --no-cache py-pip \
            && pip install aws-sam-cli \
            && pip install awscli  \
            && apk del .build-deps \
            && export PATH=$PATH:$(python -m site --user-base)/bin
WORKDIR     ${SAM_HOME}
ENTRYPOINT  ["/usr/bin/sam"]