FROM node:lts-hydrogen

WORKDIR /home/app
COPY . /home/app

RUN npx lerna bootstrap
RUN npx lerna run build

CMD npx lerna run start:prod --scope=kuai-mvp-dapp
