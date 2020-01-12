let characters = {
	party: [
		{
			id: '1',
			name: 'Fixian Wunded',
			avatar: 'https://via.placeholder.com/50',
			level: 2,
			isEnemy: false,
			race: 'Human',
			classType: 'Cleric / Life Domain',
			hp: 10,
			damageDone: 0,
			initiative: '0'
		},
		{
			id: '2',
			name: 'Fixian Wunded',
			avatar: 'https://via.placeholder.com/50',
			level: 2,
			isEnemy: false,
			race: 'Human',
			classType: 'Cleric / Life Domain',
			hp: 10,
			damageDone: 0,
			initiative: '0'
		},
		{
			id: '3',
			name: 'Fixian Wunded',
			avatar: 'https://via.placeholder.com/50',
			level: 2,
			isEnemy: false,
			race: 'Human',
			classType: 'Cleric / Life Domain',
			hp: 10,
			damageDone: 0,
			initiative: '0'
		},
		{
			id: '4',
			name: 'Fixian Wunded',
			avatar: 'https://via.placeholder.com/50',
			level: 2,
			isEnemy: false,
			race: 'Human',
			classType: 'Cleric / Life Domain',
			hp: 10,
			damageDone: 0,
			initiative: '0'
		},
		{
			id: '5',
			name: 'Fixian Wunded',
			avatar: 'https://via.placeholder.com/50',
			level: 2,
			isEnemy: false,
			race: 'Human',
			classType: 'Cleric / Life Domain',
			hp: 10,
			damageDone: 0,
			initiative: '0'
		}
	],
	enemies: [
		{
			id: '6',
			name: 'cenas',
			avatar: 'https://via.placeholder.com/50',
			isEnemy: true,
			race: 'goblin',
			level: 1,
			classType: 'undead',
			damageTaken: 0,
			possibleAC: 0,
			initiative: '0'
		},
		{
			id: '7',
			name: 'cenas',
			avatar: 'https://via.placeholder.com/50',
			isEnemy: true,
			race: 'goblin',
			level: 1,
			classType: 'undead',
			damageTaken: 0,
			possibleAC: 0,
			initiative: '0'
		},
		{
			id: '8',
			name: 'cenas',
			avatar: 'https://via.placeholder.com/50',
			isEnemy: true,
			race: 'goblin',
			level: 1,
			classType: 'undead',
			damageTaken: 0,
			possibleAC: 0,
			initiative: '0'
		},
		{
			id: '9',
			name: 'cenas',
			avatar: 'https://via.placeholder.com/50',
			isEnemy: true,
			race: 'goblin',
			level: 1,
			classType: 'undead',
			damageTaken: 0,
			possibleAC: 0,
			initiative: '0'
		}
	]
};

localStorage.setItem('characters', JSON.stringify(characters));

const CONFIG = {
	// Configurations to create HTML elements for the form
	FORMS: {
		party: [
			{ name: 'name', element: 'input', type: 'text' },
			{ name: 'classType', element: 'select', type: 'classes' },
			{ name: 'race', element: 'select', type: 'races' },
			{ name: 'hp', element: 'input', type: 'number' },
			{ name: 'level', element: 'input', type: 'number' }
		],
		enemies: [
			{ name: 'name', element: 'input', type: 'text' },
			{ name: 'race', element: 'select', type: 'monsters' }
		]
	}
};

const DND_DB = {
	races: [
		'Dragonborn',
		'Dwarf',
		'Eladrin',
		'Elf',
		'Gnome',
		'Half-elf',
		'Half-orc',
		'Halfling',
		'Human',
		'Tiefling'
	],

	classes: [
		'Barbarian',
		'Bard',
		'Cleric',
		'Druid',
		'Fighter',
		'Monk',
		'Paladin',
		'Ranger',
		'Rogue',
		'Sorcerer',
		'Warlock',
		'Wizard'
	],

	monsters: [
		'Aboleth',
		'Acolyte',
		'Adult Black Dragon',
		'Adult Blue Dragon',
		'Adult Brass Dragon',
		'Adult Bronze Dragon',
		'Adult Copper Dragon',
		'Adult Gold Dragon',
		'Adult Green Dragon',
		'Adult Red Dragon',
		'Adult Silver Dragon',
		'Adult White Dragon',
		'Air Elemental',
		'Ancient Black Dragon',
		'Ancient Blue Dragon',
		'Ancient Brass Dragon',
		'Ancient Bronze Dragon',
		'Ancient Copper Dragon',
		'Ancient Gold Dragon',
		'Ancient Green Dragon',
		'Ancient Red Dragon',
		'Ancient Silver Dragon',
		'Ancient White Dragon',
		'Androsphinx',
		'Animated Armor',
		'Ankheg',
		'Ape',
		'Archmage',
		'Assassin',
		'Awakened Shrub',
		'Awakened Tree',
		'Axe Beak',
		'Azer',
		'Baboon',
		'Badger',
		'Balor',
		'Bandit',
		'Bandit Captain',
		'Barbed Devil',
		'Basilisk',
		'Bat',
		'Bearded Devil',
		'Behir',
		'Berserker',
		'Black Bear',
		'Black Dragon Wyrmling',
		'Black Pudding',
		'Blink Dog',
		'Blood Hawk',
		'Blue Dragon Wyrmling',
		'Boar',
		'Bone Devil',
		'Brass Dragon Wyrmling',
		'Bronze Dragon Wyrmling',
		'Brown Bear',
		'Bugbear',
		'Bulette',
		'Camel',
		'Cat',
		'Centaur',
		'Chain Devil',
		'Chimera',
		'Chuul',
		'Clay Golem',
		'Cloaker',
		'Cloud Giant',
		'Cockatrice',
		'Commoner',
		'Constrictor Snake',
		'Copper Dragon Wyrmling',
		'Couatl',
		'Crab',
		'Crocodile',
		'Cult Fanatic',
		'Cultist',
		'Darkmantle',
		'Death Dog',
		'Deep Gnome (Svirfneblin)',
		'Deer',
		'Deva',
		'Dire Wolf',
		'Diseased Giant Rat',
		'Djinni',
		'Doppelganger',
		'Draft Horse',
		'Dragon Turtle',
		'Dretch',
		'Drider',
		'Drow',
		'Druid',
		'Dryad',
		'Duergar',
		'Dust Mephit',
		'Eagle',
		'Earth Elemental',
		'Efreeti',
		'Elephant',
		'Elk',
		'Erinyes',
		'Ettercap',
		'Ettin',
		'Fire Elemental',
		'Fire Giant',
		'Flesh Golem',
		'Flying Snake',
		'Flying Sword',
		'Frog',
		'Frost Giant',
		'Gargoyle',
		'Gelatinous Cube',
		'Ghast',
		'Ghost',
		'Ghoul',
		'Giant Ape',
		'Giant Badger',
		'Giant Bat',
		'Giant Boar',
		'Giant Centipede',
		'Giant Constrictor Snake',
		'Giant Crab',
		'Giant Crocodile',
		'Giant Eagle',
		'Giant Elk',
		'Giant Fire Beetle',
		'Giant Frog',
		'Giant Goat',
		'Giant Hyena',
		'Giant Lizard',
		'Giant Octopus',
		'Giant Owl',
		'Giant Poisonous Snake',
		'Giant Rat',
		'Giant Scorpion',
		'Giant Sea Horse',
		'Giant Shark',
		'Giant Spider',
		'Giant Toad',
		'Giant Vulture',
		'Giant Wasp',
		'Giant Weasel',
		'Giant Wolf Spider',
		'Gibbering Mouther',
		'Glabrezu',
		'Gladiator',
		'Gnoll',
		'Goat',
		'Goblin',
		'Gold Dragon Wyrmling',
		'Gorgon',
		'Gray Ooze',
		'Green Dragon Wyrmling',
		'Green Hag',
		'Grick',
		'Griffon',
		'Grimlock',
		'Guard',
		'Guardian Naga',
		'Gynosphinx',
		'Half-Red Dragon Veteran',
		'Harpy',
		'Hawk',
		'Hell Hound',
		'Hezrou',
		'Hill Giant',
		'Hippogriff',
		'Hobgoblin',
		'Homunculus',
		'Horned Devil',
		'Hunter Shark',
		'Hydra',
		'Hyena',
		'Ice Devil',
		'Ice Mephit',
		'Imp',
		'Incubus',
		'Invisible Stalker',
		'Iron Golem',
		'Jackal',
		'Killer Whale',
		'Knight',
		'Kobold',
		'Kraken',
		'Lamia',
		'Lemure',
		'Lich',
		'Lion',
		'Lizard',
		'Lizardfolk',
		'Mage',
		'Magma Mephit',
		'Magmin',
		'Mammoth',
		'Manticore',
		'Marilith',
		'Mastiff',
		'Medusa',
		'Merfolk',
		'Merrow',
		'Mimic',
		'Minotaur',
		'Minotaur Skeleton',
		'Mule',
		'Mummy',
		'Mummy Lord',
		'Nalfeshnee',
		'Night Hag',
		'Nightmare',
		'Noble',
		'Ochre Jelly',
		'Octopus',
		'Ogre',
		'Ogre Zombie',
		'Oni',
		'Orc',
		'Otyugh',
		'Owl',
		'Owlbear',
		'Panther',
		'Pegasus',
		'Phase Spider',
		'Pit Fiend',
		'Planetar',
		'Plesiosaurus',
		'Poisonous Snake',
		'Polar Bear',
		'Pony',
		'Priest',
		'Pseudodragon',
		'Purple Worm',
		'Quasit',
		'Quipper',
		'Rakshasa',
		'Rat',
		'Raven',
		'Red Dragon Wyrmling',
		'Reef Shark',
		'Remorhaz',
		'Rhinoceros',
		'Riding Horse',
		'Roc',
		'Roper',
		'Rug of Smothering',
		'Rust Monster',
		'Saber-Toothed Tiger',
		'Sahuagin',
		'Salamander',
		'Satyr',
		'Scorpion',
		'Scout',
		'Sea Hag',
		'Sea Horse',
		'Shadow',
		'Shambling Mound',
		'Shield Guardian',
		'Shrieker',
		'Silver Dragon Wyrmling',
		'Skeleton',
		'Solar',
		'Specter',
		'Spider',
		'Spirit Naga',
		'Sprite',
		'Spy',
		'Steam Mephit',
		'Stirge',
		'Stone Giant',
		'Stone Golem',
		'Storm Giant',
		'Succubus',
		'Succubus (Incubus)',
		'Swarm of Bats',
		'Swarm of Beetles',
		'Swarm of Centipedes',
		'Swarm of Insects',
		'Swarm of Poisonous Snakes',
		'Swarm of Quippers',
		'Swarm of Rats',
		'Swarm of Ravens',
		'Swarm of Spiders',
		'Swarm of Wasps',
		'Tarrasque',
		'Thug',
		'Tiger',
		'Treant',
		'Tribal Warrior',
		'Triceratops',
		'Troll',
		'Tyrannosaurus Rex',
		'Unicorn',
		'Vampire',
		'Vampire Spawn',
		'Veteran',
		'Violet Fungus',
		'Vrock',
		'Vulture',
		'Warhorse',
		'Warhorse Skeleton',
		'Water Elemental',
		'Weasel',
		'Werebear',
		'Wereboar',
		'Wererat',
		'Weretiger',
		'Werewolf',
		'White Dragon Wyrmling',
		'Wight',
		"Will-o'-Wisp",
		'Winter Wolf',
		'Wolf',
		'Worg',
		'Wraith',
		'Wyvern',
		'Xorn',
		'Young Black Dragon',
		'Young Blue Dragon',
		'Young Brass Dragon',
		'Young Bronze Dragon',
		'Young Copper Dragon',
		'Young Gold Dragon',
		'Young Green Dragon',
		'Young Red Dragon',
		'Young Silver Dragon',
		'Young White Dragon',
		'Zombie'
	]
};
