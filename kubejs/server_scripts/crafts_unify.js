// REMOVE
onEvent('recipes', e => {
    //Steel
    e.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_storage_steel' })
    e.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_nugget_steel' })

    e.remove({ id: 'immersiveengineering:crafting/plate_steel_hammering' })

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

    // FUNCTION //
    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
    }

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
    e.remove( { id: 'immersiveengineering:metalpress/plate_uranium'})
    e.remove( { id: 'immersiveengineering:crafting/plate_uranium_hammering'})
    e.remove( { id: 'immersiveengineering:crafting/plate_uranium_hammering'})

    e.remove( { id: 'immersiveengineering:crafting/hammercrushing_uranium'})

    e.remove( { id: 'immersiveengineering:crusher/ore_uranium'})
    e.remove( { id: 'immersiveengineering:crusher/ingot_uranium'})

    e.remove( { id: 'immersiveengineering:crafting/ingot_uranium_to_storage_uranium'})

    replaceIO('immersiveengineering:ingot_uranium'  , 'biggerreactors:yellorium_ingot')
    replaceIO('exnihilosequentia:ingot_uranium'     , 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot'             , 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot'             , 'biggerreactors:yellorium_ingot')

    replaceIO('immersiveengineering:nugget_uranium' , 'kubejs:uranium_nugget')
    replaceIO('immersiveengineering:plate_uranium'  , 'kubejs:uranium_sheet')

    createPress('biggerreactors:yellorium_ingot', 'kubejs:uranium_sheet')

    createCrushing('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)
    createMilling ('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)

    createCrushing('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, 'biggerreactors:yellorium_dust')
    createMilling ('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, false)

    e.stonecutting('immersiveengineering:storage_uranium', 'biggerreactors:yellorium_block')

    //Lead  
    replaceIO('immersiveengineering:ingot_lead' , 'oreclumps:lead_ingot')
    replaceIO('exnihilosequentia:ingot_lead'    , 'oreclumps:lead_ingot')
    replaceIO('immersiveengineering:dust_lead'  , 'kubejs:lead_dust')
    replaceIO('immersiveengineering:plate_lead' , 'kubejs:lead_sheet')

    createPress('biggerreactors:yellorium_ingot', 'kubejs:lead_sheet')

























































































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