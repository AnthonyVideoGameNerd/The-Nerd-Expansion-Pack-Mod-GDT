var NerdExpPack = {};
(function () {        
        /* Topics */
        NERDExpPack.addTopic = function () {
                GDT.addTopics([
                {
                    id: "Tower Defence"
                    name: "Tower Defence".localize("game topic"),
                    genreWeightings: [0.8, 0.6, 0.6, 0.8, 1, 0.9],
                    audienceWeightings: [0.8, 1, 0.6]
                    
                }, {
                    id: "Hitman",
                    name: "Hitman".localize("game topic"),
                    genreWeightings: [1, 0.8, 0.7, 1, 0.6, 0.7],
                    audienceWeightings: [0.6, 0.7, 1]
                }, {
                    id: "Farming",
                    name: "Farming".localize("game topic"),
                    genreWeightings: [0.6, 0.6, 0.7, 1, 0.9, 0.1],
                    audienceWeightings: [1, 1, 0.8]
