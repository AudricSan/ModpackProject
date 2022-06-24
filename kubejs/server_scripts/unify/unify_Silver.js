// REMOVE
onEvent('recipes', e => {
    // @collapse

    replaceIO('exnihilosequentia:ingot_silver', 'oreclumps:silver_ingot')

    createMixingItem(['kubejs:silver_dust', 'kubejs:silver_dust'], 'oreclumps:silver_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:silver_dust', 'kubejs:silver_dust'], 'oreclumps:silver_ingot', [3, 3], 'superheated')

    createPress('oreclumps:silver_ingot', 'kubejs:silver_sheet')

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