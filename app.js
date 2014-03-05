"use strict"

const
  koa = require('koa'),
  app = koa();

//Middleware: request logger
function *reqlogger(next){
  console.log('%s - %s %s',new Date().toISOString(), this.req.method, this.req.url);
  yield next;
}
app.use(reqlogger);


app.use(function *(){
  this.body = 'Hello World';
});

app.listen(3000);
