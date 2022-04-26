events.listen('item.tags', function (e) {
  	//Ores BLock
		e.remove('forge:ores/copper', ['immersiveengineering:ore_copper', 'tconstruct:copper_ore', 'libvulpes:orecopper'])
		e.remove('forge:ores/uranium',['immersiveengineering:ore_uranium'])
		e.remove('forge:ores/aluminum', ['libvulpes:orealuminum'])
		e.remove('forge:ores/dilithium', ['libvulpes:oredilithium'])

		e.add('forge:ores', ['kubejs:craunium_ore'])
		e.add('forge:ores/craunium', ['kubejs:craunium_ore'])

	//Ores Raw
		e.add('forge:ores', 'kubejs:craunium_raw')
		e.add('forge:ores/craunium', 'kubejs:craunium_raw')

	//Cruched
		e.add('create:crushed_ores',['kubejs:craunium_crushed'])		

	//Dust
	//REMOVE OLD DUST
		e.remove('forge:dusts',[
			'libvulpes:dustdilithium',
			'excompressum:wood_chippings',
			'immersiveengineering:dust_electrum',
			'immersiveengineering:dust_constantan',
			'libvulpes:dusttitanium',
			'advancedrocketry:dusttitaniumiridium',
			'immersiveengineering:dust_gold',
			'immersiveengineering:dust_uranium',
			'immersiveengineering:dust_steel',
			'immersiveengineering:dust_lead',
			'immersiveengineering:dust_nickel',
			'immersiveengineering:dust_hop_graphite',
			'create:powdered_obsidian',
			'libvulpes:dustiron',
			'immersiveengineering:dust_aluminum',
			'immersiveengineering:dust_sulfur',
			'libvulpes:dustiridium',
			'immersiveengineering:dust_wood',
			'createaddition:diamond_grit',
			'libvulpes:dustcopper',
			'libvulpes:dustaluminum',
			'libvulpes:duststeel',
			'immersiveengineering:dust_copper',
			'advancedrocketry:dusttitaniumaluminide',
			'libvulpes:dustgold',
			'immersiveengineering:dust_silver',
			'libvulpes:dustsilicon',
			'libvulpes:dusttin',
			'immersiveengineering:dust_iron'
		])

		e.remove('forge:dusts/dilithium', 'libvulpes:dustdilithium')
		e.remove('forge:dusts/electrum', 'immersiveengineering:dust_electrum')
		e.remove('forge:dusts/constantan', 'immersiveengineering:dust_constantan')
		e.remove('forge:dusts/titanium', 'libvulpes:dusttitanium')
		e.remove('forge:dusts/titaniumiridium', 'advancedrocketry:dusttitaniumiridium')
		e.remove('forge:dusts/gold', ['immersiveengineering:dust_gold', 'libvulpes:dustgold'])
		e.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium')
		e.remove('forge:dusts/steel', ['immersiveengineering:dust_steel', 'libvulpes:duststeel'])
		e.remove('forge:dusts/lead', 'immersiveengineering:dust_lead')
		e.remove('forge:dusts/nickel', 'immersiveengineering:dust_nickel')
		e.remove('forge:dusts/hop_graphite', 'immersiveengineering:dust_hop_graphite')
		e.remove('forge:dusts/obsidian', 'create:powdered_obsidian')
		e.remove('forge:dusts/iron', ['libvulpes:dustiron', 'immersiveengineering:dust_iron'])
		e.remove('forge:dusts/aluminum', ['immersiveengineering:dust_aluminum', 'libvulpes:dustaluminum'])
		e.remove('forge:dusts/sulfur', 'immersiveengineering:dust_sulfur')
		e.remove('forge:dusts/iridium', 'libvulpes:dustiridium')
		e.remove('forge:dusts/wood', 'immersiveengineering:dust_wood')
		e.remove('forge:dusts/diamond', 'createaddition:diamond_grit')
		e.remove('forge:dusts/copper', ['libvulpes:dustcopper', 'immersiveengineering:dust_copper'])
		e.remove('forge:dusts/titaniumaluminide', 'advancedrocketry:dusttitaniumaluminide')
		e.remove('forge:dusts/silver', 'immersiveengineering:dust_silver')
		e.remove('forge:dusts/silicon', 'libvulpes:dustsilicon')
		e.remove('forge:dusts/tin', 'libvulpes:dusttin')

	//NEW DUST
		e.add('forge:dusts',[
			'byg:blue_glowcane_dust',
			'byg:pink_glowcane_dust',
			'byg:purple_glowcane_dust',
			'byg:red_glowcane_dust',
			'kubejs:gold_dust',
			'kubejs:tin_dust',
			'kubejs:copper_dust',
			'kubejs:silicon_dust',
			'kubejs:iridium_dust',
			'kubejs:steel_dust',
			'kubejs:titanium_dust',
			'kubejs:aluminum_dust',
			'kubejs:dilithium_dust',
			'kubejs:iron_dust',
			'kubejs:diamond_dust',
			'kubejs:titanium_iridium_dust',
			'kubejs:titanium_aluminide_dust',
			'kubejs:obsidian_dust',
			'kubejs:hop_graphite_dust',
			'kubejs:sulfur_dust',
			'kubejs:electrum_dust',
			'kubejs:constantan_dust',
			'kubejs:nickel_dust',
			'kubejs:silver_dust',
			'kubejs:lead_dust',
			'kubejs:cobalt_dust',
			'kubejs:platinum_dust',
			'kubejs:osmium_dust',
			'kubejs:brass_dust',
			'kubejs:zinc_dust',
			'kubejs:tungsten_dust',
			'kubejs:mythril_dust',
			'kubejs:adamantium_dust'
		])

		e.add('forge:dusts/glowcane_blue'	   , 'byg:blue_glowcane_dust')
		e.add('forge:dusts/glowcane_pink'	   , 'byg:pink_glowcane_dust')
		e.add('forge:dusts/glowcane_purple'	   , 'byg:purple_glowcane_dust')
		e.add('forge:dusts/glowcane_red'	   , 'byg:red_glowcane_dust')   
		e.add('forge:dusts/blutonium'		   , 'biggerreactors:blutonium_dust')

		e.add('forge:dusts/gold'			   , 'kubejs:gold_dust')
		e.add('forge:dusts/tin'				   , 'kubejs:tin_dust')
		e.add('forge:dusts/copper'			   , 'kubejs:copper_dust')
		e.add('forge:dusts/silicon'			   , 'kubejs:silicon_dust')
		e.add('forge:dusts/iridium'			   , 'kubejs:iridium_dust')
		e.add('forge:dusts/steel'			   , 'kubejs:steel_dust')
		e.add('forge:dusts/titanium'		   , 'kubejs:titanium_dust')
		e.add('forge:dusts/aluminum'		   , 'kubejs:aluminum_dust')
		e.add('forge:dusts/dilithium'		   , 'kubejs:dilithium_dust')
		e.add('forge:dusts/iron'			   , 'kubejs:iron_dust')
		e.add('forge:dusts/diamond'			   , 'kubejs:diamond_dust')
		e.add('forge:dusts/titanium_iridium'   , 'kubejs:titanium_iridium_dust')
		e.add('forge:dusts/titanium_aluminide' , 'kubejs:titanium_aluminide_dust')
		e.add('forge:dusts/obsidian'		   , 'kubejs:obsidian_dust')
		e.add('forge:dusts/hop_graphite'	   , 'kubejs:hop_graphite_dust')
		e.add('forge:dusts/sulfur'			   , 'kubejs:sulfur_dust')
		e.add('forge:dusts/electrum'		   , 'kubejs:electrum_dust')
		e.add('forge:dusts/contantan'		   , 'kubejs:constantan_dust')
		e.add('forge:dusts/nickel'			   , 'kubejs:nickel_dust')
		e.add('forge:dusts/silver'			   , 'kubejs:silver_dust')
		e.add('forge:dusts/lead'			   , 'kubejs:lead_dust')
		e.add('forge:dusts/cobalt'			   , 'kubejs:cobalt_dust')
		e.add('forge:dusts/platinum'		   , 'kubejs:platinum_dust')
		e.add('forge:dusts/osmium'			   , 'kubejs:osmium_dust')
		e.add('forge:dusts/brads'			   , 'kubejs:brass_dust')
		e.add('forge:dusts/zinc'			   , 'kubejs:zinc_dust')
		e.add('forge:dusts/tungsten'		   , 'kubejs:tungsten_dust')
		e.add('forge:dusts/mythril'			   , 'kubejs:mythril_dust')
		e.add('forge:dusts/adamantium'		   , 'kubejs:adamantium_dust')
		e.add('forge:dusts/craunium'		   , 'kubejs:craunium_dust')

	//Ores Chunk
		e.remove('forge:ore',[
			'exnihilosequentia:chunk_aluminum',
			'exnihilosequentia:chunk_nickel',
			'exnihilosequentia:chunk_copper',
			'exnihilosequentia:chunk_zinc',
			'exnihilosequentia:chunk_iron',
			'exnihilosequentia:chunk_lead',
			'exnihilosequentia:chunk_cobalt',
			'exnihilosequentia:chunk_silver',
			'exnihilosequentia:chunk_uranium',
			'exnihilosequentia:chunk_gold'
		])
		
		e.remove('forge:ores/aluminum', 'exnihilosequentia:chunk_aluminum')
		e.remove('forge:ores/nickel'  , 'exnihilosequentia:chunk_nickel')
		e.remove('forge:ores/copper'  , 'exnihilosequentia:chunk_copper')
		e.remove('forge:ores/zinc'	  , 'exnihilosequentia:chunk_zinc')
		e.remove('forge:ores/iron'	  , 'exnihilosequentia:chunk_iron')
		e.remove('forge:ores/lead'	  , 'exnihilosequentia:chunk_lead')
		e.remove('forge:ores/cobalt'  , 'exnihilosequentia:chunk_cobalt')
		e.remove('forge:ores/silver'  , 'exnihilosequentia:chunk_silver')
		e.remove('forge:ores/uranium' , 'exnihilosequentia:chunk_uranium')
		e.remove('forge:ores/gold'	  , 'exnihilosequentia:chunk_gold')

	//Ingots
		e.remove('forge:ingots',[
			'libvulpes:ingotaluminum',
			'immersiveengineering:ingot_aluminum',
			'exnihilosequentia:ingot_aluminum',

			'libvulpes:ingottin',

			'libvulpes:ingottitanium',

			'libvulpes:ingotcopper',
			'immersiveengineering:ingot_copper',
			'oreclumps:copper_ingot',
			'exnihilosequentia:ingot_copper',
			'tconstruct:copper_ingot',

			'libvulpes:ingotsilicon',

			'libvulpes:ingotiridium',

			'immersiveengineering:ingot_steel',
			'libvulpes:ingotsteel',

			'immersiveengineering:ingot_nickel',
			'exnihilosequentia:ingot_nickel',

			'immersiveengineering:ingot_uranium',
			'oreclumps:uranium_ingot',
			'exnihilosequentia:ingot_uranium',

			'tconstruct:cobalt_ingot',

			'immersiveengineering:ingot_silver',
			'exnihilosequentia:ingot_silver',

			'oreclumps:zinc_ingot',
			'exnihilosequentia:ingot_zinc',

			'tconstruct:tinkers_bronze_ingot',

			'immersiveengineering:ingot_lead',
			'exnihilosequentia:ingot_lead',


			
		])

		e.remove('forge:ingots/aluminum'		, ['libvulpes:ingotaluminum', 'immersiveengineering:ingot_aluminum', 'exnihilosequentia:ingot_aluminum'])
		e.remove('forge:ingots/tin'				, 'libvulpes:ingottin')
		e.remove('forge:ingots/cobalt'  		, 'tconstruct:cobalt_ingot')
		e.remove('forge:ingots/titanium'		, 'libvulpes:ingottitanium')
		e.remove('forge:ingots/steel'			, ['libvulpes:ingotsteel', 'immersiveengineering:ingot_steel'])
		e.remove('forge:ingots/copper'			, ['libvulpes:ingotcopper', 'immersiveengineering:ingot_copper', 'oreclumps:copper_ingot', 'exnihilosequentia:ingot_copper', 'tconstruct:copper_ingot',])
		// e.remove('forge:ingots/silicon'			, 'libvulpes:ingotsilicon')
		// e.remove('forge:ingots/iridium'			, 'libvulpes:ingotiridium')
		e.remove('forge:ingots/nickel'			, ['immersiveengineering:ingot_nickel', 'exnihilosequentia:ingot_nickel'])
		e.remove('forge:ingots/uranium'			, ['immersiveengineering:ingot_uranium', 'oreclumps:uranium_ingot', 'exnihilosequentia:ingot_uranium',])
		e.remove('forge:ingots/silver'			, ['immersiveengineering:ingot_silver', 'exnihilosequentia:ingot_silver',])
		e.remove('forge:ingots/zinc'			, ['oreclumps:zinc_ingot', 'exnihilosequentia:ingot_zinc'])
		e.remove('forge:ingots/silicon_bronze'  , 'tconstruct:tinkers_bronze_ingot')
		e.remove('forge:ingots/lead'  			, ['immersiveengineering:ingot_lead', 'exnihilosequentia:ingot_lead'])
 
		e.add('forge:ingots', [
			'alloyed:steel_ingot',
			'alloyed:bronze_ingot',
			'kubejs:craunium_ingot'
		])

		e.add('forge:ingots/blutonium', 'biggerreactors:blutonium_ingot')
		e.add('forge:ingots/craunium', 'kubejs:craunium_ingot')

		e.add('forge:beconpayment', [
			'advancedrocketry:ingottitaniumaluminide',
			'advancedrocketry:carbon_brick',
			'advancedrocketry:ingottitaniumiridium',

			'alloyed:bronze_ingot',
			'alloyed:steel_ingot',

			'biggerreactors:graphite_ingot',
			'biggerreactors:cyanite_ingot',
			'biggerreactors:blutonium_ingot',
			'biggerreactors:ludicrite_ingot',
			'biggerreactors:yellorium_ingot',

			'minecraft:nether_brick',
			'minecraft:brick',
			'minecraft:netherite_scrap',
			'minecraft:netherite_ingot',
			'minecraft:gold_ingot',
			'minecraft:iron_ingot',

			'byg:pendorite_ingot',

			'kubejs:craunium_ingot',

			'immersiveengineering:ingot_hop_graphite',
			'immersiveengineering:ingot_electrum',
			'immersiveengineering:ingot_steel',
			'immersiveengineering:ingot_constantan',

			'oreclumps:aluminum_ingot',
			'oreclumps:chromium_ingot',
			'oreclumps:cobalt_ingot',
			'oreclumps:platinum_ingot',
			'oreclumps:thorium_ingot',
			'oreclumps:tin_ingot',
			'oreclumps:silver_ingot',
			'oreclumps:osmium_ingot',
			'oreclumps:titanium_ingot',
			'oreclumps:tungsten_ingot',
			'oreclumps:adamantium_ingot',
			'oreclumps:mythril_ingot',
			'oreclumps:nickel_ingot',
			'oreclumps:lead_ingot',

			'tconstruct:pig_iron_ingot',
			'tconstruct:hepatizon_ingot',
			'tconstruct:manyullyn_ingot',
			'tconstruct:queens_slime_ingot',
			'tconstruct:rose_gold_ingot',
			'tconstruct:slimesteel_ingot',

			'create:copper_ingot',
			'create:zinc_ingot',
			'create:brass_ingot'
		])

	//plates
		e.remove('forge:plates',[
			'immersiveengineering:plate_iron',
			'libvulpes:plateiron',
			'libvulpes:platesteel',
			'immersiveengineering:plate_steel',
			'libvulpes:plategold',
			'immersiveengineering:plate_gold',
			'libvulpes:platecopper',
			'immersiveengineering:plate_copper',
			'createdeco:zinc_sheet',
			'libvulpes:platealuminum',

			'immersiveengineering:plate_uranium',
			'immersiveengineering:plate_electrum',
			'immersiveengineering:plate_nickel',
			'immersiveengineering:plate_constantan',
			'immersiveengineering:plate_silver',
		
			'immersiveengineering:plate_aluminum',
			'immersiveengineering:plate_lead',
			
			'advancedrocketry:platetitaniumaluminide',
			'advancedrocketry:platetitaniumiridium',
			'libvulpes:platetitanium',
			'libvulpes:plateiridium',
			'libvulpes:platesilicon',
			'libvulpes:platetin',

			'libvulpes:sheetiron',
			'libvulpes:sheetcopper',
			'libvulpes:sheetsteel',
			'libvulpes:sheettitanium',
			'libvulpes:sheetaluminum',
			'advancedrocketry:sheettitaniumaluminide',
			'advancedrocketry:sheettitaniumiridium'
		])

		e.remove('fogre:plates/iron'	 		 , ['immersiveengineering:plate_iron', 'libvulpes:plateiron'])
		e.remove('forge:plates/steel'	 		 , ['libvulpes:platesteel', 'immersiveengineering:plate_steel'])
		e.remove('forge:plates/gold'	 		 , ['libvulpes:plategold', 'immersiveengineering:plate_gold'])
		e.remove('forge:plates/copper'	 		 , ['libvulpes:platecopper', 'immersiveengineering:plate_copper'])
		e.remove('forge:plates/zinc'	 		 , ['createdeco:zinc_sheet'])
		e.remove('forge:plates/aluminum' 		 , ['libvulpes:platealuminum']) 

		e.remove('forge:plates/uranium'			 , 'immersiveengineering:plate_uranium')
		e.remove('forge:plates/electrum'		 , 'immersiveengineering:plate_electrum')
		e.remove('forge:plates/nickel'			 , 'immersiveengineering:plate_nickel')
		e.remove('forge:plates/constantan'		 , 'immersiveengineering:plate_constantan')
		e.remove('forge:plates/silver'			 , 'immersiveengineering:plate_silver')
		e.remove('forge:plates/aluminum'		 , 'immersiveengineering:plate_aluminum')
		e.remove('forge:plates/lead'			 , 'immersiveengineering:plate_lead')
	 
		e.remove('forge:plates/titaniumaliminide', 'advancedrocketry:platetitaniumaluminide')
		e.remove('forge:plates/titaniumiridium'	 , 'advancedrocketry:platetitaniumiridium') 
		e.remove('forge:plates/titanium'		 , 'libvulpes:platetitanium')
		e.remove('forge:plates/iridium'			 , 'libvulpes:plateiridium')
		e.remove('forge:plates/silicon'			 , 'libvulpes:platesilicon')
		e.remove('forge:plates/ton'				 , 'libvulpes:platetin')

		e.add('forge:plates', [
			'kubejs:silver_sheet',
			'kubejs:titanium_iridium_sheet',
			'kubejs:tin_sheet',
			'kubejs:nickel_sheet',
			'kubejs:electrum_sheet',
			'kubejs:uranium_sheet',
			'kubejs:silicon_sheet',
			'kubejs:titanium_sheet',
			'kubejs:iridium_sheet',
			'kubejs:constantan_sheet',
			'kubejs:aluminum_sheet',
			'kubejs:titanium_aluminide_sheet',
			'kubejs:lead_sheet',
			'kubejs:craunium_sheet',
		])

		e.add('forge:plates/silver'				, 'kubejs:silver_sheet')
		e.add('forge:plates/titaniumiridium'	, 'kubejs:titanium_iridium_sheet')
		e.add('forge:plates/tin'				, 'kubejs:tin_sheet')
		e.add('forge:plates/nickel'				, 'kubejs:nickel_sheet')
		e.add('forge:plates/electrum'			, 'kubejs:electrum_sheet')
		e.add('forge:plates/uranium'			, 'kubejs:uranium_sheet')
		e.add('forge:plates/silicon'			, 'kubejs:silicon_sheet')
		e.add('forge:plates/titanium'			, 'kubejs:titanium_sheet')
		e.add('forge:plates/iridium'			, 'kubejs:iridium_sheet')
		e.add('forge:plates/constantan'			, 'kubejs:constantan_sheet')
		e.add('forge:plates/aluminum'			, 'kubejs:aluminum_sheet')
		e.add('forge:plates/titaniumaluminide'	, 'kubejs:titanium_aluminide_sheet')
		e.add('forge:plates/lead'				, 'kubejs:lead_sheet')
		e.add('forge:plates/craunium'			, 'kubejs:craunium_sheet')


	//sheet
		e.remove('forge:sheets', [
			'advancedrocketry:sheettitaniumaluminide',
			'advancedrocketry:sheettitaniumiridium',
			'libvulpes:sheetiron',
			'libvulpes:sheetcopper',
			'libvulpes:sheetsteel',
			'libvulpes:sheettitanium',
			'libvulpes:sheetaluminum'
		])

		e.remove('forge:sheets/titaniumaluminide'	, 'advancedrocketry:sheettitaniumaluminide')
		e.remove('forge:sheets/titaniumiridium'		, 'advancedrocketry:sheettitaniumiridium')
		e.remove('forge:sheets/titanium'			, 'libvulpes:sheettitanium')

		e.remove('forge:sheets/iron'				,'libvulpes:sheetiron')
		e.remove('forge:sheets/copper'				,'libvulpes:sheetcopper')
		e.remove('forge:sheets/steel'				,'libvulpes:sheetsteel')
		e.remove('forge:sheets/titanium'			,'libvulpes:sheettitanium')
		e.remove('forge:sheets/aluminum'			,'libvulpes:sheetaluminum')
		

		e.add('forge:sheets', [
			'kubejs:silver_sheet',
			'kubejs:titanium_iridium_sheet',
			'kubejs:tin_sheet',
			'kubejs:nickel_sheet',
			'kubejs:electrum_sheet',
			'kubejs:uranium_sheet',
			'kubejs:silicon_sheet',
			'kubejs:titanium_sheet',
			'kubejs:iridium_sheet',
			'kubejs:constantan_sheet',
			'kubejs:aluminum_sheet',
			'kubejs:titanium_aluminide_sheet',
			'kubejs:lead_sheet',
			'kubejs:craunium_sheet',
			'kubejs:titanium_aluminide_sheet',
			'kubejs:titanium_iridium_sheet',
			'kubejs:titanium_sheet'
		])

		e.add('forge:sheets/titaniumaluminide'	, 'kubejs:titanium_aluminide_sheet')
		e.add('forge:sheets/titaniumiridium'	, 'kubejs:titanium_iridium_sheet')
		e.add('forge:sheets/titanium'			, 'kubejs:titanium_sheet')
		e.add('forge:sheets/silver'				, 'kubejs:silver_sheet')
		e.add('forge:sheets/titaniumiridium'	, 'kubejs:titanium_iridium_sheet')
		e.add('forge:sheets/tin'				, 'kubejs:tin_sheet')
		e.add('forge:sheets/nickel'				, 'kubejs:nickel_sheet')
		e.add('forge:sheets/electrum'			, 'kubejs:electrum_sheet')
		e.add('forge:sheets/uranium'			, 'kubejs:uranium_sheet')
		e.add('forge:sheets/silicon'			, 'kubejs:silicon_sheet')
		e.add('forge:sheets/titanium'			, 'kubejs:titanium_sheet')
		e.add('forge:sheets/iridium'			, 'kubejs:iridium_sheet')
		e.add('forge:sheets/constantan'			, 'kubejs:constantan_sheet')
		e.add('forge:sheets/aluminum'			, 'kubejs:aluminum_sheet')
		e.add('forge:sheets/titaniumaluminide'	, 'kubejs:titanium_aluminide_sheet')
		e.add('forge:sheets/lead'				, 'kubejs:lead_sheet')
		e.add('forge:sheets/craunium'			, 'kubejs:craunium_sheet')
	//Nuggets
		e.remove('forge:nuggets',[
			'tconstruct:copper_nugget',
			'immersiveengineering:nugget_copper',
			'libvulpes:nuggetcopper',
			'immersiveengineering:nugget_steel',
			'libvulpes:nuggetaluminum'
		])

		e.remove('forge:nuggets/copper'		, ['tconstruct:copper_nugget', 'immersiveengineering:nugget_copper', 'libvulpes:nuggetcopper'])
		e.remove('forge:nuggets/steel'		, 'immersiveengineering:nugget_steel')
		e.remove('forge:nuggets/aluminum'	, 'libvulpes:nuggetaluminum')
		
		e.add('forge:nuggets', [
			'kubejs:craunium_nugget'
		])

		e.add('forge:nuggets/craunium'	, 'kubejs:craunium_nugget')

	//Rod
	e.remove('forge:rods',[
		'immersiveengineering:stick_iron',
	])

	e.remove('forge:rods/iron' , 'immersiveengineering:stick_iron')
	e.remove('forge:rods/all_metal' , 'immersiveengineering:stick_iron')

	e.add('forge:rods', [
		'immersiveengineering:stick_steel',
		'immersiveengineering:stick_aluminum'
	])

	//Crystal
		e.add('forge:crystal',[
			'kubejs:craunium_crystal'
		])

		e.add('forge:crystal/craunium', 'kubejs:craunium_crystal')
})

events.listen('block.tags', function (e) {
	//Ores Block
		e.remove('forge:ores/copper', [
			'immersiveengineering:ore_copper',
			'tconstruct:copper_ore',
			'libvulpes:orecopper'
		])
})