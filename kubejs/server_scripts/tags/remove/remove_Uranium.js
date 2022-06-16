events.listen('item.tags', function (e) {
    e.remove('forge:ingots/uranium', ['exnihilosequentia:ingot_uranium', 'oreclumps:uranium_ingot'])
    e.remove('forge:nuggets/uranium', [])
    e.remove('forge:plates/uranium', [])
    e.remove('forge:dusts/uranium', [])
})