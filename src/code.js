function BuildMainNaviBar(myPage) {
    var bar = '';
    //Open Navigation
    bar += '<div class="nav-wrapper">';
    
    //Build Left Side
    bar += '<div class="nav-left-side">';
        bar += '<div id="jsNaviBar_index" class="nav-link-wrapper"><a href="index.html">Home</a></div>';
        bar += '<div id="jsNaviBar_work" class="nav-link-wrapper"><a href="work.html">Excel</a></div>';
        bar += '<div id="jsNaviBar_work" class="nav-link-wrapper"><a href="work.html">Work</a></div>';
        bar += '<div id="jsNaviBar_knowledge" class="nav-link-wrapper"><a href="knowledge.html">Knowledge</a></div>';
        //bar += '<div id="jsNaviBar_food" class="nav-link-wrapper"><a href="food.html">Food</a></div>';
       // bar += '<div id="jsNaviBar_play"class="nav-link-wrapper"><a href="play.html">Play</a></div>';
        bar += '<div id="jsNaviBar_stalls"class="nav-link-wrapper"><a href="stalls.html">Stalls</a></div>';
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
function BuildSubNaviBar(mySubPage) {

    var mySubMenu;
   /* "ingredients": { id: "fmIngredients", page: "ingredients.html",display:"Ingredients" }*/
            var FoodSubs = [
                ["fmHome","food.html","Food Home"],
                [ "fmIngredients","ingredients.html","Ingredients"],
               ["fmfoodtips", "foodtips.html","Tips"]
                ];
    mySubMenu=FoodSubs
    let bar = '';
    //Open Navigation
    bar += '<div class="subnav-wrapper">';
    
    //Build Left Side
    bar += '<div class="subnav-left-side">';
        for (var i = 0; i < submenus.length; i++) {
               mySubMenu= '<div id="'+submenus[i][0]+'" class="subnav-link-wrapper"><a href="'+submenus[i][1]+'">'+submenus[i][2]+'</a></div>';
                bar += mySubMenu;
            }
    bar += '</div>';//Close Left

    bar += '</div>';//Close Wrapper

    $("#sub-bar").html(bar);
 

    //Add Active page marker
    document.getElementById(mySubPage).className +="active-subnav-link";
  
};
function BuildExcelNaviBar(mySubPage) {

    var mySubMenu;
   /* "ingredients": { id: "fmIngredients", page: "ingredients.html",display:"Ingredients" }*/
            var submenus = [
                ["fmHome","food.html","Food Home"],
                [ "fmIngredients","ingredients.html","Ingredients"],
               ["fmfoodtips", "foodtips.html","Tips"]
                ];
    let bar = '';
    //Open Navigation
    bar += '<div class="subnav-wrapper">';
    
    //Build Left Side
    bar += '<div class="subnav-left-side">';
        for (var i = 0; i < submenus.length; i++) {
               mySubMenu= '<div id="'+submenus[i][0]+'" class="subnav-link-wrapper"><a href="'+submenus[i][1]+'">'+submenus[i][2]+'</a></div>';
                bar += mySubMenu;
            }
    bar += '</div>';//Close Left

    bar += '</div>';//Close Wrapper

    $("#sub-bar").html(bar);
 

    //Add Active page marker
    document.getElementById(mySubPage).className +="active-subnav-link";
  
};