// REMOVE
onEvent('recipes', e => {
    // @collapse

    createCrushing('minecraft:iron_ingot', 'kubejs:iron_dust', 2, 2, 'kubejs:nickel_dust')

    e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/iron/rod_sand_cast' })
    e.remove({ id: 'boss_tools:iron_plate' })

    replaceIO('boss_tools:iron_plate', 'create:iron_sheet')

    createCrushing('minecraft:iron_block', 'create:crushed_iron_ore', 4, 2, 'kubejs:iron_dust')
    createCrushing('create:crushed_iron_ore', 'kubejs:iron_dust', 4, 2, 'kubejs:iron_dust')

    createMixingItem(['kubejs:iron_dust', 'kubejs:iron_dust'], 'minecraft:iron_ingot', [6, 3], 'heated')
    createMixingItem(['kubejs:iron_dust', 'kubejs:iron_dust'], 'minecraft:iron_ingot', [3, 3], 'superheated')
    createMixingItem(['minecraft:iron_block', 'minecraft:coal_block'], 'alloyed:steel_block', [1, 2], 'superheated')

    createCutting('createaddition:iron_rod', 'createaddition:iron_wire', 6, 20, 'kubejs:iron_dust')
    createCutting('minecraft:iron_ingot', 'createaddition:iron_rod', 3, 20, 'kubejs:iron_dust')
    createCutting('create:iron_sheet', 'createaddition:iron_wire', 4, 10, 'kubejs:iron_dust')
    createCutting('create:iron_sheet', 'createaddition:iron_rod', 4, 10, 'kubejs:iron_dust')

    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
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