events.listen('item.tags', function (e) {
    //GLOBALS
    // e.remove('forge:sticks'                  , [''])
    // e.remove('forge:rods'                    , [''])
    e.remove('forge:ingots', ['exnihilosequentia:ingot_zinc', 'oreclumps:zinc_ingot', 'exnihilosequentia:ingot_nickel', 'immersiveengineering:ingot_nickel', 'immersiveengineering:ingot_silver', 'exnihilosequentia:ingot_silver', 'immersiveengineering:ingot_lead', 'exnihilosequentia:ingot_lead', 'immersiveengineering:plate_uranium', 'boss_tools:steel_ingot', 'immersiveengineering:ingot_steel', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper', 'immersiveengineering:ingot_uranium', 'exnihilosequentia:ingot_uranium', 'oreclumps:uranium_ingot'])
    e.remove('forge:dusts', ['immersiveengineering:dust_iron', 'immersiveengineering:dust_nickel', 'immersiveengineering:dust_silver', 'immersiveengineering:dust_aluminum', 'immersiveengineering:dust_lead', 'immersiveengineering:dust_uranium', 'immersiveengineering:dust_steel'])
    e.remove('forge:plates', ['boss_tools:iron_plate', 'immersiveengineering:plate_iron', 'createdeco:zinc_sheet', 'immersiveengineering:plate_nickel', 'immersiveengineering:plate_silver', 'immersiveengineering:plate_aluminum', 'immersiveengineering:plate_uranium', 'immersiveengineering:plate_steel', 'immersiveengineering:plate_copper'])
    e.remove('minecraft:beacon_payment_items', ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])
    e.remove('forge:beconpayment', ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])
    e.remove('forge:nuggets', ['immersiveengineering:nugget_steel', 'boss_tools:steel_nugget', 'immersiveengineering:nugget_copper', 'tconstruct:copper_nugget', 'immersiveengineering:nugget_uranium'])

    e.add('forge:nuggets', ['kubejs:steel_nugget', 'kubejs:uranium_nugget'])
    e.add('create:crushed_ores', ['kubejs:steel_crushed'])
    e.add('forge:gears', ['kubejs:steel_gear'])
    e.add('forge:rods', ['immersiveengineering:stick_steel'])
    e.add('forge:sticks', ['immersiveengineering:stick_steel'])
    e.add('forge:beconpayment', ['create:copper_ingot'])
    e.add('minecraft:beacon_payment_items', ['create:copper_ingot'])
    e.add('forge:dusts', ['kubejs:silver_dust'])
    e.add('forge:plates', ['kubejs:silver_sheet', 'kubejs:uranium_sheet', 'kubejs:aluminum_sheet'])

    //quartz
    e.add('forge:gems', 'byg:quartz_crystal')
    e.add('forge:gems/quartz', 'byg:quartz_crystal')

    //Steel
    e.remove('forge:ingots/steel', ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel'])
    e.remove('forge:dusts/steel', ['immersiveengineering:dust_steel'])
    e.remove('forge:plates/steel', ['immersiveengineering:plate_steel'])
    e.remove('forge:nuggets/steel', ['immersiveengineering:nugget_steel', 'boss_tools:steel_nugget'])

    e.add('forge:gears/steel', 'kubejs:steel_gear')
    e.add('forge:nuggets/steel', 'kubejs:steel_nugget')
    e.add('forge:rods/all_metal', 'immersiveengineering:stick_steel')
    e.add('forge:rods/steel', 'immersiveengineering:stick_steel')
    e.add('forge:sticks/steel', 'immersiveengineering:stick_steel')

    //Copper
    e.remove('forge:ingots/copper', ['immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])
    e.remove('forge:nuggets/copper', ['immersiveengineering:nugget_copper', 'tconstruct:copper_nugget'])
    e.remove('forge:plates/copper', ['immersiveengineering:plate_copper'])

    //Uranium
    e.remove('forge:ingots/uranium', ['immersiveengineering:ingot_uranium', 'exnihilosequentia:ingot_uranium', 'oreclumps:uranium_ingot'])
    e.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium')
    e.remove('forge:plates/uranium', 'immersiveengineering:plate_uranium')

    e.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium')

    e.add('forge:nuggets/uranium', 'kubejs:uranium_nugget')
    e.add('forge:plates/uranium', 'kubejs:uranium_sheet')

    //Lead
    e.remove('forge:ingots/lead', ['immersiveengineering:ingot_lead', 'exnihilosequentia:ingot_lead'])
    e.remove('forge:dusts/lead', 'immersiveengineering:dust_lead')

    e.add('forge:dusts/lead', 'kubejs:lead_dust')

    //Aluminum
    e.remove('forge:ingots/aluminum', ['immersiveengineering:ingot_aluminum', 'exnihilosequentia:ingot_aluminum'])
    e.remove('forge:plates/aluminum', 'immersiveengineering:plate_aluminum')
    e.remove('forge:dusts/aluminum', 'immersiveengineering:dust_aluminum')

    e.add('forge:/aluminum', 'kubejs:aluminum_dust')
    e.add('forge:plates/aluminum', 'kubejs:aluminum_sheet')

    //Silver
    e.remove('forge:plates/silver', 'immersiveengineering:plate_silver')
    e.remove('forge:dusts/silver', 'immersiveengineering:dust_silver')
    e.remove('forge:ingots/silver', ['immersiveengineering:ingot_silver', 'exnihilosequentia:ingot_silver'])

    e.add('forge:plates/silver', 'kubejs:silver_sheet')
    e.add('forge:dusts/silver', 'kubejs:silver_dust')

    //Cobalt
    e.remove('forge:ingots/silver', 'tconstruct:cobalt_ingot')
    e.add('forge:dusts/silver', 'kubejs:cobalt_dust')

    //Nickel
    e.remove('forge:ingots/nickel', ['exnihilosequentia:ingot_nickel', 'immersiveengineering:ingot_nickel'])
    e.remove('forge:dusts/nickel', 'immersiveengineering:dust_nickel')
    e.remove('forge:plates/nickel', 'immersiveengineering:plate_nickel')

    e.add('forge:dusts/nickel', 'kubejs:nickel_dust')
    e.add('forge:plates/nickel', 'kubejs:nickel_sheet')

    //Zinc
    e.remove('forge:ingots/zinc', ['exnihilosequentia:ingot_zinc', 'oreclumps:zinc_ingot'])
    e.remove('forge:plates/zinc', 'createdeco:zinc_sheet')

    e.add('forge:dusts/zinc', 'kubejs:zinc_dust')

    //IRON
    e.remove('forge:ingots/iron', ['boss_tools:iron_plate', 'immersiveengineering:plate_iron'])
    e.remove('forge:rods/iron', 'immersiveengineering:stick_iron')
    e.remove('forge/dusts/iron', 'immersiveengineering:dust_iron')

    e.add('forge/dusts/iron', 'kubejs:iron_dust')

    //GOLD
    e.remove('forge:ingots/gold', 'immersiveengineering:plate_gold')
    e.remove('forge:dusts/gold', 'immersiveengineering:dust_gold')

    e.add('forge:dusts/gold', 'kubejs:gold_dust')

    //Bronze
    e.remove('forge:ingots/bronze', 'tconstruct:tinkers_bronze_ingot')
    e.remove('forge:plates/bronze', 'steampowered:bronze_sheet')

    //Craunium
    e.add('create:crushed_ores', 'kubejs:craunium_crushed')
    e.add('forge:ores/craunium', 'kubejs:craunium_raw')
    e.add('forge:crystals/craunium', 'kubejs:craunium_crystal')
    e.add('forge:dusts/craunium', 'kubejs:craunium_dust')
    e.add('forge:storage_blocks/craunium', 'kubejs:craunium_block')
    e.add('forge:nuggets/craunium', 'kubejs:craunium_nugget')
    e.add('forge:ingots/craunium', 'kubejs:craunium_ingot')
    e.add('forge:gears/craunium', 'kubejs:craunium_gear')
    e.add('forge:plates/craunium', 'kubejs:craunium_sheet')

    e.add('forge:ores', 'kubejs:craunium_raw')
    e.add('forge:crystals', 'kubejs:craunium_crystal')
    e.add('forge:dusts', 'kubejs:craunium_dust')
    e.add('forge:storage_blocks', 'kubejs:craunium_block')
    e.add('forge:nuggets', 'kubejs:craunium_nugget')
    e.add('forge:ingots', 'kubejs:craunium_ingot')
    e.add('forge:gears', 'kubejs:craunium_gear')
    e.add('forge:plates', 'kubejs:craunium_sheet')

    //
    e.remove('forge:dusts','immersiveengineering:dust_hop_graphite')
    e.add   ('forge:dusts','kubejs:hop_graphite_dust')
    e.remove('forge:dusts','immersiveengineering:dust_sulfur')
    e.add   ('forge:dusts','kubejs:sulfur_dust')
    e.remove('forge:dusts','immersiveengineering:dust_electrum')
    e.add   ('forge:dusts','kubejs:electrum_dust')
    e.remove('forge:dusts','immersiveengineering:dust_constantan')
    e.add   ('forge:dusts','kubejs:constantan_dust')
    e.remove('forge:dusts','createaddition:diamond_grit')
    e.add   ('forge:dusts','kubejs:diamond_dust')
    
    e.remove('forge:dusts/hop_graphite','immersiveengineering:dust_hop_graphite')
    e.add   ('forge:dusts/hop_graphite','kubejs:hop_graphite_dust')
    e.remove('forge:dusts/sulfur','immersiveengineering:dust_sulfur')
    e.add   ('forge:dusts/sulfur','kubejs:sulfur_dust')
    e.remove('forge:dusts/electrum','immersiveengineering:dust_electrum')
    e.add   ('forge:dusts/electrum','kubejs:electrum_dust')
    e.remove('forge:dusts/constantan','immersiveengineering:dust_constantan')
    e.add   ('forge:dusts/constantan','kubejs:constantan_dust')
    e.remove('forge:dusts/diamond','createaddition:diamond_grit')
    e.add   ('forge:dusts/diamond','kubejs:diamond_dust')
})