events.listen('item.tags', function (e) {
    //GLOBALS
    // e.remove('forge:sticks'                  , [''])
    // e.remove('forge:rods'                    , [''])
    e.remove('forge:ingots'                  , ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel'])  
    e.remove('forge:dusts'                   , ['immersiveengineering:dust_steel'])                                                     
    e.remove('forge:plates'                  , ['immersiveengineering:plate_steel'])                                                 
    e.remove('minecraft:beacon_payment_items', ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel',])                  
    e.remove('forge:beconpayment'            , ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel',])      
    
    //Steel
    e.remove('forge:ingots/steel'            , ['boss_tools:steel_ingot', 'immersiveengineering:ingot_steel'])
    e.remove('forge:dusts/steel'             , ['immersiveengineering:dust_steel'])                         
    e.remove('forge:plates/steel'            , ['immersiveengineering:plate_steel'])                         
   
    e.remove('forge:nuggets'                 , ['immersiveengineering:nugget_steel','boss_tools:steel_nugget'])
    e.remove('forge:nuggets/steel'           , ['immersiveengineering:nugget_steel', 'boss_tools:steel_nugget'])
    
    e.add('forge:gears/steel'   , 'kubejs:steel_gear')
    e.add('forge:gears'         , 'kubejs:steel_gear')

    e.add('forge:nuggets/steel' , 'kubejs:steel_nugget')
    e.add('forge:nuggets'       , 'kubejs:steel_nugget')

    e.add('create:crushed_ores' ,'kubejs:steel_crushed')

    e.add('forge:rods/all_metal', 'immersiveengineering:stick_steel')
    e.add('forge:rods/steel'    , 'immersiveengineering:stick_steel')
    e.add('forge:rods'          , 'immersiveengineering:stick_steel')
    e.add('forge:sticks'        , 'immersiveengineering:stick_steel')
    e.add('forge:sticks/steel'  , 'immersiveengineering:stick_steel')
})