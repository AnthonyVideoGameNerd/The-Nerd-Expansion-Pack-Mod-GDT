(function () {
	var ready = function () {
		
	/* Adds topics to the game 			*/	
		NERDExpPack.addTopic();
	/*									*/	
	
	/* Adds platforms to the game 		*/	

	/*									*/
		
	/* Adds events to the game 			*/	

	/*									*/
	
	/* Adds researches to the game		*/
		NERDExpPack.addResearch();
	/*									*/
	};

	var error = function () {
	};

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/ExpansionPack/source/source.js'
	], ready, error);
})();
