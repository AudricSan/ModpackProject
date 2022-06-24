// REMOVE
onEvent('recipes', e => {  
    // @collapse

    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/wire_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/lead/wire_sand_cast' })

    replaceIO('exnihilosequentia:ingot_lead', 'oreclumps:lead_ingot')
  
    createPress('biggerreactors:yellorium_ingot', 'kubejs:lead_sheet')

    createCutting('kubejs:lead_sheet', 'kubejs:lead_wire', 4, 10, 'kubejs:lead_dust')

    createCrushing('create:crushed_lead_ore', 'kubejs:lead_dust', 3, 2, false)
    createCrushing('oreclumps:lead_ingot', 'kubejs:lead_dust', 2, 2, 'kubejs:silver_dust')

    createMixingItem(['kubejs:lead_dust', 'kubejs:lead_dust'], 'oreclumps:lead_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:lead_dust', 'kubejs:lead_dust'], 'oreclumps:lead_ingot', [3, 3], 'superheated')

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