const routes = module.exports = require('next-routes')()

routes
.add({name: 'services', pattern: '/services/:page', page: 'services'}) // main Services path (processed in ServicePageMain.js)
.add({name: 'services-empty', pattern: '/services/', page: 'services'}) // handles case with just a backslash to prevent a 404
.add({name: 'redirect', pattern: '/:redirect', page: 'index'}) // all remaining paths, which may mean a page anchor onto main index page (anchors processed in TopBar.js)
