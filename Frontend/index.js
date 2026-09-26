document.addEventListener("DOMContentLoaded",()=>{
	const botonLogin = document.querySelector(".Login");

	botonLogin.addEventListener("click", (event) => {
		event.preventDefault();

		window.location.href = "main.html";
	});
});
