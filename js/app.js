

const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");



btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});



btnBurger.addEventListener("click", ()=>{
		document.querySelector("body").classList.toggle("scrollNone");
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});







let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>10){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
})





const BUTTON_SPOILERS = document.querySelectorAll('.aftercourse__net-btn');



if(BUTTON_SPOILERS.length >0){
	BUTTON_SPOILERS.forEach((button=>{

		button.addEventListener("click", function(){
			
			BUTTON_SPOILERS.forEach(btn=>{
				btn.nextElementSibling.classList.remove('active');
				btn.innerText = "+";
			});

			button.nextElementSibling.classList.add('active');
			button.innerText = "-";
		})
		
	}));
}


const SPOILERS_CLOSE = document.querySelectorAll('.aftercourse__net-close');

if(SPOILERS_CLOSE.length > 0 ){
	SPOILERS_CLOSE.forEach((close)=>{
		close.addEventListener('click', ()=>{
			close.parentElement.classList.remove('active');
			close.parentElement.previousElementSibling.innerText = "+";
		})
	})
}





new Swiper('.program__slider-body', {


	navigation: {
		nextEl: '.program__next',
		prevEl: '.program__prev',
	 },
	 spaceBetween: 20,
	 breakpoints: {
		0: {
			slidesPerView: 1 
		},
		420: {
			slidesPerView: 2
		},
		992: {
			slidesPerView: 3
		},
	 }
});