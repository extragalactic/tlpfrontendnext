const routes = module.exports = require('next-routes')()

routes
.add({name: 'services', pattern: '/services/:page', page: 'services'}) // main Services path (processed in ServicePageMain.js)
.add({name: 'service', pattern: '/service/:page', page: 'services'}) // in case they forget the 's'
.add({name: 'services-empty', pattern: '/services/', page: 'services'}) // handles case with just a backslash
.add({name: 'service-empty', pattern: '/service/', page: 'services'}) // handles case with just a backslash
.add({name: 'redirect', pattern: '/:redirect', page: 'index'}) // all remaining paths, which may mean a page anchor onto main index page (anchors processed in TopBar.js)
