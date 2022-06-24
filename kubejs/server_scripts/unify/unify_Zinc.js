// REMOVE
onEvent('recipes', e => {
    // @collapse

    e.remove({ id: 'createaddition:pressing/zinc_ingot' })

    replaceIO('createaddition:zinc_sheet', 'createdeco:zinc_sheet')
    replaceIO('oreclumps:zinc_ingot', 'create:zinc_ingot')
    replaceIO('exnihilosequentia:ingot_zinc', 'create:zinc_ingot')

    createCrushing('create:zinc_ingot', 'kubejs:zinc_dust', 2, 1, 'kubejs:iron_dust')
    createCrushing('create:crushed_zinc_ore', 'kubejs:zinc_dust', 4, 2, 'kubejs:zinc_dust')

    createMixingItem(['kubejs:zinc_dust', 'kubejs:zinc_dust'], 'oreclumps:zinc_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:zinc_dust', 'kubejs:zinc_dust'], 'oreclumps:zinc_ingot', [3, 3], 'superheated')


    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
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