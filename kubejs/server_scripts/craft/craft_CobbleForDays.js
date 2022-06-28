onEvent('recipes', e => {
    // @collapse

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
})