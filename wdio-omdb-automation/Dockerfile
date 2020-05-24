FROM alpine:3.10

RUN echo '@edgetesting http://dl-cdn.alpinelinux.org/alpine/edge/testing' \
  >> /etc/apk/repositories

RUN apk --no-cache add \
    nodejs \
    npm \
    ffmpeg \
    android-tools@edgetesting \
  && npm install -g \
    npm@latest \
  # Clean up obsolete files:
  && rm -rf \
    /tmp/* \
    /root/.npm 

WORKDIR /usr/lib/wdio
COPY package.json package-lock.json ./
RUN npm install \
  # Clean up obsolete files:
  && rm -rf \
    /tmp/* \
    /root/.npm
# Set NODE_PATH to be able to require installed packages:
RUN npm install --save-dev @babel/preset-env
ENV NODE_PATH=/usr/lib/wdio/node_modules
# Extend path to be able to run installed binaries:
ENV PATH=$PATH:/usr/lib/wdio/node_modules/.bin
ENV BABEL_DISABLE_CACHE=1
# Avoid permission issues with host mounts by assigning a user/group with
# uid/gid 1000 (usually the ID of the first user account on GNU/Linux):
RUN adduser -D -u 1000 wdio

USER wdio

WORKDIR /opt

COPY bin/wait-for-hosts.sh /usr/local/bin/wait-for-hosts

ENTRYPOINT ["wait-for-hosts", "--", "wdio"]
