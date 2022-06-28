onEvent('recipes', e => {
    // @collapse

    e.replaceInput({ mod: 'botanypotstiers' }, 'minecraft:hopper', 'create:chute')
    e.replaceInput({ mod: 'botanypots' }, 'minecraft:hopper', 'create:chute')
    e.replaceInput({ mod: 'botanypots' }, 'minecraft:enchanted_golden_apple', 'createsupercharged:creative_mechanism')
    e.replaceInput({ mod: 'botanypotstiers' }, 'minecraft:enchanted_golden_apple', 'createsupercharged:creative_mechanism')

    e.recipes.createMechanicalCrafting('create:creative_crate', [
        'XAYAX',
        'AAPAA',
        'APSPA',
        'AAPAA',
        'XAIAX'
    ], {
        A: 'minecraft:netherite_ingot',
        S: 'createsupercharged:creative_mechanism',
        X: 'refinedstorage:creative_storage_disk',
        I: 'minecraft:barrel',
        Y: 'create:adjustable_crate',
        P: 'createsupercharged:shadow_shell'
    })
    
    e.recipes.createMechanicalCrafting('create:creative_fluid_tank', [
        'XAYAX',
        'AAPAA',
        'APSPA',
        'AAPAA',
        'XAIAX'
    ], {
        A: 'minecraft:netherite_ingot',
        S: 'createsupercharged:creative_mechanism',
        X: 'refinedstorage:creative_storage_disk',
        I: 'create:portable_fluid_interface',
        Y: 'create:fluid_tank',
        P: 'createsupercharged:shadow_shell'
    })
        
    e.recipes.createMechanicalCrafting('refinedstorage:creative_storage_disk',[
        'ABA',
        'BCB',
        'DED',
    ], {
        A: '#forge:glass',
        B: 'createsupercharged:shadow_shell',
        C: 'extradisks:infinite_storage_disk',
        D: 'refinedstorage:improved_processor',
        E: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_fluid_storage_disk',[
        'ABA',
        'BCB',
        'DED',
    ], {
        A: '#forge:glass',
        B: 'createsupercharged:shadow_shell',
        C: 'extradisks:infinite_fluid_storage_disk',
        D: 'refinedstorage:improved_processor',
        E: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_storage_block',[
        'ABA',
        'BCB',
        'DED',
    ], {
        A: 'extradisks:advanced_machine_casing',
        B: 'createsupercharged:shadow_shell',
        C: 'extradisks:infinite_storage_block',
        D: 'refinedstorage:improved_processor',
        E: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_fluid_storage_block',[
        'ABA',
        'BCB',
        'DED',
    ], {
        A: 'extradisks:advanced_machine_casing',
        B: 'createsupercharged:shadow_shell',
        C: 'extradisks:infinite_fluid_storage_block',
        D: 'refinedstorage:improved_processor',
        E: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_portable_grid',[
        'ABA',
        'ACA',
        'ADA',
    ], {
        A: 'createsupercharged:shadow_shell',
        B: '#refinedstorage:grid',
        C: 'refinedstorage:creative_controller',
        D: 'refinedstorage:fluid_grid',
    }) 
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_wireless_grid',[
        'ABA',
        'ACA',
        'ADA',
    ], {
        A: 'createsupercharged:shadow_shell',
        B: 'minecraft:ender_pearl',
        C: '#refinedstorage:grid',
        D: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_wireless_fluid_grid',[
        'ABA',
        'ACA',
        'ADA',
    ], {
        A: 'createsupercharged:shadow_shell',
        B: 'minecraft:ender_pearl',
        C: '#refinedstorage:fluid_grid',
        D: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorageaddons:creative_wireless_crafting_grid',[
        'ABA',
        'ACA',
        'ADA',
    ], {
        A: 'createsupercharged:shadow_shell',
        B: 'minecraft:ender_pearl',
        C: '#refinedstorage:crafting_grid',
        D: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_wireless_crafting_monitor',[
        'ABA',
        'ACA',
        'ADA',
    ], {
        A: 'createsupercharged:shadow_shell',
        B: 'minecraft:ender_pearl',
        C: '#refinedstorage:crafting_monitor',
        D: 'createsupercharged:creative_mechanism',
    })
    
    e.recipes.createMechanicalCrafting('refinedstorage:creative_controller',[
        'EPE',
        'SMS',
        'ESE'
    ], {
        E: 'createsupercharged:shadow_shell',
        P: 'createsupercharged:creative_mechanism',
        S: '#refinedstorage:silicon',
        M: 'extradisks:advanced_machine_casing'
    })
    
    e.recipes.createMechanicalCrafting('rftoolspower:dimensionalcell_creative',[
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'createsupercharged:shadow_shell',
        B: 'createsupercharged:creative_mechanism',
        C: 'rftoolspower:dimensionalcell_advanced',
    })

    e.shaped('rftoolspower:dimensionalcell_advanced', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:redstone_block',
        B: 'rftoolsbase:infused_diamond',
        C: 'rftoolspower:dimensionalcell_simple',
    })
    
})