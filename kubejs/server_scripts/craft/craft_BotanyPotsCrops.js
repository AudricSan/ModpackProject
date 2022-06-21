// REMOVE
onEvent("recipes", e => {

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