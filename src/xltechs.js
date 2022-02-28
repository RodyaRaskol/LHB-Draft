const styleProcedureButtons="xltech-procedure-button";

//const xlTechniquesItemsObjContainer="xlTechniquesItemsObjPH";
const prcdButtonClass="xltech-techniques-button";

const xlProceduresContainer="xlProceduresPH";
const xlFunctionsContainer="XlFunctionsPH";
const xlMethodsContainer="method-bar";


function InitTechnique(idTech,navType="Main"){
//Get Doc Elements
    const docArea=document.getElementById("LHBArea").textContent;
    const docStore=document.getElementById("LHBStore").textContent;
    const docDept=xlTechniquesItemsObj.filter(xltech=>xltech.id==idTech)[0].ParentID;
// Get Area and Store Objects
    const myArea=LHBAreasObj.filter(area=>area.idArea==docArea);
    const myStore=LHBStoresObj.filter(store=>store.id==docStore);
    const myDept=LHBDepartmentsObj.filter(dept =>dept.id==docDept);
    const myTech=xlTechniquesItemsObj.filter(technique => technique.id==idTech);
//Set Indicator Color
    let myColor
    switch (true){
        case myDept[0].LHBDeptColor != null:
            myColor=myDept[0].LHBDeptColor;
            break;
        case myStore[0].LHBStoreColor != null:
            myColor=myStore[0].LHBDeptColor;
            break;
        default:
            myColor=myArea[0].LHBAreaColor;
            break;}
  
//Clear Existing
    deleteChild_Procedures();
    deleteChild_Functions();
    deleteChild_Methods();
//Build Functions/Procedures/Techniques
    let myDiv, myLink, myBtn
    const myMTHContainer=document.getElementById(xlMethodsContainer);
    
    const myMission=document.getElementById("Mission");
    const myDetails=document.getElementById("Details");
   
    
    myMission.innerHTML=myTech[0].Mission;
    myDetails.innerHTML="";
     for(var i = 0; i < myTech[0].Details.length; i++){
    myDetails.innerHTML+=myTech[0].Details[i].Discussion;}

    const myVideo=document.getElementById("tech-video");
    const VideoTitle=document.getElementById('VideoTitlePH');
    const VideoTitleMini=document.getElementById('Mini-VideoTitlePH');
    //const TabButtons=[document.getElementById("minivideotab"),
    //document.getElementById("minidisctab"),
    //document.getElementById("tabdisc"),
    //document.getElementById("tabvideo")]
    //TabButtons.forEach(ColorTabButtons);
      //  function ColorTabButtons(el){
        //    if(el.classList.contains(myColor)){el.classList.remove(myColor)};
          //  el.classList.add(myColor);}

    VideoTitle.innerHTML=myTech[0].VideoName;
    VideoTitleMini.innerHTML=myTech[0].VideoName;  
    const menusToFill=[
        {navType:"Main", fncRoot:"XlFunctionsPH",prcRoot:"xlProceduresPH",tchRoot:"xlTechniquesPH"},
        {navType:"Mini", fncRoot:"functions-Mini",prcRoot:"procedures-Mini",tchRoot:"techniques-Mini"}]

    menusToFill.forEach(fillItems);
    
    function fillItems(menu){
    const myFNCContainer=document.getElementById(menu.fncRoot);
    const myPRCContainer=document.getElementById(menu.prcRoot);
    const myTCHContainer=document.getElementById(menu.tchRoot);
    const myFNCBtn=document.getElementById("fncBtn");
    const myPRCBtn=document.getElementById("prcBtn");
    const myTCHBtn=document.getElementById("tchBtn");
   
    deleteChild_General(myFNCContainer);
    deleteChild_General(myPRCContainer);
    deleteChild_General(myTCHContainer);
 //Build Functions
 if(myFNCBtn.classList.contains(myColor)){
     myFNCBtn.classList.remove(myColor)};
    if (myTech[0].fncs.length>0){myFNCBtn.className+=" "+myColor};
    for (var i = 0; i < myTech[0].fncs.length; i++) {
        const myItem=xlFunctions.filter(item => item.id==myTech[0].fncs[i]);
        myDiv=document.createElement('div');
        myDiv.className="w3-bar w3-padding"
        myFNCContainer.appendChild(myDiv);
        myLink=document.createElement('a');
        myLink.className="w3-button w3-left w3-hide-small TechToggleItems";
        myLink.textContent=myItem[0].name;
        myLink.href=myItem[0].link;
        myLink.title="MSFT Link";
        myDiv.appendChild(myLink);
        myBtn=document.createElement('button');
        myBtn.type="button";
        myBtn.className="w3-button w3-right w3-padding w3-hide-small w3-opacity w3-small "+myColor;
        myBtn.title=myItem[0].desc;
        myBtn.textContent="Desc";
        myBtn.setAttribute('onclick','xlFNCDesc("'+myItem[0].id+'");');
        myDiv.appendChild(myBtn);
    };
//Build Procedures
if(myPRCBtn.classList.contains(myColor)){
    myPRCBtn.classList.remove(myColor)};
    if (myTech[0].pros.length>0){myPRCBtn.className+=" "+myColor};
 
    for (var i = 0; i < myTech[0].pros.length; i++) {
        myDiv=document.createElement('div');
        myDiv.className="w3-bar w3-padding";
        myPRCContainer.appendChild(myDiv);
        let myProcedure=xlProcedures.filter(pro =>pro.id==myTech[0].pros[i]);        
        myBtn=document.createElement('button');
        myBtn.innerHTML=myProcedure[0].name;
        myBtn.id='prcdbtn'+myProcedure[0].id;
        myBtn.className="w3-bar-item w3-button w3-round-large w3-hide-small TechToggleItems "+myColor;
        myBtn.setAttribute("onclick", 'ProcedureCall("'+myProcedure[0].id+'","'+myBtn.id+'","'+myColor+'");');
        myDiv.appendChild(myBtn);};

//Build Techniques
if(myTCHBtn.classList.contains(myColor)){
    myTCHBtn.classList.remove(myColor)};
    if ( myTech[0].tecs.length>0){myTCHBtn.className+=" "+myColor};
 
for (var i = 0; i < myTech[0].tecs.length; i++) {
    myDiv=document.createElement('div');
    myDiv.className="w3-bar w3-padding";
    myTCHContainer.appendChild(myDiv);
    let myTechnique=xlTechniquesItemsObj.filter(tch =>tch.id==myTech[0].tecs[i]);        
    myBtn=document.createElement('button');
    myBtn.innerHTML=myTechnique[0].itemName;
    myBtn.id='tecbtn'+myTechnique[0].id;
    myBtn.className="w3-bar-item w3-button w3-round-large w3-hide-small TechToggleItems "+myColor;
   // myBtn.setAttribute("onclick", 'ProcedureCall("'+myProcedure[0].id+'","'+myBtn.id+'","'+myColor+'");');
    myDiv.appendChild(myBtn);};

};// close of fill function
//Build Method Bar - first add discussion
    myBtn=document.createElement("div");
    myBtn.type="button";
    myBtn.className="w3-bar-item w3-button w3-border w3-border-white " + myColor;
    myBtn.setAttribute('onclick',"openTabs('DiscTab')");
    myBtn.textContent="Scope";
    myMTHContainer.appendChild(myBtn); 

if (myTech[0].methods.length>0){
    for (var i = 0; i < myTech[0].methods.length; i++) {       

        myBtn=document.createElement("div");
        myBtn.type="button";
        myBtn.className="w3-bar-item w3-button w3-border w3-border-white " + myColor;   
        myBtn.id="Method"+i;
        myBtn.innerHTML=myTech[0].methods[i].methName;
        const myFunction='SetVideoSource("'+myTech[0].methods[i].videoSRC+'","Method'+i+'","'+myColor+'")';
        myBtn.setAttribute("onclick", myFunction);
        myMTHContainer.appendChild(myBtn);}       
   
        myVideo.autoplay = false;
        myVideo.src=myTech[0].methods[0].videoSRC;
        myVideo.load();};

    }//Close  Init Function

function xlFNCDesc(myFNC){
    const myItem=xlFunctions.filter(item => item.id==myFNC);
    alert(myItem[0].desc);};
function ProcedureCall (idxProcedure,idCaller,callerColor) {   
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
 
    x.className=x.className.replace(callerColor,"w3-grey") ; 
    }//Close Procedure Call

function deleteChild_General(Where) {
    
        while (Where.firstChild) {
            Where.removeChild(Where.lastChild);
            }
        } //Close Delete Procedures 
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
 


function SetVideoSource(mySRC,btnID,btnColor){
    openTabs('VideoTab');
    const myVideoPH=document.getElementById("tech-video");
    const mybtn=document.getElementById(btnID)
    //if(myVideoPH.classList.contains("w3-hide")){myVideoPH.classList.remove("w3-hide")};
    if(mybtn.classList.contains(btnColor)){mybtn.classList.replace(btnColor,"w3-grey")};
    
    myVideoPH.autoplay = true;    
    myVideoPH.src=mySRC;
    myVideoPH.load();

}//Close SetVideoSource

function openTabs(myTab) {
    var i;
    var x = document.getElementsByClassName("xlTecTab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(myTab).style.display = "block";  
  }