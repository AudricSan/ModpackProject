// REMOVE
onEvent('recipes', e => {
    //pipe
    e.remove({id: 'pipez:energy_pipe'})
    e.remove({id: 'pipez:item_pipe'})
    e.remove({id: 'pipez:fluid_pipe'})
    e.remove({id: 'pipez:gaz_pipe'})
    e.remove({id: 'pipez:universal_pipe'})

    e.recipes.createMechanicalCrafting('pipez:energy_pipe', [
        'AAAA',
        'ABCA',
        'AAAA'
    ], {
        A: '#forge:plates/iron',
        B: '#forge:storage_blocks/redstone',
        C: '#forge:dusts/redstone'
    })
    
    e.recipes.createMechanicalCrafting('pipez:fluid_pipe', [
        'AAAA',
        'ABCA',
        'AAAA'
    ], {
        A: '#forge:plates/copper',
        B: 'create:fluid_tank',
        C: '#forge:dusts/redstone'
    })
    
    e.recipes.createMechanicalCrafting('pipez:item_pipe', [
        'AAAA',
        'ABCA',
        'AAAA'
    ], {
        A: '#forge:plates/iron',
        B: 'minecraft:dropper',
        C: '#forge:dusts/redstone',
    })
    
    e.recipes.createMechanicalCrafting('pipez:universal_pipe', [
        'AAAAAAA',
        'ABBBBBA',
        'ABCCCBA',
        'ABCCCBA',
        'ABCCCBA',
        'ABBBBBA',
        'AAAAAAA'
    ], {
        A: 'pipez:item_pipe',
        B: 'pipez:fluid_pipe',
        C: 'pipez:energy_pipe',
    })

    //upgrade
    e.remove({id: 'pipez:basic_upgrade'})
    e.remove({id: 'pipez:improved_upgrade'})
    e.remove({id: 'pipez:advanced_upgrade'})
    e.remove({id: 'pipez:ultimate_upgrade'})

    e.recipes.createMechanicalCrafting('pipez:basic_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:iron_sheet',
        B: 'minecraft:iron_nugget',
        C: 'minecraft:redstone',
    })
    
    e.recipes.createMechanicalCrafting('pipez:improved_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:golden_sheet',
        B: 'minecraft:redstone',
        C: 'pipez:basic_upgrade',
    })
    
    e.recipes.createMechanicalCrafting('pipez:advanced_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:diamond',
        B: 'minecraft:redstone_block',
        C: 'pipez:improved_upgrade',
    })
    
    e.recipes.createMechanicalCrafting('pipez:ultimate_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:netherite_ingot',
        B: 'minecraft:redstone_block',
        C: 'pipez:advanced_upgrade',
    })
    
    e.recipes.createMechanicalCrafting('pipez:infinity_upgrade', [
        'AAAAAAA',
        'ABBBBBA',
        'ABCCCBA',
        'ABCDCBA',
        'ABCCCBA',
        'ABBBBBA',
        'AAAAAAA'
    ], {
        A: 'pipez:basic_upgrade',
        B: 'pipez:improved_upgrade',
        C: 'pipez:advanced_upgrade',
        D: 'pipez:ultimate_upgrade'
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