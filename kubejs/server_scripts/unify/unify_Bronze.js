// REMOVE

onEvent('recipes', e => {
    // @collapse
    
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silicon_bronze/ingot_gold_cast' })
    e.remove({ id: 'tconstruct:smeltery/casting/metal/silicon_bronze/ingot_sand_cast' })
    e.remove({ id: 'tconstruct:common/materials/tinkers_bronze_block_from_ingots' })

    replaceIO('tconstruct:tinkers_bronze_ingot', 'alloyed:bronze_ingot')
    replaceIO('steampowered:bronze_sheet', 'alloyed:bronze_sheet')

    e.stonecutting('tconstruct:tinkers_bronze_block', 'alloyed:bronze_block')

    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
    }
})