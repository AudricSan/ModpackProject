events.listen('item.tags', function (e) {
    e.remove('forge:ingots/nickel', ['exnihilosequentia:ingot_nickel',])
    e.remove('forge:dusts/nickel', [])
    e.remove('forge:plates/nickel', [])
})