require.config({
	// baseUrl:'./lib/',
	paths:{
		'backbone':'lib/backbone',
		'jquery':'lib/jquery-1.12.3',
		'bootstrap':'lib/bootstrap.min',
		'swiper':'lib/swiper-3.3.1.min',
		'main':'lib/main',
		'text':'lib/text',
		'css':'lib/css',
		'underscore':'./lib/underscore',
	},
	shim:{
		'underscore':{
			export:'_'
		},
		'main':{
			deps:['jquery']
		}
	}
})
require(['backbone','main','router.js'],function(backbone){
	backbone.history.start();
})