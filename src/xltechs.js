const styleProcedureButtons="xltech-procedure-button";
const xlProceduresContainer="xlProceduresPH";
const xlFunctionsContainer="XlFunctionsPH";
const xlTechniquesContainer="XlTechniquesPH";
const prcdButtonClass="xltech-techniques-button";
const xlMethodsContainer="video-bar";



          
/*function HighlightTechClicked(myBtnID){
    var TechbtnContainer=document.getElementById("TechniBtnContainer");
    var Techbtns=TechbtnContainer.getElementsByClassName("w3-sidebar>w3-bar-item");
    var myBtn=document.getElementById(myBtnID)    

    for (var i = 0; i < Techbtns.length; i++) {
        Techbtns[i].classList.remove("xltech-techniques-button-clicked");
         };
    myBtn.classList.add("xltech-techniques-button-clicked");}*/



function ProcedureCall (idxProcedure) {   
    let myProcedure=xlProcedures.filter(pro => pro.id==idxProcedure);
    let message='';
    message +=myProcedure[0].Message +"\n"
    message +="Menu: "+myProcedure[0].Menu +"\n"
    message +="Win: "+myProcedure[0].WinTip +"\n"
    message +="Web: "+myProcedure[0].WebTip +"\n"
    message +="Mac: "+myProcedure[0].MacTip +"\n"
    message +="Notes: "+myProcedure[0].Note;
    alert(message); 
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
        }//Close Delete Functions 
   
function CreateFunctionLink(idx){
    let myFunction=xlFunctions.filter(fnc => fnc.id==idx);
    let myContainer=document.getElementById(xlFunctionsContainer);
    let myDiv=document.createElement('div')
    let myA=document.createElement('a');
    myA.href=myFunction[0].link;
    myA.innerHTML=myFunction[0].name;
    myA.target="_blank";
    myA.classList.add(myFunction[0].fnClass);
    myDiv.appendChild(myA);
    myContainer.appendChild(myDiv);
    }//Close List Functions

function CreateProcedureLink(idx){
    let myProcedure=xlProcedures.filter(pro =>pro.id==idx);
    let myContainer=document.getElementById(xlProceduresContainer);
    let myBtn=document.createElement('button');
    myBtn.innerHTML=myProcedure[0].name;
    myBtn.id='btn'+myProcedure[0].id;
    myBtn.className="w3-button w3-grey";
    myBtn.setAttribute("onclick", 'ProcedureCall("'+myProcedure[0].id+'");');
    myContainer.appendChild(myBtn);
    } //Close List Procedures

function CreateIngredientList(idTech){
    let myTech=xlTechniques.filter(technique => technique.id==idTech);
    console.log(myTech)
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
    // Build Level 1 Menus
    let Lvl1=xlTechniques.filter(technique => technique.ParentID==idRootTechniques);  
    for (var i = 0; i < Lvl1.length; i++) {
        switch (Lvl1[i].muType){
            case muBtn:
                var menuLevel1=document.createElement("div");
                    menuLevel1.className="w3-bar-item w3-button";
                    menuLevel1.title=Lvl1[i].title;
                    menuLevel1.id=Lvl1[i].id;
                    menuLevel1.innerHTML=Lvl1[i].Name;
                    var myFunction='CreateIngredientList("'+Lvl1[i].id+'")';
                    menuLevel1.setAttribute("onclick", myFunction);
                    Parent.appendChild(menuLevel1)
                break;

            case muDrop:
                //Build Holder
                let menuContainer=document.createElement("div");
                    menuContainer.className="w3-dropdown-hover";
                    Parent.appendChild(menuContainer);
                var menuLevel1=document.createElement("button")
                    menuLevel1.className="w3-button";
                    menuLevel1.title=Lvl1[i].title;
                    menuLevel1.id=Lvl1[i].id;
                    menuLevel1.innerHTML=Lvl1[i].Name;
                    menuContainer.appendChild(menuLevel1)
;
                let menuLevel2Container=document.createElement("div");
                    menuLevel2Container.className="w3-dropdown-content w3-bar-block w3-card-4";
                    menuLevel1.appendChild( menuLevel2Container);
                let Lvl2Items=xlTechniques.filter(technique2 => technique2.ParentID==Lvl1[i].id);
                    for (var j = 0; j < Lvl2Items.length; j++) {
                        let Lvl2Item=document.createElement("div");
                            Lvl2Item.className="w3-bar-item w3-button";
                            Lvl2Item.title= Lvl2Items[j].title;
                            Lvl2Item.id= Lvl2Items[j].id;
                            Lvl2Item.innerHTML= Lvl2Items[j].Name;
                            var myFunction='CreateIngredientList("'+Lvl2Items[j].id+'")';
                            Lvl2Item.setAttribute("onclick", myFunction);
                            menuLevel2Container.appendChild( Lvl2Item);}
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
    let Parent=document.getElementById(xlMethodsContainer);
    let VideoTitle=document.getElementById('VideoTitlePH') 
        VideoTitle.innerHTML=myTech[0].VideoName


    for (var i = 0; i < myTech[0].methods.length; i++) {
        var menuLevel1=document.createElement("div");
            menuLevel1.className="w3-bar-item w3-button";
            //menuLevel1.title=myTech[0].methods[i].methName;
            menuLevel1.id="Method"+i;
            menuLevel1.innerHTML=myTech[0].methods[i].methName;
            var myFunction='SetVideoSource("'+myTech[0].methods[i].videoSRC+'")';
            menuLevel1.setAttribute("onclick", myFunction);
            Parent.appendChild(menuLevel1);

        }//Closes For

    }//Closes Video Bar Build

function SetVideoSource(mySRC){
    let myVideo=document.getElementById("tech-video");
    myVideo.src=mySRC;

}//Close SetVideoSource