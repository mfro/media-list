yarn build
scp main.js 10.8.1.3:server/media-list/main.js
ssh 10.8.1.3 startup/media-list.sh
