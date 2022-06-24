// REMOVE
onEvent('recipes', e => {
    // @collapse

    createCrushing('minecraft:gold_block', 'create:crushed_gold_ore', 4, 2, 'kubejs:gold_dust')
    createCrushing('create:crushed_gold_ore', 'kubejs:gold_dust', 4, 2, 'kubejs:gold_dust')

    createMixingItem(['kubejs:gold_dust', 'kubejs:gold_dust'], 'minecraft:gold_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:gold_dust', 'kubejs:gold_dust'], 'minecraft:gold_ingot', [3, 3], 'superheated')
    createMixingItem(['minecraft:gold_block', 'minecraft:coal_block'], 'alloyed:steel_block', [1, 2], 'superheated')

    createCutting('createaddition:gold_rod', 'createaddition:gold_wire', 6, 20, 'kubejs:gold_dust')
    createCutting('minecraft:gold_ingot', 'createaddition:gold_rod', 3, 20, 'kubejs:gold_dust')
    createCutting('create:golden_sheet', 'createaddition:gold_wire', 4, 10, 'kubejs:gold_dust')
    createCutting('create:golden_sheet', 'createaddition:gold_rod', 4, 10, 'kubejs:gold_dust')

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
})