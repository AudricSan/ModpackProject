events.listen('item.tags', function (e) {
    e.remove('forge:ingots/copper', ['oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])
    e.remove('forge:nuggets/copper', ['tconstruct:copper_nugget'])
    e.remove('forge:plates/copper', [])
})