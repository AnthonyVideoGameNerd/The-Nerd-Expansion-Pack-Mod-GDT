var NerdExpPack = {};
(function () { 
         /* Events */
        NERDExpPack.addEventSndTrck = function () {
                var eventId = "21212121-0001-0001-0001-ANTHONYVGNERD";
                
                var sndTrck = {
                        id: eventId,
                        isRandom: true,
                        maxTriggers: 1,
                        trigger: function (company) {
                                return company.currenLevel == 3 && company.isGameProgressBetween(0.5, 0.9);
                        },
                        getNotification: function (company) {
                                var game = company.currentGame;

                                var msg = "Boss, a famous Pop singer approached us and asked us if we wanted to make an epic soundtrack for {0}. If we agree with this, it will generate a lot of hype for us, and alot more money. But it will cost some money to set everything up and make the final deals.".localize().format(game.title);

                                return new Notification({
                                        sourceId: eventId,
                                        header: "Make an Epic Soundtrack ".localize(),
                                        text: msg,
                                        options: ["Sign the contract", "Don't make it"]
                                });
                                
                        },
                        },complete: function (decision) {
                                var company = GameManager.company;

                                if (decision === 0) {
                                        var n = new Notification({
                                                header: "Epic Soundtrack".localize(),
                                                text: "The soundtrack was indeed EPIC! and we even gained some more fans!"
                                        });
                                        n.adjustHype(10 + 15 * company.getRandom());
                                        n.adjustFans(250);
                                        n.adjustCash(160000, "EPIC SNDTRCK");

                                        company.activeNotifications.addRange(n.split());
                                        return;
                                }
                                if (decision === 1) {
                                        var n = new Notification({
                                                header: "No Thanks".localize(),
                                                text: "You refused the offer and everything went back to normal."
                                        });
                                        return;
                                }
                        }
                };

                GDT.addEvent(sndTrck);
        };
        /*  */
                
        /* Topics */
        NERDExpPack.addTopic = function () {
                GDT.addTopics([
                {
                    id: "Tower Defence",
                    name: "Tower Defence".localize("game topic"),
                    genreWeightings: [0.8, 0.6, 0.6, 0.8, 1, 0.9],
                    audienceWeightings: [0.8, 1, 0.6]
                }, {
                    id: "Hit And Run",
                    name: "Hit And Run".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.6, 0.7, 0.6, 0.6],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {    
                    id: "Hitman",
                    name: "Hitman".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.7, 1, 0.6, 0.7],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {
                    id: "Theft",
                    name: "Theft".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.6, 0.8, 0.8, 0.7],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {    
                    id: "Farming",
                    name: "Farming".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.7, 1, 0.9, 0.1],
                    audienceWeightings: [1, 1, 0.8]
                }, {
                    id: "Turn-Based Strategy",
                    name: "Turn-Based Strategy".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.8],
                    audienceWeightings: [0.7, 0.8, 1]
                }, {
                    id: "Real-Time Strategy",
                    name: "Real-Time Strategy".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.8],
                    audienceWeightings: [0.7, 0.8, 1]
                }, {       
                     id: "Management",
                    name: "Management".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.9],
                    audienceWeightings: [1, 1, 0.9]
                }, {      
                     id: "Cooking",
                    name: "Cooking".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.8, 1, 1, 0.8],
                    audienceWeightings: [1, 1, 0.8]
                }, { 
                    id: "Airplane",
                    name: "Airplane".localize("game topic"),
                    genreWeightings: [0.9, 1, 0.7, 1, 1, 0.8],
                    audienceWeightings: [1, 1, 0.9]
                }, {
                    id:"Tower Building",
                    name: "Tower Building".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.6, 1, 0.9, 1]
                    audienceWeightings: [1, 1, 0.7]
                }, {
                    id:"Construction",
                    name: "Construction".localize("game topic"),
                    genreWeightings: [0.6, 0.7, 0.6, 1, 0.8, 1]
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
                    id:"Playing God",
                    name: "God".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.7, 1, 1, 1]
                    audienceWeightings: [0.6, 0.7, 1]
                }, {
                    id:"Mining",
                    name:"Mining".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.6, 1, 1, 1]
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
				    id:"College Sim",
                    name:"College Sim".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.6, 1, 1, 1]
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
				    id:"Hamster Sim",
                    name:"Hamster Sim".localize("game topic"),
                    genreWeightings: [0.7, 0.7, 0.6, 1, 1, 1]
                    audienceWeightings: [0.8, 1, 0.7]
                }, {
                }]);
        };
        /*  */ 
