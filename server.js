var express = require ('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  './uploads')
  },
  filename: function (req, file, cb) {
    cb(null,  + Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');


var app = express ();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res){
   res.render('index', { title:'Villagram' });
})

app.get('/signup', function (req, res){
   res.render('index', { title:'Platzigram-Signup' });
})

app.get('/signin', function (req, res){
   res.render('index', { title:'Platzigram-Signin' });
})

app.get('/api/pictures', function (req, res, next){
	var pictures = [
     {
     	user: {
     		username: 'rlipac@',
     		avatar: 'richard.jpg'
     	},
     	url: 'navas.jpg',
     	likes: 0,
     	liked: false,
        createAt: new Date().getTime()
     },

      {
     	user: {
     		username: 'nena@',
     		avatar: 'pinos.jpg'
     	},
     	url: 'bebe.jpg',
     	likes: 1,
     	liked: false,
        createAt: new Date().setDate(new Date().getDate() -10)
     },
       {
     	user: {
     		username: 'majo@',
     		avatar: 'majito.jpg'
     	},
     	url: 'andrea.jpg',
     	likes: 14,
     	liked: false,
        createdAt: new Date().setDate(new Date().getDate() -5)
     },
       {
     	user: {
     		username: 'Fresquesita@',
     		avatar: 'olga.jpg'
     	},
     	url: 'trucha.jpg',
     	likes: 14,
     	liked: false,
        createdAt: new Date().setDate(new Date().getDate() -20)
     },
      {
      user: {
        username: 'chocolate@',
        avatar: 'chocolate.jpg'
      },
      url: 'uni.jpg',
      likes: 0,
      liked: false,
        createAt: new Date().getTime()
     },

      {
      user: {
        username: 'rene@',
        avatar: 'picina.jpg'
      },
      url: 'chocolate.jpg',
      likes: 1,
      liked: false,
        createAt: new Date().setDate(new Date().getDate() -10)
     },
       {
      user: {
        username: 'cole@',
        avatar: 'smp.jpg'
      },
      url: 'matri.jpg',
      likes: 14,
      liked: false,
        createdAt: new Date().setDate(new Date().getDate() -5)
     },
       {
      user: {
        username: 'oton@',
        avatar: 'arbol.jpg'
      },
      url: 'oton.jpg',
      likes: 14,
      liked: false,
        createdAt: new Date().setDate(new Date().getDate() -20)
     },
       {
      user: {
        username: 'percy@',
        avatar: 'matri.jpg'
      },
      url: 'picina.jpg',
      likes: 14,
      liked: false,
        createdAt: new Date().setDate(new Date().getDate() -5)
     },
       {
      user: {
        username: 'Disco@',
        avatar: 'misika.jpg'
      },
      url: 'misika.jpg',
      likes: 14,
      liked: false,
        createdAt: new Date().setDate(new Date().getDate() -20)
     }
  ];
  
  /*  

  la funcion setTimeout retarda un poco la carga de las imagenes esto da un aparente efecto de carga

   setTimeout(function () {
   	res.send(pictures);

   }, 500) 

   */

   setTimeout( () => res.send(pictures), 2000 );

})

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, 'error uploading file');
    }
    res.send('file uploaded');
  })

})

app.get('/api/user/:username', function (req, res) {
  const user = {
    username: 'rlipac@',
    avatar: 'richard.jpg',
    pictures: [
        {
          id: 1,
          src: 'smp.jpg',
          likes: 5
        },
        {
          id: 2,
          src: 'arbol.jpg',
          likes: 7
        },
        {
          id: 3,
          src: 'chocolate.jpg',
          likes: 36
        },
        {
          id: 4,
          src: 'china.jpg',
          likes: 66
        },
        {
          id: 5,
          src: 'chelas.jpg',
          likes: 44
        },
        {
          id: 6,
          src: 'andrea.jpg',
          likes: 90
        }                          
    ]
  }
  res.send(user);
})

app.get(('/:username'), function (req, res) {
   res.render('index', {title: `Villagram-${req.params.username}`})
})

app.get(('/:username/:id'), function (req, res) {
   res.render('index', {title: `Villagram-${req.params.username}`})
})



app.listen( 3000, function (err) {
	if (err) return console.log('hubo un error'), process.exit(1);

	console.log('Platsigram escuchando en el puerto  3000')

})
