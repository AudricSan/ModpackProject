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

    // CREATE
    // STEEL
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
    createMilling ('alloyed:steel_ingot', 'kubejs:steel_crushed', 1, 3, false)

	// createMixingItem(input[], output, qte[], heated) 
    createMixingItem(['kubejs:steel_dust','kubejs:steel_dust'], 'alloyed:steel_ingot', [6,3], 'heated')
    createMixingItem(['kubejs:steel_dust','kubejs:steel_dust'], 'alloyed:steel_ingot', [3,3], 'superheated')

    createCutting('boss_tools:compressed_steel', 'kubejs:steel_gear', 5, 20, 'kubejs:steel_dust')
    createPress('kubejs:steel_gear', '2x kubejs:steel_fan')
    createCutting('alloyed:steel_sheet', 'immersiveengineering:stick_steel', 6, 20, 'kubejs:steel_dust')
    createCutting('alloyed:steel_ingot', 'immersiveengineering:stick_steel', 2, 20, 'kubejs:steel_dust')

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