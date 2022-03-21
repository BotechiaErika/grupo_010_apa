let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) => {
        res.render('main/landingpageUser', { title: 'HOME' });
    },
    iniciarU: (req, res) => {
        res.render('users/login', { title: 'Ingreso al CLUB!' });
    },
    iniciarE: (req, res) => {
        res.render('empresas/login', { title: 'Login EMPRESA!' });
    }
}
module.exports = controller