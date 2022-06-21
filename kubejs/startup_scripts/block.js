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

    /////////////////////////
    // New Block
    e.create('chromium_block')
        .material('rock')
        .hardness(1.5)
        .displayName('Chromium Block')
        .harvestTool('pickaxe', 1)

    e.create('thorium_block')
        .material('rock')
        .hardness(1.5)
        .displayName('Thorium Block')
        .harvestTool('pickaxe', 1)

    e.create('mythril_block')
        .material('rock')
        .hardness(1.5)
        .displayName('Mythril Block')
        .harvestTool('pickaxe', 1)

    e.create('carbon_block')
        .material('rock')
        .hardness(1.5)
        .displayName('Carbon Block')
        .harvestTool('pickaxe', 1)

    e.create('adamantum_block')
        .material('rock')
        .hardness(1.5)
        .displayName('Adamantium Block')
        .harvestTool('pickaxe', 1)
        
    /// 

    e.create('ore_dirt')
        .material('dirt')
        .hardness(0.5)
        .displayName('Ores Dirt')
        .harvestTool('shovel', 1)
})

onEvent('block.loot_tables', e => {
    e.addSimpleBlock('kubejs:craunium_ore', 'kubejs:craunium_raw')
})