onEvent('recipes', e => {
    // @collapse

    // EDIT STATION STRUCTURE IN Data folder
    e.remove({id: 'boss_tools:blast_furnace'})
    e.remove({id: 'boss_tools_giselle_addon:crafting/electric_blast_furnace_from_boss_tools'})
    
    e.remove({id: 'boss_tools:nasa_workbench'})
    e.shaped('boss_tools:nasa_workbench', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'boss_tools:compressed_steel',
        B: 'refinedstorage:crafting_monitor',
        C: 'create:hand_crank',
        D: 'alloyed:steel_ingot',
        E: 'createaddition:tesla_coil',
    })

    e.replaceInput({id: 'boss_tools:water_pump'}, 'minecraft:hopper', 'create:chute')

    e.remove({id: 'boss_tools:solar_panel'})
    e.shaped('boss_tools:solar_panel', [
        'AAA',
        'BCB',
        'EDE'
    ], {
        A: 'biggerreactors:reactor_glass',
        B: 'alloyed:steel_ingot',
        C: 'biggerreactors:reactor_computer_port',
        D: 'biggerreactors:reactor_power_tap',
        E: 'create:iron_sheet'
    })

    e.remove({id: 'boss_tools:iron_stick'})
    e.remove({id: 'boss_tools_giselle_addon:extruding/iron_stick'})

    e.replaceInput('boss_tools:iron_stick', 'createaddition:iron_rod')
    e.replaceOutput('boss_tools:iron_stick', 'createaddition:iron_rod')

    e.remove({id: 'boss_tools:engine_fan'})
    createPress('kubejs:steel_gear', '2x boss_tools:engine_fan')

    function createPress(input, output) {
        e.custom({
            "type": "create:pressing",
    
            "ingredients": [
                { "item": input }
            ],
    
            "results": [
                { "item": output }
            ]
        })
    }

})