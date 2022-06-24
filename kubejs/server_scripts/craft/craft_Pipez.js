// REMOVE
onEvent('recipes', e => {
    // @collapse

    //pipe
    e.remove({id: 'pipez:energy_pipe'})
    e.remove({id: 'pipez:item_pipe'})
    e.remove({id: 'pipez:fluid_pipe'})
    e.remove({id: 'pipez:gaz_pipe'})
    e.remove({id: 'pipez:universal_pipe'})

    e.recipes.createMechanicalCrafting('pipez:energy_pipe', [
        'AAAA',
        'ABCA',
        'AAAA'
    ], {
        A: '#forge:plates/iron',
        B: '#forge:storage_blocks/redstone',
        C: '#forge:dusts/redstone'
    })
    
    e.recipes.createMechanicalCrafting('pipez:fluid_pipe', [
        'AAAA',
        'ABCA',
        'AAAA'
    ], {
        A: '#forge:plates/copper',
        B: 'create:fluid_tank',
        C: '#forge:dusts/redstone'
    })
    
    e.recipes.createMechanicalCrafting('pipez:item_pipe', [
        'AAAA',
        'ABCA',
        'AAAA'
    ], {
        A: '#forge:plates/iron',
        B: 'minecraft:dropper',
        C: '#forge:dusts/redstone',
    })
    
    e.recipes.createMechanicalCrafting('pipez:universal_pipe', [
        'AAAAAAA',
        'ABBBBBA',
        'ABCCCBA',
        'ABCCCBA',
        'ABCCCBA',
        'ABBBBBA',
        'AAAAAAA'
    ], {
        A: 'pipez:item_pipe',
        B: 'pipez:fluid_pipe',
        C: 'pipez:energy_pipe',
    })

    //upgrade
    e.remove({id: 'pipez:basic_upgrade'})
    e.remove({id: 'pipez:improved_upgrade'})
    e.remove({id: 'pipez:advanced_upgrade'})
    e.remove({id: 'pipez:ultimate_upgrade'})

    e.recipes.createMechanicalCrafting('pipez:basic_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:iron_sheet',
        B: 'minecraft:iron_nugget',
        C: 'minecraft:redstone',
    })
    
    e.recipes.createMechanicalCrafting('pipez:improved_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:golden_sheet',
        B: 'minecraft:redstone',
        C: 'pipez:basic_upgrade',
    })
    
    e.recipes.createMechanicalCrafting('pipez:advanced_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:redstone_block',
        C: 'pipez:improved_upgrade',
    })
    
    e.recipes.createMechanicalCrafting('pipez:ultimate_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'minecraft:redstone_block',
        C: 'pipez:advanced_upgrade',
    })
    
    e.recipes.createMechanicalCrafting('pipez:infinity_upgrade', [
        'AAAAAAA',
        'ABBBBBA',
        'ABCCCBA',
        'ABCDCBA',
        'ABCCCBA',
        'ABBBBBA',
        'AAAAAAA'
    ], {
        A: 'pipez:basic_upgrade',
        B: 'pipez:improved_upgrade',
        C: 'pipez:advanced_upgrade',
        D: 'pipez:ultimate_upgrade'
    })
})