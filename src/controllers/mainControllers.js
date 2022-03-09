let controller = {
    indexPage: (req, res) => {
        res.render('index', { title: 'APA' });
    },
    landingUser: (req, res) =>{
        res.render('users/landingpageUser', { title: 'HOME' });
    },
}

module.exports = controller