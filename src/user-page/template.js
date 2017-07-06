var yo = require('yo-yo');
var layout = require('../layout');
var translate = require('../translate');

module.exports =  function userPageTemplate(user) {
	  var el = yo`<div class="container user-page">
		  <div class="row">
				 <div class="col s12 m10 offset-m1 l8 offset-12 center-align heading">
				 	<div class="row">
						<div class="col s12 m10 offset-m1 l3 offset-l3 center">
						   <img src="${user.avatar}" class="responsive-img circle"/>
						</div>
						<div class="row " width="800px">
						   <h5>Esta es mi primera aplicacion Frontend echa con los cursos de Platzi espero aver logrado un trabajo optimo tomando encuenta que estoy en proceso de aprendisaje</h5>
						</div>
					</div>
					<div class="col s12 m10 offset-m1 l6 left-align">
							 <h2 class="hide-on-large-only center-align">${user.username}</h2>
							 <h2 class="hide-on-med-and-down  left-align">${user.username}</h2>
					</div>
				</div>
				<div class="row">
				  ${user.pictures.map(function(picture) {
				  	return yo `<div class="col s12 m6 l4">
                        <a href="/${user.username}/${picture.id}" class="picture-container">
                          <img src="${picture.src}" class="picture"/>
                           <div class="likes"><i class="fa fa-heart fa-2x" aria-hidden="true" ></i>${picture.likes}</div>
                        </a>
                         <div id="modal${picture.id}" class="modal modal-fixed-footer">
					   		 <div class="modal-content">
					    	   <img src="${picture.src}" />
					    	</div>
					   		 <div class="modal-footer">
					    	  <div>
					    	  	<i class="fa fa-heart"></i> ${translate.message('likes', { likes: picture.likes })}		 
					    	  </div>
					    	</div>
					 	 </div>

				  	</div>  `   
				  	

				  })}
				</div>
		 </div>
	 </diV>  `

	 return layout(el); 
}


