// REMOVE
onEvent('recipes', e => {
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