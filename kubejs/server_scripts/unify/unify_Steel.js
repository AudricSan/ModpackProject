// REMOVE
onEvent('recipes', e => {
    // @collapse

    e.remove({ id: 'boss_tools:steel_ingot' })
    e.remove({ id: 'boss_tools:steel_ingot_from_nugget' })
    e.remove({ id: 'boss_tools:blasting/steel_ingot' })
    e.remove({ id: 'boss_tools:steel_block' })
    e.remove({ id: 'boss_tools:steel_nugget_from_ingot' })
    e.remove({ id: 'boss_tools:compressing/compressed_steel' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/rod_sand_cast' })

    e.stonecutting('boss_tools:steel_block', 'alloyed:steel_block')
    e.stonecutting('alloyed:steel_block', 'boss_tools:steel_block')

    e.shapeless('alloyed:steel_ingot', ['9x kubejs:steel_nugget'])
    e.shapeless('9x kubejs:steel_nugget', 'alloyed:steel_ingot')

    e.smelting('alloyed:steel_ingot', 'kubejs:steel_crushed')
    e.blasting('alloyed:steel_ingot', 'kubejs:steel_crushed')

    createBulkWashingCrushed('kubejs:steel_crushed', 'kubejs:steel_nugget', 10, 5)

    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_steel').withChance(32.0),
        Item.of('kubejs:steel_dust').withChance(2.0),
    ], 'alloyed:steel_sheet', [
        e.recipes.createPressing('kubejs:steel_sequenced_compressed_plate', 'kubejs:steel_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:steel_sequenced_compressed_plate').loops(6)

    createCrushing('kubejs:steel_crushed', 'kubejs:steel_dust', 1, 3, false)
    createMilling('kubejs:steel_crushed', 'kubejs:steel_dust', 1, 3, false)

    createCrushing('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, 'kubejs:steel_dust')
    createMilling('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, false)

    createMixingItem(['kubejs:steel_dust', 'kubejs:steel_dust'], 'alloyed:steel_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:steel_dust', 'kubejs:steel_dust'], 'alloyed:steel_ingot', [3, 3], 'superheated')

    createCutting('boss_tools:compressed_steel', 'kubejs:steel_gear', 5, 20, 'kubejs:steel_dust')
    createPress('kubejs:steel_gear', '2x kubejs:steel_fan')
    createCutting('alloyed:steel_sheet', 'kubejs:steel_stick', 6, 20, 'kubejs:steel_dust')
    createCutting('alloyed:steel_ingot', 'kubejs:steel_stick', 2, 20, 'kubejs:steel_dust')

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
})