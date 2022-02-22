
function BuildMainNaviBar(myPage) {
    var bar = '';
    //Open Navigation
    bar += '<div class="nav-wrapper">';
    
    //Build Left Side
    bar += '<div class="nav-left-side">';
        bar += '<div id="jsNaviBar_index" class="nav-link-wrapper"><a href="index.html">Home</a></div>';
        bar += '<div id="jsNaviBar_excel" class="nav-link-wrapper"><a href="xlhome.html">Excel</a></div>';
        bar += '<div id="jsNaviBar_work" class="nav-link-wrapper"><a href="work.html">Work</a></div>';
        bar += '<div id="jsNaviBar_knowledge" class="nav-link-wrapper"><a href="knowledge.html">Knowledge</a></div>';
        //bar += '<div id="jsNaviBar_food" class="nav-link-wrapper"><a href="food.html">Food</a></div>';
       // bar += '<div id="jsNaviBar_play"class="nav-link-wrapper"><a href="play.html">Play</a></div>';
        bar += '<div id="jsNaviBar_stalls"class="nav-link-wrapper"><a href="stalls.html">Stalls</a></div>';
        bar += '<div id="jsNaviBar_test" class="nav-link-wrapper"><a href="test.html">Test</a></div>';
        bar += '<div id="jsNaviBar_about" class="nav-link-wrapper"><a href="about.html">About</a></div>';
        
    bar += '</div>';//Close Left

    //Build Right
    bar += '<div class="nav-right-side">';
        bar +='<div class="brand">';
            bar+='<div>Life Hacks Bazaar</div>';
        bar += '</div>';
    bar += '</div>';//Close Right

    bar += '</div>';//Close Wrapper

    $("#main-bar").html(bar);
   // document.getElementById("main-bar").html(bar);

    //Add Active page marker
    document.getElementById(myPage).className +="active-nav-link";
  
};
function BuildMainNaviBarW3(myPage) {

    const w3MainMenu=' class="w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black mainmenuitems"'
    var bar = '';
    //Open Navigation
    bar += '<div class="w3-bar">';
    

        bar += '<a href="index.html" id="idxIndex"'+w3MainMenu+'>Home</a>';
        bar += '<a href="xlhome.html" id="idxExcel"'+w3MainMenu+'>Excel</a>';
        bar += '<a href="work.html" id="idxWork"'+w3MainMenu+'>Work</a>';
        bar += '<a href="knowledge.html" id="idxKnowledge"'+w3MainMenu+'>Knowledge</a>';
        bar += '<a href="stalls.html" id="idxStalls"'+w3MainMenu+'>Stalls</a>';
        bar += '<a href="test.html" id="idxTest"'+w3MainMenu+'>Test</a>';
        bar += '<a href="about.html" id="idxAbout"'+w3MainMenu+'>About</a>';
        bar +='<div class="w3-bar-item w3-right">Life Hacks Bazaar</div>';


    bar += '</div>';//Close Wrapper

    $("#main-bar").html(bar);

    //Add Active page marker
    var x =document.getElementById(myPage);
    x.className=x.className.replace("w3-border-white","w3-border-green") ;

  
};
function BuildSubNaviBar(myMainPage,mySubPage) {
    const w3SubMenu='w3-bar-item w3-button w3-hover-none w3-border-white w3-bottombar w3-hover-border-black mainmenuitems';
    var mySubMenuItems;
    let bar = '';
    switch (myMainPage){
        case "Excel":
                mySubMenuItems = [
                    ["xlHome","xlhome.html","Excel Home"],
                    ["xlTechniques","xltechniques.html","Techniques"],
                    ["xlhowto","xlhowto.html","How to ..."],
                    ["xlwhydid","xlwhydid.html","Why did ..."],
                    ["xlPowerPivot","xlpowerpivot.html","Power Pivot"],
                    ["xlEpics","xlepics.html","Epics"],
                    ["xlToolShed","xltoolshed.html","Tool Shed"]                   
                    ];
                break;
        case "Food":
                mySubMenuItems = [
                    ["fmHome","food.html","Food Home"],
                    ["fmIngredients","ingredients.html","Ingredients"],
                    ["fmfoodtips", "foodtips.html","Tips"]
                    ];
                break;
        default:
        }
    //Build Sub Bar
    
    bar += '<div class="w3-bar">';
    for (var i = 0; i < mySubMenuItems.length; i++) {
        mySubMenuExt= '<a href="'+mySubMenuItems[i][1]+'" id="'+mySubMenuItems[i][0]+'" class="'+w3SubMenu+'">'+mySubMenuItems[i][2]+'</a>';
        bar += mySubMenuExt;
        }  
    bar += '</div>';//Close Wrapper
    $("#sub-bar").html(bar);
 
    //Add Active page marker
    var subMenu=document.getElementById(mySubPage);
    subMenu.className=subMenu.className.replace("w3-border-white","w3-border-green") ;
  
}

