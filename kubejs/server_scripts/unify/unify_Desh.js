// REMOVE
onEvent('recipes', e => {
    e.remove({ id: 'boss_tools:desh_plate' })
    e.remove({ id: 'boss_tools:compressed_desh' })
    e.remove({ id: 'boss_tools:compressing/compressed_desh' })

    createPress('boss_tools:desh_ingot', 'boss_tools:desh_plate')

    e.recipes.createSequencedAssembly([
        Item.of('boss_tools:compressed_desh').withChance(32.0),
        Item.of('kubejs:desh_dust').withChance(2.0),
    ], 'boss_tools:desh_plate', [
        e.recipes.createPressing('kubejs:desh_sequenced_compressed_plate', 'kubejs:desh_sequenced_compressed_plate'),
    ]).transitionalItem('kubejs:desh_sequenced_compressed_plate').loops(6)

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