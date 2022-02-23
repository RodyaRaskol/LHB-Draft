
const idxMnuExcel="excelmenu"
const idxMnuHome="homemenu"
const lhbMainMenu=[
    {id:idxMnuHome,ref:"index.html",name:"Home",isShown:true,title:"Home Page"},
    {id:idxMnuExcel,ref:"xlhome.html",name:"Excel",isShown:true,title:"Excel Home"},
    {id:"jsNaviBar_work",ref:"work.html",name:"Work",isShown:false,title:"Work Home"},
    {id:"jsNaviBar_knowledge",ref:"knowledge.html",name:"Knowledge",isShown:true,title:"Knowledge Home"},
    {id:"jsNaviBar_food",ref:"food.html",name:"Food",isShown:false,title:"Food Home"},
    {id:"jsNaviBar_play",ref:"play.html",name:"Play",isShown:false,title:"Play Home"},
    {id:"jsNaviBar_stalls",ref:"stalls.html",name:"Stalls",isShown:true,title:"Stalls Home"},
    {id:"jsNaviBar_test",ref:"test.html",name:"Test",isShown:false,title:"Test Page"},
    {id:"jsNaviBar_about",ref:"about.html",name:"About",isShown:false,title:"About Us"},
]

const lhbSubMenus=[
    {parent:idxMnuExcel,id:"xlHome",ref:"xlhome.html",name:"Excel Home",isShown:true,title:"Excel Home"},
    {parent:idxMnuExcel,id:"xlTechniques",ref:"xltechniques.html",name:"Techniques",isShown:true,title:"Techniques"},
    {parent:idxMnuExcel,id:"xlHowTo",ref:"xlhowto.html",name:"How to ...",isShown:false,title:"How to ..."},
    {parent:idxMnuExcel,id:"xlWhyDid",ref:"xlwhydid.html",name:"Why did ...",isShown:false,title:"Why did ..."},
    {parent:idxMnuExcel,id:"xlPowerPivot",ref:"xlpowerpivot.html",name:"Power Pivot",isShown:false,title:"Power Pivot"},
    {parent:idxMnuExcel,id:"xlEpics",ref:"xlepics.html",name:"Epics",isShown:false,title:"Epics"},
    {parent:idxMnuExcel,id:"xlToolShed",ref:"xltoolshed.html",name:"Tool Shed",isShown:true,title:"Tool Shed"},
]
function BuildLevel1Level2Menu(myPage){
    const w3MainMenuStyle="w3-mobile w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black inupper"    
    let Parent=document.getElementById('main-bar');    
    // Build Level Menus
    let Lvl1=lhbMainMenu.filter(menu => menu.isShown==true);   
    for (var i = 0; i < Lvl1.length; i++) {
                let Lvl2AllItems=lhbSubMenus.filter(submenu => submenu.parent==Lvl1[i].id);
                let Lvl2Items=Lvl2AllItems.filter(submenu => submenu.isShown==true);
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
                let menuLevel2Container=document.createElement("div");
                    menuLevel2Container.className="w3-dropdown-content w3-bar-block w3-card-4";
                    menuLevel1.appendChild( menuLevel2Container);
                
                    for (var j = 0; j < Lvl2Items.length; j++) {
                        let Lvl2Item=document.createElement("a");
                            Lvl2Item.className="w3-bar-item w3-button";
                            Lvl2Item.title= Lvl2Items[j].title;
                            Lvl2Item.id= Lvl2Items[j].id;
                            Lvl2Item.innerHTML= Lvl2Items[j].name;
                            Lvl2Item.href=Lvl2Items[j].ref;
                            //var myFunction='CreateIngredientList("'+Lvl2Items[j].id+'")';
                            //Lvl2Item.setAttribute("onclick", myFunction);
                            menuLevel2Container.appendChild( Lvl2Item);} 
        }//Close Loop

    //Add Logo
    var Logo1=document.createElement("div")
        Logo1.className="w3-bar-item w3-right w3-hide-small inupper"
        Logo1.innerHTML="Life Hacks Bazaar"
        Parent.appendChild(Logo1)
         
    //Add Active page marker
    var x =document.getElementById(myPage);
        x.className=x.className.replace("w3-border-white","w3-border-black") ;   
    }//Close Build Function