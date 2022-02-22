//Types of Technique Buttons
const muBtn="MenuButton"
const muDrop="MenuDrop"

//Index Names for Techniques
const idRootTechniques="TechniBtnContainer";
const idxtecNumberSeries="idNumSeries";
const idxtecValidation="idValidation";
const idxtecBasicValidation="idBasicValidation";
const idxtecCondValidation="idCondValidation";
const idxtecDates="idDates";
const idxtecMonthSeries="idMonthSeries"

// Excel Functions Index
const idxFncIF=1
const idxFncSEQUENCE=2
const idxFncEOMONTH=3
const idxFncEDATE=4
const idxFncIndex=5
const idxFncMatch=6
const idxFncOffset=7
const idxFncSumIfs=8
const idxFncCountIfs=9

//Excel Procedures Index
const idxProCreateTable=1;
const idxProFillSeries=2;
const idxProNameManager=3;
const idxProValidationManager=4;

const xlTechniques=[
    {Name:"Number Series",
    id:idxtecNumberSeries,
    title:"Generate a Series of Numbers",
    ParentID:idRootTechniques,
    Created:"2022-02-22",
    Updated:"2022-02-22",
    Action:"",
    muType:muBtn,
    fncs:[idxFncIF,idxFncSEQUENCE],
    pros:[idxProFillSeries],
    tecs:[],
    VideoName:"28 Numbers Later",
    methods:[{acLevel:1,methName:"Veteran",videoSRC:"videos/SC01.mp4"},
            {acLevel:1,methName:"Star",videoSRC:"videos/SC02.mp4"},
            {acLevel:1,methName:"Star?",videoSRC:"videos/SC03.mp4"},
            {acLevel:1,methName:"Horizontal",videoSRC:"videos/SC04.mp4"},
            {acLevel:1,methName:"Superstar",videoSRC:"videos/SC05.mp4"},
            {acLevel:1,methName:"M365",videoSRC:"videos/SC06.mp4"}]},
   
    {Name:"Validation",
   id:idxtecValidation,
   title:"Limit the value that can be entered into a cell",
   ParentID:idRootTechniques,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"",
   muType: muDrop,
   fncs:[],
   pros:[],
   tecs:[]},

   {Name:"Basic",
   id:idxtecBasicValidation,
   title:"Limit the value that can be entered into a cell",
   ParentID:idxtecValidation,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"",
   muType:muBtn,
   fncs:[],
   pros:[idxProNameManager,idxProValidationManager],
   tecs:[]},

   {Name:"Conditional",
   id:idxtecCondValidation,
   title:"Validation based upon a value in an adjacent cell",
   ParentID:idxtecValidation,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"",
   muType:muBtn,
   fncs:[idxFncOffset,idxFncMatch,idxFncCountIfs],
   pros:[idxProNameManager,idxProValidationManager,idxProCreateTable],
   tecs:[]},
   
   {Name:"Dates",
   id:idxtecDates,
   title:"Date Manipulations",
   ParentID:idRootTechniques,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"",
   muType: muDrop,
   fncs:[],
   pros:[],
   tecs:[]},

   {Name:"Monthly Series",
   id:idxtecMonthSeries,
   title:"Forecast date in Month",
   ParentID:idxtecDates,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"",
   muType:muBtn,
   fncs:[idxFncEDATE,idxFncEOMONTH],
   pros:[],
   tecs:[idxtecNumberSeries]}
];//Close LHB Techniques



const xlFunctions=[
    {id: idxFncIF,
        name:"=IF()",
        link:"https://support.microsoft.com/en-us/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2",
        fnClass:"xlFunctions-Classic"},

    {id:idxFncSEQUENCE,
        name:"=SEQUENCE()",
        link:"https://support.microsoft.com/en-us/office/sequence-function-57467a98-57e0-4817-9f14-2eb78519ca90",
        fnClass:"xlFunctions-Spill"},

    {id: idxFncEOMONTH,
        name:"=EOMONTH()",
        link:"https://support.microsoft.com/en-us/office/eomonth-function-7314ffa1-2bc9-4005-9d66-f49db127d628",
        fnClass:"xlFunctions-Classic"},

    {id:idxFncEDATE,
    name:"=EDATE()",
        link:"https://support.microsoft.com/en-us/office/edate-function-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5",
        fnClass:"xlFunctions-Classic"},

    {id:idxFncIndex,
        name:"=INDEX()",
        link:"https://support.microsoft.com/en-us/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd",
        fnClass:"xlFunctions-Classic"},
    
    {id:idxFncMatch,
        name:"=MATCH()",
        link:"https://support.microsoft.com/en-us/office/match-function-e8dffd45-c762-47d6-bf89-533f4a37673a",
        fnClass:"xlFunctions-Classic"},
        
    {id:idxFncSumIfs,
        name:"=SUMIFS()",
        link:"https://support.microsoft.com/en-us/office/sumifs-function-c9e748f5-7ea7-455d-9406-611cebce642b",
        fnClass:"xlFunctions-Classic"},

    {id:idxFncCountIfs,
        name:"=COUNTIFS()",
        link:"https://support.microsoft.com/en-us/office/countifs-function-dda3dc6e-f74e-4aee-88bc-aa8c2a866842",
        fnClass:"xlFunctions-Classic"},
        
    {id:idxFncOffset,
        name:"=OFFSET()",
        link:"https://support.microsoft.com/en-us/office/offset-function-c8de19ae-dd79-4b9b-a14e-b4d906d11b66",
        fnClass:"xlFunctions-Classic"},
];//Close Excel Functions



const xlProcedures=[
    {name:"Create-Table",
    id:idxProCreateTable,
    Message:"Select a Cell in the Range you wish to create the Table then:",
    Menu:"Home>Styles>Format as Table",
    WinTip:"CTRL + T",
    WebTip:"CTRL + L",
    MacTip:"COMMAND + T",
    Note:"None."},

    {name:"Fill-Series",
    id:idxProFillSeries,
    Message:"To Create a Number Series:",
    Menu:"Home>Editing>Fill>Series",
    WinTip:"Hold ALT then H,F,I,S",
    WebTip:"Not Available on Web",
    MacTip:"Home>Editing>Fill>Series",
    Note:"None."},

    {name:"Name-Manager",
    id:idxProNameManager,
    Message:"To display Name Manager:",
    Menu:"Formulas>Defined Names>Name Manager",
    WinTip:"CTRL + F3",
    WebTip:"Not Available on Web",
    MacTip:"COMMAND + SHIFT + F3",
    Note:"An alternate method is to use the Name box (to the left of the formula bar),"
    +" but you need to hit enter after typing the name and if the name already exists"
    +" in the workbook, Excel moves to the named range."},

    {name:"Validation",
    id:idxProValidationManager,
    Message:"To display Validation Manager:",
    Menu:"Data>Data Tools>Data Validation",
    WinTip:"Hold ALT then A,V,V",
    WebTip:"TBC",
    MacTip:"TBC",
    Note:"None"}
    ];//Close Excel Procedures