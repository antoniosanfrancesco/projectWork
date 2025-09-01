document.addEventListener("DOMContentLoaded", function() {
	AOS.init();
});

//Script per il button centrale
	
window.addEventListener('scroll', function() {
	const btn = document.querySelector('.scroll-btn');
	if(window.scrollY > 100) {
		btn.classList.add('visible');
	} else {
		btn.class.remove('visible');
	}
});

		
document.getElementById("scrollToDownload").addEventListener("click", function() {
	const target = document.getElementById("download-section"); 
	const btn = document.getElementById("scrollToDownload");

	if(target) {
		target.scrollIntoView({behavior: "smooth"});
		console.log("Elemento trovato: download section");
		btn.classList.add('hidden');
	} else {
		console.log("Elemento non trovato: download-section");
	}
});
	

		
let lastScrollTop = 0;

window.addEventListener('scroll', function(){
	const btn = document.getElementById("scrollToDownload");
	const currentScroll = window.scrollY;
	
	if(currentScroll > lastScrollTop && currentScroll > 100) {
		btn.classList.add('visible');                               //mostra bottone
	} else {
		btn.classList.remove('visible');														//nasconde bottone
	}
	
	lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; //evita valori negativi
});

// Forza lo scroll in cima all'apertura della pagina
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
