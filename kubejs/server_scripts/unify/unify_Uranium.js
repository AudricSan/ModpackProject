// REMOVE
onEvent('recipes', e => {
    // @collapse

    replaceIO('exnihilosequentia:ingot_uranium', 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot', 'biggerreactors:yellorium_ingot')
    replaceIO('oreclumps:uranium_ingot', 'biggerreactors:yellorium_ingot')

    createPress('biggerreactors:yellorium_ingot', 'kubejs:uranium_sheet')

    createCrushing('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)
    createMilling('create:crushed_uranium_ore', 'biggerreactors:yellorium_dust', 1, 3, false)

    createCrushing('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, 'biggerreactors:yellorium_dust')
    createMilling('biggerreactors:yellorium_ingot', 'create:crushed_uranium_ore', 1, 3, false)


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
})