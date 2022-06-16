events.listen('item.tags', function (e) {
    e.remove('forge:ingots/iron', ['boss_tools:iron_plate',])
    e.remove('forge:rods/iron', [])
    e.remove('forge/dusts/iron', [])
})