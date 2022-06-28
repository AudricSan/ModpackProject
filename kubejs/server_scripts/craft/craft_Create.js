onEvent('recipes', e => {
    // @collapse

    e.remove({ id: 'create:crafting/kinetics/mechanical_press' })

    e.shaped('create:mechanical_press', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:andesite_alloy',
        B: '#forge:cogwheels',
        C: 'create:andesite_casing',
        D: '#forge:storage_blocks/iron'
    })


})