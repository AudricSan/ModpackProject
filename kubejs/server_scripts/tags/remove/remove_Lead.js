events.listen('item.tags', function (e) {
    e.remove('forge:ingots/lead', ['exnihilosequentia:ingot_lead'])
    e.remove('forge:dusts/lead', [])
})