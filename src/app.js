// ************ Require's ************
const express = require('express');
const path = require('path');



// ************ express() - (don't touch) ************
const app = express();


// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRoutes.js')
const apaClubRouter = require('./routes/apaClubRoutes.js')
    // const usuariosRouter = require('./routes/usuariosRouters.js');
const productsRouter = require('./routes/productsRoutes.js')
    //const empresasRouter = require('./routes/empresasRouters.js')

app.use('/', mainRouter);
app.use('/apa-club', apaClubRouter);
//app.use('/usuarios', usuariosRouter);
app.use('/productos', productsRouter);
//app.use('/empresas', empresasRouter);
//app.use('/locales', productosRouter);


app.use(express.static(path.join(__dirname, './../public')));


module.exports = app
app.listen(process.env.PORT || 9694, () => {
    console.log("CORRIENDO PORT 9694");
});