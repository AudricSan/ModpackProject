events.listen('item.tags', function (e) {
    e.remove('forge:ingots/gold', [])
    e.remove('forge:dusts/gold', [])
})