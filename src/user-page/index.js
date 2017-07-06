var page = require('page');
var template = require('./template');
var title = require('title');
var empty = require('empty-element');
var header = require('../header');




page('/:username', loadUser, header, function (ctx, next) {
	var main = document.getElementById('main-container')
	title(`Villagram-${ctx.params.username}`)
	empty(main).appendChild(template(ctx.user))
});

page('/:username/:id', header, loadUser, function (ctx, next) {
	var main = document.getElementById('main-container')
	title(`Villagram-${ctx.params.username}`)
	empty(main).appendChild(template(ctx.user))
	$(`#modal${ctx.params.id}`).modal('close');
});



async function loadUser (ctx, next) {
	try {
		ctx.user = await fetch (`/api/user/${ctx.params.username}`).then(res => res.json())  //esto es lo mismo que lo de abajop
        next();
	
	}catch(err) {
		console.log(err);
	}
}



