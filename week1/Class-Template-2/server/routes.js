
var router = {
  create: function(server){
    server.get('/about', router.aboutPage);
  },
  aboutPage: function(){
    res.status(200).render('main', {});
  }
};

module.exports = router;
