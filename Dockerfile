FROM node:0.12.14
MAINTAINER Chetan Gajipara <https://github.com/BlueFinchSolutions/yogiscollection>

RUN mkdir /yogiscollection
WORKDIR /yogiscollection

# Bundle app source
ADD . /yogiscollection

# Install app dependencies
RUN npm install
RUN npm install -g bower grunt-cli
RUN bower install
