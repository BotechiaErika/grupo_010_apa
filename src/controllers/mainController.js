let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) => {
        res.render('main/landingpageUser', { title: 'HOME' });
    },
    buscar: (req, res) => {
        res.render('products/buscarProducto', { title: 'BUSCAR' });
    },
    landingProducts: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunaID: 1,
            comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
            comunaParaghy: "La Comuna 1 está integrada por los 	barrios de  Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución."
        })
    },
    iniciarU: (req, res) => {
        res.render('users/login', { title: 'Ingreso al CLUB!' });
    },
    iniciarE: (req, res) => {
        res.render('empresas/login', { title: 'Login EMPRESA!' });
    }
}
module.exports = controller