// REMOVE
onEvent('recipes', e => {
    // @collapse

    createPress('5x excompressum:wood_chippings', 'minecraft:stripped_oak_log')

    e.shapeless('minecraft:stripped_oak_log', ['9x excompressum:wood_chippings'])

    e.stonecutting('minecraft:oak_planks', '#minecraft:planks')
    e.stonecutting('minecraft:oak_button', '#minecraft:wooden_buttons')
    
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
})