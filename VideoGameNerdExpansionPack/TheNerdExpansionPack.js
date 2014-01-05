(function () {
	var ready = function () {
		
	/* Adds topics to the game 			*/	
		TheNerdExpPack.addTopic();
	/*									*/	
	
	/* Adds platforms to the game 		*/	

	/*									*/
		
	/* Adds events to the game 			*/	
		TheNerdExpPack.addEventSndTrck();
	/*									*/
	
	/* Adds researches to the game		*/
		TheNerdExpPack.addResearch();
	/*									*/
	};

	var error = function () {
	};

	GDT.loadJs([
	'mods/VideoGameNerdExpansionPack/source/source.js',
		], ready, error);
})();
