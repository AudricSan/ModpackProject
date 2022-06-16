// REMOVE
onEvent('recipes', e => {
    //Cobble for days
    e.remove({ id: 'cobblefordays:tier_2' })
    e.remove({ id: 'cobblefordays:tier_3' })
    e.remove({ id: 'cobblefordays:tier_4' })
    e.remove({ id: 'cobblefordays:tier_5' })

    e.shaped('cobblefordays:tier_2', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:cobblestone',
        B: 'cobblefordays:tier_1'
    })

    e.shaped('cobblefordays:tier_3', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:ingots/iron',
        B: 'cobblefordays:tier_2'
    })

    e.shaped('cobblefordays:tier_4', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:ingots/gold',
        B: 'cobblefordays:tier_3'
    })

    e.shaped('cobblefordays:tier_5', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#forge:gems/diamond',
        B: 'cobblefordays:tier_4'
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