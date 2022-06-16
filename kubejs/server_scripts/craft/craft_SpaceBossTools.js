// REMOVE
onEvent('recipes', e => {
    // EDIT STATION STRUCTURE IN Data folder
    e.remove({id: 'boss_tools:blast_furnace'})
    e.remove({id: 'boss_tools_giselle_addon:crafting/electric_blast_furnace_from_boss_tools'})
    e.remove({id: 'boss_tools_giselle_addon:crafting/electric_blast_furnace_from_minecraft'})

    e.shaped('boss_tools_giselle_addon:electric_blast_furnace', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: '#forge:ingots/steel',
        B: 'minecraft:blast_furnace',
        C: '#forge:dusts/redstone'
    })

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