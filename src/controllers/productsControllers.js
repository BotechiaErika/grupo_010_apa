comuna1 = [{
    comunaID: 1,
    comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
    comunaParaghy: "La Comuna 1 está integrada por los 	barrios de <strong class='colorStrong'> Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución.</strong>"
}]


let controller = {
    landingProductos: (req, res) => {
        res.render('products/landingProducts', {
            title: 'PRODUCTOS - CABA',
            comunaID: 1,
            comunaIncludes: "Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución",
            comunaParaghy: "La Comuna 1 está integrada por los 	barrios de  Retiro, San Nicolás, Puerto Madero, San Telmo, Montserrat y Constitución."
        })
    },
    comunas: (req, res) => {
        const cmn = req.params.cmn
        res.render('products/productosComuna', {
            title: 'Comuna ' + cmn
        })
    },
    detallesL: (req, res) => {
        const idLD = req.res.idLD;
        res.render('products/detailsProduct', { title: idLD })
    }
}
module.exports = controller