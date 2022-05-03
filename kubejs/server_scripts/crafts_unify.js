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

    createPress  ('alloyed:steel_sheet', 'boss_tools:compressed_steel')
    createCutting('alloyed:steel_sheet'   , 'kubejs:steel_gear', 4, 20, 'kubejs:steel_dust')
    createCutting('alloyed:steel_sheet'   , 'kubejs:steel_fan',  4, 20, 'kubejs:steel_dust')

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
})