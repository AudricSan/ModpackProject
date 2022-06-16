events.listen('item.tags', function (e) {
    e.remove('forge:ingots/zinc', ['exnihilosequentia:ingot_zinc', 'oreclumps:zinc_ingot'])
    e.remove('forge:plates/zinc', 'createdeco:zinc_sheet')
})