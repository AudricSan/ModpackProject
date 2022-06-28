onEvent('recipes', e => {
    // @collapse

    // EDIT STATION STRUCTURE IN Data folder
    e.remove({id: 'boss_tools:blast_furnace'})
    e.remove({id: 'boss_tools_giselle_addon:crafting/electric_blast_furnace_from_boss_tools'})
    e.remove({id: 'boss_tools_giselle_addon:crafting/electric_blast_furnace_from_minecraft'})

    e.shaped('boss_tools_giselle_addon:electric_blast_furnace', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:ingots/steel',
        B: 'minecraft:blast_furnace',
        C: '#forge:dusts/redstone'
    })

    e.replaceInput({id: 'boss_tools:water_pump'}      , 'minecraft:hopper', 'create:chute')

})