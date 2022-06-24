// REMOVE
onEvent('recipes', e => {
    // @collapse
    
    e.recipes.createSequencedAssembly([
        Item.of('kubejs:quartz_dust').withChance(32.0),
        Item.of('kubejs:quartz_dust').withChance(2.0),
    ], '#forge:gems/quartz', [
        e.recipes.createCutting('kubejs:quartz_sequenced_dust', 'kubejs:quartz_sequenced_dust'),
        e.recipes.createPressing('kubejs:quartz_sequenced_dust', 'kubejs:quartz_sequenced_dust')
    ]).transitionalItem('kubejs:quartz_sequenced_dust').loops(1)

})