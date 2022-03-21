let controller = {
    iniciarU: (req, res) => {
        res.render('apaClub/login', { title: 'Ingreso al CLUB!' });
    },
    buscar: (req, res) => {
        res.render('apaClub/buscarProducto', { title: 'BUSCAR' });
    }
}
module.exports = controller