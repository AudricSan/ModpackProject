events.listen('item.tags', function (e) {
    e.remove('forge:ingots/steel', ['boss_tools:steel_ingot',])
    e.remove('forge:dusts/steel', [])
    e.remove('forge:plates/steel', [])
    e.remove('forge:nuggets/steel', ['boss_tools:steel_nugget'])
})