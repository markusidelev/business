topbar.hide()


// $("nav a").not(":first").click(function(e)	{
// 	e.preventDefault();
// 	$('ul.navig').removeClass('open');
// 	$('.button_menu').removeClass('change');
// 	var href=$(this).attr("href");
// 	$("html,body").animate({scrollTop:$(href).offset().top},1000);
// });



// $(".banner a").click(function(e)	{
// 	e.preventDefault();
// 	var href=$(this).attr("href");
// 	$("html,body").animate({scrollTop:$(href).offset().top},1000);
// });

$("#author").hover(function(){
	$("#author").toggleClass("rubberBand infinite");
});




const arrowBtn = document.querySelector("#form_button")
const form = document.querySelector(".fbform")
const circleImg = document.querySelector("#circle_img")


arrowBtn.addEventListener('click', function() {
	form.classList.toggle('active')
	circleImg.classList.toggle('active')

})