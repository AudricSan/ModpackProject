// REMOVE
onEvent("recipes", e => {
    // @collapse
    e.remove({ id: "compactmachines:wall"})
    e.remove({ id: "compactmachines:machine_small"})
    e.remove({ id: "compactmachines:machine_normal"})
    e.remove({ id: "compactmachines:machine_large"})
    e.remove({ id: "compactmachines:machine_giant"})
    e.remove({ id: "compactmachines:machine_maximum"})

    e.shaped('8x compactmachines:wall', [
        ' A ',
        ' B ',
        '   '
        ], {
        A: 'fluxnetworks:flux_dust',
        B: 'minecraft:iron_block'
    })
    
    e.shaped('compactmachines:machine_small', [
        'BAB',
        'ACA',
        'BAB'
        ], {
        A: 'compactmachines:wall',
        B: 'compactmachines:machine_tiny',
        C: 'minecraft:iron_block',
    })
    
    e.shaped('compactmachines:machine_normal', [
        'BAB',
        'ACA',
        'BAB'
        ], {
        A: 'compactmachines:wall',
        B: 'compactmachines:machine_small',
        C: 'minecraft:gold_block'
    })

    e.recipes.createMechanicalCrafting('compactmachines:machine_large', [
        'BAB',
        'ACA',
        'BAB'
        ], {
        A: 'compactmachines:wall',
        B: 'compactmachines:machine_normal',
        C: 'minecraft:obsidian'
    })
    
    e.recipes.createMechanicalCrafting('compactmachines:machine_giant', [
        'BAB',
        'ACA',
        'BAB'
        ], {
        A: 'compactmachines:wall',
        B: 'compactmachines:machine_large',
        C: 'minecraft:diamond_block'
    })

    e.recipes.createMechanicalCrafting('compactmachines:machine_maximum', [
        'BAB',
        'ACA',
        'BAB'
        ], {
        A: 'compactmachines:wall',
        B: 'compactmachines:machine_giant',
        C: 'minecraft:netherite_block'
    })
    
})