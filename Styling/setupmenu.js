var folder = localStorage.getItem("currentFolder")
characterDropdownFolder = "."
classesDropdownFolder = "."
homeDropdownFolder = "."
if(folder == "Characters"){
	characterDropdownFolder = "."
	classesDropdownFolder = "../Classes"
	homeDropdownFolder = ".."
}
if(folder == "Classes"){
	characterDropdownFolder = "../Characters"
	classesDropdownFolder = "."
	homeDropdownFolder = ".."
}
if(folder == "Top"){
	characterDropdownFolder = "Characters"
	classesDropdownFolder = "Classes"
	homeDropdownFolder = "."
}
var home = document.createElement("a");
home.href= homeDropdownFolder + "/abbydnd.html";
home.innerHTML = "Home"
var characterDropdown = document.createElement("div");
characterDropdown.setAttribute('class',"dropdown");
var characterDropdownButton = document.createElement("button");
characterDropdownButton.setAttribute('class',"dropbtn");
characterDropdownButton.innerHTML="Characters <i class='fa fa-caret-down'></i>"
var characterDropdownContent = document.createElement("div");
characterDropdownContent.setAttribute('class',"dropdown-content");
var zesstra = document.createElement("a");
zesstra.href= characterDropdownFolder + "/zesstra.html";
zesstra.innerHTML = "Zesstra"
var reuben = document.createElement("a");
reuben.href=characterDropdownFolder + "/reuben.html";
reuben.innerHTML="Reuben"
characterDropdownContent.append(zesstra)
characterDropdownContent.append(reuben)
characterDropdown.appendChild(characterDropdownButton)
characterDropdown.appendChild(characterDropdownContent)
var classDropdown = document.createElement("div");
classDropdown.setAttribute('class',"dropdown");
var classDropdownButton = document.createElement("button");
classDropdownButton.setAttribute('class',"dropbtn");
classDropdownButton.innerHTML="Classes <i class='fa fa-caret-down'></i>"
var classDropdownContent = document.createElement("div");
classDropdownContent.setAttribute('class',"dropdown-content");
var druid = document.createElement("a");
druid.href = classesDropdownFolder + "/druid.html";
druid.innerHTML = "Druid"
var paladin = document.createElement("a");
paladin.href = classesDropdownFolder + "/paladin.html";
paladin.innerHTML = "Paladin"
classDropdownContent.append(druid)
classDropdownContent.append(paladin)
classDropdown.appendChild(classDropdownButton)
classDropdown.appendChild(classDropdownContent)
	
document.getElementById("topmenu").appendChild(home);
document.getElementById("topmenu").appendChild(characterDropdown);
document.getElementById("topmenu").appendChild(classDropdown);