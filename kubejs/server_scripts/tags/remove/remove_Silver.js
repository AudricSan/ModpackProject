events.listen('item.tags', function (e) {
    e.remove('forge:plates/silver', [])
    e.remove('forge:dusts/silver', [])
    e.remove('forge:ingots/silver', ['exnihilosequentia:ingot_silver'])
})