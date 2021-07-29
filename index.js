
// menu
$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('open');
		var nav = document.querySelector('.navbar-nav')
			if(nav.style.display=="block"){
				nav.style.display="none"
			}else{
			nav.style.display="block"
			nav.classList.add("animate")

		}

	});
});
