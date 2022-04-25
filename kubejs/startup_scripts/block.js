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
})

onEvent('block.loot_tables', e => {
    e.addSimpleBlock('kubejs:craunium_ore', 'kubejs:craunium_raw')
	e.addSimpleBlock('libvulpes:oreiridium', 'kubejs:iridium_raw')
	e.addSimpleBlock('libvulpes:orerutile' , 'oreclumps:raw_titanium')
})