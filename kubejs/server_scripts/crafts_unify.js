// REMOVE
onEvent('recipes', e => {
    //GLOBLS
    e.remove({ type: 'immersiveengineering:arcfurnace' })
    e.remove({ type: 'immersiveengineering:crusher' })
    e.remove({ type: 'immersiveengineering:recycling' })
    e.remove({ type: 'immersiveengineering:metalpress' })
    e.remove({ type: 'immersiveengineering:alloysmelter' })

    //Steel
    e.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_storage_steel' })
    e.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_nugget_steel' })

    e.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })

    e.remove({ id: 'immersiveengineering:crafting/stick_steel' })

    e.remove({ id: 'immersiveengineering:crafting/ingot_steel_from_dust_from_blasting' })
    e.remove({ id: 'immersiveengineering:crafting/ingot_steel_from_dust' })

    e.remove({ id: 'immersiveengineering:crafting/storage_steel_to_ingot_steel' })
    e.remove({ id: 'immersiveengineering:crafting/nugget_steel_to_ingot_steel' })

    e.remove({ id: 'boss_tools:steel_ingot' })
    e.remove({ id: 'boss_tools:steel_ingot_from_nugget' })
    e.remove({ id: 'boss_tools:blasting/steel_ingot' })

    e.remove({ id: 'boss_tools:steel_block' })
    e.remove({ id: 'boss_tools:steel_nugget_from_ingot' })

    e.remove({ id: 'immersiveengineering:blastingfurnace/steel_block' })

    replaceIO('immersiveengineering:nugget_steel', 'kubejs:steel_nugget')

    e.remove({ id: 'immersiveengineering:metalpress/rod_steel' })
    e.remove({ id: 'immersiveengineering:metalpress/gear_steel' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_steel' })

    e.remove({ id: 'boss_tools:compressing/compressed_steel' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/rod_gold_cast' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/rod_sand_cast' })

    e.stonecutting('boss_tools:steel_block', 'alloyed:steel_block')
    e.stonecutting('immersiveengineering:storage_steel', 'alloyed:steel_block')

    e.stonecutting('alloyed:steel_block', 'boss_tools:steel_block')
    e.stonecutting('alloyed:steel_block', 'immersiveengineering:storage_steel')

    e.stonecutting('immersiveengineering:slab_sheetmetal_steel', 'immersiveengineering:sheetmetal_steel')
    e.stonecutting('immersiveengineering:slab_storage_steel', 'immersiveengineering:sheetmetal_steel')

    e.stonecutting('immersiveengineering:slab_steel_scaffolding_standard', 'immersiveengineering:steel_scaffolding_standard')
    e.stonecutting('immersiveengineering:stairs_steel_scaffolding_standard', 'immersiveengineering:steel_scaffolding_standard')
    e.stonecutting('immersiveengineering:steel_slope', 'immersiveengineering:steel_scaffolding_standard')

    e.stonecutting('immersiveengineering:stairs_steel_scaffolding_grate_top', 'immersiveengineering:steel_scaffolding_grate_top')
    e.stonecutting('immersiveengineering:slab_steel_scaffolding_grate_top', 'immersiveengineering:steel_scaffolding_grate_top')

    e.shapeless('alloyed:steel_ingot', ['9x kubejs:steel_nugget'])
    e.shapeless('9x kubejs:steel_nugget', 'alloyed:steel_ingot')

    e.smelting('alloyed:steel_ingot', 'kubejs:steel_crushed')
    e.blasting('alloyed:steel_ingot', 'kubejs:steel_crushed')

    createBulkWashingCrushed('kubejs:steel_crushed', 'kubejs:steel_nugget', 10, 5)

    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_steel').withChance(32.0),
        Item.of('kubejs:steel_dust').withChance(2.0),
    ], 'alloyed:steel_sheet', [
        e.recipes.createPressing('kubejs:steel_sequenced_compressed_plate', 'kubejs:steel_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:steel_sequenced_compressed_plate').loops(6)

    'kubejs:steel_fan'
    'kubejs:steel_crushed'
    'kubejs:steel_dust'
    'kubejs:steel_gear'

    createCrushing('kubejs:steel_crushed', 'kubejs:steel_dust', 1, 3, false)
    createMilling('kubejs:steel_crushed', 'kubejs:steel_dust', 1, 3, false)

    createCrushing('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, 'kubejs:steel_dust')
    createMilling('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, false)

    // createMixingItem(input[], output, qte[], heated) 
    createMixingItem(['kubejs:steel_dust', 'kubejs:steel_dust'], 'alloyed:steel_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:steel_dust', 'kubejs:steel_dust'], 'alloyed:steel_ingot', [3, 3], 'superheated')

    createCutting('boss_tools:compressed_steel', 'kubejs:steel_gear', 5, 20, 'kubejs:steel_dust')
    createPress('kubejs:steel_gear', '2x kubejs:steel_fan')
    createCutting('alloyed:steel_sheet', 'immersiveengineering:stick_steel', 6, 20, 'kubejs:steel_dust')
    createCutting('alloyed:steel_ingot', 'immersiveengineering:stick_steel', 2, 20, 'kubejs:steel_dust')

    //COPPER
    e.remove({ id: 'immersiveengineering:crafting/ingot_copper_to_nugget_copper' })
    e.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
    e.remove({ id: 'immersiveengineering:crafting/plate_copper_hammering' })

    e.remove({ id: 'tconstruct:common/materials/copper_bloc_from_ingots' })
    e.remove({ id: 'immersiveengineering:crafting/ingot_copper_to_storage_copper' })

    e.remove({ id: 'immersiveengineering:crafting/wire_copper' })

    e.remove({ id: 'immersiveengineering:metalpress/wire_copper' })
    e.remove({ id: 'immersiveengineering:metalpress/rod_copper' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_copper' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/wire_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/rod_gold_cast' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/rod_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/wire_sand_cast' })

    e.stonecutting('immersiveengineering:storage_copper', 'create:copper_block')
    e.stonecutting('tconstruct:copper_block', 'create:copper_block')

    replaceIO('immersiveengineering:ingot_copper', 'create:copper_ingot')
    replaceIO('oreclumps:copper_ingot', 'create:copper_ingot')
    replaceIO('tconstruct:copper_ingot', 'create:copper_ingot')
    replaceIO('exnihilosequentia:ingot_copper', 'create:copper_ingot')

    replaceIO('immersiveengineering:plate_copper', 'create:copper_sheet')

    replaceIO('immersiveengineering:nugget_copper', 'create:copper_nugget')
    replaceIO('tconstruct:copper_nugget', 'create:copper_nugget')
    replaceIO('immersiveengineering:wire_copper', 'createaddition:copper_wire')

    createCutting('createaddition:copper_rod', 'createaddition:copper_wire', 6, 20, 'kubejs:copper_dust')
    createCutting('create:copper_ingot', 'createaddition:copper_rod', 3, 20, 'kubejs:copper_dust')

    createCutting('create:copper_sheet', 'createaddition:copper_wire', 4, 10, 'kubejs:copper_dust')
    createCutting('create:copper_sheet', 'createaddition:copper_rod', 4, 10, 'kubejs:copper_dust')

    createMixingItem(['kubejs:copper_dust', 'kubejs:copper_dust'], 'create:copper_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:copper_dust', 'kubejs:copper_dust'], 'create:copper_ingot', [3, 3], 'superheated')

    //Uranium
    e.remove({ id: 'immersiveengineering:metalpress/plate_uranium' })
    e.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })
    e.remove({ id: 'immersiveengineering:crafting/plate_uranium_hammering' })

    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_uranium' })

    e.remove({ id: 'immersiveengineering:crusher/ore_uranium' })
    e.remove({ id: 'immersiveengineering:crusher/ingot_uranium' })

    e.remove({ id: 'immersiveengineering:crafting/ingot_uranium_to_storage_uranium' })

    replaceIO('immersiveengineering:ingot_uranium', 'biggerreactors:yellorium_ingot')
    replaceIO('exnihilosequentia:ingot_uranium', 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot', 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot', 'biggerreactors:yellorium_ingot')

    replaceIO('immersiveengineering:nugget_uranium', 'kubejs:uranium_nugget')
    replaceIO('immersiveengineering:plate_uranium', 'kubejs:uranium_sheet')

    createPress('biggerreactors:yellorium_ingot', 'kubejs:uranium_sheet')

    createCrushing('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)
    createMilling('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)

    createCrushing('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, 'biggerreactors:yellorium_dust')
    createMilling('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, false)

    e.stonecutting('immersiveengineering:storage_uranium', 'biggerreactors:yellorium_block')

    //Lead  
    e.remove({ id: 'immersiveengineering:crafting/wire_lead' })
    e.remove({ id: 'immersiveengineering:metalpress/wire_lead' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/wire_gold_cast' })
    e.remove({ id: 'immersiveengineering:crusher/ingot_lead' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/wire_sand_cast' })

    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_lead' })

    replaceIO('immersiveengineering:ingot_lead', 'oreclumps:lead_ingot')
    replaceIO('exnihilosequentia:ingot_lead', 'oreclumps:lead_ingot')
    replaceIO('immersiveengineering:dust_lead', 'kubejs:lead_dust')
    replaceIO('immersiveengineering:plate_lead', 'kubejs:lead_sheet')

    createPress('biggerreactors:yellorium_ingot', 'kubejs:lead_sheet')

    createCutting('kubejs:lead_sheet', 'immersiveengineering:wire_lead', 4, 10, 'kubejs:lead_dust')

    createCrushing('create:crushed_lead_ore', 'kubejs:lead_dust', 3, 2, false)
    createCrushing('oreclumps:lead_ingot', 'kubejs:lead_dust', 2, 2, 'kubejs:silver_dust')

    createMixingItem(['kubejs:lead_dust', 'kubejs:lead_dust'], 'oreclumps:lead_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:lead_dust', 'kubejs:lead_dust'], 'oreclumps:lead_ingot', [3, 3], 'superheated')

    createCrushing('immersiveengineering:storage_lead', 'create:crushed_lead_ore', 5, 1, false)

    //Aluminum
    e.remove({ id: 'immersiveengineering:crafting/stick_aluminum' })
    e.remove({ id: 'immersiveengineering:crafting/wire_aluminum' })
    e.remove({ id: 'immersiveengineering:metalpress/wire_aluminum' })
    e.remove({ id: 'immersiveengineering:metalpress/rod_aluminum' })

    e.remove({ id: 'immersiveengineering:crafting/plate_aluminum_hammering' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_aluminum' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/aluminum/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/aluminum/rod_sand_cast' })

    replaceIO('immersiveengineering:ingot_aluminum', 'oreclumps:aluminum_ingot')
    replaceIO('exnihilosequentia:ingot_aluminum', 'oreclumps:aluminum_ingot')
    replaceIO('immersiveengineering:dust_aluminum', 'kubejs:aluminum_dust')
    replaceIO('immersiveengineering:plate_aluminum', 'kubejs:aluminum_sheet')

    createCutting('immersiveengineering:stick_aluminum', 'immersiveengineering:wire_aluminum', 6, 20, 'kubejs:aluminum_dust')
    createCutting('oreclumps:aluminum_ingot', 'immersiveengineering:stick_aluminum', 3, 20, 'kubejs:aluminum_dust')

    createCutting('kubejs:aluminum_sheet', 'immersiveengineering:wire_aluminum', 4, 10, 'kubejs:aluminum_dust')
    createCutting('kubejs:aluminum_sheet', 'immersiveengineering:stick_aluminum', 4, 10, 'kubejs:aluminum_dust')

    createMixingItem(['kubejs:aluminum_dust', 'kubejs:aluminum_dust'], 'oreclumps:aluminum_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:aluminum_dust', 'kubejs:aluminum_dust'], 'oreclumps:aluminum_ingot', [3, 3], 'superheated')

    createPress('oreclumps:aluminum_ingot', 'kubejs:aluminum_sheet')

    //Silver
    replaceIO('immersiveengineering:ingot_silver', 'oreclumps:silver_ingot')
    replaceIO('exnihilosequentia:ingot_silver', 'oreclumps:silver_ingot')
    replaceIO('immersiveengineering:dust_silver', 'kubejs:silver_dust')
    replaceIO('immersiveengineering:plate_silver', 'kubejs:silver_sheet')

    e.remove({ id: 'immersiveengineering:recycling/silver_sheet' })
    e.remove({ id: 'immersiveengineering:crafting/plate_silver_hammering' })
    e.remove({ id: 'immersiveengineering:metalpress/plate_silver' })

    createMixingItem(['kubejs:silver_dust', 'kubejs:silver_dust'], 'oreclumps:silver_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:silver_dust', 'kubejs:silver_dust'], 'oreclumps:silver_ingot', [3, 3], 'superheated')

    createPress('oreclumps:silver_ingot', 'kubejs:silver_sheet')
    createCrushing('immersiveengineering:storage_silver', 'create:crushed_silver_ore', 5, 1, false)

    //Cobalt
    e.remove({ id: 'tconstruct:smeltery/casting/metal/cobalt/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/cobalt/ingot_sand_cast' })

    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_silver' })

    e.remove({ id: 'immersiveengineering:crusher/ingot_silver' })
    e.remove({ id: 'immersiveengineering:crusher/ore_lead' })
    e.remove({ id: 'immersiveengineering:crusher/ore_silver' })

    replaceIO('tconstruct:cobalt_ingot', 'oreclumps:cobalt_ingot')

    createMixingItem(['kubejs:cobalt_dust', 'kubejs:cobalt_dust'], 'oreclumps:cobalt_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:cobalt_dust', 'kubejs:cobalt_dust'], 'oreclumps:cobalt_ingot', [3, 3], 'superheated')

    createCrushing('morecreatestuffs:crushed_cobalt_ore', 'kubejs:cobalt_dust', 3, 2, false)
    createCrushing('oreclumps:silver_ingot', 'kubejs:cobalt_dust', 2, 2, 'kubejs:lead_dust')

    //Nickel
    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_nickel' })

    e.remove({ id: 'immersiveengineering:crusher/ingot_nickel' })
    e.remove({ id: 'immersiveengineering:crusher/ore_nickel' })
    e.remove({ id: 'immersiveengineering:crusher/ore_iron' })

    e.remove({ id: 'immersiveengineering:arcfurnace/dust_nickel' })

    replaceIO('immersiveengineering:plate_nickel', 'kubejs:nickel_sheet')
    replaceIO('immersiveengineering:dust_nickel', 'kubejs:nickel_dust')
    replaceIO('exnihilosequentia:ingot_nickel', 'oreclumps:nickel_ingot')
    replaceIO('immersiveengineering:ingot_nickel', 'oreclumps:nickel_ingot')

    createMixingItem(['kubejs:nickel_dust', 'kubejs:nickel_dust'], 'oreclumps:nickel_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:nickel_dust', 'kubejs:nickel_dust'], 'oreclumps:nickel_ingot', [3, 3], 'superheated')

    createCrushing('oreclumps:nickel_ingot', 'kubejs:nickel_dust', 2, 2, 'kubejs:iron_dust')

    //iron
    createCrushing('minecraft:iron_ingot', 'kubejs:iron_dust', 2, 2, 'kubejs:nickel_dust')

    //Zinc
    e.remove({ id: 'createaddition:pressing/zinc_ingot' })
    e.remove({ id: 'immersiveengineering:arcfurnace/alloy_brass' })
    e.remove({ id: 'immersiveengineering:arcfurnace/dust_zinc' })
    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_zinc' })

    replaceIO('createaddition:zinc_sheet', 'createdeco:zinc_sheet')
    replaceIO('oreclumps:zinc_ingot', 'create:zinc_ingot')
    replaceIO('exnihilosequentia:ingot_zinc', 'create:zinc_ingot')

    createCrushing('create:zinc_ingot', 'kubejs:zinc_dust', 2, 1, 'kubejs:iron_dust')
    createCrushing('create:crushed_zinc_ore', 'kubejs:zinc_dust', 4, 2, 'kubejs:zinc_dust')

    createMixingItem(['kubejs:zinc_dust', 'kubejs:zinc_dust'], 'oreclumps:zinc_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:zinc_dust', 'kubejs:zinc_dust'], 'oreclumps:zinc_ingot', [3, 3], 'superheated')

    //IRON
    e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_sand_cast' })

    e.remove({ id: 'immersiveengineering:arcfurnace/dust_iron' })
    e.remove({ id: 'immersiveengineering:arcfurnace/steel' })
    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_iron' })
    e.remove({ id: 'immersiveengineering:crafting/plate_iron_hammering' })
    e.remove({ id: 'immersiveengineering:blastfurnace/steel_block' })
    e.remove({ id: 'immersiveengineering:blastfurnace/steel' })

    e.remove({ id: 'immersiveengineering:metalpress/plate_iron' })
    e.remove({ id: 'immersiveengineering:metalpress/rod_iron' })
    e.remove({ id: 'immersiveengineering:metalpress/wire_iron' })

    e.remove({ id: 'immersiveengineering:crafting/stick_iron' })
    e.remove({ id: 'boss_tools:iron_plate' })

    replaceIO('boss_tools:iron_plate', 'create:iron_sheet')
    replaceIO('immersiveengineering:plate_iron', 'create:iron_sheet')

    replaceIO('immersiveengineering:dust_iron', 'kubejs:iron_dust')
    replaceIO('immersiveengineering:stick_iron', 'createaddition:iron_rod')

    createCrushing('minecraft:iron_block', 'create:crushed_iron_ore', 4, 2, 'kubejs:iron_dust')
    createCrushing('create:crushed_iron_ore', 'kubejs:iron_dust', 4, 2, 'kubejs:iron_dust')

    createMixingItem(['kubejs:iron_dust', 'kubejs:iron_dust'], 'minecraft:iron_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:iron_dust', 'kubejs:iron_dust'], 'minecraft:iron_ingot', [3, 3], 'superheated')

    createMixingItem(['minecraft:iron_block', 'minecraft:coal_block'], 'alloyed:steel_block', [1, 2], 'superheated')

    createCutting('createaddition:iron_rod', 'createaddition:iron_wire', 6, 20, 'kubejs:iron_dust')
    createCutting('minecraft:iron_ingot', 'createaddition:iron_rod', 3, 20, 'kubejs:iron_dust')

    createCutting('create:iron_sheet', 'createaddition:iron_wire', 4, 10, 'kubejs:iron_dust')
    createCutting('create:iron_sheet', 'createaddition:iron_rod', 4, 10, 'kubejs:iron_dust')

    //GOLD
    e.remove({ id: 'immersiveengineering:arcfurnace/dust_gold' })
    e.remove({ id: 'immersiveengineering:arcfurnace/steel' })
    e.remove({ id: 'immersiveengineering:crafting/hammercrushing_gold' })
    e.remove({ id: 'immersiveengineering:crafting/plate_gold_hammering' })
    e.remove({ id: 'immersiveengineering:blastfurnace/steel_block' })
    e.remove({ id: 'immersiveengineering:blastfurnace/steel' })

    e.remove({ id: 'immersiveengineering:metalpress/plate_gold' })
    e.remove({ id: 'immersiveengineering:metalpress/rod_gold' })
    e.remove({ id: 'immersiveengineering:metalpress/wire_gold' })

    e.remove({ id: 'immersiveengineering:crafting/stick_gold' })
    replaceIO('immersiveengineering:plate_gold', 'create:golden_sheet')
    replaceIO('immersiveengineering:dust_gold', 'kubejs:gold_dust')

    createCrushing('minecraft:gold_block', 'create:crushed_gold_ore', 4, 2, 'kubejs:gold_dust')
    createCrushing('create:crushed_gold_ore', 'kubejs:gold_dust', 4, 2, 'kubejs:gold_dust')

    createMixingItem(['kubejs:gold_dust', 'kubejs:gold_dust'], 'minecraft:gold_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:gold_dust', 'kubejs:gold_dust'], 'minecraft:gold_ingot', [3, 3], 'superheated')

    createMixingItem(['minecraft:gold_block', 'minecraft:coal_block'], 'alloyed:steel_block', [1, 2], 'superheated')

    createCutting('createaddition:gold_rod', 'createaddition:gold_wire', 6, 20, 'kubejs:gold_dust')
    createCutting('minecraft:gold_ingot', 'createaddition:gold_rod', 3, 20, 'kubejs:gold_dust')

    createCutting('create:golden_sheet', 'createaddition:gold_wire', 4, 10, 'kubejs:gold_dust')
    createCutting('create:golden_sheet', 'createaddition:gold_rod', 4, 10, 'kubejs:gold_dust')

    //Bronze
    'tconstruct:tinkers_bronze_nugget'
    'tconstruct:tinkers_bronze_block'
    'alloyed:bronze_block'

    e.remove({ id: 'tconstruct:smeltery/casting/metal/silicon_bronze/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silicon_bronze/ingot_sand_cast' })
    e.remove({ id: 'tconstruct:common/materials/tinkers_bronze_block_from_ingots' })

    e.remove({ id: 'immersiveengineering:metalpress/plate_bronze' })
    e.remove({ id: 'immersiveengineering:alloysmelter/bronze' })
    e.remove({ id: 'immersiveengineering:arcfurnace/alloy_bronze' })

    replaceIO('tconstruct:tinkers_bronze_ingot', 'alloyed:bronze_ingot')
    replaceIO('steampowered:bronze_sheet', 'alloyed:bronze_sheet')

    e.stonecutting('tconstruct:tinkers_bronze_block', 'alloyed:bronze_block')

    //Craunium
    e.shapeless('kubejs:craunium_ingot', '9x kubejs:craunium_nugget')
    e.shapeless('9x kubejs:craunium_nugget', 'kubejs:craunium_ingot')
    createBulkWashingCrushed('kubejs:craunium_crushed', 'kubejs:craunium_nugget', 10, 5)

    createCrushing('kubejs:craunium_block', 'kubejs:craunium_crushed', 5, 1, false)
    createCrushing('kubejs:craunium_ore', 'kubejs:craunium_crushed', 1, 2, 'minecraft:cobblestone')
    createMilling('kubejs:craunium_ore', 'kubejs:craunium_crushed', 1, 1, false)
    createCrushing('kubejs:craunium_raw', 'kubejs:craunium_crushed', 1, 2, 'minecraft:cobblestone')
    createMilling('kubejs:craunium_raw', 'kubejs:craunium_crushed', 1, 1, false)

    e.shapeless('kubejs:craunium_block', '9x kubejs:craunium_ingot')
    e.shapeless('9x kubejs:craunium_ingot', 'kubejs:craunium_block')

    createCrushing('kubejs:craunium_ingot', 'kubejs:craunium_dust', 3, 2, 'kubejs:titanium_dust')
    createCrushing('kubejs:craunium_block', 'kubejs:craunium_dust', 5, 3, 'kubejs:titanium_dust')
    createMilling('kubejs:craunium_ingot', 'kubejs:craunium_dust', 1, 1, false)

    createMixingItem(['kubejs:craunium_dust', 'kubejs:craunium_dust'], 'kubejs:craunium_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:craunium_dust', 'kubejs:craunium_dust'], 'kubejs:craunium_ingot', [3, 3], 'superheated')

    e.smelting('kubejs:craunium_ingot', 'kubejs:craunium_raw')
    e.blasting('kubejs:craunium_ingot', 'kubejs:craunium_raw')

    createMixingItem3(['kubejs:craunium_dust', 'kubejs:craunium_ingot', 'minecraft:quartz'], 'kubejs:craunium_crystal', [5, 10, 10, 5], 'superheated')
    createMixingItem3(['kubejs:craunium_dust', 'kubejs:craunium_ingot', 'minecraft:quartz'], 'kubejs:craunium_crystal', [20, 5, 5, 1], 'heated')

    createPress('kubejs:craunium_ingot', 'kubejs:craunium_sheet')
    createCutting('kubejs:craunium_sheet', 'kubejs:craunium_gear', 2, 10, 'kubejs:craunium_dust')

    //SOME DUSTS
    replaceIO('immersiveengineering:dust_hop_graphite', 'kubejs:hop_graphite_dust')
    replaceIO('immersiveengineering:dust_sulfur', 'kubejs:sulfur_dust')
    replaceIO('immersiveengineering:dust_electrum', 'kubejs:electrum_dust')
    replaceIO('immersiveengineering:dust_constantan', 'kubejs:constantan_dust')
    replaceIO('createaddition:diamond_grit', 'kubejs:diamond_dust')
    replaceIO('createaddition:copper_grit', 'kubejs:copper_dust')

    //Desh
    e.remove({id: 'boss_tools:desh_plate'})
    e.remove({id: 'boss_tools:compressed_desh'})
    e.remove({id: 'boss_tools:compressing/compressed_desh'})

    createPress('boss_tools:desh_ingot','boss_tools:desh_plate')
    
    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_desh').withChance(32.0),
        Item.of('kubejs:desh_dust').withChance(2.0),
    ], 'boss_tools:desh_plate', [
        e.recipes.createPressing('kubejs:desh_sequenced_compressed_plate', 'kubejs:desh_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:desh_sequenced_compressed_plate').loops(6)

    //Quartz
    e.recipes.createSequencedAssembly([
        Item.of('kubejs:quartz_dust').withChance(32.0),
        Item.of('kubejs:quartz_dust').withChance(2.0),
    ], '#forge:gems/quartz', [
        e.recipes.createCutting('kubejs:quartz_sequenced_dust', 'kubejs:quartz_sequenced_dust'),
        e.recipes.createPressing('kubejs:quartz_sequenced_dust', 'kubejs:quartz_sequenced_dust')
    ]).transitionalItem('kubejs:quartz_sequenced_dust').loops(1)

    //Silicon
    e.remove({id: 'boss_tools:compressed_silicon'})
    e.remove({id: 'boss_tools:compressing/compressed_silicon'})
    e.remove({id: 'refinedstorage:silicon'})

    createPress('boss_tools:silicon_ingot','kubejs:silicon_sheet')

    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_silicon').withChance(32.0),
        Item.of('kubejs:silicon_dust').withChance(2.0),
    ], 'kubejs:silicon_sheet', [
        e.recipes.createPressing('kubejs:silicon_sequenced_compressed_plate', 'kubejs:silicon_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:silicon_sequenced_compressed_plate').loops(6)

    createCrushing('boss_tools:silicon_ingot', 'kubejs:silicon_dust', 3, 2, 'kubejs:craunium_dust')
    createCrushing('refinedstorage:silicon', 'kubejs:silicon_dust', 2, 1, false)

    createMixingItem(['kubejs:silicon_dust', 'kubejs:silicon_dust'], 'boss_tools:silicon_nugget', [5, 5], 'heated')
    createMixingItem(['kubejs:silicon_dust', 'kubejs:silicon_dust'], 'boss_tools:silicon_nugget', [5, 2], 'superheated')
    
    createMixingItem(['kubejs:silicon_dust', 'kubejs:craunium_dust'], 'refinedstorage:silicon', [5, 5], 'heated')
    createMixingItem(['kubejs:silicon_dust', 'kubejs:craunium_dust'], 'refinedstorage:silicon', [2, 2], 'superheated')

    e.smelting('refinedstorage:silicon', 'kubejs:quartz_dust')
    e.blasting('refinedstorage:silicon', 'kubejs:quartz_dust')

    //SpaceStation Special craft
        // createPress('kubejs:craunium_ingot', 'boss_tools:iron_plate')
        // createCutting('boss_tools:iron_plate', 'boss_tools:steel_ingot', 2, 10, 'kubejs:craunium_dust')

    // FUNCTION //
    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
    }

    function createPress(input, output) {
        e.custom({
            "type": "create:pressing",

            "ingredients": [
                { "item": input }
            ],

            "results": [
                { "item": output }
            ]
        })
    }

    function createCutting(input, output, qte, qte2, secoutput) {
        if (secoutput === false) {
            e.custom({
                "type": "create:cutting",

                "ingredients": [
                    { "item": input }],

                "results": [
                    { "item": output, "count": qte }],

                "processingTime": 300,
            })

        } else {

            e.custom({
                "type": "create:cutting",

                "ingredients": [
                    { "item": input }],

                "results": [
                    { "item": output, "count": qte },
                    { "item": secoutput, "count": qte2, "chance": 0.125 }
                ],

                "processingTime": 600,
            })
        }
    }

    function createCrushing(input, output, qte, qte2, secoutput) {
        if (secoutput === false) {
            e.custom({
                "type": "create:crushing",

                "ingredients": [
                    { "item": input }
                ],

                "results": [
                    { "item": output, "count": qte },
                    { "item": output, "count": qte2, "chance": 0.3 },
                ],

                "processingTime": 400,
            })
        } else {
            e.custom({
                "type": "create:crushing",

                "ingredients": [
                    { "item": input }
                ],

                "results": [
                    { "item": output, "count": qte },
                    { "item": output, "count": qte2, "chance": 0.3 },
                    { "item": secoutput, "chance": 0.125 }
                ],

                "processingTime": 400,
            })
        }
    }

    function createMilling(input, output, qte, qte2, secoutput) {
        if (secoutput === false) {
            e.custom({
                "type": "create:milling",

                "ingredients": [
                    { "item": input }],

                "results": [
                    { "item": output, "count": qte }],

                "processingTime": 400,
            })

        } else {

            e.custom({
                "type": "create:milling",

                "ingredients": [
                    { "item": input }],

                "results": [
                    { "item": output, "count": qte },
                    { "item": secoutput, "count": qte2, "chance": 0.125 }
                ],

                "processingTime": 400,
            })
        }
    }

    function createBulkWashingCrushed(input, output, qte, qte2) {
        e.custom({
            "type": "create:splashing",

            "ingredients": [
                { "item": input }],

            "results": [
                { "item": output, "count": qte },
                { "item": output, "count": qte2, "chance": 0.3 }],

            "processingTime": 400
        })
    }

    //Create Mixing
    function createMixingItem(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] }
            ],

            "results": [
                { "item": output, 'count': qte[2] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }

    function createMixingItem3(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] }
            ],

            "results": [
                { "item": output, 'count': qte[3] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }

    function createMixingItem4(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] },
                { "item": input[3], "count": qte[3] }
            ],

            "results": [
                { "item": output, 'count': qte[4] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }

    function createMixingItem5(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] },
                { "item": input[3], "count": qte[3] },
                { "item": input[4], "count": qte[4] }
            ],

            "results": [
                { "item": output, 'count': qte[5] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }

    function createMixingItem6(input, output, qte, heated) {
        e.custom({
            "type": "create:mixing",

            "ingredients": [
                { "item": input[0], "count": qte[0] },
                { "item": input[1], "count": qte[1] },
                { "item": input[2], "count": qte[2] },
                { "item": input[3], "count": qte[3] },
                { "item": input[4], "count": qte[4] },
                { "item": input[5], "count": qte[5] },
            ],

            "results": [
                { "item": output, 'count': qte[6] }
            ],

            "processingTime": 400,
            "heatRequirement": heated
        })
    }

})