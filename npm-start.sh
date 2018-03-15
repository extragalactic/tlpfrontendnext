export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
pm2 kill
cd /home/ubuntu/tlpfrontend
npm run build
pm2 start server.js
