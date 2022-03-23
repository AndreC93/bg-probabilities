const minions = [
    {
        "Name": "Alleycat",
        "Tier": "1",
        "Attack": "1",
        "Health": "1",
        "Cost": "1",
        "Type": "Beast",
        "Keywords": "Battlecry",
        "Combined": "Beast, Battlecry",
        "ID": "CFM_315"
    },
    {
        "Name": "Deck Swabbie",
        "Tier": "1",
        "Attack": "2",
        "Health": "2",
        "Cost": "3",
        "Type": "Pirate",
        "Keywords": "Battlecry",
        "Combined": "Pirate, Battlecry",
        "ID": "BGS_055"
    },
    {
        "Name": "Evolving Chromawing",
        "Tier": "1",
        "Attack": "1",
        "Health": "3",
        "Cost": "1",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BG21_027"
    },
    {
        "Name": "Icky Imp",
        "Tier": "1",
        "Attack": "1",
        "Health": "1",
        "Cost": "1",
        "Type": "Demon",
        "Keywords": "Deathrattle",
        "Combined": "Demon, Deathrattle",
        "ID": "BG21_029"
    },
    {
        "Name": "Impulsive Trickster",
        "Tier": "1",
        "Attack": "2",
        "Health": "2",
        "Cost": "1",
        "Type": "Demon",
        "Keywords": "Deathrattle",
        "Combined": "Demon, Deathrattle",
        "ID": "BG21_006"
    },
    {
        "Name": "Micro Mummy",
        "Tier": "1",
        "Attack": "1",
        "Health": "2",
        "Cost": "2",
        "Type": "Mech",
        "Keywords": "Reborn",
        "Combined": "Mech, Reborn",
        "ID": "ULD_217"
    },
    {
        "Name": "Pupbot",
        "Tier": "1",
        "Attack": "2",
        "Health": "1",
        "Cost": "1",
        "Type": "Mech",
        "Keywords": "Divine Shield",
        "Combined": "Mech, Divine Shield",
        "ID": "BG21_022"
    },
    {
        "Name": "Razorfen Geomancer",
        "Tier": "1",
        "Attack": "3",
        "Health": "1",
        "Cost": "1",
        "Type": "Quilboar",
        "Keywords": "Battlecry",
        "Combined": "Quilboar, Battlecry",
        "ID": "BG20_100"
    },
    {
        "Name": "Red Whelp",
        "Tier": "1",
        "Attack": "1",
        "Health": "2",
        "Cost": "1",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BGS_019"
    },
    {
        "Name": "Refreshing Anomaly",
        "Tier": "1",
        "Attack": "1",
        "Health": "4",
        "Cost": "1",
        "Type": "Elemental",
        "Keywords": "Battlecry",
        "Combined": "Elemental, Battlecry",
        "ID": "BGS_116"
    },
    {
        "Name": "Rockpool Hunter",
        "Tier": "1",
        "Attack": "2",
        "Health": "3",
        "Cost": "2",
        "Type": "Murloc",
        "Keywords": "Battlecry",
        "Combined": "Murloc, Battlecry",
        "ID": "UNG_073"
    },
    {
        "Name": "Scallywag",
        "Tier": "1",
        "Attack": "3",
        "Health": "1",
        "Cost": "1",
        "Type": "Pirate",
        "Keywords": "Deathrattle",
        "Combined": "Pirate, Deathrattle",
        "ID": "BGS_061"
    },
    {
        "Name": "Scavenging Hyena",
        "Tier": "1",
        "Attack": "2",
        "Health": "2",
        "Cost": "2",
        "Type": "Beast",
        "Combined": "Beast",
        "ID": "EX1_531"
    },
    {
        "Name": "Sellemental",
        "Tier": "1",
        "Attack": "2",
        "Health": "2",
        "Cost": "3",
        "Type": "Elemental",
        "Combined": "Elemental",
        "ID": "BGS_115"
    },
    {
        "Name": "Sun-Bacon Relaxer",
        "Tier": "1",
        "Attack": "1",
        "Health": "2",
        "Cost": "3",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_301"
    },
    {
        "Name": "Swampstriker",
        "Tier": "1",
        "Attack": "1",
        "Health": "4",
        "Cost": "1",
        "Type": "Murloc",
        "Combined": "Murloc",
        "ID": "BG22_401"
    },
    {
        "Name": "Wrath Weaver",
        "Tier": "1",
        "Attack": "1",
        "Health": "3",
        "Cost": "1",
        "Synergy": "Demon",
        "Combined": "Demon",
        "ID": "BGS_004"
    },
    {
        "Name": "Acolyte of C'Thun",
        "Tier": "2",
        "Attack": "2",
        "Health": "3",
        "Cost": "1",
        "Keywords": "Reborn, Taunt",
        "Combined": "Reborn, Taunt",
        "ID": "BGS_106"
    },
    {
        "Name": "Freedealing Gambler",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BGS_049"
    },
    {
        "Name": "Glyph Guardian",
        "Tier": "2",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BGS_045"
    },
    {
        "Name": "Harvest Golem",
        "Tier": "2",
        "Attack": "2",
        "Health": "3",
        "Cost": "3",
        "Type": "Mech",
        "Keywords": "Deathrattle",
        "Combined": "Mech, Deathrattle",
        "ID": "EX1_556"
    },
    {
        "Name": "Imprisoner",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Demon",
        "Keywords": "Deathrattle, Taunt",
        "Combined": "Demon, Deathrattle, Taunt",
        "ID": "BGS_014"
    },
    {
        "Name": "Kaboom Bot",
        "Tier": "2",
        "Attack": "2",
        "Health": "2",
        "Cost": "3",
        "Type": "Mech",
        "Keywords": "Deathrattle",
        "Combined": "Mech, Deathrattle",
        "ID": "BOT_606"
    },
    {
        "Name": "Leapfrogger",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "2",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "BG21_000"
    },
    {
        "Name": "Menagerie Mug",
        "Tier": "2",
        "Attack": "2",
        "Health": "2",
        "Cost": "3",
        "Keywords": "Battlecry",
        "Synergy": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar, Battlecry",
        "ID": "BGS_082"
    },
    {
        "Name": "Metaltooth Leaper",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Mech",
        "Keywords": "Battlecry",
        "Combined": "Mech, Battlecry",
        "ID": "GVG_048"
    },
    {
        "Name": "Molten Rock",
        "Tier": "2",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Type": "Elemental",
        "Keywords": "Taunt",
        "Combined": "Elemental, Taunt",
        "ID": "BGS_127"
    },
    {
        "Name": "Murloc Warleader",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Murloc",
        "Keywords": "Aura",
        "Combined": "Murloc, Aura",
        "ID": "EX1_507"
    },
    {
        "Name": "Nathrezim Overseer",
        "Tier": "2",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Type": "Demon",
        "Keywords": "Battlecry",
        "Combined": "Demon, Battlecry",
        "ID": "BGS_001"
    },
    {
        "Name": "Party Elemental",
        "Tier": "2",
        "Attack": "3",
        "Health": "2",
        "Cost": "4",
        "Type": "Elemental",
        "Combined": "Elemental",
        "ID": "BGS_120"
    },
    {
        "Name": "Prophet of the Boar",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Synergy": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_203"
    },
    {
        "Name": "Rabid Saurolisk",
        "Tier": "2",
        "Attack": "3",
        "Health": "2",
        "Cost": "3",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "BGS_075"
    },
    {
        "Name": "Roadboar",
        "Tier": "2",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Type": "Quilboar",
        "Keywords": "Frenzy",
        "Combined": "Quilboar, Frenzy",
        "ID": "BG20_101"
    },
    {
        "Name": "Saltscale Honcho",
        "Tier": "2",
        "Attack": "3",
        "Health": "2",
        "Cost": "2",
        "Type": "Murloc",
        "Combined": "Murloc",
        "ID": "BG21_008"
    },
    {
        "Name": "Selfless Hero",
        "Tier": "2",
        "Attack": "2",
        "Health": "1",
        "Cost": "1",
        "Keywords": "Deathrattle, Divine Shield",
        "Combined": "Deathrattle, Divine Shield",
        "ID": "OG_221"
    },
    {
        "Name": "Sewer Rat",
        "Tier": "2",
        "Attack": "3",
        "Health": "2",
        "Cost": "2",
        "Type": "Beast",
        "Keywords": "Deathrattle, Taunt",
        "Combined": "Beast, Deathrattle, Taunt",
        "ID": "BG19_010"
    },
    {
        "Name": "Southsea Captain",
        "Tier": "2",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Pirate",
        "Keywords": "Aura",
        "Combined": "Pirate, Aura",
        "ID": "NEW1_027"
    },
    {
        "Name": "Spawn of N'Zoth",
        "Tier": "2",
        "Attack": "2",
        "Health": "2",
        "Cost": "3",
        "Keywords": "Deathrattle",
        "Combined": "Deathrattle",
        "ID": "OG_256"
    },
    {
        "Name": "Tad",
        "Tier": "2",
        "Attack": "2",
        "Health": "4",
        "Cost": "2",
        "Legendary": "Y",
        "Type": "Murloc",
        "Combined": "Murloc",
        "ID": "BG22_202"
    },
    {
        "Name": "Tough Tusk",
        "Tier": "2",
        "Attack": "5",
        "Health": "3",
        "Cost": "3",
        "Type": "Quilboar",
        "Keywords": "Divine Shield",
        "Combined": "Quilboar, Divine Shield",
        "ID": "BG20_102"
    },
    {
        "Name": "Unstable Ghoul",
        "Tier": "2",
        "Attack": "1",
        "Health": "3",
        "Cost": "2",
        "Keywords": "Deathrattle, Taunt",
        "Combined": "Deathrattle, Taunt",
        "ID": "FP1_024"
    },
    {
        "Name": "Whelp Smuggler",
        "Tier": "2",
        "Attack": "2",
        "Health": "5",
        "Cost": "2",
        "Synergy": "Dragon",
        "Combined": "Dragon",
        "ID": "BG21_013"
    },
    {
        "Name": "Yo-Ho-Ogre",
        "Tier": "2",
        "Attack": "3",
        "Health": "5",
        "Cost": "6",
        "Type": "Pirate",
        "Keywords": "Taunt",
        "Combined": "Pirate, Taunt",
        "ID": "BGS_060"
    },
    {
        "Name": "Arm of the Empire",
        "Tier": "3",
        "Attack": "4",
        "Health": "4",
        "Cost": "5",
        "Keywords": "Taunt",
        "Synergy": "Taunt",
        "Combined": "Taunt",
        "ID": "BGS_110"
    },
    {
        "Name": "Bannerboar",
        "Tier": "3",
        "Attack": "1",
        "Health": "4",
        "Cost": "3",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_201"
    },
    {
        "Name": "Bird Buddy",
        "Tier": "3",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Keywords": "Avenge",
        "Synergy": "Beast",
        "Combined": "Beast, Avenge",
        "ID": "BG21_002"
    },
    {
        "Name": "Briny Bootlegger",
        "Tier": "3",
        "Attack": "4",
        "Health": "4",
        "Cost": "4",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BG21_017"
    },
    {
        "Name": "Bristleback Brute",
        "Tier": "3",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_103"
    },
    {
        "Name": "Bronze Warden",
        "Tier": "3",
        "Attack": "2",
        "Health": "1",
        "Cost": "4",
        "Type": "Dragon",
        "Keywords": "Divine Shield, Reborn",
        "Combined": "Dragon, Divine Shield, Reborn",
        "ID": "BGS_034"
    },
    {
        "Name": "Budding Greenthumb",
        "Tier": "3",
        "Attack": "1",
        "Health": "4",
        "Cost": "2",
        "Keywords": "Avenge",
        "Combined": "Avenge",
        "ID": "BG21_030"
    },
    {
        "Name": "Coldlight Seer",
        "Tier": "3",
        "Attack": "2",
        "Health": "3",
        "Cost": "3",
        "Type": "Murloc",
        "Keywords": "Battlecry",
        "Combined": "Murloc, Battlecry",
        "ID": "EX1_103"
    },
    {
        "Name": "Crackling Cyclone",
        "Tier": "3",
        "Attack": "4",
        "Health": "1",
        "Cost": "4",
        "Type": "Elemental",
        "Keywords": "Divine Shield, Windfury",
        "Combined": "Elemental, Divine Shield, Windfury",
        "ID": "BGS_119"
    },
    {
        "Name": "Deflect-o-Bot",
        "Tier": "3",
        "Attack": "3",
        "Health": "2",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Divine Shield",
        "Combined": "Mech, Divine Shield",
        "ID": "BGS_071"
    },
    {
        "Name": "Drakonid Enforcer",
        "Tier": "3",
        "Attack": "2",
        "Health": "4",
        "Cost": "6",
        "Type": "Dragon",
        "Keywords": "Divine Shield",
        "Combined": "Dragon, Divine Shield",
        "ID": "BGS_067"
    },
    {
        "Name": "Felfin Navigator",
        "Tier": "3",
        "Attack": "4",
        "Health": "4",
        "Cost": "4",
        "Type": "Murloc",
        "Keywords": "Battlecry",
        "Combined": "Murloc, Battlecry",
        "ID": "BT_010"
    },
    {
        "Name": "Gemsplitter",
        "Tier": "3",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Type": "Quilboar",
        "Keywords": "Divine Shield",
        "Combined": "Quilboar, Divine Shield",
        "ID": "BG21_037"
    },
    {
        "Name": "Houndmaster",
        "Tier": "3",
        "Attack": "4",
        "Health": "3",
        "Cost": "4",
        "Keywords": "Battlecry, Taunt",
        "Synergy": "Beast, Taunt",
        "Combined": "Beast, Taunt, Battlecry",
        "ID": "DS1_070"
    },
    {
        "Name": "Kathra'natir",
        "Tier": "3",
        "Attack": "5",
        "Health": "4",
        "Cost": "4",
        "Legendary": "Y",
        "Type": "Demon",
        "Keywords": "Aura, Immune",
        "Combined": "Demon, Aura, Immune",
        "ID": "BG21_039"
    },
    {
        "Name": "Khadgar",
        "Tier": "3",
        "Attack": "2",
        "Health": "2",
        "Cost": "2",
        "Legendary": "Y",
        "Combined": "",
        "ID": "DAL_575"
    },
    {
        "Name": "Monstrous Macaw",
        "Tier": "3",
        "Attack": "5",
        "Health": "3",
        "Cost": "3",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "BGS_078"
    },
    {
        "Name": "Rat Pack",
        "Tier": "3",
        "Attack": "2",
        "Health": "2",
        "Cost": "3",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "CFM_316"
    },
    {
        "Name": "Replicating Menace",
        "Tier": "3",
        "Attack": "3",
        "Health": "1",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Deathrattle, Magnetic",
        "Combined": "Mech, Deathrattle, Magnetic",
        "ID": "BOT_312"
    },
    {
        "Name": "Salty Looter",
        "Tier": "3",
        "Attack": "4",
        "Health": "5",
        "Cost": "4",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BGS_081"
    },
    {
        "Name": "Screwjank Clunker",
        "Tier": "3",
        "Attack": "2",
        "Health": "5",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Battlecry",
        "Combined": "Mech, Battlecry",
        "ID": "GVG_055"
    },
    {
        "Name": "Smogger",
        "Tier": "3",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Elemental",
        "Keywords": "Battlecry",
        "Combined": "Elemental, Battlecry",
        "ID": "BG21_021"
    },
    {
        "Name": "Soul Devourer",
        "Tier": "3",
        "Attack": "3",
        "Health": "3",
        "Cost": "4",
        "Type": "Demon",
        "Keywords": "Battlecry",
        "Combined": "Demon, Battlecry",
        "ID": "BGS_059"
    },
    {
        "Name": "Soul Juggler",
        "Tier": "3",
        "Attack": "3",
        "Health": "5",
        "Cost": "3",
        "Synergy": "Demon",
        "Combined": "Demon",
        "ID": "BGS_002"
    },
    {
        "Name": "Southsea Strongarm",
        "Tier": "3",
        "Attack": "4",
        "Health": "3",
        "Cost": "5",
        "Type": "Pirate",
        "Keywords": "Battlecry",
        "Combined": "Pirate, Battlecry",
        "ID": "BGS_048"
    },
    {
        "Name": "Stasis Elemental",
        "Tier": "3",
        "Attack": "4",
        "Health": "4",
        "Cost": "4",
        "Type": "Elemental",
        "Keywords": "Battlecry",
        "Combined": "Elemental, Battlecry",
        "ID": "BGS_122"
    },
    {
        "Name": "Swolefin",
        "Tier": "3",
        "Attack": "4",
        "Health": "2",
        "Cost": "3",
        "Type": "Murloc",
        "Keywords": "Battlecry",
        "Combined": "Murloc, Battlecry",
        "ID": "BG21_010"
    },
    {
        "Name": "Thorncaller",
        "Tier": "3",
        "Attack": "4",
        "Health": "3",
        "Cost": "5",
        "Type": "Quilboar",
        "Keywords": "Battlecry, Deathrattle",
        "Combined": "Quilboar, Battlecry, Deathrattle",
        "ID": "BG20_105"
    },
    {
        "Name": "Twilight Emissary",
        "Tier": "3",
        "Attack": "4",
        "Health": "4",
        "Cost": "6",
        "Type": "Dragon",
        "Keywords": "Battlecry, Taunt",
        "Combined": "Dragon, Battlecry, Taunt",
        "ID": "BGS_038"
    },
    {
        "Name": "Annoy-o-Module",
        "Tier": "4",
        "Attack": "2",
        "Health": "4",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Divine Shield, Magnetic, Taunt",
        "Combined": "Mech, Divine Shield, Magnetic, Taunt",
        "ID": "BOT_911"
    },
    {
        "Name": "Bigfernal",
        "Tier": "4",
        "Attack": "6",
        "Health": "6",
        "Cost": "5",
        "Type": "Demon",
        "Combined": "Demon",
        "ID": "BGS_204"
    },
    {
        "Name": "Bonker",
        "Tier": "4",
        "Attack": "3",
        "Health": "7",
        "Cost": "5",
        "Type": "Quilboar",
        "Keywords": "Windfury",
        "Combined": "Quilboar, Windfury",
        "ID": "BG20_104"
    },
    {
        "Name": "Cave Hydra",
        "Tier": "4",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Type": "Beast",
        "Combined": "Beast",
        "ID": "LOOT_078"
    },
    {
        "Name": "Champion of Y'Shaarj",
        "Tier": "4",
        "Attack": "4",
        "Health": "4",
        "Cost": "4",
        "Keywords": "Taunt",
        "Synergy": "Taunt",
        "Combined": "Taunt",
        "ID": "BGS_111"
    },
    {
        "Name": "Cobalt Scalebane",
        "Tier": "4",
        "Attack": "5",
        "Health": "5",
        "Cost": "5",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "ICC_029"
    },
    {
        "Name": "Dazzling Lightspawn",
        "Tier": "4",
        "Attack": "2",
        "Health": "5",
        "Cost": "4",
        "Type": "Elemental",
        "Keywords": "Avenge",
        "Combined": "Elemental, Avenge",
        "ID": "BG21_020"
    },
    {
        "Name": "Defender of Argus",
        "Tier": "4",
        "Attack": "3",
        "Health": "3",
        "Cost": "4",
        "Keywords": "Battlecry, Taunt",
        "Synergy": "Taunt",
        "Combined": "Taunt, Battlecry",
        "ID": "EX1_093"
    },
    {
        "Name": "Dynamic Duo",
        "Tier": "4",
        "Attack": "5",
        "Health": "6",
        "Cost": "4",
        "Type": "Quilboar",
        "Keywords": "Taunt",
        "Combined": "Quilboar, Taunt",
        "ID": "BG20_207"
    },
    {
        "Name": "Goldgrubber",
        "Tier": "4",
        "Attack": "4",
        "Health": "4",
        "Cost": "5",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BGS_066"
    },
    {
        "Name": "Grease Bot",
        "Tier": "4",
        "Attack": "3",
        "Health": "6",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Divine Shield",
        "Combined": "Mech, Divine Shield",
        "ID": "BG21_024"
    },
    {
        "Name": "Groundshaker",
        "Tier": "4",
        "Attack": "2",
        "Health": "6",
        "Cost": "6",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_106"
    },
    {
        "Name": "Impatient Doomsayer",
        "Tier": "4",
        "Attack": "2",
        "Health": "6",
        "Cost": "3",
        "Keywords": "Avenge",
        "Synergy": "Demon",
        "Combined": "Demon, Avenge",
        "ID": "BG21_007"
    },
    {
        "Name": "Majordomo Executus",
        "Tier": "4",
        "Attack": "6",
        "Health": "3",
        "Cost": "6",
        "Legendary": "Y",
        "Synergy": "Elemental",
        "Combined": "Elemental",
        "ID": "BGS_105"
    },
    {
        "Name": "Mechano-Egg",
        "Tier": "4",
        "Attack": "0",
        "Health": "5",
        "Cost": "5",
        "Type": "Mech",
        "Keywords": "Deathrattle",
        "Combined": "Mech, Deathrattle",
        "ID": "BOT_537"
    },
    {
        "Name": "Mechano-Tank",
        "Tier": "4",
        "Attack": "5",
        "Health": "3",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Avenge",
        "Combined": "Mech, Avenge",
        "ID": "BG21_023"
    },
    {
        "Name": "Menagerie Jug",
        "Tier": "4",
        "Attack": "3",
        "Health": "3",
        "Cost": "5",
        "Keywords": "Battlecry",
        "Synergy": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar, Battlecry",
        "ID": "BGS_083"
    },
    {
        "Name": "Necrolyte",
        "Tier": "4",
        "Attack": "3",
        "Health": "3",
        "Cost": "3",
        "Type": "Quilboar",
        "Keywords": "Battlecry",
        "Combined": "Quilboar, Battlecry",
        "ID": "BG20_202"
    },
    {
        "Name": "Peggy Brittlebone",
        "Tier": "4",
        "Attack": "6",
        "Health": "5",
        "Cost": "4",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BG21_016"
    },
    {
        "Name": "Prestor's Pyrospawn",
        "Tier": "4",
        "Attack": "3",
        "Health": "5",
        "Cost": "4",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BG21_012"
    },
    {
        "Name": "Primalfin Lookout",
        "Tier": "4",
        "Attack": "3",
        "Health": "2",
        "Cost": "3",
        "Type": "Murloc",
        "Keywords": "Battlecry, Discover",
        "Combined": "Murloc, Battlecry, Discover",
        "ID": "BGS_020"
    },
    {
        "Name": "Prized Promo-Drake",
        "Tier": "4",
        "Attack": "3",
        "Health": "3",
        "Cost": "4",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BG21_014"
    },
    {
        "Name": "Reanimating Rattler",
        "Tier": "4",
        "Attack": "5",
        "Health": "3",
        "Cost": "4",
        "Type": "Beast",
        "Keywords": "Battlecry, Reborn",
        "Combined": "Beast, Battlecry, Reborn",
        "ID": "BG21_003"
    },
    {
        "Name": "Recycling Wraith",
        "Tier": "4",
        "Attack": "5",
        "Health": "4",
        "Cost": "3",
        "Type": "Elemental",
        "Combined": "Elemental",
        "ID": "BG21_040"
    },
    {
        "Name": "Ring Matron",
        "Tier": "4",
        "Attack": "6",
        "Health": "4",
        "Cost": "6",
        "Type": "Demon",
        "Keywords": "Deathrattle, Taunt",
        "Combined": "Demon, Deathrattle, Taunt",
        "ID": "DMF_533"
    },
    {
        "Name": "Ripsnarl Captain",
        "Tier": "4",
        "Attack": "4",
        "Health": "6",
        "Cost": "4",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BGS_056"
    },
    {
        "Name": "Savannah Highmane",
        "Tier": "4",
        "Attack": "6",
        "Health": "5",
        "Cost": "6",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "EX1_534"
    },
    {
        "Name": "Strongshell Scavenger",
        "Tier": "4",
        "Attack": "2",
        "Health": "3",
        "Cost": "4",
        "Keywords": "Battlecry, Taunt",
        "Synergy": "Taunt",
        "Combined": "Taunt, Battlecry",
        "ID": "ICC_807"
    },
    {
        "Name": "Tarecgosa",
        "Tier": "4",
        "Attack": "4",
        "Health": "4",
        "Cost": "3",
        "Legendary": "Y",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BG21_015"
    },
    {
        "Name": "Wildfire Elemental",
        "Tier": "4",
        "Attack": "7",
        "Health": "4",
        "Cost": "6",
        "Type": "Elemental",
        "Combined": "Elemental",
        "ID": "BGS_126"
    },
    {
        "Name": "Witchwing Nestmatron",
        "Tier": "4",
        "Attack": "3",
        "Health": "5",
        "Cost": "4",
        "Keywords": "Avenge, Battlecry",
        "Combined": "Avenge, Battlecry",
        "ID": "BG21_038"
    },
    {
        "Name": "Agamaggan, the Great Boar",
        "Tier": "5",
        "Attack": "6",
        "Health": "6",
        "Cost": "5",
        "Legendary": "Y",
        "Type": "Quilboar",
        "Keywords": "Aura",
        "Combined": "Quilboar, Aura",
        "ID": "BG20_205"
    },
    {
        "Name": "Aggem Thorncurse",
        "Tier": "5",
        "Attack": "3",
        "Health": "6",
        "Cost": "6",
        "Legendary": "Y",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_302"
    },
    {
        "Name": "Annihilan Battlemaster",
        "Tier": "5",
        "Attack": "3",
        "Health": "1",
        "Cost": "8",
        "Type": "Demon",
        "Keywords": "Battlecry",
        "Combined": "Demon, Battlecry",
        "ID": "BGS_010"
    },
    {
        "Name": "Baby Krush",
        "Tier": "5",
        "Attack": "7",
        "Health": "7",
        "Cost": "0",
        "Legendary": "Y",
        "Type": "Beast",
        "Combined": "Beast",
        "ID": "BG22_001"
    },
    {
        "Name": "Baron Rivendare",
        "Tier": "5",
        "Attack": "1",
        "Health": "7",
        "Cost": "4",
        "Legendary": "Y",
        "Keywords": "Aura, Deathrattle",
        "Combined": "Aura, Deathrattle",
        "ID": "FP1_031"
    },
    {
        "Name": "Brann Bronzebeard",
        "Tier": "5",
        "Attack": "2",
        "Health": "4",
        "Cost": "3",
        "Legendary": "Y",
        "Keywords": "Aura, Battlecry",
        "Combined": "Aura, Battlecry",
        "ID": "LOE_077"
    },
    {
        "Name": "Cap'n Hoggarr",
        "Tier": "5",
        "Attack": "6",
        "Health": "6",
        "Cost": "6",
        "Legendary": "Y",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BGS_072"
    },
    {
        "Name": "Deadly Spore",
        "Tier": "5",
        "Attack": "1",
        "Health": "1",
        "Cost": "4",
        "Keywords": "Poisonous",
        "Combined": "Poisonous",
        "ID": "BGS_131"
    },
    {
        "Name": "Holy Mecherel",
        "Tier": "5",
        "Attack": "6",
        "Health": "4",
        "Cost": "4",
        "Type": "Mech",
        "Keywords": "Divine Shield",
        "Combined": "Mech, Divine Shield",
        "ID": "BG20_401"
    },
    {
        "Name": "Insatiable Ur'zul",
        "Tier": "5",
        "Attack": "4",
        "Health": "6",
        "Cost": "5",
        "Type": "Demon",
        "Keywords": "Taunt",
        "Combined": "Demon, Taunt",
        "ID": "BG21_004"
    },
    {
        "Name": "Kangor's Apprentice",
        "Tier": "5",
        "Attack": "3",
        "Health": "6",
        "Cost": "9",
        "Keywords": "Deathrattle",
        "Synergy": "Mech",
        "Combined": "Mech, Deathrattle",
        "ID": "BGS_012"
    },
    {
        "Name": "King Bagurgle",
        "Tier": "5",
        "Attack": "6",
        "Health": "3",
        "Cost": "6",
        "Legendary": "Y",
        "Type": "Murloc",
        "Keywords": "Battlecry, Deathrattle",
        "Combined": "Murloc, Battlecry, Deathrattle",
        "ID": "BGS_030"
    },
    {
        "Name": "Lightfang Enforcer",
        "Tier": "5",
        "Attack": "2",
        "Health": "2",
        "Cost": "6",
        "Synergy": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "ID": "BGS_009"
    },
    {
        "Name": "Mama Bear",
        "Tier": "5",
        "Attack": "5",
        "Health": "5",
        "Cost": "8",
        "Type": "Beast",
        "Combined": "Beast",
        "ID": "BGS_021"
    },
    {
        "Name": "Master of Realities",
        "Tier": "5",
        "Attack": "6",
        "Health": "6",
        "Cost": "6",
        "Keywords": "Taunt",
        "Synergy": "Taunt, Elemental",
        "Combined": "Taunt, Elemental",
        "ID": "BG21_036"
    },
    {
        "Name": "Murozond",
        "Tier": "5",
        "Attack": "5",
        "Health": "5",
        "Cost": "7",
        "Legendary": "Y",
        "Type": "Dragon",
        "Keywords": "Battlecry",
        "Combined": "Dragon, Battlecry",
        "ID": "BGS_043"
    },
    {
        "Name": "Mythrax the Unraveler",
        "Tier": "5",
        "Attack": "4",
        "Health": "4",
        "Cost": "5",
        "Legendary": "Y",
        "Synergy": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "ID": "BGS_202"
    },
    {
        "Name": "Nomi, Kitchen Nightmare",
        "Tier": "5",
        "Attack": "4",
        "Health": "4",
        "Cost": "7",
        "Legendary": "Y",
        "Synergy": "Elemental",
        "Combined": "Elemental",
        "ID": "BGS_104"
    },
    {
        "Name": "Palescale Crocolisk",
        "Tier": "5",
        "Attack": "4",
        "Health": "5",
        "Cost": "4",
        "Type": "Beast",
        "Keywords": "Avenge, Deathrattle",
        "Combined": "Beast, Avenge, Deathrattle",
        "ID": "BG21_001"
    },
    {
        "Name": "Razorgore, the Untamed",
        "Tier": "5",
        "Attack": "4",
        "Health": "6",
        "Cost": "8",
        "Legendary": "Y",
        "Type": "Dragon",
        "Combined": "Dragon",
        "ID": "BGS_036"
    },
    {
        "Name": "SI:Sefin",
        "Tier": "5",
        "Attack": "2",
        "Health": "6",
        "Cost": "5",
        "Type": "Murloc",
        "Keywords": "Avenge, Poisonous",
        "Combined": "Murloc, Avenge, Poisonous",
        "ID": "BG21_009"
    },
    {
        "Name": "Tavern Tempest",
        "Tier": "5",
        "Attack": "4",
        "Health": "4",
        "Cost": "5",
        "Type": "Elemental",
        "Keywords": "Battlecry",
        "Combined": "Elemental, Battlecry",
        "ID": "BGS_123"
    },
    {
        "Name": "Tony Two-Tusk",
        "Tier": "5",
        "Attack": "4",
        "Health": "6",
        "Cost": "5",
        "Type": "Pirate",
        "Keywords": "Avenge",
        "Combined": "Pirate, Avenge",
        "ID": "BG21_031"
    },
    {
        "Name": "Voidlord",
        "Tier": "5",
        "Attack": "3",
        "Health": "9",
        "Cost": "9",
        "Type": "Demon",
        "Keywords": "Deathrattle, Taunt",
        "Combined": "Demon, Deathrattle, Taunt",
        "ID": "LOOT_368"
    },
    {
        "Name": "Amalgadon",
        "Tier": "6",
        "Attack": "6",
        "Health": "6",
        "Cost": "8",
        "Type": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar",
        "Keywords": "Battlecry, Adapt",
        "Combined": "Beast, Demon, Dragon, Elemental, Mech, Murloc, Pirate, Quilboar, Battlecry, Adapt",
        "ID": "BGS_069"
    },
    {
        "Name": "Captain Flat Tusk",
        "Tier": "6",
        "Attack": "9",
        "Health": "6",
        "Cost": "6",
        "Legendary": "Y",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_206"
    },
    {
        "Name": "Charlga",
        "Tier": "6",
        "Attack": "4",
        "Health": "4",
        "Cost": "6",
        "Legendary": "Y",
        "Type": "Quilboar",
        "Combined": "Quilboar",
        "ID": "BG20_303"
    },
    {
        "Name": "Dread Admiral Eliza",
        "Tier": "6",
        "Attack": "6",
        "Health": "7",
        "Cost": "6",
        "Legendary": "Y",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BGS_047"
    },
    {
        "Name": "Famished Felbat",
        "Tier": "6",
        "Attack": "9",
        "Health": "5",
        "Cost": "6",
        "Type": "Demon",
        "Combined": "Demon",
        "ID": "BG21_005"
    },
    {
        "Name": "Foe Reaper 4000",
        "Tier": "6",
        "Attack": "6",
        "Health": "9",
        "Cost": "8",
        "Legendary": "Y",
        "Type": "Mech",
        "Combined": "Mech",
        "ID": "GVG_113"
    },
    {
        "Name": "Friend of a Friend",
        "Tier": "6",
        "Attack": "5",
        "Health": "6",
        "Cost": "0",
        "Keywords": "Battlecry, Discover",
        "Combined": "Battlecry, Discover",
        "ID": "BG22_404"
    },
    {
        "Name": "Gentle Djinni",
        "Tier": "6",
        "Attack": "4",
        "Health": "5",
        "Cost": "6",
        "Type": "Elemental",
        "Keywords": "Deathrattle, Taunt",
        "Combined": "Elemental, Deathrattle, Taunt",
        "ID": "BGS_121"
    },
    {
        "Name": "Ghastcoiler",
        "Tier": "6",
        "Attack": "7",
        "Health": "7",
        "Cost": "6",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "BGS_008"
    },
    {
        "Name": "Goldrinn, the Great Wolf",
        "Tier": "6",
        "Attack": "4",
        "Health": "4",
        "Cost": "8",
        "Legendary": "Y",
        "Type": "Beast",
        "Keywords": "Deathrattle",
        "Combined": "Beast, Deathrattle",
        "ID": "BGS_018"
    },
    {
        "Name": "Imp Mama",
        "Tier": "6",
        "Attack": "6",
        "Health": "10",
        "Cost": "8",
        "Type": "Demon",
        "Keywords": "Taunt",
        "Combined": "Demon, Taunt",
        "ID": "BGS_044"
    },
    {
        "Name": "Kalecgos, Arcane Aspect",
        "Tier": "6",
        "Attack": "4",
        "Health": "12",
        "Cost": "8",
        "Legendary": "Y",
        "Type": "Dragon",
        "Keywords": "Battlecry",
        "Combined": "Dragon, Battlecry",
        "ID": "BGS_041"
    },
    {
        "Name": "Lil' Rag",
        "Tier": "6",
        "Attack": "6",
        "Health": "6",
        "Cost": "4",
        "Legendary": "Y",
        "Type": "Elemental",
        "Combined": "Elemental",
        "ID": "BGS_100"
    },
    {
        "Name": "Nadina the Red",
        "Tier": "6",
        "Attack": "7",
        "Health": "4",
        "Cost": "6",
        "Legendary": "Y",
        "Keywords": "Deathrattle, Divine Shield",
        "Synergy": "Dragon",
        "Combined": "Dragon, Deathrattle, Divine Shield",
        "ID": "BGS_040"
    },
    {
        "Name": "Nosy Looter",
        "Tier": "6",
        "Attack": "9",
        "Health": "8",
        "Cost": "6",
        "Type": "Pirate",
        "Combined": "Pirate",
        "ID": "BG21_019"
    },
    {
        "Name": "Omega Buster",
        "Tier": "6",
        "Attack": "5",
        "Health": "5",
        "Cost": "6",
        "Type": "Mech",
        "Keywords": "Deathrattle",
        "Combined": "Mech, Deathrattle",
        "ID": "BG21_025"
    },
    {
        "Name": "Seafood Slinger",
        "Tier": "6",
        "Attack": "5",
        "Health": "5",
        "Cost": "6",
        "Keywords": "Battlecry",
        "Synergy": "Murloc",
        "Combined": "Murloc, Battlecry",
        "ID": "BG21_011"
    },
    {
        "Name": "Zapp Slywick",
        "Tier": "6",
        "Attack": "7",
        "Health": "10",
        "Cost": "8",
        "Legendary": "Y",
        "Keywords": "Windfury",
        "Combined": "Windfury",
        "ID": "BGS_022"
    }
]

export default minions;