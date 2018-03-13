pm2 kill
cd /home/ubuntu/tlpfrontend
npm run build
pm2 start server.js
