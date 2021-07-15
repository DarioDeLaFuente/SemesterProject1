/**
 * Description: Load data from the server and place the returned HTML into the matched elements. .load()
 */
$(".header").load("../components/header.html");
$(".nav").load("../components/nav.html");
$(".footer").load("../components/footer.html");

//Body components
$(".hero").load("../components/body-components/hero.html");
$(".info-box").load("../components/body-components/info-box.html");
$(".explore-for-kids").load("../components/body-components/explore-for-kids.html");
$(".explore-for-teachers").load("../components/body-components/explore-for-teachers.html");
$(".explore-for-researchers").load("../components/body-components/explore-for-researchers.html");
$(".testimonial").load("../components/body-components/testimonial.html");
$(".signup").load("../components/body-components/signup.html");

//Sub page components
$(".museum").load("../components/sub-pages/museum.html");
$(".loan").load("../components/sub-pages/loan.html");
$(".sub-page-hero-x").load("../components/heros/sub-page-hero-x.html");
$(".sub-page-hero-x-1").load("../components/heros/sub-page-hero-x-1.html");
$(".sub-shop-hero-x-2").load("../components/heros/sub-shop-hero-x-2.html");
$(".sub-shop-hero-x-3").load("../components/heros/sub-shop-hero-x-3.html");
$(".shop").load("../components/shops/shop.html");
$(".shop-2").load("../components/shops/shop-2.html");
$(".volunteer-form").load("../components/forms/volunteer-form.html");
$(".internships-form-1").load("../components/forms/internships-form-1.html");
//$(".sub-page-body-g").load("../components/sub-pages/sub-page-body-g.html");
//$(".sub-page-body-a").load("../components/sub-pages/sub-page-body-a.html");
//$(".sub-page-body-b").load("../components/sub-pages/sub-page-body-b.html");
//$(".sub-page-body-e").load("../components/sub-pages/sub-page-body-e.html");
//$(".sub-page-body-f").load("../components/sub-pages/sub-page-body-f.html");
//$(".sub-page-body-h").load("../components/sub-pages/sub-page-body-h.html");

/**
 *
 *
 *
 */

var idsAndUrls = [
  { id: ".cosmology", url: "../components/sub-pages/cosmology.html" },
  { id: ".evolution", url: "../components/sub-pages/evolution.html" },
  { id: ".loan", url: "../components/sub-pages/loan.html" },
  { id: ".museum", url: "../components/sub-pages/museum.html" },
  { id: ".medicine", url: "../components/sub-pages/medicine.html" },
  { id: ".ai", url: "../components/sub-pages/ai.html" },
  { id: ".aeronautics", url: "../components/sub-pages/aeronautics.html" },
  { id: ".ecology", url: "../components/sub-pages/ecology.html" },
];

idsAndUrls.forEach(function (idAndUrl) {
  $(idAndUrl.id).load(idAndUrl.url, function () {
    scrollToId();
  });
  //console.log(idAndUrl.id);
  //console.log(idAndUrl.url);
});



/***
 *
 *
 *
 */

 function scrollToId() {
    var scrollId = location.hash.slice(1);
    $(document).ready(function () {
      if (scrollId) {
        var element = document.getElementById(scrollId);
        if (element){
          element.scrollIntoView();
          //console.log(scrollId,element)
        }
      }
    });
  }



/**
 * It includes openNav
 * (Add a class to a DIV with javascript.)
 * (And removeing a class to a DIV with javascript.)
 */

function openSideNav() {
  document.getElementById("side-nav").classList.add("open-side-nav");
}

function closeSideNav() {
  document.getElementById("side-nav").classList.remove("open-side-nav");
}

/**
 * collapse bottuen
 *
 *
 */

function collapse() {
  document.getElementById("butten-collapse").style.display = "block";
}
function notCollapse() {
  document.getElementById("butten-collapse").style.display = "none";
}

function collapseX() {
  document.getElementById("butten-collapse-x").style.display = "block";
}
function notCollapseX() {
  document.getElementById("butten-collapse-x").style.display = "none";
}

function collapseX1() {
  document.getElementById("butten-collapse-x-1").style.display = "block";
}
function notCollapseX1() {
  document.getElementById("butten-collapse-x-1").style.display = "none";
}

function collapseX2() {
  document.getElementById("butten-collapse-x-2").style.display = "block";
}
function notCollapseX2() {
  document.getElementById("butten-collapse-x-2").style.display = "none";
}


