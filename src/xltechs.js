const styleProcedureButtons="xltech-procedure-button";
const xlProceduresContainer="xlProceduresPH";
const xlFunctionsContainer="XlFunctionsPH";
const xlTechniquesContainer="XlTechniquesPH";
const prcdButtonClass="xltech-techniques-button";
const xlMethodsContainer="method-bar";
const xlMethodsMiniContainer="method-bar-mini";



          
/*function HighlightTechClicked(myBtnID){
    var TechbtnContainer=document.getElementById("TechniBtnContainer");
    var Techbtns=TechbtnContainer.getElementsByClassName("w3-sidebar>w3-bar-item");
    var myBtn=document.getElementById(myBtnID)    

    for (var i = 0; i < Techbtns.length; i++) {
        Techbtns[i].classList.remove("xltech-techniques-button-clicked");
         };
    myBtn.classList.add("xltech-techniques-button-clicked");}*/



function ProcedureCall (idxProcedure,idCaller) {   
    let myProcedure=xlProcedures.filter(pro => pro.id==idxProcedure);
    let message='';
    message +=myProcedure[0].Message +"\n"
    message +="Menu: "+myProcedure[0].Menu +"\n"
    message +="Win: "+myProcedure[0].WinTip +"\n"
    message +="Web: "+myProcedure[0].WebTip +"\n"
    message +="Mac: "+myProcedure[0].MacTip +"\n"
    message +="Notes: "+myProcedure[0].Note;
    alert(message);
    var x =document.getElementById(idCaller);
    //x.className=x.className.replace("w3-border-white","w3-border-green") ;
    x.className=x.className.replace("w3-button w3-green","w3-button w3-grey") ; 
    }//Close Procedure Call

function deleteChild_Procedures() {
    const myNode = document.getElementById(xlProceduresContainer);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
        }
    } //Close Delete Procedures 

function deleteChild_Functions() {
    const myNode = document.getElementById(xlFunctionsContainer);
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
        }
    }//Close Delete Functions

 function deleteChild_Methods() {
        const myNode = document.getElementById(xlMethodsContainer);
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
            }
            const myMiniNode = document.getElementById(xlMethodsMiniContainer);
            while (myMiniNode.firstChild) {
                myMiniNode.removeChild(myMiniNode.lastChild);
                }
        }//Close Delete Functions 
   
function CreateFunctionLink(idx){
    let myFunction=xlFunctions.filter(fnc => fnc.id==idx);
    let myContainer=document.getElementById(xlFunctionsContainer);
    let myDiv=document.createElement('div')
    let myA=document.createElement('a');
    let myInfoBtn=document.createElement('button');
    myA.href=myFunction[0].link;
    myA.innerHTML=myFunction[0].name;
    myA.target="_blank";
    myA.title=myFunction[0].desc;
    //myA.classList.add(myFunction[0].fnClass);
    myA.className='btnSection '+myFunction[0].fnClass;
    myInfoBtn.className="w3-button w3-green w3-right";
    myInfoBtn.innerHTML="comments"
   
    //myA.insertAdjacentElement('beforeend',myInfoBtn);
    myDiv.appendChild(myA);
    myContainer.appendChild(myDiv);
    
   


    }//Close List Functions

function CreateProcedureLink(idx){
    let myProcedure=xlProcedures.filter(pro =>pro.id==idx);
    let myContainer=document.getElementById(xlProceduresContainer);
    let myBtn=document.createElement('button');
    myBtn.innerHTML=myProcedure[0].name;
    myBtn.id='prcdbtn'+myProcedure[0].id;
    myBtn.className="w3-bar-item w3-button w3-green w3-round-large btnSection";
    myBtn.setAttribute("onclick", 'ProcedureCall("'+myProcedure[0].id+'","'+myBtn.id+'");');
    myContainer.appendChild(myBtn);
    } //Close List Procedures

function CreateIngredientList(idTech){
    let myTech=xlTechniques.filter(technique => technique.id==idTech);

    //Clear Existing
    deleteChild_Procedures();
    deleteChild_Functions();
    deleteChild_Methods();

    //Build Functions
    for (var i = 0; i < myTech[0].fncs.length; i++) {
        CreateFunctionLink(myTech[0].fncs[i])};
    //Build Procedures
    for (var i = 0; i < myTech[0].pros.length; i++) {
        CreateProcedureLink(myTech[0].pros[i])};
    //Build Video Bar
    BuildVideoBar(idTech)
    }//Close Create Ingredient list

function BuildTechniquesBar(){    
    let Parent=document.getElementById('tech-bar');
    let miniLevel1=document.getElementById('tech-bar-mini');
        

    // Build Level 1 Menus

    let Lvl1=xlTechniques.filter(technique => technique.ParentID==idRootTechniques);  
    for (var i = 0; i < Lvl1.length; i++) {
        switch (Lvl1[i].muType){
            case muBtn:
                var menuLevel1=document.createElement("div");
                    menuLevel1.className="w3-mobile w3-bar-item w3-button";
                    menuLevel1.title=Lvl1[i].title;
                    menuLevel1.id=Lvl1[i].id;
                    menuLevel1.innerHTML=Lvl1[i].Name;
                var myFunction='CreateIngredientList("'+Lvl1[i].id+'")';
                    menuLevel1.setAttribute("onclick", myFunction);
                    Parent.append(menuLevel1);
                
                var miniItem=document.createElement("div");
                    miniItem.className="w3-bar-item w3-button w3-mobile";
                    miniItem.id='Mini'+Lvl1[i].id;
                    miniItem.innerHTML= Lvl1[i].Name;
                    miniItem.setAttribute("onclick", myFunction);
                    miniLevel1.appendChild(miniItem);

                    
                break;

            case muDrop:
                //Build Holder
                let menuContainer=document.createElement("div");
                    menuContainer.className="w3-mobile w3-dropdown-hover";
                    Parent.append(menuContainer);
                var menuLevel1=document.createElement("button")
                    menuLevel1.className="w3-mobile w3-button";
                    menuLevel1.title=Lvl1[i].title;
                    menuLevel1.id=Lvl1[i].id;
                    menuLevel1.innerHTML=Lvl1[i].Name;
                    menuContainer.appendChild(menuLevel1)
;
                let menuLevel2Container=document.createElement("div");
                    menuLevel2Container.className="w3-dropdown-content w3-bar-block w3-card-4";
                    menuLevel1.appendChild( menuLevel2Container);
                let Lvl2Items=xlTechniques.filter(technique2 => technique2.ParentID==Lvl1[i].id  && technique2.isShown==true);
                    for (var j = 0; j < Lvl2Items.length; j++) {
                        let Lvl2Item=document.createElement("div");
                            Lvl2Item.className="w3-bar-item w3-button w3-mobile";
                            Lvl2Item.title= Lvl2Items[j].title;
                            Lvl2Item.id= Lvl2Items[j].id;
                            Lvl2Item.innerHTML= Lvl2Items[j].Name;
                        var myFunction='CreateIngredientList("'+Lvl2Items[j].id+'")';
                            Lvl2Item.setAttribute("onclick", myFunction);
                            menuLevel2Container.appendChild( Lvl2Item);
                        
                        var miniItem=document.createElement("div");
                            miniItem.className="w3-bar-item w3-button w3-mobile";
                            miniItem.id='Mini'+Lvl2Items[j].id;
                            miniItem.innerHTML= Lvl2Items[j].Name;
                            miniItem.setAttribute("onclick", myFunction);
                            miniLevel1.appendChild(miniItem);
                    }//End L2 Build
                    break;//Break Accordion
                //Build Menus steping back
                
            default:
                    break;                       
           
            }//Close Switch 
        }//Close Loop   
    }//Close Build Function

function myExpAccFunc(idItem) {
        var x = document.getElementById(idItem);
        if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
                x.previousElementSibling.className += " w3-green";
         } else { 
                x.className = x.className.replace(" w3-show", "");
                x.previousElementSibling.className = 
                x.previousElementSibling.className.replace(" w3-green", "");
                }
    } //Close Accordion Extender

function BuildVideoBar(idTech){
    let myTech=xlTechniques.filter(technique => technique.id==idTech);
    let MainParent=document.getElementById(xlMethodsContainer);
    let MiniParent=document.getElementById(xlMethodsMiniContainer);
    let VideoTitle=document.getElementById('VideoTitlePH') 
        VideoTitle.innerHTML=myTech[0].VideoName


    for (var i = 0; i < myTech[0].methods.length; i++) {

        var menuLevel1=document.createElement("div");
            menuLevel1.className="w3-bar-item w3-button w3-green w3-mobile w3-border w3-border-white";
            //menuLevel1.title=myTech[0].methods[i].methName;
            menuLevel1.id="Method"+i;
            menuLevel1.innerHTML=myTech[0].methods[i].methName;
            var myFunction='SetVideoSource("'+myTech[0].methods[i].videoSRC+'","Method'+i+'")';
            menuLevel1.setAttribute("onclick", myFunction);
            MainParent.appendChild(menuLevel1);

        var minimenuLevel1=document.createElement("div");
            minimenuLevel1.className="w3-bar-item w3-button w3-green w3-mobile w3-border w3-border-white";
            //menuLevel1.title=myTech[0].methods[i].methName;
            minimenuLevel1.id="MiniMethod"+i;
            minimenuLevel1.innerHTML=myTech[0].methods[i].methName;
            var myFunction='SetVideoSource("'+myTech[0].methods[i].videoSRC+'","MiniMethod'+i+'")';
            minimenuLevel1.setAttribute("onclick", myFunction);
            MiniParent.appendChild(minimenuLevel1);


        }//Closes For
    //Set Source to First Method
    let myVideo=document.getElementById("tech-video");
        myVideo.autoplay = false;
        myVideo.src=myTech[0].methods[0].videoSRC;
        myVideo.load();
    

    }//Closes Video Bar Build

function SetVideoSource(mySRC,btnID){
    var x =document.getElementById(btnID);
    //x.className=x.className.replace("w3-border-white","w3-border-green") ;
    x.className=x.className.replace("w3-button w3-green","w3-button w3-grey") ;

    let myVideo=document.getElementById("tech-video");
    myVideo.autoplay = true;    
    myVideo.src=mySRC;
    myVideo.load();

}//Close SetVideoSource