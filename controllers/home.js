var HomeController = {
  Index: function(req, res) {
    res.render('home/index', { title: 'Acebook' });
  }
//   login: function(req, res) {
//     res.render('home/login', { title: 'Acebook'})
//   }
};

module.exports = HomeController;
