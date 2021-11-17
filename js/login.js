
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const contrseña = document.getElementById('contrseña')

const usernav = document.getElementById('usernav')
const cerrar = document.getElementById('cerrar')

let usus=[]

signInBtn.addEventListener('click', () => {container.classList.remove('right-panel-active')});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) =>{
	e.preventDefault()

		let usuarios= Array(
			{
				usuario: usuario.value,
				contraseña: contrseña.value
			}
		)
	
	localStorage.setItem('user',JSON.stringify(usuarios))// convertirndo la array eb strinf
	location.href= 'index3.html'
	
} 
);


let usuar = JSON.parse(localStorage.getItem('user'))
 
if(usuar != null){
	usernav.innerHTML =`<a target="_top" href="" id="cerrar" > ${usuar[0].usuario}  </a> `

}/* else{
	usernav.innerHTML =`<a target="_top" href="login.html" id="cerrar" >Cerar sesion  </a> `
} */


cerrar.addEventListener('click', () =>{
	localStorage.clear('user');
	localStorage.href='login.html'
}) 

secondForm.addEventListener("submit", (e) =>{
	e.preventDefault();
	
});


