document.getElementsByClassName(".branding img").onclick = function() {
    show();
     };
function show() {
    if (                                
    document.querySelector('.nav-menu ').style.display == "flex"){
    document.querySelector('.nav-menu ').style.display = "none"      
    }
  else{
    document.querySelector('.nav-menu ').style.display = "flex"
  }  
}