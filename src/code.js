
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
function BuildSubNaviBar(myMainPage,mySubPage) {
    var mySubMenuItems;
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
                    [ "fmIngredients","ingredients.html","Ingredients"],
                    ["fmfoodtips", "foodtips.html","Tips"]
                    ];
                break;
        default:
        }
    
    let bar = '';
    //Open Navigation
    bar += '<div class="subnav-wrapper">';
    
    //Build Left Side
    bar += '<div class="subnav-left-side">';
        for (var i = 0; i < mySubMenuItems.length; i++) {
               mySubMenuExt= '<div id="'+mySubMenuItems[i][0]+'" class="subnav-link-wrapper"><a href="'+mySubMenuItems[i][1]+'">'+mySubMenuItems[i][2]+'</a></div>';
               bar += mySubMenuExt;
            }
    bar += '</div>';//Close Left
    bar += '</div>';//Close Wrapper
    $("#sub-bar").html(bar);
    
 
    //Add Active page marker
    document.getElementById(mySubPage).className +="active-subnav-link";
  
}

