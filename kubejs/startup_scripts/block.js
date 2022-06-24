events.listen('block.registry', function (e) {
    e.create('craunium_block')
        .material('iron')
        .hardness(1.5)
        .displayName('Block of Craunium')

    e.create('craunium_ore')
        .material('rock')
        .hardness(1.5)
        .displayName('Craunium Ore')
        .harvestTool('pickaxe', 1)

    e.create('ore_dirt')
        .material('dirt')
        .hardness(0.5)
        .displayName('Ores Dirt')
        .harvestTool('shovel', 1)
})

onEvent('block.loot_tables', e => {
    e.addSimpleBlock('kubejs:craunium_ore', 'kubejs:craunium_raw')
})