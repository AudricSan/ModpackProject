events.listen('item.tags', function (e) {
    //GLOBALS
    // e.remove('forge:sticks'                  , [''])
    // e.remove('forge:rods'                    , [''])
    e.remove('forge:ingots'                  , ['immersiveengineering:ingot_lead', 'exnihilosequentia:ingot_lead', 'immersiveengineering:plate_uranium', 'boss_tools:steel_ingot', 'immersiveengineering:ingot_steel', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper', 'immersiveengineering:ingot_uranium', 'exnihilosequentia:ingot_uranium', 'oreclumps:uranium_ingot'])  
    e.remove('forge:dusts'                   , ['immersiveengineering:dust_aluminum', 'immersiveengineering:dust_lead', 'immersiveengineering:dust_uranium', 'immersiveengineering:dust_steel'])                                                     
    e.remove('forge:plates'                  , ['immersiveengineering:plate_aluminum', 'immersiveengineering:plate_uranium', 'immersiveengineering:plate_steel', 'immersiveengineering:plate_copper'])                                                 
    e.remove('minecraft:beacon_payment_items', ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])                  
    e.remove('forge:beconpayment'            , ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper'])      
    e.remove('forge:nuggets'                 , ['immersiveengineering:nugget_steel','boss_tools:steel_nugget', 'immersiveengineering:nugget_copper', 'tconstruct:copper_nugget', 'immersiveengineering:nugget_uranium'])

    e.add('forge:nuggets'                 , ['kubejs:steel_nugget', 'kubejs:uranium_nugget'])
    e.add('create:crushed_ores'           , ['kubejs:steel_crushed'])
    e.add('forge:gears'                   , ['kubejs:steel_gear'])
    e.add('forge:rods'                    , ['immersiveengineering:stick_steel'])
    e.add('forge:sticks'                  , ['immersiveengineering:stick_steel'])
    e.add('forge:beconpayment'            , ['create:copper_ingot'])      
    e.add('minecraft:beacon_payment_items', ['create:copper_ingot'])                  
    e.add('forge:ingots'                  , ['kubejs:lead_dust'])  
    // e.add('forge:dusts'                   , [])                                                     
    e.add('forge:plates'                  , ['kubejs:uranium_sheet', 'kubejs:aluminum_sheet'])                                                 

    //Steel
    e.remove('forge:ingots/steel'            , ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel'])
    e.remove('forge:dusts/steel'             , ['immersiveengineering:dust_steel'])                         
    e.remove('forge:plates/steel'            , ['immersiveengineering:plate_steel'])                         
    e.remove('forge:nuggets/steel'           , ['immersiveengineering:nugget_steel', 'boss_tools:steel_nugget'])
    
    e.add('forge:gears/steel'   , 'kubejs:steel_gear')
    e.add('forge:nuggets/steel' , 'kubejs:steel_nugget')
    e.add('forge:rods/all_metal', 'immersiveengineering:stick_steel')
    e.add('forge:rods/steel'    , 'immersiveengineering:stick_steel')
    e.add('forge:sticks/steel'  , 'immersiveengineering:stick_steel')

    //Copper
    e.remove('forge:ingots/copper', ['immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'tconstruct:copper_ingot', 'exnihilosequentia:ingot_copper' ])
    e.remove('forge:nuggets/copper', ['immersiveengineering:nugget_copper', 'tconstruct:copper_nugget'])
    e.remove('forge:plates/copper', ['immersiveengineering:plate_copper'])

    //Uranium
    e.remove('forge:ingots/uranium', ['immersiveengineering:ingot_uranium', 'exnihilosequentia:ingot_uranium', 'oreclumps:uranium_ingot'])
    e.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium')
    e.remove('forge:plates/uranium', 'immersiveengineering:plate_uranium')

    e.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium')

    e.add('forge:nuggets/uranium', 'kubejs:uranium_nugget')
    e.add('forge:plates/uranium', 'kubejs:uranium_sheet')  

    //Lead
    e.remove('forge:ingots/lead', ['immersiveengineering:ingot_lead', 'exnihilosequentia:ingot_lead'])

    e.remove('forge:dusts/lead', 'immersiveengineering:dust_lead')

    e.add('forge:dusts/lead', 'kubejs:lead_dust')

    //Aluminum
    e.remove('forge:ingots/aluminum', ['immersiveengineering:ingot_aluminum', 'exnihilosequentia:ingot_aluminum'])
    e.remove('forge:plates/aluminum', 'immersiveengineering:plate_aluminum')
    e.remove('forge:dusts/aluminum', 'immersiveengineering:dust_aluminum')

    e.add('forge:/aluminum', 'kubejs:aluminum_dust')
    e.add('forge:plates/aluminum', 'kubejs:aluminum_sheet')
})