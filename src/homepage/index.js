var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent'); //requerimos superagent
var header = require('../header');
var axios = require('axios'); //requerimos axios



page('/', header, loading, asyncLoad, function (ctx, next){  
  title('Villagram');
  var main = document.getElementById('main-container');
  
  empty(main).appendChild(template(ctx.pictures));
  
})


  function loading (ctx, next) {
  var el = document.createElement('div');
  el.classList.add('loader');
  document.getElementById('main-container').appendChild(el);
  next();
}




async function  asyncLoad(ctx, next) {
  try {
    ctx.pictures = await fetch('/api/pictures').then(res => res.json())
    next();

  }catch (err){
    return console.log(err);

  }
}




/* con   superagent
    

page('/', header, loadPictures, function (ctx, next){ // aqui lo lo hicimos con  superagent
  title('Villagram');
  var main = document.getElementById('main-container');
  
  empty(main).appendChild(template(ctx.pictures));
	
})


function loadPictures(ctx, next) {
  request
       .get('/api/pictures')
       .end( function (err, res) {
        if (err) return console.log(err);

        ctx.pictures = res.body;
        next();
       })

}



*/


/*
page('/', header, loadPicturesAxios, function (ctx, next){  // aqui lo lo hicimos con axios
  var main = document.getElementById('main-container');
  
  empty(main).appendChild(template(ctx.pictures));
  
})

*/

/*

  aqui con axios
function loadPicturesAxios(ctx, next) {
  axios
       .get('/api/pictures')
       .then( function (res) {
          ctx.pictures = res.data;
          next();       
       })
        .catch(function (err) {
          console.log(err);
        })

}



 function loadPicturesFetch(ctx, next) {
   fetch('/api/pictures')
       .then( function (res) {
          return res.json();    
       })
       .then(function (pictures) {
        ctx.pictures = pictures;
        next();
       })
       .catch(function(err) {
        console.log(err);
       })
      
}

*/






