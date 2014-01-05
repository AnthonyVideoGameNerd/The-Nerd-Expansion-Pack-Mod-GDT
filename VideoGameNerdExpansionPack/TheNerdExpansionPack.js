ï»¿(function () {
	var ready = function () {		
	/* Adds topics to the game 			*/
		TheNerdExpPack.addTopic();
	/*									*/
	
	/* Adds events to the game 			*/	
		TheNerdExpPack.addEventSndTrck();
	/*									*/
	
    	/* Adds researches to the game			*/
		TheNerdExpPack.addResearchItem();
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
	'mods/VideoGameNerdExpansionPack/Source/Source.js',
	], ready, error);
})()
