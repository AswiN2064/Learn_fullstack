// alert("hello world");

// $(document).ready(function(){    // if script is inside the head tag use this type
//     $("h1").css("color", "red"); // access h1 element and cahnge its css property
// })

$("h1").css("color", "blue"); //if script is added inside the body tag



console.log($("h1").css("color")); // give the color of the selected element

// add a class to a HTML file which class is created in style.css
$("h1").addClass("h1-title");
// $("h1").removeClass("h1-title");

// manipulating text
// -------------------

$("h1").text("bye")
// $("button").text("hello");
$("button").html("<em>click me</em>");


// manipulate attributes
$("a").attr("href", "https://www.yahoo.com/");

// event listener using jquery
$("h1").click(function(){
    $("h1").css("color", "purple");
})

// $("input").keypress(function(event){
//     $("h1").text(event.key);
// })

$("input").on("mouseover", function(){
    $("h1").css("color","purple");
});

// creating a button when the websitte is live in console box
$("h1").before("<button> new before </button>");
$("h1").after("<button> new after </button>");
$("h1").prepend("<button> new prepend </button>");
$("h1").append("<button> new append </button>");

// creating animations using jquery
$("button").click(function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity : 0.5});
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
})