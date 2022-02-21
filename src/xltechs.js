const idxCreateTable=1;
const idxSeriesList=2;
const idxNameManager=3;
const idxFncIF=1
const idxFncSEQUENCE=2
const idxFncEOMONTH=3
const idxFncEDATE=4
const styleProcedureButtons="xltech-procedure-button";
const xlProceduresContainer="xlProceduresPH";
const xlFunctionsContainer="XlFunctionsPH"
const xlProcedures={1:
            {"name":"Create-Table",
            "idx":1,
            "Message":"Select a Cell in the Range you wish to create the Table then:",
            "WinTip":"CTRL + T",
            "WebTip":"CTRL + L",
            "MacTip":"COMMAND + T",
            "Note":"None."},
            2:{"name":"Fill-Series",
            "idx":2,
            "Message":"To Create a Number Series:",
            "WinTip":"Home>Editing>Fill>Series",
            "WebTip":"Not Available on Web",
            "MacTip":"Home>Editing>Fill>Series",
            "Note":"None."},
            3:{"name":"Name-Manager",
            "idx":3,
            "Message":"To display name manager:",
            "WinTip":"CTRL + F3",
            "WebTip":"Not Available on Web",
            "MacTip":"COMMAND + SHIFT + F3",
            "Note":"An alternate method is to use the Name box (to the left of the formula bar), but you need to hit enter after typing the name and if the name already exists in the workbook, Excel moves to the named range."}
        };
const xlFunctions={
            1:{"name":"=IF()",
            "link":"https://support.microsoft.com/en-us/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2",
            "fnClass":"xlFunctions-Classic"},
            2:{"name":"=SEQUENCE()",
            "link":"https://support.microsoft.com/en-us/office/sequence-function-57467a98-57e0-4817-9f14-2eb78519ca90",
            "fnClass":"xlFunctions-Spill"},
            3:{"name":"=EOMONTH()",
            "link":"https://support.microsoft.com/en-us/office/eomonth-function-7314ffa1-2bc9-4005-9d66-f49db127d628",
            "fnClass":"xlFunctions-Classic"},
            4:{"name":"=EDATE()",
            "link":"https://support.microsoft.com/en-us/office/edate-function-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5",
            "fnClass":"xlFunctions-Classic"}}


function HighlightTechClicked(myBtnID){
    var TechbtnContainer=document.getElementById("TechniBtnContainer");
    var Techbtns=TechbtnContainer.getElementsByClassName("xltech-techniques-button");
    var myBtn=document.getElementById(myBtnID)    

    for (var i = 0; i < Techbtns.length; i++) {
        Techbtns[i].classList.remove("xltech-techniques-button-clicked");
         };
    myBtn.classList.add("xltech-techniques-button-clicked");}

$(document).ready(function(){})

function ProcedureCall (idxProcedure) {   
    let myProcedure=xlProcedures[idxProcedure]
    let message='';
    message +=myProcedure.Message +"\n"
    message +="Win: "+myProcedure.WinTip +"\n"
    message +="Web: "+myProcedure.WebTip +"\n"
    message +="Mac: "+myProcedure.MacTip +"\n"
    message +="Notes: "+myProcedure.Note
    alert(message); }

function deleteChild_Procedures() {
        const myNode = document.getElementById(xlProceduresContainer);
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
        }
      }  

function deleteChild_Functions() {
        const myNode = document.getElementById(xlFunctionsContainer);
        while (myNode.firstChild) {
          myNode.removeChild(myNode.lastChild);
        }
      }  

function CreateProcedureButton(Container,Innertxt,idtxt,myFunction,myClass){
        let myContainer=document.getElementById(Container);
        myContainer.innerHTML+='<button id="'+idtxt+'" onclick="'+myFunction+'" class="'+myClass+'">'+Innertxt+'</button>';    
    }
    
function CreateFunctionLink(idx){
        let myFunction=xlFunctions[idx];
        let myContainer=document.getElementById(xlFunctionsContainer);
        let myDiv=document.createElement('div')
        let myA=document.createElement('a');
        myA.href=myFunction.link;
        myA.innerHTML=myFunction.name;
        myA.target="_blank";
        myA.classList.add(myFunction.fnClass);
        myDiv.appendChild(myA);
        myContainer.appendChild(myDiv);
    }

function NumberSeries(){
        HighlightTechClicked("NumberSeries");
        deleteChild_Procedures();
        deleteChild_Functions();
        //Add Functions
        CreateFunctionLink(idxFncIF);
        CreateFunctionLink(idxFncSEQUENCE);
        // Add Procedured
        let btnID = "btnCrtTbl";
        CreateProcedureButton(xlProceduresContainer,"Create Table",btnID,'ProcedureCall('+idxCreateTable+')','xltech-techniques-button');
        btnID = "btnFillSeries";
        CreateProcedureButton(xlProceduresContainer,"Fill Series",btnID,'ProcedureCall('+idxSeriesList+')','xltech-techniques-button');}

function BasicValidation(){
    HighlightTechClicked("BasicValidation");
    deleteChild_Procedures();
    deleteChild_Functions();
     //Add Functions
     //None for Basic Validation
    let btnID = "btnNameMgr";
    CreateProcedureButton(xlProceduresContainer,"Name Manager",btnID,'ProcedureCall('+idxNameManager+')','xltech-techniques-button');
}

function DateProjection(){
    HighlightTechClicked("DateProjection");
    deleteChild_Procedures();
    deleteChild_Functions();
    //Add Functions
    CreateFunctionLink(idxFncEOMONTH);
    CreateFunctionLink(idxFncEDATE);
    // Add Procedures
}







