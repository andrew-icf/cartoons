var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* GET home page. */
router.get('/', function(req, res, next) {
  knex('toon').select().then(function(toons){
    res.render('index', {toons: toons});
  })
});

router.get('/create', function(req,res, next){
  res.render('create');
});

router.get('/:id/edit', function(req, res, next){
  knex('toon').where({id: req.params.id}).first().then(function(toon){
    res.render('edit', + {toon: toon});
  });
});

router.post('/:id/edit', function (req, res, next) {
  knex('toon').where({id: req.params.id}).update(req.body).then(function () {
    res.redirect("/" + req.params.id)
  });
});

router.get('/:id/delete', function(req, res, next){
  knex('toon').where({id: req.params.id}).del().then(function(){
    res.redirect('/');
  });
});

router.get('/:id', function(req, res, next) {
  knex('toon').where({id: req.params.id}).first().then(function(toon){
  res.render('detail', {toon: toon});
  })
});

router.post('/create', function(req,res, next){
  knex('toon').insert(req.body).then(function(){
    res.redirect('/');
  }).catch(function(err){
    console.log(err);
    next(err);
  })
});

module.exports = router;
