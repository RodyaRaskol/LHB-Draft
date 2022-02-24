"use strict";
const idxMnuExcel="menuExcel";
const idxMnuHome="menuHome";
const idxMnuKnowledge="menuKnowledge";
const idxMnuFood="menuFood";
const idxMnuStalls="menuStalls";
const idxMnuTest="menuTest";
const idxMnuAbout="menuAbout";

const muTypeHome="HomePageLink";
const muTypeLink="LinkOnly;"
const muTypeHover="SubViaHover";
const muTypeClick='SubViaClick';
const lblDropDownContainer="DDContainer"

//Styles
const stlnavmain="w3-bar-item w3-button w3-hover-white w3-bottombar w3-hover-border-black";
const stlnavmini="w3-bar-item w3-button w3-hover-white w3-bottombar w3-hover-border-black";
const stlClickBtn="w3-bar-item w3-button w3-hover-white w3-bottombar w3-hover-border-black";

//Main Menu Object
const lhbMainMenuObj=[
    {id:idxMnuHome,ref:"index.html",name:"Home",IsActive:true,title:"Home Page",deptColor:"w3-2021-buttercream",muTypeMain:muTypeHome, muTypeMini:muTypeHome},
    {id:idxMnuExcel,ref:"xlhome.html",name:"Excel",IsActive:true,title:"Excel Home",deptColor:"w3-metro-dark-green",muTypeMain:muTypeHover,muTypeMini:muTypeHover},   
    {id:idxMnuKnowledge,ref:"knowledge.html",name:"Knowledge",IsActive:true,title:"Knowledge Home",deptColor:"w3-2021-amethyst-orchid",muTypeMain:muTypeLink,muTypeMini:muTypeLink},
    {id:idxMnuFood,ref:"food.html",name:"Food",IsActive:true,title:"Food Home",deptColor:"w3-food-olive", muTypeMain:muTypeLink,muTypeMini:muTypeLink},
    {id:idxMnuStalls,ref:"stalls.html",name:"Stalls",IsActive:true,title:"Stalls Home",deptColor:"w3-metro-dark-orange", muTypeMain:muTypeLink,muTypeMini:muTypeLink},
    {id:idxMnuTest,ref:"testbench.html",name:"Bench",IsActive:true,title:"Test Bench",deptColor:"w3-2021-french-blue", muTypeMain:muTypeLink,muTypeMini:muTypeLink},
    {id:idxMnuAbout,ref:"about.html",name:"About",IsActive:true,title:"About Us",deptColor:"w3-metro-dark-purple", muTypeMain:muTypeLink,muTypeMini:muTypeLink}
]
//Sub Menu Object
const lhbSubMenuObj=[
    {parent:idxMnuExcel,id:"xlHome",ref:"xlhome.html",name:"Excel Home",IsActive:true,title:"Excel Home"},
    {parent:idxMnuExcel,id:"xlTechniques",ref:"xltechniques.html",name:"Techniques",IsActive:true,title:"Techniques"},
    {parent:idxMnuExcel,id:"xlHowTo",ref:"xlhowto.html",name:"How to ...",IsActive:false,title:"How to ..."},
    {parent:idxMnuExcel,id:"xlWhyDid",ref:"xlwhydid.html",name:"Why did ...",IsActive:false,title:"Why did ..."},
    {parent:idxMnuExcel,id:"xlPowerPivot",ref:"xlpowerpivot.html",name:"Power Pivot",IsActive:false,title:"Power Pivot"},
    {parent:idxMnuExcel,id:"xlEpics",ref:"xlepics.html",name:"Epics",IsActive:false,title:"Epics"},
    {parent:idxMnuExcel,id:"xlToolShed",ref:"xltoolshed.html",name:"Tool Shed",IsActive:true,title:"Tool Shed"}
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

//Menu Builders
function MenuContainerBuilder(idxMnu,IsMini=false,hasSubs=false){
    let myMenu=lhbMainMenuObj.filter(menu =>menu.id==idxMnu); 
    let menuItem, menuItemType, myID

    if(IsMini){myID='CNTMini'+myMenu[0].id; menuItemType=myMenu[0].muTypeMini} 
    else{myID='CNTMain'+myMenu[0].id; menuItemType=myMenu[0].muTypeMain}    

    switch (menuItemType){
        case muTypeLink:
            menuItem=document.createElement('div');
            menuItem.className = myMenu[0].deptColor; 
            break;
        case muTypeHome:
            menuItem=document.createElement('div');
            menuItem.className = myMenu[0].deptColor; 
            break;
        case muTypeHover:
            menuItem=document.createElement('div');
            menuItem.className = myMenu[0].deptColor;  
            if (hasSubs){
                    menuItem.className +=" w3-dropdown-hover";            };
            break;
        case muTypeClick:
            menuItem=document.createElement('div');
            menuItem.className = myMenu[0].deptColor; 
            if (hasSubs){
                menuItem.className =" w3-dropdown-click";                
            };
                break;
        default:
            break;
    }//Close Switch    
    menuItem.id=myID;
    menuItem.title=myMenu[0].title;   

    return menuItem;//Return the Constructed Item
}//Close Menu Contianer Builder
function MenuItemBuilder(idxMnu,IsMini=false,hasSubs=false){
    let myMenu=lhbMainMenuObj.filter(menu =>menu.id==idxMnu); 
    let menuItem, menuItemType, myID, appliedClass, fncClick,fncLabel,symClick;

    if(IsMini){myID='Mini'+myMenu[0].id; menuItemType=myMenu[0].muTypeMini;appliedClass=stlnavmini;fncLabel="Mini"} 
    else{myID='Main'+myMenu[0].id; menuItemType=myMenu[0].muTypeMain;appliedClass=stlnavmain;fncLabel="Main"}    

    switch (menuItemType){
        case muTypeLink:
            menuItem=document.createElement('a');
            menuItem.href=myMenu[0].ref;
            break;
        case muTypeHome:
            menuItem=document.createElement('a');
            menuItem.href=myMenu[0].ref;
            break;
        case muTypeHover:
            menuItem=document.createElement('div');
            if (hasSubs){ };
            break;
        case muTypeClick:
            menuItem=document.createElement('div');
            fncClick='lhbShowHide("'+fncLabel+idxMnu+lblDropDownContainer+'");';
            menuItem.setAttribute('onclick',fncClick);
            //symClick=document.createElement('i');
            //symClick.className="fa fa-caret-down";
            //menuItem.insertAdjacentElement('beforeend',symClick);
            if (hasSubs){};
            break;
        default:
            break;
    }//Close Switch

    menuItem.className =appliedClass;
    menuItem.innerHTML=myMenu[0].name;
    menuItem.className +=' '+myMenu[0].deptColor; 
    menuItem.id=myID;
    menuItem.title=myMenu[0].title;
    

    return menuItem;//Return the Constructed Item
}//Close Item Builder
function BuildDropDownContainer(idLabel){
    let menuLevel2Container=document.createElement("div");                
        menuLevel2Container.id=idLabel;
        menuLevel2Container.className="w3-dropdown-content w3-bar-block w3-card-4";
        return menuLevel2Container;
}//Close DropDown Container Builder

//Main Builder Function
function lhbBuildMenus(idxMnu){       
    let mainParent=document.getElementById('nav-Main');
    let miniParent=document.getElementById('nav-Mini');   
    let myLevel1Menus=lhbMainMenuObj.filter(menu => menu.IsActive==true);
    let menuLevel2Container, minimenuLevel2Container, mainbtn, minibtn

    // Create Regular Menus
    for (var i = 0; i < myLevel1Menus.length; i++) {        
        let myMenuID=myLevel1Menus[i].id
        let myLevel2Menus=lhbSubMenuObj.filter(submenu => submenu.parent==myMenuID  &&  submenu.IsActive==true);
        let hasSubs = myLevel2Menus.length>0
        let myMainMenuContainer;
        let myMiniMenuContainer;
        //Build Contianer Types
        myMainMenuContainer=MenuContainerBuilder(myMenuID,false,hasSubs);
        mainParent.appendChild(myMainMenuContainer);
        myMiniMenuContainer=MenuContainerBuilder(myMenuID,true,hasSubs);
        miniParent.appendChild(myMiniMenuContainer);
        //Create New Item for Main Menu
        var myMainMenuItem=MenuItemBuilder(myMenuID,false,hasSubs);
        // Test if its the Home Page and build out the color bar; Set Other Menus to hide on Small Screens
        if (myLevel1Menus[i].id == idxMnuHome) 
                {mainParent.className +=' '+myLevel1Menus[i].deptColor}     
         else   {myMainMenuItem.className +=' w3-hide-small'};
        //Add to Main Navi Bar
        myMainMenuContainer.appendChild(myMainMenuItem);

        //Create New Item for the Mini Nav Bar
        var myMiniMenuItem=MenuItemBuilder(myMenuID,true,hasSubs);
        //Add to the Mini Nav Bar if its not the Home Page
        if (myLevel1Menus[i].id != idxMnuHome) {
            myMiniMenuContainer.appendChild(myMiniMenuItem)};

        if (hasSubs){      
        //Build DropDown Containers
        menuLevel2Container=BuildDropDownContainer('Main'+myMenuID+lblDropDownContainer);
        myMainMenuItem.appendChild(menuLevel2Container);
        minimenuLevel2Container=BuildDropDownContainer('Mini'+myMenuID+lblDropDownContainer);
        myMiniMenuItem.appendChild(minimenuLevel2Container);

        //Loop Over Sub Menu Items and add            
        for (var j = 0; j < myLevel2Menus.length; j++) {
            //Create the MainElement
                
            let myLvl2MainMenuItem=document.createElement("a");
                myLvl2MainMenuItem.className="w3-bar-item w3-button "+myLevel1Menus[i].deptColor;
                myLvl2MainMenuItem.title= myLevel2Menus[j].title;
                myLvl2MainMenuItem.id= 'Main'+myLevel2Menus[j].id;
                myLvl2MainMenuItem.innerHTML= myLevel2Menus[j].name;
                myLvl2MainMenuItem.href=myLevel2Menus[j].ref;
            //Create the MiniElement
           
            let myLvl2MiniMenuItem=document.createElement("a");
                myLvl2MiniMenuItem.className="w3-bar-item w3-button "+myLevel1Menus[i].deptColor;
                myLvl2MiniMenuItem.title= myLevel2Menus[j].title;
                myLvl2MiniMenuItem.id= 'Mini'+myLevel2Menus[j].id;
                myLvl2MiniMenuItem.innerHTML= myLevel2Menus[j].name;
                myLvl2MiniMenuItem.href=myLevel2Menus[j].ref;
            //Pase the Element to the Main Menu 
            menuLevel2Container.appendChild( myLvl2MainMenuItem);
            minimenuLevel2Container.appendChild(myLvl2MiniMenuItem);}
            } //Close Sub Menu For Loop
        }//Close of Main Menu Loop

        //Add Hamburger Menu
        var NewMenuItem=document.createElement('span');
        //NewMenuItem.href="javascript:void(0)";
        NewMenuItem.className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium";
        NewMenuItem.setAttribute("onclick", 'lhbShowHide("nav-Mini")');
        NewMenuItem.innerHTML="☰";
        mainParent.appendChild(NewMenuItem);

        //Add Logo
        var Logo1=document.createElement("div");
        Logo1.className="w3-bar-item w3-right w3-hide-small";
        Logo1.innerHTML="Life Hacks Bazaar";
        Logo1.innerHTML.toUpperCase;
        mainParent.appendChild(Logo1);

    
       

}//Close Build Level!Menu
    
    
    /*for (var i = 0; i < Lvl1.length; i++) {
            
            var menuLevel1=document.createElement("a");
                menuLevel1.className=w3MainMenuStyle;
                if (Lvl2Items.length > 0){
                    menuLevel1.classList.add("w3-dropdown-hover")};
                menuLevel1.title=Lvl1[i].title;
                menuLevel1.id=Lvl1[i].id;
                menuLevel1.innerHTML=Lvl1[i].name;
                menuLevel1.href=Lvl1[i].ref
                Parent.appendChild(menuLevel1)
;
               
        }//Close Loop

    //Add Logo
    var Logo1=document.createElement("div")
        Logo1.className="w3-bar-item w3-right w3-hide-small inupper"
        Logo1.innerHTML="Life Hacks Bazaar"
        Parent.appendChild(Logo1)
         
    //Add Active page marker
    var x =document.getElementById(myPage);
        x.className=x.className.replace("w3-border-white","w3-border-black") ;   
    }//Close Build Function*/