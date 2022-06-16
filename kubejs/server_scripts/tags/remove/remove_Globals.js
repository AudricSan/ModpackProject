events.listen('item.tags', function (e) {
    //GLOBALS
    e.remove('forge:ingots'                     , ['exnihilosequentia:ingot_zinc', 'oreclumps:zinc_ingot', 'exnihilosequentia:ingot_nickel', 'exnihilosequentia:ingot_silver', 'exnihilosequentia:ingot_lead', 'boss_tools:steel_ingot', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper', 'exnihilosequentia:ingot_uranium', 'oreclumps:uranium_ingot'])
    e.remove('forge:dusts'                      , ['createaddition:diamond_grit'])
    e.remove('forge:plates'                     , ['boss_tools:iron_plate', 'createdeco:zinc_sheet',])
    e.remove('minecraft:beacon_payment_items'   , ['boss_tools:steel_ingot', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])
    e.remove('forge:beconpayment'               , ['boss_tools:steel_ingot', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])
    e.remove('forge:nuggets'                    , ['boss_tools:steel_nugget', 'tconstruct:copper_nugget',])
    // e.remove('forge:sticks'                  , [''])
    // e.remove('forge:rods'                    , [''])
})