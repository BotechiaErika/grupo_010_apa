let controller = {}
comunas: (req, res) => {
        const comunaID = req.params.comunaID
        res.render('products/productosComuna', {
            title: 'Comuna ' + comunaID
        })
    },
    detallesL: (req, res) => {
        const idLD = req.res.idLD;
        res.render('products/detailsProduct', { title: idLD })
    }
}
module.exports = controller