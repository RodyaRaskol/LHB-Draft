const styleProcedureButtons="xltech-procedure-button";

//const xlTechniquesItemsObjContainer="xlTechniquesItemsObjPH";
const prcdButtonClass="xltech-techniques-button";

const xlProceduresContainer="xlProceduresPH";
const xlFunctionsContainer="XlFunctionsPH";
const xlMethodsContainer="method-bar";


function AddColortoElement(myElement,myColor){if(!myElement.classList.contains(myColor)){
    myElement.classList.add(myColor)};};

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

//Build Functions/Procedures/Techniques
    let myDiv, myLink, myBtn ,myLine
    
//Build Cover Page    
    const myMission=document.getElementById("Mission");
    const myDetails=document.getElementById("Details");
    myMission.innerHTML=myTech[0].Mission;
    myDetails.innerHTML="";
     for(var i = 0; i < myTech[0].Details.length; i++){
        myLine=document.createElement('li');
        myLine.appendChild(document.createTextNode(myTech[0].Details[i].Discussion));
        myDetails.appendChild(myLine);}
//Add Video Name
    const myVideo=document.getElementById("tech-video");
    const VideoTitle=document.getElementById('VideoTitlePH');
    const VideoTitleMini=document.getElementById('Mini-VideoTitlePH');
    const VideoTitleSmall=document.getElementById("Mini-VideoTitlePH-Portrait");
    VideoTitle.innerHTML=myTech[0].VideoName;
    VideoTitleMini.innerHTML=myTech[0].VideoName;
    VideoTitleSmall.innerHTML=iconBurger+" "+ myTech[0].VideoName;
    AddColortoElement(VideoTitleSmall,myColor);

 //Fill Functions/Procedures/Technqiues/Methods   
    const menusToFill=[
        {navType:"Main", fncRoot:"XlFunctionsPH",prcRoot:"xlProceduresPH",tchRoot:"xlTechniquesPH",mthRoot:"method-bar-large"},
        {navType:"Mini", fncRoot:"functions-Mini",prcRoot:"procedures-Mini",tchRoot:"techniques-Mini",mthRoot:"method-bar"}]
//Loop Over Items to Fill
menusToFill.forEach(fillItems);
    
function fillItems(menu){
    const myFNCContainer=document.getElementById(menu.fncRoot);
    const myPRCContainer=document.getElementById(menu.prcRoot);
    const myTCHContainer=document.getElementById(menu.tchRoot);
    const myMTHContainer=document.getElementById(menu.mthRoot);
    const myFNCBtn=document.getElementById("fncBtn");
    const myPRCBtn=document.getElementById("prcBtn");
    const myTCHBtn=document.getElementById("tchBtn");
    const myMTHBtn=document.getElementById("mthBtn");
   
    deleteChild_General(myFNCContainer);
    deleteChild_General(myPRCContainer);
    deleteChild_General(myTCHContainer);
    deleteChild_General(myMTHContainer);

 //Build Functions
        //Color for Availability
    if(myFNCBtn.classList.contains(myColor)){myFNCBtn.classList.remove(myColor)};
    if (myTech[0].fncs.length>0){myFNCBtn.classList.add(myColor)};

    for (var i = 0; i < myTech[0].fncs.length; i++) {
        const myItem=xlFunctions.filter(item => item.id==myTech[0].fncs[i]);
        myDiv=document.createElement('div');
        myDiv.className="w3-bar w3-padding"
        myFNCContainer.appendChild(myDiv);
        myLink=document.createElement('a');
        myLink.className="w3-button w3-left";
        myLink.textContent=myItem[0].name;
        myLink.href=myItem[0].link;
        myLink.title="MSFT Link";
        myDiv.appendChild(myLink);
        myBtn=document.createElement('button');
        myBtn.type="button";
        myBtn.className="w3-button w3-right w3-padding w3-opacity w3-small "+myColor;
        myBtn.title=myItem[0].desc;
        myBtn.textContent="Desc";
        myBtn.setAttribute('onclick','xlFNCDesc("'+myItem[0].id+'");');
        myDiv.appendChild(myBtn);
    };
//Build Procedures
    if(myPRCBtn.classList.contains(myColor)){myPRCBtn.classList.remove(myColor)};
    if (myTech[0].pros.length>0){myPRCBtn.classList.add(myColor)};
 
    for (var i = 0; i < myTech[0].pros.length; i++) {
        myDiv=document.createElement('div');
        myDiv.className="w3-bar w3-padding";
        myPRCContainer.appendChild(myDiv);
        let myProcedure=xlProcedures.filter(pro =>pro.id==myTech[0].pros[i]);        
        myBtn=document.createElement('button');
        myBtn.innerHTML=myProcedure[0].name;
        myBtn.id='prcdbtn'+myProcedure[0].id+menu.navType;
        myBtn.className="w3-bar-item w3-button w3-round-large "+myColor;
        myBtn.setAttribute("onclick", 'xlProcedureCall("'+myProcedure[0].id+'","'+myBtn.id+'","'+myColor+'");');
        myDiv.appendChild(myBtn);};

//Build Techniques
    if(myTCHBtn.classList.contains(myColor)){myTCHBtn.classList.remove(myColor)};
    if (myTech[0].tecs.length>0){myTCHBtn.classList.add(myColor)};
 
    for (var i = 0; i < myTech[0].tecs.length; i++) {
        myDiv=document.createElement('div');
        myDiv.className="w3-bar w3-padding";
        myTCHContainer.appendChild(myDiv);
        let myTechnique=xlTechniquesItemsObj.filter(tch =>tch.id==myTech[0].tecs[i]);        
        myBtn=document.createElement('button');
        myBtn.innerHTML=myTechnique[0].itemName;
        myBtn.id='tecbtn'+myTechnique[0].id+menu.navType;
        myBtn.className="w3-bar-item w3-button w3-round-large "+myColor;
        myBtn.setAttribute("onclick", 'xlTCHMsg("'+myTechnique[0].id+'");');
        myDiv.appendChild(myBtn);};

//Build Method Bar
    //Color for Availability
    if(myMTHBtn.classList.contains(myColor)){myMTHBtn.classList.remove(myColor)};
    if (myTech[0].methods.length>0){myMTHBtn.classList.add(myColor)};

    // Add Link to Scope Discussion 
    myBtn=document.createElement("div");
    myBtn.type="button";
    myBtn.className="w3-bar-item w3-button w3-border w3-border-white " + myColor;
    myBtn.setAttribute('onclick',"openTabs('DiscTab')");
    myBtn.textContent="Scope";
    myMTHContainer.appendChild(myBtn);

    //Add Methods
    if (myTech[0].methods.length>0){
    for (var i = 0; i < myTech[0].methods.length; i++) {      
        myBtn=document.createElement("div");
        myBtn.type="button";
        myBtn.className="w3-bar-item w3-button w3-border w3-border-white " + myColor;   
        myBtn.id="Method"+i+menu.navType;
        myBtn.innerHTML=myTech[0].methods[i].methName;
        const myFunction='SetVideoSource("'+myTech[0].methods[i].videoSRC+'","Method'+i+menu.navType+'","'+myColor+'")';
        myBtn.setAttribute("onclick", myFunction);
        myMTHContainer.appendChild(myBtn);}       

};// close of fill function
//Set Video to First Video
        myVideo.autoplay = false;
        myVideo.src=myTech[0].methods[0].videoSRC;
        myVideo.load();};

    }//Close  Init Function

function xlFNCDesc(myFNC){
    const myItem=xlFunctions.filter(item => item.id==myFNC);
    alert(myItem[0].desc);};
function xlTCHMsg(myTCH){
    const myItem=xlTechniquesItemsObj.filter(item=>item.id=myTCH);
    const myDeptID=myItem[0].ParentID;
    const myDept = LHBDepartmentsObj.filter(item=>item.id=myDeptID);
    let message='Find details under:'+"\n";
    message +='Department: '+myDept[0].name+"\n"
    message +='Item: '+myItem[0].itemName+"\n"
    alert(message);

}

function xlProcedureCall (idxProcedure,idCaller,callerColor) {   
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