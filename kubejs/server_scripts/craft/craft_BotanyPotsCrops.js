// REMOVE
onEvent('recipes', e => {

    e.custom({
            "type": "botanypots:crop",

            "seed": {
                "item": "minecraft:potato"
            },

            "categories": [
                "dirt"
            ],

            "growthTicks": 1,
            
            "display": {
                "block": "minecraft:potatoes",
                "properties": {
                    "age": 7
                }
            },

            "results": [
                {
                    "chance": 0.75,
                    "output": {
                        "item": "minecraft:potato"
                    },

                    "minRolls": 1,
                    "maxRolls": 2
                },
                {
                    "chance": 0.05,
                    "output": {
                        "item": "minecraft:poisonous_potato"
                    },
                    "minRolls": 1,
                    "maxRolls": 2
                }
            ]
      })

})