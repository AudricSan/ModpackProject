events.listen('item.registry', function (e) {
    // My elements
    e.create('craunium_ingot')  .displayName('Craunium Ingot')
    e.create('craunium_nugget') .displayName('Craunium Nugget')
    e.create('craunium_sheet')  .displayName('Craunium Sheet')
    e.create('craunium_crushed').displayName('Crusshed Craunium')
    e.create('craunium_raw')    .displayName('Raw Craunium')
    e.create('craunium_crystal').displayName('Craunium Crystal')
    e.create('craunium_dust')   .displayName('Craunium Dust')
    e.create('craunium_gear')   .displayName('Craunium Gear')

    // New Raw
    e.create('iridium_raw').displayName('Raw Iridium')

	// Gear
    e.create('steel_gear').displayName('Steel Gear')

	// New Nugget
    e.create('steel_nugget').displayName('Steel Nugget')
    e.create('uranium_nugget').displayName('Uranium Nugget')

	// New Fan
    e.create('steel_fan').displayName('Steel Fan')

	// New Crushed
    e.create('steel_crushed')			.displayName('Crushed Steel')

    // New Dust
    e.create('gold_dust')              .displayName('Gold Dust')
	e.create('tin_dust')               .displayName('Tin Dust')
	e.create('copper_dust')            .displayName('Copper Dust')
	e.create('silicon_dust')           .displayName('Silicon Dust')
	e.create('desh_dust')              .displayName('Desh Dust')
	e.create('iridium_dust')           .displayName('Iridium Dust')
	e.create('steel_dust')             .displayName('Steel Dust')
	e.create('titanium_dust')          .displayName('Titanium Dust')
	e.create('aluminum_dust')          .displayName('Aluminum Dust')
	e.create('dilithium_dust')         .displayName('Dilithium Dust')
	e.create('iron_dust')              .displayName('Iron Dust')
    e.create('diamond_dust')           .displayName('Diamond Dust')
    e.create('titanium_iridium_dust')  .displayName('Titanium Iridium Dust')
	e.create('titanium_aluminide_dust').displayName('Titanium Aluminide Dust')
	e.create('obsidian_dust')          .displayName('Obsidian Dust')
	e.create('hop_graphite_dust')      .displayName('HOP Graphite Dust')
	e.create('sulfur_dust')            .displayName('Sulfur Dust')
	e.create('electrum_dust')          .displayName('Electrum Dust')
	e.create('constantan_dust')        .displayName('Constantan Dust')
	e.create('nickel_dust')            .displayName('Nickel Dust')
	e.create('silver_dust')            .displayName('Silver Dust')
	e.create('lead_dust')              .displayName('Lead Dust')
	e.create('cobalt_dust')            .displayName('Cobalt Dust')
    e.create('platinum_dust')          .displayName('Platinium Dust')
    e.create('osmium_dust')            .displayName('Osmium Dust')
    e.create('brass_dust')             .displayName('Brass Dust')
    e.create('zinc_dust')              .displayName('Zinc Dust')
    e.create('tungsten_dust')          .displayName('Tungsten Dust')
    e.create('mythril_dust')           .displayName('Mythril Dust')
    e.create('adamantium_dust')        .displayName('Adamantium Dust')
    e.create('chromium_dust')          .displayName('Chromium Dust')
    e.create('thorium_dust')           .displayName('Thorium Dust')
    e.create('carbon_dust')            .displayName('Carbon Dust')
    
    // New Plates
    e.create('silver_sheet')             .displayName('Silver Sheet')          
	e.create('titanium_iridium_sheet')   .displayName('Titanium Iridium Sheet') 
	e.create('tin_sheet')                .displayName('Tin Sheet')              
	e.create('nickel_sheet')             .displayName('Nickel Sheet')           
	e.create('electrum_sheet')           .displayName('Electrum Sheet')         
	e.create('uranium_sheet')            .displayName('Uranium Sheet')          
	e.create('silicon_sheet')            .displayName('Silicon Sheet')          
	e.create('titanium_sheet')           .displayName('Titanium Sheet')         
	e.create('iridium_sheet')            .displayName('Iridium Sheet')          
	e.create('constantan_sheet')         .displayName('Constantan Sheet')       
    e.create('aluminum_sheet')           .displayName('Aluminum Sheet')         
    e.create('titanium_aluminide_sheet') .displayName('Titanium Aluminide Sheet')
	e.create('lead_sheet')               .displayName('Lead Sheet')     
	e.create('hop_graphite_sheet')       .displayName('HOP Graphite Sheet')     
	e.create('graphite_sheet')           .displayName('Graphite Sheet')     
	
	// Incomplete for Squencial Assembler
	e.create('steel_sequenced_compressed_plate').type('create:sequenced_assembly').displayName('Steel Sequenced Compressed Plate')
	e.create('desh_sequenced_compressed_plate').type('create:sequenced_assembly').displayName('Desh Sequenced Compressed Plate')
	e.create('silicon_sequenced_compressed_plate').type('create:sequenced_assembly').displayName('Silicon Sequenced Compressed Plate')

	e.create('steel_sequenced_stick_steel').type('create:sequenced_assembly').displayName('Steel Sequenced Stick Steel')
	e.create('steel_sequenced_fan_steel').type('create:sequenced_assembly').displayName('Steel Sequenced Fan Steel')
	e.create('steel_sequenced_gear_steel').type('create:sequenced_assembly').displayName('Steel Sequenced Gear Steel')
	// e.create('kubejs:incomplete_taluminide_gear') 	.displayName('Incomplete Titanium Aluminide Gear')
	// e.create('kubejs:incomplete_tiridium_gear') 	.displayName('Incomplete Titanium Iridium Gear')
	// e.create('kubejs:incomplete_titanium_gear') 	.displayName('Incomplete Titanium Gear')
})