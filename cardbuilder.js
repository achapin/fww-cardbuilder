
class character {
    name = "";
    faction = "";
    unique = false;
    str = 0;
    per = 0;
    end = 0;
    cha = 0;
    int = 0;
    agi = 0;
    luc = 0;
    arm_phs = 0;
    arm_eng = 0;
    arm_rad = 0;
    skills = {
        "str" : [],
        "per" : [],
        "end" : [],
        "cha" : [],
        "int" : [],
        "agi" : [],
        "luc" : []
    };
}

skills = {
    "health" : "images/Health.png",
    "heavy_weapons" : "images/Heavy Weapon.png",
    "melee" : "images/Melee.png",
    "pistol" : "images/Pistol.png",
    "rifle" : "images/Rifle.png",
    "battle_cry_resist" : "images/Resist Battle Cry.png",
    "battle_cry_orange" : "images/Battle Cry (Orange Range).png",
    "battle_cry_yellow" : "images/Battle Cry (Yellow Range).png",
    "computers" : "images/Computers (Expertise).png",
    "lockpick" : "images/Lockpick (Expertise).png",
    "search" : "images/Search (Expertise).png",
    "throw-green" : "images/Throw (Green Range).png",
    "throw-blue" : "images/Throw (Blue Range).png",
    "throw-black" : "images/Throw (Black Range).png",
    "presence-yellow" : "images/Presence (Yellow Range).png",
    "presence-red" : "images/Presence (Red Range).png",
    "presence-green" : "images/Presence (Green Range).png",
    "presence-blue" : "images/Presence (Blue Range).png",
    "presence-black" : "images/Presence (Black Range).png",
}

attribute_selection = [
    "-",
    "STR",
    "PER",
    "END",
    "CHA",
    "INT",
    "AGI",
    "LUC"
]

skill_selects = [
    "skills-health",
    "skills-heavyweapons",
    "skills-melee",
    "skills-pistol",
    "skills-rifle",
    "skills-computers",
    "skills-search",
    "skills-lockpick",
    "skills-presence",
    "skills-thrown",
    "skills-battlecryresist",
    "skills-battlecry"
]

var str_value;
var per_value;
var end_value;
var cha_value;
var int_value;
var agi_value;
var luc_value;

var str_skills;
var per_skills;
var end_skills;
var cha_skills;
var int_skills;
var agi_skills;
var luc_skills;

var arm_phs;
var arm_eng;
var arm_rad;
var nameDisp;
var faction;
var unique;
var abilities;
var attributes;

var str_value_in;
var per_value_in;
var end_value_in;
var cha_value_in;
var int_value_in;
var agi_value_in;
var luc_value_in;
var arm_phs_in;
var arm_eng_in;
var arm_rad_in;
var nameInput;
var factionIn;
var movement;
var uniqueIn;
var abilitiesIn;
var awarenessRange;
var quick_prepare;
var quick_move;
var quick_attack
var quick_expertise;
var battlecry_immunity;
var unable_to_climb;
var unimpeded;
var dog_handler;
var critical;
var lucky;

skill_order = {
    "battlecry_resist":{},
    "battlecry":{},
    "presence":{}, 
    "thrown":{}, 
    "lockpick":{},
    "computers":{},
    "search":{},
    "heavy_weapons":{},
    "melee":{},
    "pistol":{},
    "rifle":{},
    "health":{}
}

skill_displays = [
];

skill_map = {
};

function initialize()
{
    //Display elements
    str_value = document.getElementById("str-value");
    per_value = document.getElementById("per-value");
    end_value = document.getElementById("end-value");
    cha_value = document.getElementById("cha-value");
    int_value = document.getElementById("int-value");
    agi_value = document.getElementById("agi-value");
    luc_value = document.getElementById("luc-value");
    str_skills = document.getElementById("str-skills");
    per_skills = document.getElementById("per-skills");
    end_skills = document.getElementById("end-skills");
    cha_skills = document.getElementById("cha-skills");
    int_skills = document.getElementById("int-skills");
    agi_skills = document.getElementById("agi-skills");
    luc_skills = document.getElementById("luc-skills");
    arm_phs = document.getElementById("arm-phs");
    arm_eng = document.getElementById("arm-eng");
    arm_rad = document.getElementById("arm-rad");
    nameField = document.getElementById("name");
    faction = document.getElementById("factions");
    movement = document.getElementById("movement");
    unique = document.getElementById("unique");
    abilities = document.getElementById("abilities");
    attributes = document.getElementById("attributes");

    //Input elements
    str_value_in = document.getElementById("str");
    per_value_in = document.getElementById("per");
    end_value_in = document.getElementById("end");
    cha_value_in = document.getElementById("cha");
    int_value_in = document.getElementById("int");
    agi_value_in = document.getElementById("agi");
    luc_value_in = document.getElementById("luc");
    arm_phs_in = document.getElementById("arm-phs-in");
    arm_eng_in = document.getElementById("arm-eng-in");
    arm_rad_in = document.getElementById("arm-rad-in");
    nameInput = document.getElementById("name-in");
    factionIn = document.getElementById("factions-in");
    moveIn = document.getElementById("move");
    chargeIn = document.getElementById("charge");
    uniqueIn = document.getElementById("unique-in");
    abilitiesIn = document.getElementById("specialRules");

    awarenessRange = document.getElementById("awareness-range");
    quick_prepare = document.getElementById("quick-prepare");
    quick_move = document.getElementById("quick-move");
    quick_attack = document.getElementById("quick-attack");
    quick_expertise = document.getElementById("quick-expertise");
    battlecry_immunity = document.getElementById("battlecry-immunity");
    unable_to_climb = document.getElementById("unable-to-climb");
    unimpeded = document.getElementById("unimpeded");
    dog_handler = document.getElementById("dog-handler");
    critical = document.getElementById("critical");
    lucky = document.getElementById("lucky");    

    //Add options for skills
    skill_selects.forEach(element => {
        var dropdown = document.getElementById(element);
        if(dropdown == null) {
            alert("no dropdown called " + element + " found");
        }
        attribute_selection.forEach(attribute => {
            dropdown.add(new Option(attribute));
        })
    });

    skill_order.battlecry_resist.image = "images/Resist Battle Cry.png";
    skill_order.battlecry_resist.selector = document.getElementById("skills-battlecryresist");
    skill_order.battlecry.selector = document.getElementById("skills-battlecry");
    skill_order.battlecry.selector_range = document.getElementById("skills-battlecry-range");
    skill_order.battlecry.ranges = {
        "Orange" : "images/Battle Cry (Orange Range).png",
        "Yellow" : "images/Battle Cry (Yellow Range).png",
    }
    skill_order.presence.selector = document.getElementById("skills-presence");
    skill_order.presence.selector_range = document.getElementById("skills-presence-range");
    skill_order.presence.ranges = {
        "Yellow" : "images/Presence (Yellow Range).png",
        "Red" : "images/Presence (Red Range).png",
        "Green" : "images/Presence (Green Range).png",
        "Blue" : "images/Presence (Blue Range).png",
        "Black" : "images/Presence (Black Range).png",
    }
    skill_order.thrown.selector = document.getElementById("skills-thrown");
    skill_order.thrown.selector_range = document.getElementById("skills-thrown-range");
    skill_order.thrown.ranges = {
        "Green" : "images/Throw (Green Range).png",
        "Blue" : "images/Throw (Blue Range).png",
        "Black" : "images/Throw (Black Range).png",
    }
    skill_order.lockpick.selector = document.getElementById("skills-lockpick");
    skill_order.lockpick.image = "images/Lockpick (Expertise).png";
    skill_order.computers.selector = document.getElementById("skills-computers");
    skill_order.computers.image = "images/Computers (Expertise).png";
    skill_order.search.selector = document.getElementById("skills-search");
    skill_order.search.image = "images/Search (Expertise).png";
    skill_order.heavy_weapons.selector = document.getElementById("skills-heavyweapons");
    skill_order.heavy_weapons.image = "images/Heavy Weapon.png";
    skill_order.melee.selector = document.getElementById("skills-melee");
    skill_order.melee.image = "images/Melee.png";
    skill_order.pistol.selector = document.getElementById("skills-pistol");
    skill_order.pistol.image = "images/Pistol.png";
    skill_order.rifle.selector = document.getElementById("skills-rifle");
    skill_order.rifle.image = "images/Rifle.png";
    skill_order.health.selector = document.getElementById("skills-health");
    skill_order.health.image = "images/Health.png";

    skill_displays.push(str_skills);
    skill_displays.push(per_skills);
    skill_displays.push(end_skills);
    skill_displays.push(cha_skills);
    skill_displays.push(int_skills);
    skill_displays.push(agi_skills);
    skill_displays.push(luc_skills);

    skill_map["STR"] = str_skills;
    skill_map["PER"] = per_skills;
    skill_map["END"] = end_skills;
    skill_map["CHA"] = cha_skills;
    skill_map["INT"] = int_skills;
    skill_map["AGI"] = agi_skills;
    skill_map["LUC"] = luc_skills;

    updateValues();
}

function updateValues() {
    nameField.innerHTML = nameInput.value.toUpperCase();
    faction.innerHTML = factionIn.value.toUpperCase();

    str_value.innerHTML = "S<span>TR</span> " + str_value_in.value;
    per_value.innerHTML = "P<span>ER</span> " + per_value_in.value;
    end_value.innerHTML = "E<span>ND</span> " + end_value_in.value;
    cha_value.innerHTML = "C<span>HA</span> " + cha_value_in.value;
    int_value.innerHTML = "I<span>NT</span> " + int_value_in.value;
    agi_value.innerHTML = "A<span>GI</span> " + agi_value_in.value;
    luc_value.innerHTML = "L<span>UC</span> " + luc_value_in.value;

    arm_phs.innerHTML = armorValue(arm_phs_in.value);
    arm_eng.innerHTML = armorValue(arm_eng_in.value);
    arm_rad.innerHTML = armorValue(arm_rad_in.value);

    movement.innerHTML = "<img src=\"images/Move (" + moveIn.value + " Range).png\" /><img src=\"images/Move (" + chargeIn.value + " Range).png\" />"

    unique.innerHTML = uniqueIn.checked ? "<img src=\"images/unique.png\" />" : "";

    skill_displays.forEach(display => {
        display.innerHTML = "";
    });

    for (const [key, value] of Object.entries(skill_order)) {
        if(skill_map.hasOwnProperty(value.selector.value)){
            var display = skill_map[value.selector.value];
            if(value.hasOwnProperty("ranges"))
            {
                display.innerHTML = display.innerHTML + "<img src=\"" + value.ranges[value.selector_range.value] + "\" />";
            } else {
                display.innerHTML = display.innerHTML + "<img src=\"" + value.image + "\" />";
            }
        }
    }

    abilities.innerHTML = abilitiesIn.value;

    attributes.innerHTML = "<img src='images/Awareness (" + awarenessRange.value + " Range).png' />";
    if(quick_prepare.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Prepare (Quick Action).png' />";
    }
    if(quick_move.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Movement (Quick Action).png' />";
    }
    if(quick_attack.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Attack (Quick Action).png' />";
    }
    if(quick_expertise.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Expertise (Quick Action).png' />";
    }
    if(battlecry_immunity.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Immunity to Battle Cry.png' />";
    }
    if(unable_to_climb.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Inability To Climb.png' />";
    }
    if(unimpeded.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Unimpeded.png' />";
    }
    if(dog_handler.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Dog Handler (Aura Ability).png' />";
    }
    if(critical.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Critical Point.png' />";
    }
    if(lucky.checked){
        attributes.innerHTML = attributes.innerHTML + "<img src='images/Luck.png' />";
    }
}

function armorValue(input){
    if(input == "X" || input == "-") return input;
    if(!isNaN(parseInt(input))) {
        return input;
    }
    return "X";
}