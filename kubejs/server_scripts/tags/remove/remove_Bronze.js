events.listen('item.tags', function (e) {
    e.remove('forge:ingots/bronze', 'tconstruct:tinkers_bronze_ingot')
    e.remove('forge:plates/bronze', 'steampowered:bronze_sheet')
})