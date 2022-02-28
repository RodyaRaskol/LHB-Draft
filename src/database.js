

//Types of Technique Buttons
const muBtn="MenuButton"
const muDrop="MenuDrop"

//Index Names for Techniques
const idRootTechniques="TechniBtnContainer";

//Department ID's
const idDeptNumberSeries="xltecqSeries";
const idDeptValidation="xltecqValidation";
const idDeptDates="xltecqDates";

//Item ID's
const idItemXLNumSeries="xlItemNumSeries";
const idItemXLBasicValid="xlItemBasicValidation";
const idItemXLCondiValid="xlItemCondValidation";
const idItemXLMonthSeries="xlItemMonthSeries"

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
const idxPasteDialog=5;



const xlTechniquesItemsObj=[
    {itemName:"Number Series",
    id:idItemXLNumSeries,
    title:"Generate a Series of Numbers",
    ParentID:idDeptNumberSeries,
    Created:"2022-02-22",
    Updated:"2022-02-22",
    Action:"InitTechnique",
    muType:muBtn,
    IsActive:true,
    fncs:[idxFncIF,idxFncSEQUENCE],
    pros:[idxProFillSeries,idxProCreateTable],
    tecs:[],
    VideoName:"28 Numbers Later",
    Mission:"Methods for Listing a series of numbers.",
    Details:[{Discussion:'There are a few methods to list a number series from the basic drag/fill, shown in the "Veteran" method,'},
    {Discussion:' utlising the "Fill Series" procedure illustrated in the "Star Method".  "Star?" shows the most common'},
    {Discussion:' error, which is not entering a starting value in the cell.  Excel functions best with a structure where a column is'},
    {Discussion:' filled with the same "type of data" rather than having different formulas in different rows of the column.'},
{Discussion:' However there may be occasions when a horizontal report is called for, especially in Financial Reports, and "Fill Series"'},
{Discussion:' as shown in "Horizontal" can be used to fill in a row.\n'},
{Discussion:'Modern verions of Excel contain additional formulas such as "Sequence" which can also generate series shown in "M365".'},
{Discussion:' The "Superstar" tab creates a series and then turns it into a formula which can be converted into a Table.  As we do this'},
{Discussion:' frequently we have created a tool which does most of the work.'}],
    methods:[{acLevel:1,methName:"Veteran",videoSRC:"videos/SC01.mp4",methType:"Video"},
            {acLevel:1,methName:"Star",videoSRC:"videos/SC02.mp4",methType:"Video"},
            {acLevel:1,methName:"Star?",videoSRC:"videos/SC03.mp4",methType:"Video"},
            {acLevel:1,methName:"Horizontal",videoSRC:"videos/SC04.mp4",methType:"Video"},
            {acLevel:1,methName:"Superstar",videoSRC:"videos/SC05.mp4",methType:"Video"},
            {acLevel:1,methName:"M365",videoSRC:"videos/SC06.mp4",methType:"Video"},
            {acLevel:1,methName:"LHB Tools",videoSRC:"videos/SC07.mp4",methType:"Video"}]},
{itemName:"Basic",
   id:idItemXLBasicValid,
   title:"Limit the value that can be entered into a cell",
   ParentID:idDeptValidation,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"InitTechnique",
   muType:muBtn,
   IsActive:true,
   fncs:[],
   pros:[idxProNameManager,idxProValidationManager,idxProCreateTable,idxPasteDialog],
   tecs:[],
   VideoName:"Not to be!",
Mission:"Limit the values that can be entered into a cell",
Details:[{Discussion:"Data Valiadation is used to control what values are allowed to be entered into a cell."},
{Discussion: 'Using the settings in the Validation manager allows the limitations to be set.  It may be a case of setting a '},
{Discussion: 'range, as demonstrated by "Number Range" or from a list of acceptable values shwon in "Text Range.'},
{Discussion:'  Using a table as the reference allows the list to automatically expand as new enteries are added.'},
{Discussion:"  It's not necessary to use a Name as a reference to the cells in the table in wks!a1:a10 form will also work,"},
{Discussion:' but we find Named ranges are easier to work with.  It would be great if the Validation tool got a complete update'},
{Discussion:', so that it could accept more advance formulas but we deal with what we have.'}],
methods:[{acLevel:1,methName:"Number Range",videoSRC:"videos/S1E2Sc1.mp4",methType:"Video"},
{acLevel:1,methName:"Text Range",videoSRC:"videos/S1E2Sc2.mp4",methType:"Video"},
{acLevel:1,methName:"Veteran",videoSRC:"videos/S1E2Sc3.mp4",methType:"Video"},
{acLevel:1,methName:"Star",videoSRC:"videos/S1E2Sc4.mp4",methType:"Video"},
{acLevel:1,methName:"LHB Tools",videoSRC:"videos/S1E2Sc5.mp4",methType:"Video"}]},

   {itemName:"Conditional",
   id:idItemXLCondiValid,
   title:"Validation based upon a value in an adjacent cell",
   ParentID:idDeptValidation,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"InitTechnique",
   muType:muBtn,
   IsActive:true,
   fncs:[idxFncOffset,idxFncMatch,idxFncCountIfs],
   pros:[idxProNameManager,idxProValidationManager,idxProCreateTable],
   tecs:[],
   VideoName:null,
Mission:"Limit the values that can be entered into a cell",
Details:[{Discussion:"To Follow"}],
methods:[{acLevel:1,methName:null,videoSRC:null}]},
   
   {itemName:"Monthly Series",
   id:idItemXLMonthSeries,
   title:"Forecast date in Month",
   ParentID:idDeptDates,
   Created:"2022-02-22",
   Updates:"2022-02-22",
   Action:"InitTechnique",
   muType:muBtn,
   IsActive:true,
   fncs:[idxFncEDATE,idxFncEOMONTH],
   pros:[],
   tecs:[idItemXLNumSeries],
   VideoName:null,
Mission:"How to determine a date [x] months before/after an Initial Date.",
Details:[{Discussion:"To Follow"}],
methods:[{acLevel:1,methName:null,videoSRC:null}]}
];//Close LHB Techniques



const xlFunctions=[
    {id: idxFncIF,
        name:"=IF()",
        link:"https://support.microsoft.com/en-us/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2",
        fnClass:"xlFunctions-Classic",
        desc:'=IF(), preforms a logical test and then returns a value if TRUE and a value if FALSE.'
        +' IF() can be chained together so that the values returned can also be a result of an IF() formula.'
    },

    {id:idxFncSEQUENCE,
        name:"=SEQUENCE()",
        link:"https://support.microsoft.com/en-us/office/sequence-function-57467a98-57e0-4817-9f14-2eb78519ca90",
        fnClass:"xlFunctions-Spill",
        desc: `=SEQUENCE() is one of the new "Spill Formulas".  It generates a series of numbers`
    +` and outputs the results.  It can also be used within a function to generate a number series which is it's real power as`
    +` previously this was achieved by using the =OFFSET() or =ROW() function.`},

    {id: idxFncEOMONTH,
        name:"=EOMONTH()",
        link:"https://support.microsoft.com/en-us/office/eomonth-function-7314ffa1-2bc9-4005-9d66-f49db127d628",
        fnClass:"xlFunctions-Classic",
    desc:`=EOMONTH() gives the date at the end of the month the specified number of months before/after the reference date.`},

    {id:idxFncEDATE,
    name:"=EDATE()",
        link:"https://support.microsoft.com/en-us/office/edate-function-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5",
        fnClass:"xlFunctions-Classic",
    desc:`=EDATE() gives the same day of the month which is the specified number of months before/after the reference date.`
+` EDATE() has some issues dealing with the uneven length of months hence why it is best practice to use a count of months`
+` since the Baseline Date rather than incrementing by 1 month.`},

    {id:idxFncIndex,
        name:"=INDEX()",
        link:"https://support.microsoft.com/en-us/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd",
        fnClass:"xlFunctions-Classic",
    desc:`=INDEX() is amongst the most versatile/powerful functions in Excel.`
+` In its most used form it looks within a set of numbers and returns the value which is in the indicated Row and Column.`
+` INDEX(), often combined with MATCH() together with SUM() and IF() are the power Triumvirate of Excel.`},
    
    {id:idxFncMatch,
        name:"=MATCH()",
        link:"https://support.microsoft.com/en-us/office/match-function-e8dffd45-c762-47d6-bf89-533f4a37673a",
        fnClass:"xlFunctions-Classic",
    desc:`=MATCH() searches for a value and reports in what position, more properly termed the index number, within the searched area the value occurs.`
+` MATCH() is best used to find exact values but has the flexibility to find closest values, be aware at LHB we only use th exact method.`},
        
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

    {name:"Validation-Manager",
    id:idxProValidationManager,
    Message:"To display Validation Manager:",
    Menu:"Data>Data Tools>Data Validation",
    WinTip:"Hold ALT then A,V,V",
    WebTip:"TBC",
    MacTip:"TBC",
    Note:"None"},

    {name:"Paste Name Dialog",
    id:idxPasteDialog,
    Message:'In the Data Validation manager to get a list of workbook names type "=" then press ',
    Menu:null,
    WinTip:"F3",
    WebTip:"May not be available",
    MacTip:"TBC",
    Note:"If the Paste Name dialog is not available you can type the name."
    +'  On Excel Online Names are not available and you need to refer to the range manually.'
    +'  Referring to ranges with a Sheet!A1:Ax will work on any platform and as long as the range is in a Table'
    +' the available options under validation will reflect any changes in size of the source.'}

    ];//Close Excel Procedures