# Node v7 as the base image to support ES6
FROM node:9
# Create a new user to our new container and avoid the root user
RUN useradd --user-group --create-home --shell /bin/false nupp && \
    apt-get clean
RUN npm install -g yarn
ENV HOME=/home/nupp
COPY package.json yarn.lock $HOME/app/
COPY src/ $HOME/app/src
RUN chown -R nupp:nupp $HOME/* /usr/local/
WORKDIR $HOME/app
RUN yarn cache clean && \
    yarn install --silent --progress=false --production
RUN chown -R nupp:nupp $HOME/*
USER nupp
EXPOSE 3000
CMD ["yarn", "start"]
