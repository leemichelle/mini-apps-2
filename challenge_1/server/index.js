// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('data/db.json');
// const middlewares = jsonServer.defaults();

// server.use(middlewares)
// server.use((req, res, next) => {
//   if (isAuthorized(req)) {
//     next()
//   } else {
//     res.sendStatus(401)
//   }
// });

// server.get('/events', (req, res) => {
//   res.jsonp(req.query)
// });

// server.use(router)
// server.listen(3001, () => {
//   console.log('JSON Server is connected')
// });

