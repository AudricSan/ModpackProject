// REMOVE
onEvent('recipes', e => {
    // @collapse

    e.remove({ id: 'tconstruct:smeltery/casting/metal/cobalt/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/cobalt/ingot_sand_cast' })

    replaceIO('tconstruct:cobalt_ingot', 'oreclumps:cobalt_ingot')

    createMixingItem(['kubejs:cobalt_dust', 'kubejs:cobalt_dust'], 'oreclumps:cobalt_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:cobalt_dust', 'kubejs:cobalt_dust'], 'oreclumps:cobalt_ingot', [3, 3], 'superheated')

    createCrushing('morecreatestuffs:crushed_cobalt_ore', 'kubejs:cobalt_dust', 3, 2, false)
    createCrushing('oreclumps:silver_ingot', 'kubejs:cobalt_dust', 2, 2, 'kubejs:lead_dust')

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