// REMOVE
onEvent("recipes", e => {
    // @collapse

    botanypots("kubejs:craunium_crop", ["kubejs:craunium_dust", "kubejs:craunium_crushed"])
    botanypots("kubejs:uranium_crop", ["biggerreactors:yellorium_dust", "create:crushed_uranium_ore"])
    botanypots("kubejs:aluminum_crop", ["kubejs:aluminum_dust", "create:crushed_aluminum_ore"])
    botanypots("kubejs:cobalt_crop", ["kubejs:cobalt_dust", "morecreatestuffs:crushed_cobalt_ore"])
    botanypots("kubejs:zinc_crop", ["kubejs:zinc_dust", "create:crushed_zinc_ore"])
    botanypots("kubejs:gold_crop", ["kubejs:gold_dust", "create:crushed_gold_ore"])
    botanypots("kubejs:bronze_crop", ["tconstruct:tinkers_bronze_nugget", "alloyed:bronze_ingot"])
    botanypots("kubejs:diamond_crop", ["kubejs:diamond_dust", "minecraft:diamond"])
    botanypots("kubejs:electrum_crop", ["kubejs:electrum_dust", "kubejs:electrum_dust"])
    botanypots("kubejs:silicon_crop", ["kubejs:silicon_dust", "refinedstorage:silicon"])
    botanypots("kubejs:iron_crop", ["kubejs:iron_dust", "create:crushed_iron_ore"])
    botanypots("kubejs:nickel_crop", ["kubejs:nickel_dust", "create:crushed_nickel_ore"])
    botanypots("kubejs:silver_crop", ["kubejs:silver_dust", "create:crushed_silver_ore"])
    botanypots("kubejs:lead_crop", ["kubejs:lead_dust", "create:crushed_lead_ore"])
    botanypots("kubejs:copper_crop", ["kubejs:copper_dust", "create:crushed_copper_ore"])
    botanypots("kubejs:steel_crop", ["kubejs:steel_dust", "kubejs:steel_crushed"])
    botanypots("kubejs:desh_crop", ["kubejs:desh_dust", "boss_tools:desh_nugget"])
    botanypots("kubejs:tin_crop", ["kubejs:tin_dust", "create:crushed_tin_ore"])
    
    
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "kubejs:craunium_crushed"                  ], "kubejs:craunium_crop" , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_uranium_ore"               ], "kubejs:uranium_crop"  , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_aluminum_ore"              ], "kubejs:aluminum_crop" , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "morecreatestuffs:crushed_cobalt_ore"      ], "kubejs:cobalt_crop"   , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_zinc_ore"                  ], "kubejs:zinc_crop"     , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_gold_ore"                  ], "kubejs:gold_crop"     , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "alloyed:bronze_ingot"                     ], "kubejs:bronze_crop"   , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "minecraft:diamond"                        ], "kubejs:diamond_crop"  , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "kubejs:electrum_dust"                     ], "kubejs:electrum_crop" , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "refinedstorage:silicon"                   ], "kubejs:silicon_crop"  , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_iron_ore"                  ], "kubejs:iron_crop"     , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_nickel_ore"                ], "kubejs:nickel_crop"   , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_silver_ore"                ], "kubejs:silver_crop"   , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_lead_ore"                  ], "kubejs:lead_crop"     , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_copper_ore"                ], "kubejs:copper_crop"   , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "kubejs:steel_crushed"                     ], "kubejs:steel_crop"    , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "boss_tools:desh_nugget"                   ], "kubejs:desh_crop"     , [800,10,15,1], "eated")
    createMixingFluid( ["createaddition:seed_oil", "minecraft:wheat_seeds" , "create:crushed_tin_ore"                   ], "kubejs:tin_crop"      , [800,10,15,1], "eated")

    createMixingItem(["minecraft:dirt", "kubejs:diamond_dust"], "kubejs:ore_dirt", [1,5,1], false)


    function createMixingItem(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] }
            ],

            "results": [
                { "item": output, 'count': qte[2] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }
    
    function createMixingFluid(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "fluid": input[0], "amount": qte[0]},
                { "item" : input[1], "count": qte[1]},
                { "item" : input[2], "count": qte[2] }
            ],

            "results": [
                { "item": output, 'count': qte[3] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }

    function botanypots(crop, results) {

        e.custom({
            "type": "botanypots:crop",

            "seed": {
                "item": crop
            },

            "categories": [
                "oredirt"
            ],

            "growthTicks": 1000,

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
                        "item": results[0]
                    },

                    "minRolls": 1,
                    "maxRolls": 2
                },
                {
                    "chance": 0.05,
                    "output": {
                        "item": results[1]
                    },
                    "minRolls": 1,
                    "maxRolls": 2
                }
            ]
        })

    }
})