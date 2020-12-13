console.log("Your index.js file is loaded correctly!");

function fade() {
    $('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);

$('#buttonClick').on("click",function(){
    $('.cssChange').css("background-color","#4A807B");
    $('.cssChange').css("color","#1D1F1E");
    $('.cssChange').css("box-shadow","0px 4px 4px grey");
})

$("li").on("hover",function(){
    $('.buttonClick').mouseenter("color","#A9CDCA");
});