/** @format */

// eternals with skills listed in arrays
const eternals = [
  {
    eternal_name: "Thena",
    image: "./assets/thena.jpg",
    skills: ["matter manipulation", "love", "grounded", "agility"],
  },
  {
    eternal_name: "Kingo",
    image: "./assets/kingo.jpg",
    skills: ["energy manipulation", "swordsman", "dancer", "agility"],
  },
  {
    eternal_name: "Sprite",
    image: "./assets/sprite.jpg",
    skills: ["trickery", "illusion", "telekinesis", "love", "agility"],
  },
  {
    eternal_name: "Phastos",
    image: "./assets/phastos.jpg",
    skills: ["intelligence", "invention", "agility"],
  },
  {
    eternal_name: "Makkari",
    image: "./assets/makkari.jpg",
    skills: ["speed", "multilingual", "acrobat", "agility"],
  },
];

// Generate list of eternals and skills list on page
//
const setUpPage = () => {
  let skillSet = [];   // Several skills are in common, 
                       // they will be collated here

  // Get references to DOM elements
  const eternalListRef = document.querySelector("#eternals");
  const skillsRef = document.querySelector("#skills");

  // In this foreach, the character names in the eternals array are created as 
  // list items, and
  // each array of skills is joined without duplicates, with joinSkills function
  eternals.forEach((eternal) => {
    const listItem = document.createElement("li");
    listItem.textContent = eternal.eternal_name;
    joinSkills(skillSet, eternal.skills);       // join the skills, no duplicates
    eternalListRef.appendChild(listItem);       // add the eternal li item
  });
  // After the foreach, we now have all of the skills to present on the page
  skillsRef.textContent = skillSet.join(" - ");
};

// This function merges the 2 given arrays, ensuring that there are no duplicates
// just using find and foreach
//
const joinSkills = (skillSet, individualSkills) => {
  individualSkills.forEach((skill) => {
    let gotThatSkill = skillSet.find((existingSkill) => {
      if (existingSkill == skill) return true;
    });
    console.log("got that skill", gotThatSkill, individualSkills);
    if (!gotThatSkill) skillSet.push(skill);
  });
  return skillSet;
};

// Function to get the value typed by user, start find process, 
// show result
//
const getRequiredSkill = () => {
  const skillRef = document.querySelector("#skill");
  const skillRequired = skillRef.value;
  let allWithSkill = findEternal(skillRequired);
  showAllWithSkill(allWithSkill);
};

// Take the skill input and look for it, utility function
//
const findEternal = (skillNeeded) => {
  eternalsWithThatSkill = [];
  eternals.forEach((eternal) => {
    let eternalSkillSet = eternal.skills;
    let hasSkill = eternalSkillSet.find((skill) => {
      if (skill == skillNeeded) return skill;
    });
    if (hasSkill) eternalsWithThatSkill.push(eternal);
    console.log(hasSkill);
  });
  return eternalsWithThatSkill;
};

// Show the selected list of (found) eternals characters
//
const showAllWithSkill = (eternals) => {
  let eternalsWithSkillRef = document.querySelector("#eternalsWithSkill");
  // Clear out any existing information from a prior search
  eternalsWithSkillRef.innerHTML = "";
  console.log(eternals);

  eternals.forEach((eternal) => {
    let divSkillRef = document.createElement("div");
    divSkillRef.style =
      "border:2px dotted green;margin:2px;width:110px;height:110px;";
    let eternalImageRef = document.createElement("img");
    eternalImageRef.style = "width:100px;height:100px;padding:2px;";
    eternalImageRef.src = eternal.image;
    let eternalLabelRef = document.createElement("label");
    eternalLabelRef.style =
      "position: relative; top:-20px;background-color: beige;";
    eternalLabelRef.textContent = eternal.eternal_name;
    divSkillRef.appendChild(eternalImageRef);
    divSkillRef.appendChild(eternalLabelRef);
    eternalsWithSkillRef.append(divSkillRef);
  });
};


// Create the list and skills
setUpPage();
