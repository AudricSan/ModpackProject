// REMOVE
onEvent('recipes', e => {
    // @collapse

    e.recipes.createSequencedAssembly([
        Item.of('fluxnetworks:flux_dust').withChance(0.4),
        Item.of('kubejs:dust_dust').withChance(0.6)
    ], 'minecraft:redstone', [
        e.recipes.createPressing('kubejs:flux_sequenced', 'kubejs:flux_sequenced'),
        e.recipes.createPressing('kubejs:flux_sequenced', 'kubejs:flux_sequenced'),
        e.recipes.createPressing('kubejs:flux_sequenced', 'kubejs:flux_sequenced'),
    ]).transitionalItem('kubejs:flux_sequenced').loops(10)

})