let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) => {
        res.render('main/landingpageUser', { title: 'HOME' });
    },
    iniciarE: (req, res) => {
        res.render('empresas/login', { title: 'Login EMPRESA!' });
    }
}
module.exports = controller