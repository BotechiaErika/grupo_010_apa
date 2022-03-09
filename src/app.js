// var createError = require('http-errors');
const express = require('express');
<<<<<<< HEAD
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

const mainRouters = require('./routes/mainControllers');
//const usersRouters = require('./routes/usersControllers');
const path = require('path')
=======
const path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
const port = process.env.PORT||9694

const mainRouters = require('./routes/mainRoutes.js')
const productsRouters = require('./routes/productsRoutes.js')
// const usuariosRouters = require('./routes/usuariosRoutes.js')
//const usersRouters = require('./routes/usersControllers');
>>>>>>> 9119b16 (errores con correeccion en proximos commits)
const app = express();
app.use(express.static(path.join(__dirname, './../public')));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
<<<<<<< HEAD

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouters);
// app.use('/users', usersRouters);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
=======
// ACTUALIZANDO ENTRY POINT CLASSE CRUD
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(logger('dev'));


// app.use(cookieParser());


app.use('/' , mainRouters)
app.use('/productos' , productsRouters);
// app.use('/usuarios' , usuariosRouters);

// // catch 404 and forward to error handler
app.use('/*' , (req, res) => {res.render('error404')})
>>>>>>> 9119b16 (errores con correeccion en proximos commits)
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

<<<<<<< HEAD

app.listen(process.env.port||9694), ()=>{
    console.log('server corriendo port 9696')
}
=======
app.listen(port , () => {
    console.log('server corriendo port 9694')
})
>>>>>>> 9119b16 (errores con correeccion en proximos commits)

module.exports = app;
