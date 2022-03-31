"use strict";
//Areas
const idxAreaExcel = "areaExcel";
const idxAreaHome = "areaHome";
const idxAreaKnowl = "areaKnowledge";
const idxAreaFood = "areaFood";
const idxAreaStalls = "areaStalls";
const idxAreaBench = "areaBench";
const idxAreaAbout = "areaAbout";

//Stores
const LHBidHome = "storeLHBHome"
const LHBidBench = "storeLHBBench"
const LHBidBAbout = "storeLHBAbout";
const xlidHome = "storexlHome"
const xlidTechniques = "storexlTechniques"
const xlidHowTo = "storexlHowTo"
const xlidWhyDid = "storexlWhyDid"
const xlidPowerPivot = "storexlPowerPivot";
const xlidEpics = "storexlEpics";
const xlidToolShed = "storexlToolShed";
const nlidKnowlHome = "storeKnowledgeHome";
const fdidFoodHome = "storefoodHome";
const stidStallsHome = "storeStallsHome";



const muTypeHome = "HomePageLink";
const muTypeLink = "LinkOnly;"
const muTypeHover = "SubViaHover";
const muTypeClick = 'SubViaClick';
const lblDropDownContainer = "DDContainer";

const toHideMini = "MiniContainersHidden"

const iconBurger = "&#9776";
const iconDropDown = "   &#8615";


//Main Menu Object
const LHBAreasObj = [
    { idArea: idxAreaHome, name: "Home", IsActive: true, LHBAreaColor: "w3-2021-buttercream" },
    { idArea: idxAreaExcel, name: "Excel", IsActive: true, LHBAreaColor: "w3-metro-dark-green" },
    { idArea: idxAreaKnowl, name: "Knowledge", IsActive: true, LHBAreaColor: "w3-2021-french-blue" },
    { idArea: idxAreaFood, name: "Food", IsActive: false, LHBAreaColor: "w3-food-olive" },
    { idArea: idxAreaStalls, name: "Stalls", IsActive: true, LHBAreaColor: "w3-metro-dark-orange" },
    { idArea: idxAreaBench, name: "Bench", IsActive: false, LHBAreaColor: "w3-2021-french-blue" },
    { idArea: idxAreaAbout, name: "About", IsActive: true, LHBAreaColor: "w3-metro-dark-purple" }]
//Sub Menu Object
const LHBStoresObj = [
    { idParent: idxAreaHome, id: LHBidHome, ref: "index.html", name: "Home", IsActive: true, title: "Home Page", LHBStoreColor: null, IsAreaHome: true },
    { idParent: idxAreaExcel, id: xlidHome, ref: "xlhome.html", name: "Excel Home", IsActive: true, title: "Excel Home", LHBStoreColor: null, IsAreaHome: true },
    { idParent: idxAreaExcel, id: xlidTechniques, ref: "xltechniques.html", name: "Techniques", IsActive: true, title: "Techniques", LHBStoreColor: null, IsAreaHome: false },
    { idParent: idxAreaExcel, id: xlidHowTo, ref: "xlhowto.html", name: "How to ...", IsActive: true, title: "How to ...", LHBStoreColor: null, IsAreaHome: false },
    { idParent: idxAreaExcel, id: xlidWhyDid, ref: "xlwhydid.html", name: "Why did ...", IsActive: false, title: "Why did ...", LHBStoreColor: null, IsAreaHome: false },
    { idParent: idxAreaExcel, id: xlidPowerPivot, ref: "xlpowerpivot.html", name: "Power Pivot", IsActive: true, title: "Power Pivot", LHBStoreColor: null, IsAreaHome: false },
    { idParent: idxAreaExcel, id: xlidEpics, ref: "xlepics.html", name: "Epics", IsActive: false, title: "Epics", LHBStoreColor: null, IsAreaHome: false },
    { idParent: idxAreaExcel, id: xlidToolShed, ref: "xltoolshed.html", name: "Tool Shed", IsActive: true, title: "Tool Shed", LHBStoreColor: null, IsAreaHome: false },
    { idParent: idxAreaKnowl, id: nlidKnowlHome, ref: "knowledge.html", name: "Knowledge", IsActive: true, title: "Knowledge Home", LHBStoreColor: null, IsAreaHome: true },
    { idParent: idxAreaFood, id: fdidFoodHome, ref: "food.html", name: "Food", IsActive: true, title: "Food Home", LHBStoreColor: null, IsAreaHome: true },
    { idParent: idxAreaStalls, id: stidStallsHome, ref: "stalls.html", name: "Stalls", IsActive: true, title: "Stalls Home", LHBStoreColor: null, IsAreaHome: true },
    { idParent: idxAreaBench, id: LHBidBench, ref: "testbench.html", name: "Bench", IsActive: true, title: "Test Bench", LHBStoreColor: null, IsAreaHome: true },
    { idParent: idxAreaAbout, id: LHBidBAbout, ref: "about.html", name: "About", IsActive: true, title: "About Us", LHBStoreColor: null, IsAreaHome: true }
]

const LHBDepartmentsObj = [
    { idParent: LHBidBench, id: "xltecqSeries", name: "Series", IsActive: true, LHBDeptColor: null, title: "Methods for projecting a Series of Numbers" },
    { idParent: LHBidBench, id: "xltecqValidation", name: "Validation", IsActive: true, LHBDeptColor: null, title: "Methods for Limiting Data Enteries" },
    { idParent: LHBidBench, id: "xltecqDates", name: "Dates", IsActive: true, LHBDeptColor: null, title: "Date Manipulation" },
    { idParent: xlidTechniques, id: "xltecqSeries", name: "Series", IsActive: true, LHBDeptColor: null, title: "Methods for projecting a Series of Numbers" },
    { idParent: xlidTechniques, id: "xltecqValidation", name: "Validation", IsActive: true, LHBDeptColor: null, title: "Methods for Limiting Data Enteries" },
    { idParent: xlidTechniques, id: "xltecqDates", name: "Dates", IsActive: true, LHBDeptColor: null, title: "Date Manipulation" },
]

//Common Functions
function lhbShowHide(idElement) {
    var x = document.getElementById(idElement);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
function lhbShowHideClass(myClassName) {

    let collection = document.getElementsByClassName(myClassName);

    for (let i = 0; i < collection.length; i++) {

        if (collection[i].className.indexOf("w3-show") == -1) {
            collection[i].className += " w3-show";
        } else {
            collection[i].className = collection[i].className.replace(" w3-show", "");
        }//Close If       
    }//Close For   
}//Close Function

function LHB_Curtain(myClassName, myCurtain) {
    let collection = document.getElementsByClassName(myClassName);
    for (let i = 0; i < collection.length; i++) {
        collection[i].classList.toggle(myCurtain);
    }//Close For   
}//Close Function

function LHB_SideBar() {
    const el = document.getElementById("mySidebar");
    el.classList.toggle("w3-hide");
}

function LHB_close(myElement) {
    document.getElementById(myElement).style.display = "none";
}

//Styles - no bar item on Drop Down Buttons
const styleDropDownButton = "w3-button w3-hover-white w3-bottombar w3-hover-border-black";
const styleLinks = "w3-bar-item w3-button w3-hover-white w3-bottombar w3-hover-border-black";
const styleDropDownItems = "w3-bar-item w3-button";

const idDropHover = "ddHover";
const idDropClick = "ddClick";
const dropdownTypesObj = [
    { idDrop: idDropHover, idW3CSS: "w3-dropdown-hover", ContentStyle: "w3-dropdown-content w3-bar-block w3-card-4" },
    { idDrop: idDropClick, idW3CSS: "w3-dropdown-click", ContentStyle: "w3-dropdown-content w3-bar-block w3-card-4" }]

const menuTypesObj = [
    { idMenu: "Main", IsMini: false, navRootID: "nav-Main", dropdownMethod: idDropHover, menuGrp: "NAV" },
    { idMenu: "Mini", IsMini: true, navRootID: "nav-Mini", dropdownMethod: idDropClick, menuGrp: "NAV" },
    { idMenu: "Dept-Mini", IsMini: true, navRootID: "departments-Mini", dropdownMethod: idDropHover, menuGrp: "Dept", TopStyleBtn: styleDropDownButton, TopStyleLink: styleLinks },
    { idMenu: "Dept-Main", IsMini: false, navRootID: "departments-Main", dropdownMethod: idDropHover, menuGrp: "Dept", TopStyleBtn: styleDropDownButton, TopStyleLink: styleLinks }]



function LHB_Build_Primary_Navi_Dev(navType) {
    //Info on Caller Page
    //Get Doc Elements
    const docArea = document.getElementById("LHBArea").textContent
    const docStore = document.getElementById("LHBStore").textContent
    const myArea = LHBAreasObj.filter(area => area.idArea == docArea);
    const myStore = LHBStoresObj.filter(store => store.id == docStore);
    const myAreaColor = myArea[0].LHBAreaColor;
    const btnNavMenutoggle = document.getElementById("smToggleBtn");
    btnNavMenutoggle.classList.add(myAreaColor);

    //Get Menu Template
    const navDefinition = menuTypesObj.filter(menu => menu.idMenu == navType)
    const IsMini = navDefinition[0].IsMini;
    const navRootID = navDefinition[0].navRootID;
    const dropdownMethod = navDefinition[0].dropdownMethod;
    const menuGrp = navDefinition[0].menuGrp
    const navIDCaller = document.getElementById('LHBArea').textContent;
    const navRoot = document.getElementById(navRootID);
    const actvAreas = LHBAreasObj.filter(menu => menu.IsActive == true);
    const dropdownType = dropdownTypesObj.filter(drop => drop.idDrop == dropdownMethod);

    //Other Variables  - Building Blocks
    let areaContainer, areaItem, fncClick, dropContainer, myDropID, storeItem, navItem;

    //Start Loop Over The Area  
    for (var i = 0; i < actvAreas.length; i++) {
        //Set Iterated Variables
        const myAreaID = actvAreas[i].idArea;
        const myLHBAreaColor = actvAreas[i].LHBAreaColor;
        const actvStores = LHBStoresObj.filter(submenu => submenu.idParent == myAreaID && submenu.IsActive == true);
        const myHomeStore = actvStores.filter(submenu => submenu.IsAreaHome == true)
        const nonHomeStores = actvStores.filter(submenu => submenu.IsAreaHome == false)
        const HasSubs = nonHomeStores.length > 0;
        const IsLHBHomeTab = (myAreaID == idxAreaHome);

        //Build Container for Area-add Area Color,DropDwon Type and Hidden attribute for Mini
        areaContainer = document.createElement('div');
        navRoot.appendChild(areaContainer);
        areaContainer.className = myLHBAreaColor;
        if (HasSubs) { areaContainer.className += " " + dropdownType[0].idW3CSS };
        if (IsMini) { areaContainer.className += " LHBAreas w3-hide "; }

        //Area Item With Branch between Links and Buttons  
        if (HasSubs) {
            areaItem = document.createElement('button');
            areaItem.className = styleDropDownButton;//No bar-item
            myDropID = navRootID + myAreaID + lblDropDownContainer;//Used for Show/Hide Click
            if (IsMini) {
                fncClick = 'lhbShowHide("' + myDropID + '");';
                areaItem.setAttribute('onclick', fncClick);
                areaItem.innerHTML = actvAreas[i].name + iconDropDown
            }//Adds Down Arrow
            else { areaItem.textContent = actvAreas[i].name; }
            areaContainer.appendChild(areaItem);
        }
        else//If NoSubs Creaate a hyperlink
        {
            areaItem = document.createElement('a');
            areaItem.textContent = actvAreas[i].name;
            areaItem.href = myHomeStore[0].ref;
            areaItem.className = styleLinks;
            areaContainer.appendChild(areaItem);
        }
        //Build Drop Container
        if (HasSubs) {
            dropContainer = document.createElement('div');
            areaContainer.appendChild(dropContainer);
            dropContainer.className = dropdownType[0].ContentStyle + " " + myLHBAreaColor;
            dropContainer.id = myDropID;
            if (IsMini) { dropContainer.className += " w3-hide" }
        }//Close Drop Content Container Build
        // Add Store List as Hyperlinks
        if (HasSubs) {
            for (var j = 0; j < actvStores.length; j++) {
                storeItem = document.createElement('a');
                storeItem.href = actvStores[j].ref;
                storeItem.textContent = actvStores[j].name;
                storeItem.className = styleDropDownItems;
                dropContainer.appendChild(storeItem);
            }//Close Store Loop
        }//close if           
    }//Close AreaLoop 
}//Close LHBBuildNavi Function

function LHB_Build_Primary_Navi(navType) {
    //Get Menu Template
    const navDefinition = menuTypesObj.filter(menu => menu.idMenu == navType)
    const IsMini = navDefinition[0].IsMini;
    const navRootID = navDefinition[0].navRootID;
    const dropdownMethod = navDefinition[0].dropdownMethod;
    const menuGrp = navDefinition[0].menuGrp
    const navIDCaller = document.getElementById('LHBArea').textContent;
    const navRoot = document.getElementById(navRootID);
    const actvAreas = LHBAreasObj.filter(menu => menu.IsActive == true);
    const dropdownType = dropdownTypesObj.filter(drop => drop.idDrop == dropdownMethod);

    //Other Variables  - Building Blocks
    let areaContainer, areaItem, fncClick, dropContainer, myDropID, storeItem, navItem;

    //Start Loop Over The Area  
    for (var i = 0; i < actvAreas.length; i++) {
        //Set Iterated Variables
        const myAreaID = actvAreas[i].idArea;
        const myLHBAreaColor = actvAreas[i].LHBAreaColor;
        const actvStores = LHBStoresObj.filter(submenu => submenu.idParent == myAreaID && submenu.IsActive == true);
        const myHomeStore = actvStores.filter(submenu => submenu.IsAreaHome == true)
        const nonHomeStores = actvStores.filter(submenu => submenu.IsAreaHome == false)
        const HasSubs = nonHomeStores.length > 0;
        const IsLHBHomeTab = (myAreaID == idxAreaHome);

        //Build Container for Area-add Area Color,DropDwon Type and Hidden attribute for Mini
        areaContainer = document.createElement('div');
        navRoot.appendChild(areaContainer);
        areaContainer.className = myLHBAreaColor;
        if (HasSubs) { areaContainer.className += " " + dropdownType[0].idW3CSS };
        if (IsMini && !(IsLHBHomeTab)) { areaContainer.className += " w3-hide " + toHideMini + menuGrp; }

        //Area Item With Branch between Links and Buttons  
        if (HasSubs) {
            areaItem = document.createElement('button');
            areaItem.className = styleDropDownButton;//No bar-item
            myDropID = navRootID + myAreaID + lblDropDownContainer;//Used for Show/Hide Click
            if (IsMini) {
                fncClick = 'lhbShowHide("' + myDropID + '");';
                areaItem.setAttribute('onclick', fncClick);
                areaItem.innerHTML = actvAreas[i].name + iconDropDown
            }//Adds Down Arrow
            else { areaItem.textContent = actvAreas[i].name; }
            areaContainer.appendChild(areaItem);
        }
        else//If NoSubs Creaate a hyperlink
        {
            areaItem = document.createElement('a');
            areaItem.textContent = actvAreas[i].name;
            areaItem.href = myHomeStore[0].ref;
            areaItem.className = styleLinks;
            areaContainer.appendChild(areaItem);
        }
        //Build Drop Container
        if (HasSubs) {
            dropContainer = document.createElement('div');
            areaContainer.appendChild(dropContainer);
            dropContainer.className = dropdownType[0].ContentStyle + " " + myLHBAreaColor;
            dropContainer.id = myDropID;
            if (IsMini) { dropContainer.className += " w3-hide" }
        }//Close Drop Content Container Build
        // Add Store List as Hyperlinks
        if (HasSubs) {
            for (var j = 0; j < actvStores.length; j++) {
                storeItem = document.createElement('a');
                storeItem.href = actvStores[j].ref;
                storeItem.textContent = actvStores[j].name;
                storeItem.className = styleDropDownItems;
                dropContainer.appendChild(storeItem);
            }//Close Store Loop
        }//close if           
        // Add Menu Expander for Mini Home
        if (IsLHBHomeTab && IsMini) {
            areaItem.className = areaItem.className.replace("w3-bar-item", "");
            navItem = document.createElement('button');
            navItem.className = "w3-button w3-right";
            navItem.innerHTML = iconBurger;
            navItem.title = "Expand Menus";
            navItem.setAttribute('onclick', 'lhbShowHideClass("' + toHideMini + menuGrp + '")');
            areaContainer.appendChild(navItem);
        };
    }//Close AreaLoop 
}//Close LHBBuildNavi Function

function LHBBuildOutline() {
    const navID = document.getElementById('LHBArea');
    const myMainBanner = document.getElementById('storeBanner-main');
    const myMiniBanner = document.getElementById('storeBanner-mini');
    const navMenu = LHBAreasObj.filter(menu => menu.idArea == navID.textContent);
    const myColor = navMenu[0].LHBAreaColor;
    myMainBanner.className += ' ' + myColor;
    // myMiniBanner.className +=' '+myColor;
}
function LHB_Build_Departments(navType) {
    //Get Menu Template
    const navDefinition = menuTypesObj.filter(menu => menu.idMenu == navType)
    const IsMini = navDefinition[0].IsMini;
    const navRootID = navDefinition[0].navRootID;
    const dropdownMethod = navDefinition[0].dropdownMethod;
    const menuGrp = navDefinition[0].menuGrp
    const dropdownType = dropdownTypesObj.filter(drop => drop.idDrop == dropdownMethod);
    const TopStyleBtn = navDefinition[0].TopStyleBtn;
    const TopStyleLink = navDefinition[0].TopStyleBtn;
    //Get Doc Elements
    const docArea = document.getElementById("LHBArea").textContent
    const docStore = document.getElementById("LHBStore").textContent
    const navRoot = document.getElementById(navRootID);
    const myDeptBtn = document.getElementById("deptBtn");
    // Get Area and Store Objects
    const myArea = LHBAreasObj.filter(area => area.idArea == docArea);
    const myStore = LHBStoresObj.filter(store => store.id == docStore);
    const myDepartments = LHBDepartmentsObj.filter(menu => menu.IsActive == true && menu.idParent == docStore);
    const myColorArea = myArea[0].LHBAreaColor;

    if (IsMini) { myDeptBtn.className += " " + myColorArea };
    const myColorStore = myStore[0].LHBStoreColor;
    let myColorDept, myColorForMenu;
    //Other Variables  - Building Blocks
    let TopContainer, TopItem, fncClick, dropContainer, myDropID, DropItem, navContainer, navItem;
    //Start Build Loop
    for (var i = 0; i < myDepartments.length; i++) {
        //Set Iterated Variables
        myColorDept = myDepartments[i].LHBDeptColor;
        if (myColorDept == null) { myColorForMenu = myColorDept } else { myColorForMenu = myColorDept };

        const HasSubs = true
        const myLoopID = myDepartments[i].id
        //Build Container for Area-add Area Color,DropDwon Type and Hidden attribute for Mini
        TopContainer = document.createElement('div');
        navRoot.appendChild(TopContainer);
        TopContainer.className = myColorForMenu;
        if (HasSubs) { TopContainer.className += " " + dropdownType[0].idW3CSS };
        if (IsMini) { TopContainer.className += " LHBDepartments w3-hide "; }
        //Add Departments
        TopItem = document.createElement('button');
        TopItem.className = TopStyleBtn;//No bar-item
        myDropID = navRootID + myLoopID + lblDropDownContainer;//Used for Show/Hide Click
        if (IsMini) {
            fncClick = 'lhbShowHide("' + myDropID + '");';
            TopItem.setAttribute('onclick', fncClick);
            TopItem.innerHTML = myDepartments[i].name + iconDropDown
        }//Adds Down Arrow
        else { TopItem.textContent = myDepartments[i].name; };
        TopContainer.appendChild(TopItem);
        //Add Drop Containers
        dropContainer = document.createElement('div');
        TopContainer.appendChild(dropContainer);
        dropContainer.className = dropdownType[0].ContentStyle + " " + myColorForMenu;
        dropContainer.id = myDropID;
        if (IsMini) { dropContainer.className += " w3-hide" };
    }//Close Department for Loop
}//Close Build Departments

function LHB_WireIn_Items(navType) {
    const navDefinition = menuTypesObj.filter(menu => menu.idMenu == navType)
    const IsMini = navDefinition[0].IsMini;
    const navRootID = navDefinition[0].navRootID;
    const dropdownMethod = navDefinition[0].dropdownMethod;
    const menuGrp = navDefinition[0].menuGrp
    //Get Doc Elements
    const docArea = document.getElementById("LHBArea").textContent
    const docStore = document.getElementById("LHBStore").textContent
    // Get Area and Store Objects
    const myArea = LHBAreasObj.filter(area => area.idArea == docArea);
    const myStore = LHBStoresObj.filter(store => store.id == docStore);
    const myItemColor = myArea[0].LHBAreaColor
    const myDepartments = LHBDepartmentsObj.filter(menu => menu.IsActive == true && menu.idParent == docStore);
    const myItemsObj = xlTechniquesItemsObj;
    //Loop over Departments
    for (var i = 0; i < myDepartments.length; i++) {
        const myLoopID = myDepartments[i].id
        const myDropID = navRootID + myLoopID + lblDropDownContainer;
        const myItems = myItemsObj.filter(item => item.ParentID == myLoopID && item.IsActive == true);
        const HasItems = myItems.length > 0;
        const DepartmentContainer = document.getElementById(myDropID);
        //Add Items to department
        for (var j = 0; j < myItems.length; j++) {
            const myItem = document.createElement('button');
            myItem.textContent = myItems[j].itemName;
            myItem.className = styleDropDownItems + " " + myItemColor;
            myItem.title = myItems[j].title;
            const myAction = myItems[j].Action + '("' + myItems[j].id + '")';
            myItem.setAttribute('onclick', myAction);
            DepartmentContainer.appendChild(myItem);
        }//Close Item Loop
    }//Close Departments Loop
}//Close WireInItems
