events.listen('item.tags', function (e) {
    e.add('forge:ingots', 'kubejs:craunium_ingot')
    e.add('forge:nuggets', ['kubejs:steel_nugget', 'kubejs:uranium_nugget', 'kubejs:craunium_nugget'])
    e.add('create:crushed_ores', ['kubejs:steel_crushed'])
    e.add('forge:gears', ['kubejs:steel_gear', 'kubejs:craunium_gear'])
    // e.add('forge:rods', [])
    // e.add('forge:sticks', [])
    e.add('forge:beconpayment', ['create:copper_ingot'])
    e.add('minecraft:beacon_payment_items', ['create:copper_ingot'])
    e.add('forge:dusts', ['kubejs:silver_dust', 'kubejs:craunium_dust', 'kubejs:sulfur_dust', 'kubejs:electrum_dust', 'kubejs:constantan_dust', 'kubejs:diamond_dust'])
    e.add('forge:plates', ['kubejs:silver_sheet', 'kubejs:uranium_sheet', 'kubejs:aluminum_sheet', 'kubejs:craunium_sheet'])
    e.add('forge:ores', 'kubejs:craunium_raw')
    e.add('forge:crystals', 'kubejs:craunium_crystal')
    e.add('forge:storage_blocks', 'kubejs:craunium_block')

    /////////////////////////

    e.add('forge:gems', ['byg:quartz_crystal'])
    e.add('forge:gems/quartz', ['byg:quartz_crystal'])

    // e.add('forge:sticks/steel', [])

    e.add('create:crushed_ores', 'kubejs:craunium_crushed')
    e.add('forge:ores/craunium', 'kubejs:craunium_raw')
    e.add('forge:crystals/craunium', 'kubejs:craunium_crystal')
    e.add('forge:storage_blocks/craunium', 'kubejs:craunium_block')
    e.add('forge:ingots/craunium', 'kubejs:craunium_ingot')


    e.add('forge:nuggets/uranium', 'kubejs:uranium_nugget')
    e.add('forge:nuggets/craunium', 'kubejs:craunium_nugget')
    e.add('forge:nuggets/steel', 'kubejs:steel_nugget')

    e.add('forge:plates/uranium', 'kubejs:uranium_sheet')
    e.add('forge:plates/aluminum', 'kubejs:aluminum_sheet')
    e.add('forge:plates/silver', 'kubejs:silver_sheet')
    e.add('forge:plates/nickel', 'kubejs:nickel_sheet')
    e.add('forge:plates/craunium', 'kubejs:craunium_sheet')

    e.add('forge:gears/craunium', 'kubejs:craunium_gear')
    e.add('forge:gears/steel', 'kubejs:steel_gear')

    // e.add('forge:rods/all_metal', [])
    // e.add('forge:rods/steel', [])

    e.add('forge:dusts/gold', 'kubejs:gold_dust')
    e.add('forge:dusts/lead', 'kubejs:lead_dust')
    e.add('forge:dusts/silver', 'kubejs:silver_dust')
    e.add('forge:dusts/cobalt', 'kubejs:cobalt_dust')
    e.add('forge:dusts/nickel', 'kubejs:nickel_dust')
    e.add('forge:dusts/craunium', 'kubejs:craunium_dust')
    e.add('forge:dusts/zinc', 'kubejs:zinc_dust')
    e.add('forge/dusts/iron', 'kubejs:iron_dust')
    e.add('forge:dusts/sulfur', 'kubejs:sulfur_dust')
    e.add('forge:dusts/electrum', 'kubejs:electrum_dust')
    e.add('forge:dusts/constantan', 'kubejs:constantan_dust')
    e.add('forge:dusts/diamond', 'kubejs:diamond_dust')
    e.add('forge:dusts/aluminum', 'kubejs:aluminum_dust') 
})