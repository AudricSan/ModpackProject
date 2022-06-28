onEvent('recipes', e => {
    // @collapse

    e.remove({id: 'storagedrawers:iron_storage_upgrade'})
    e.remove({id: 'storagedrawers:gold_storage_upgrade'})
    e.remove({id: 'storagedrawers:diamond_storage_upgrade'})
    e.remove({id: 'storagedrawers:emerald_storage_upgrade'})
    e.remove({id: 'storagedrawers:void_upgrade'})

    
    e.shaped('storagedrawers:iron_storage_upgrade', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:iron_ingot',
        C: 'storagedrawers:obsidian_storage_upgrade',
    })
    
    e.shaped('storagedrawers:gold_storage_upgrade', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:gold_ingot',
        C: 'storagedrawers:iron_storage_upgrade',
    })

    e.shaped('storagedrawers:diamond_storage_upgrade', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:diamond',
        C: 'storagedrawers:gold_storage_upgrade',
    })

    e.shaped('storagedrawers:emerald_storage_upgrade', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'minecraft:stick',
        B: 'minecraft:emerald',
        C: 'storagedrawers:diamond_storage_upgrade',
    })
    
    e.shaped('storagedrawers:void_upgrade', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:obsidian',
        B: 'storagedrawers:emerald_storage_upgrade',
    })
})