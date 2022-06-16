// REMOVE
onEvent('recipes', e => {
    e.shapeless('kubejs:craunium_ingot', '9x kubejs:craunium_nugget')
    e.shapeless('9x kubejs:craunium_nugget', 'kubejs:craunium_ingot')
    createBulkWashingCrushed('kubejs:craunium_crushed', 'kubejs:craunium_nugget', 10, 5)

    createCrushing('kubejs:craunium_block', 'kubejs:craunium_crushed', 5, 1, false)
    createCrushing('kubejs:craunium_ore', 'kubejs:craunium_crushed', 1, 2, 'minecraft:cobblestone')
    createMilling('kubejs:craunium_ore', 'kubejs:craunium_crushed', 1, 1, false)
    createCrushing('kubejs:craunium_raw', 'kubejs:craunium_crushed', 1, 2, 'minecraft:cobblestone')
    createMilling('kubejs:craunium_raw', 'kubejs:craunium_crushed', 1, 1, false)

    e.shapeless('kubejs:craunium_block', '9x kubejs:craunium_ingot')
    e.shapeless('9x kubejs:craunium_ingot', 'kubejs:craunium_block')

    createCrushing('kubejs:craunium_ingot', 'kubejs:craunium_dust', 3, 2, 'kubejs:titanium_dust')
    createCrushing('kubejs:craunium_block', 'kubejs:craunium_dust', 5, 3, 'kubejs:titanium_dust')
    createMilling('kubejs:craunium_ingot', 'kubejs:craunium_dust', 1, 1, false)

    createMixingItem(['kubejs:craunium_dust', 'kubejs:craunium_dust'], 'kubejs:craunium_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:craunium_dust', 'kubejs:craunium_dust'], 'kubejs:craunium_ingot', [3, 3], 'superheated')

    e.smelting('kubejs:craunium_ingot', 'kubejs:craunium_raw')
    e.blasting('kubejs:craunium_ingot', 'kubejs:craunium_raw')

    createMixingItem3(['kubejs:craunium_dust', 'kubejs:craunium_ingot', 'minecraft:quartz'], 'kubejs:craunium_crystal', [5, 10, 10, 5], 'superheated')
    createMixingItem3(['kubejs:craunium_dust', 'kubejs:craunium_ingot', 'minecraft:quartz'], 'kubejs:craunium_crystal', [20, 5, 5, 1], 'heated')

    createPress('kubejs:craunium_ingot', 'kubejs:craunium_sheet')
    createCutting('kubejs:craunium_sheet', 'kubejs:craunium_gear', 2, 10, 'kubejs:craunium_dust')

    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
    }
    
    function createPress(input, output) {
        e.custom({
            "type": "create:pressing",
    
            "ingredients": [
                { "item": input }
            ],
    
            "results": [
                { "item": output }
            ]
        })
    }
    
    function createCutting(input, output, qte, qte2, secoutput) {
        if (secoutput === false) {
            e.custom({
                "type": "create:cutting",
    
                "ingredients": [
                    { "item": input }],
    
                "results": [
                    { "item": output, "count": qte }],
    
                "processingTime": 300,
            })
    
        } else {
    
            e.custom({
                "type": "create:cutting",
    
                "ingredients": [
                    { "item": input }],
    
                "results": [
                    { "item": output, "count": qte },
                    { "item": secoutput, "count": qte2, "chance": 0.125 }
                ],
    
                "processingTime": 600,
            })
        }
    }
    
    function createCrushing(input, output, qte, qte2, secoutput) {
        if (secoutput === false) {
            e.custom({
                "type": "create:crushing",
    
                "ingredients": [
                    { "item": input }
                ],
    
                "results": [
                    { "item": output, "count": qte },
                    { "item": output, "count": qte2, "chance": 0.3 },
                ],
    
                "processingTime": 400,
            })
        } else {
            e.custom({
                "type": "create:crushing",
    
                "ingredients": [
                    { "item": input }
                ],
    
                "results": [
                    { "item": output, "count": qte },
                    { "item": output, "count": qte2, "chance": 0.3 },
                    { "item": secoutput, "chance": 0.125 }
                ],
    
                "processingTime": 400,
            })
        }
    }
    
    function createMilling(input, output, qte, qte2, secoutput) {
        if (secoutput === false) {
            e.custom({
                "type": "create:milling",
    
                "ingredients": [
                    { "item": input }],
    
                "results": [
                    { "item": output, "count": qte }],
    
                "processingTime": 400,
            })
    
        } else {
    
            e.custom({
                "type": "create:milling",
    
                "ingredients": [
                    { "item": input }],
    
                "results": [
                    { "item": output, "count": qte },
                    { "item": secoutput, "count": qte2, "chance": 0.125 }
                ],
    
                "processingTime": 400,
            })
        }
    }
    
    function createBulkWashingCrushed(input, output, qte, qte2) {
        e.custom({
            "type": "create:splashing",
    
            "ingredients": [
                { "item": input }],
    
            "results": [
                { "item": output, "count": qte },
                { "item": output, "count": qte2, "chance": 0.3 }],
    
            "processingTime": 400
        })
    }
    
    //Create Mixing
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
    
    function createMixingItem3(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",
    
            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] }
            ],
    
            "results": [
                { "item": output, 'count': qte[3] }
            ],
    
            "processingTime": 400,
            "heatRequirement": heated
        })
    }
    
    function createMixingItem4(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",
    
            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] },
                { "item": input[3], "count": qte[3] }
            ],
    
            "results": [
                { "item": output, 'count': qte[4] }
            ],
    
            "processingTime": 400,
            "heatRequirement": heated
        })
    }
    
    function createMixingItem5(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",
    
            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] },
                { "item": input[3], "count": qte[3] },
                { "item": input[4], "count": qte[4] }
            ],
    
            "results": [
                { "item": output, 'count': qte[5] }
            ],
    
            "processingTime": 400,
            "heatRequirement": heated
        })
    }
    
    function createMixingItem6(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",
    
            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] },
                { "item": input[3], "count": qte[3] },
                { "item": input[4], "count": qte[4] },
                { "item": input[5], "count": qte[5] },
            ],
    
            "results": [
                { "item": output, 'count': qte[6] }
            ],
    
            "processingTime": 400,
            "heatRequirement": heated
        })
    }
})