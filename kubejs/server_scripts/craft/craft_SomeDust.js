// REMOVE
onEvent('recipes', e => {
    // @collapse

    replaceIO('createaddition:diamond_grit', 'kubejs:diamond_dust')
    replaceIO('createaddition:copper_grit', 'kubejs:copper_dust')

    function replaceIO(oldItem, newItem) {
        e.replaceInput({}, oldItem, newItem);
        e.replaceOutput({}, oldItem, newItem);
    }
})