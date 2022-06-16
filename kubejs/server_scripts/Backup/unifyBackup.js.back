// REMOVE
onEvent('recipes', e => {
    //Steel
    e.remove({ id: 'boss_tools:steel_ingot' })
    e.remove({ id: 'boss_tools:steel_ingot_from_nugget' })
    e.remove({ id: 'boss_tools:blasting/steel_ingot' })
    e.remove({ id: 'boss_tools:steel_block' })
    e.remove({ id: 'boss_tools:steel_nugget_from_ingot' })
    e.remove({ id: 'boss_tools:compressing/compressed_steel' })

    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/steel/rod_sand_cast' })

    e.stonecutting('boss_tools:steel_block', 'alloyed:steel_block')
    e.stonecutting('alloyed:steel_block', 'boss_tools:steel_block')

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

    createCrushing('kubejs:steel_crushed', 'kubejs:steel_dust', 1, 3, false)
    createMilling('kubejs:steel_crushed', 'kubejs:steel_dust', 1, 3, false)

    createCrushing('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, 'kubejs:steel_dust')
    createMilling('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, false)

    // createMixingItem(input[], output, qte[], heated) 
    createMixingItem(['kubejs:steel_dust', 'kubejs:steel_dust'], 'alloyed:steel_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:steel_dust', 'kubejs:steel_dust'], 'alloyed:steel_ingot', [3, 3], 'superheated')

    createCutting('boss_tools:compressed_steel', 'kubejs:steel_gear', 5, 20, 'kubejs:steel_dust')
    createPress('kubejs:steel_gear', '2x kubejs:steel_fan')
    createCutting('alloyed:steel_sheet', 'kubejs:steel_stick', 6, 20, 'kubejs:steel_dust')
    createCutting('alloyed:steel_ingot', 'kubejs:steel_stick', 2, 20, 'kubejs:steel_dust')

    //COPPER
    e.remove({ id: 'tconstruct:common/materials/copper_nugget_from_ingot' })
    e.remove({ id: 'tconstruct:common/materials/copper_bloc_from_ingots' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/wire_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/rod_sand_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/copper/wire_sand_cast' })

    e.stonecutting('tconstruct:copper_block', 'create:copper_block')

    replaceIO('oreclumps:copper_ingot', 'create:copper_ingot')
    replaceIO('tconstruct:copper_ingot', 'create:copper_ingot')
    replaceIO('exnihilosequentia:ingot_copper', 'create:copper_ingot')
    replaceIO('exnihilosequentia:ingot_tin', 'oreclumps:tin_ingot')
    replaceIO('tconstruct:copper_nugget', 'create:copper_nugget')

    createCutting('createaddition:copper_rod', 'createaddition:copper_wire', 6, 20, 'kubejs:copper_dust')
    createCutting('create:copper_ingot', 'createaddition:copper_rod', 3, 20, 'kubejs:copper_dust')
    createCutting('create:copper_sheet', 'createaddition:copper_wire', 4, 10, 'kubejs:copper_dust')
    createCutting('create:copper_sheet', 'createaddition:copper_rod', 4, 10, 'kubejs:copper_dust')

    createMixingItem(['kubejs:copper_dust', 'kubejs:copper_dust'], 'create:copper_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:copper_dust', 'kubejs:copper_dust'], 'create:copper_ingot', [3, 3], 'superheated')

    //Uranium
    replaceIO('exnihilosequentia:ingot_uranium', 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot', 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot', 'biggerreactors:yellorium_ingot')

    createPress('biggerreactors:yellorium_ingot', 'kubejs:uranium_sheet')

    createCrushing('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)
    createMilling('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)

    createCrushing('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, 'biggerreactors:yellorium_dust')
    createMilling('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, false)

    //Lead  
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/wire_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/wire_sand_cast' })

    replaceIO('exnihilosequentia:ingot_lead', 'oreclumps:lead_ingot')
  
    createPress('biggerreactors:yellorium_ingot', 'kubejs:lead_sheet')

    createCutting('kubejs:lead_sheet', 'kubejs:lead_wire', 4, 10, 'kubejs:lead_dust')

    createCrushing('create:crushed_lead_ore', 'kubejs:lead_dust', 3, 2, false)
    createCrushing('oreclumps:lead_ingot', 'kubejs:lead_dust', 2, 2, 'kubejs:silver_dust')

    createMixingItem(['kubejs:lead_dust', 'kubejs:lead_dust'], 'oreclumps:lead_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:lead_dust', 'kubejs:lead_dust'], 'oreclumps:lead_ingot', [3, 3], 'superheated')

    //Aluminum
    e.remove({ id: 'tconstruct:smeltery/casting/metal/aluminum/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/aluminum/rod_sand_cast' })

    replaceIO('exnihilosequentia:ingot_aluminum', 'oreclumps:aluminum_ingot')

    createCutting('oreclumps:aluminum_ingot', 'kubejs:aluminum_stick', 3, 20, 'kubejs:aluminum_dust')
    createCutting('kubejs:aluminum_sheet'   , 'kubejs:aluminum_wire', 4, 10, 'kubejs:aluminum_dust')
    createCutting('kubejs:aluminum_sheet'   , 'kubejs:aluminum_stick', 4, 10, 'kubejs:aluminum_dust')

    createMixingItem(['kubejs:aluminum_dust', 'kubejs:aluminum_dust'], 'oreclumps:aluminum_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:aluminum_dust', 'kubejs:aluminum_dust'], 'oreclumps:aluminum_ingot', [3, 3], 'superheated')

    createPress('oreclumps:aluminum_ingot', 'kubejs:aluminum_sheet')

    //Silver
    replaceIO('exnihilosequentia:ingot_silver', 'oreclumps:silver_ingot')

    createMixingItem(['kubejs:silver_dust', 'kubejs:silver_dust'], 'oreclumps:silver_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:silver_dust', 'kubejs:silver_dust'], 'oreclumps:silver_ingot', [3, 3], 'superheated')

    createPress('oreclumps:silver_ingot', 'kubejs:silver_sheet')

    //Cobalt
    e.remove({ id: 'tconstruct:smeltery/casting/metal/cobalt/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/cobalt/ingot_sand_cast' })


    replaceIO('tconstruct:cobalt_ingot', 'oreclumps:cobalt_ingot')

    createMixingItem(['kubejs:cobalt_dust', 'kubejs:cobalt_dust'], 'oreclumps:cobalt_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:cobalt_dust', 'kubejs:cobalt_dust'], 'oreclumps:cobalt_ingot', [3, 3], 'superheated')

    createCrushing('morecreatestuffs:crushed_cobalt_ore', 'kubejs:cobalt_dust', 3, 2, false)
    createCrushing('oreclumps:silver_ingot', 'kubejs:cobalt_dust', 2, 2, 'kubejs:lead_dust')

    //Nickel
    replaceIO('exnihilosequentia:ingot_nickel', 'oreclumps:nickel_ingot')

    createMixingItem(['kubejs:nickel_dust', 'kubejs:nickel_dust'], 'oreclumps:nickel_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:nickel_dust', 'kubejs:nickel_dust'], 'oreclumps:nickel_ingot', [3, 3], 'superheated')

    createCrushing('oreclumps:nickel_ingot', 'kubejs:nickel_dust', 2, 2, 'kubejs:iron_dust')

    //iron
    createCrushing('minecraft:iron_ingot', 'kubejs:iron_dust', 2, 2, 'kubejs:nickel_dust')

    //Zinc
    e.remove({ id: 'createaddition:pressing/zinc_ingot' })

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
    e.remove({ id: 'boss_tools:iron_plate' })

    replaceIO('boss_tools:iron_plate', 'create:iron_sheet')

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
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silicon_bronze/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silicon_bronze/ingot_sand_cast' })
    e.remove({ id: 'tconstruct:common/materials/tinkers_bronze_block_from_ingots' })

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
    replaceIO('createaddition:diamond_grit', 'kubejs:diamond_dust')
    replaceIO('createaddition:copper_grit', 'kubejs:copper_dust')

    //Desh
    e.remove({ id: 'boss_tools:desh_plate' })
    e.remove({ id: 'boss_tools:compressed_desh' })
    e.remove({ id: 'boss_tools:compressing/compressed_desh' })

    createPress('boss_tools:desh_ingot', 'boss_tools:desh_plate')

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
    e.remove({ id: 'boss_tools:compressed_silicon' })
    e.remove({ id: 'boss_tools:compressing/compressed_silicon' })
    e.remove({ id: 'refinedstorage:silicon' })

    createPress('boss_tools:silicon_ingot', 'kubejs:silicon_sheet')

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


    //spaceboss tools
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

    //Cobble for days
    e.remove({ id: 'cobblefordays:tier_2' })
    e.remove({ id: 'cobblefordays:tier_3' })
    e.remove({ id: 'cobblefordays:tier_4' })
    e.remove({ id: 'cobblefordays:tier_5' })

    e.shaped('cobblefordays:tier_2', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:cobblestone',
        B: 'cobblefordays:tier_1'
    })

    e.shaped('cobblefordays:tier_3', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:ingots/iron',
        B: 'cobblefordays:tier_2'
    })

    e.shaped('cobblefordays:tier_4', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:ingots/gold',
        B: 'cobblefordays:tier_3'
    })

    e.shaped('cobblefordays:tier_5', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:gems/diamond',
        B: 'cobblefordays:tier_4'
    })

    e.remove({ id: 'create:crafting/kinetics/mechanical_press' })

    e.shaped('create:mechanical_press', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:cogwheels',
        C: 'create:andesite_casing',
        D: '#forge:storage_blocks/iron'
    })

    //PIPEZ
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