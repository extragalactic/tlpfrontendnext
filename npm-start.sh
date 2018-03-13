export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
/home/ubuntu/.nvm/versions/node/v9.5.0/bin/pm2 kill
cd /home/ubuntu/tlpfrontend
npm run build
/home/ubuntu/.nvm/versions/node/v9.5.0/bin/pm2 start server.js
