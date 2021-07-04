/**
 * Description: Load data from the server and place the returned HTML into the matched elements. .load()
 */
$(".header").load("../components/header.html");
$(".nav").load("../components/nav.html");
$(".footer").load("../components/footer.html");

//Body components
$(".hero-e").load("../components/body-components/hero-e.html");
$(".body-b").load("../components/body-components/body-b.html");
$(".body-e").load("../components/body-components/body-e.html");
$(".body-f").load("../components/body-components/body-f.html");
$(".body-g").load("../components/body-components/body-g.html");
$(".testimonial-body-d").load("../components/body-components/testimonial-body-d.html");
$(".body-signup-c").load("../components/body-components/body-signup-c.html");

//Sub page components
$(".sub-page-body-d").load("../components/sub-pages/sub-page-body-d.html");
$(".sub-page-body-c").load("../components/sub-pages/sub-page-body-c.html");
$(".sub-page-hero-x").load("../components/sub-pages/sub-page-hero-x.html");
$(".sub-page-hero-x-1").load("../components/sub-pages/sub-page-hero-x-1.html");
$(".sub-shop-hero-x-2").load("../components/sub-pages/sub-shop-hero-x-2.html");
$(".sub-shop-hero-x-3").load("../components/sub-pages/sub-shop-hero-x-3.html");
$(".sub-shop-body").load("../components/sub-pages/sub-shop-body.html");
$(".sub-shop-body-2").load("../components/sub-pages/sub-shop-body-2.html");
$(".sub-page-form").load("../components/sub-pages/sub-page-form.html");
$(".sub-page-form-1").load("../components/sub-pages/sub-page-form-1.html");
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
  { id: ".sub-page-body-a", url: "../components/sub-pages/sub-page-body-a.html" },
  { id: ".sub-page-body-b", url: "../components/sub-pages/sub-page-body-b.html" },
  { id: ".sub-page-body-c", url: "../components/sub-pages/sub-page-body-c.html" },
  { id: ".sub-page-body-d", url: "../components/sub-pages/sub-page-body-d.html" },
  { id: ".sub-page-body-e", url: "../components/sub-pages/sub-page-body-e.html" },
  { id: ".sub-page-body-f", url: "../components/sub-pages/sub-page-body-f.html" },
  { id: ".sub-page-body-g", url: "../components/sub-pages/sub-page-body-g.html" },
  { id: ".sub-page-body-h", url: "../components/sub-pages/sub-page-body-h.html" },
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


