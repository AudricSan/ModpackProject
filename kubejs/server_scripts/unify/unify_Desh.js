// REMOVE
onEvent('recipes', e => {
    // @collapse

    e.remove({ id: 'boss_tools:desh_plate' })
    e.remove({ id: 'boss_tools:compressed_desh' })
    e.remove({ id: 'boss_tools:compressing/compressed_desh' })

    createPress('boss_tools:desh_ingot', 'boss_tools:desh_plate')

    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_desh').withChance(32.0),
        Item.of('kubejs:desh_dust').withChance(2.0),
    ], 'boss_tools:desh_plate', [
        e.recipes.createPressing('kubejs:desh_sequenced_compressed_plate', 'kubejs:desh_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:desh_sequenced_compressed_plate').loops(6)
    
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
})