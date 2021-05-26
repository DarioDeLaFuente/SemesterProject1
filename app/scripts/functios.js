/**
 * Description: Load data from the server and place the returned HTML into the matched elements. .load()
 */
 $( ".header" ).load( "../components/header.html" );
 $( ".nav" ).load( "../components/nav.html" );
 $( ".footer" ).load( "../components/footer.html" );


 /** 
  * It includes openNav
  * (Add a class to a DIV with javascript.)
  * (And removeing a class to a DIV with javascript.)
  */
 
function openSideNav() {
    document.getElementById("sideNav").classList.add("openSideNav");
}
  
function closeSideNav() {
    document.getElementById("sideNav").classList.remove("openSideNav");
}

