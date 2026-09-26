document.addEventListener("DOMContentLoaded",()=>{
	const formulario = document.querySelector(".loginform");

	if (formulario) {
		formulario.addEventListener("submit", (event) => {
			event.preventDefault();
			window.location.href = "main.html";
	});
	}
});


