events.listen('item.tags', function (e) {
    //Aluminum
    e.remove('forge:ingots/aluminum', ['exnihilosequentia:ingot_aluminum'])
    e.remove('forge:plates/aluminum', [])
    e.remove('forge:dusts/aluminum', [])
})