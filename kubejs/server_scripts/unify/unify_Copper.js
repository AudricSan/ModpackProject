// REMOVE
onEvent('recipes', e => {
    // @collapse

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


    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
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
})