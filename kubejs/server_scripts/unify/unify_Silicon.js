// REMOVE
onEvent('recipes', e => {
    // @collapse

    e.remove({ id: 'boss_tools:compressed_silicon' })
    e.remove({ id: 'boss_tools:compressing/compressed_silicon' })
    e.remove({ id: 'refinedstorage:silicon' })

    createPress('boss_tools:silicon_ingot', 'kubejs:silicon_sheet')

    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_silicon').withChance(32.0),
        Item.of('kubejs:silicon_dust').withChance(2.0),
    ], 'kubejs:silicon_sheet', [
        e.recipes.createPressing('kubejs:silicon_sequenced_compressed_plate', 'kubejs:silicon_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:silicon_sequenced_compressed_plate').loops(6)

    createCrushing('boss_tools:silicon_ingot', 'kubejs:silicon_dust', 3, 2, 'kubejs:craunium_dust')
    createCrushing('refinedstorage:silicon', 'kubejs:silicon_dust', 2, 1, false)

    createMixingItem(['kubejs:silicon_dust', 'kubejs:silicon_dust'], 'boss_tools:silicon_nugget', [5, 5], 'heated')
    createMixingItem(['kubejs:silicon_dust', 'kubejs:silicon_dust'], 'boss_tools:silicon_nugget', [5, 2], 'superheated')

    createMixingItem(['kubejs:silicon_dust', 'kubejs:craunium_dust'], 'refinedstorage:silicon', [5, 5], 'heated')
    createMixingItem(['kubejs:silicon_dust', 'kubejs:craunium_dust'], 'refinedstorage:silicon', [2, 2], 'superheated')

    e.smelting('refinedstorage:silicon', 'kubejs:quartz_dust')
    e.blasting('refinedstorage:silicon', 'kubejs:quartz_dust')

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