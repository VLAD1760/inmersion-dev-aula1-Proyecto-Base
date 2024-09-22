let cantidad = document.getElementById('cantidad');

let boton = document.getElementById('generar');

let contrasena = document.getElementById('contrasena');

let strengthIndicator = document.getElementById('strength');


const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

function generar(){

    let numeroDigitado = parseInt (cantidad.value); 

    if( numeroDigitado < 8){
        alert("La cantidad de caracters debe ser mayor que 8");
    }

    let password = '';

    for(let i= 0; i < numeroDigitado; i++ ){
        
        let caracterAleatorio = cadenaCaracteres[Math.floor (Math.random() * cadenaCaracteres.length)];

        console.log(caracterAleatorio);
        
        password+=caracterAleatorio;

    }

    contrasena.value = password;
     evaluarFortaleza(password);
     
}

function reset() {
    cantidad.value = '';
    contrasena.value = '';
    strengthIndicator.textContent = '';
}

function evaluarFortaleza(password) {
    let strength = "Débil";
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{12,})");
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

    if (strongRegex.test(password)) {
        strength = "Fuerte";
    } else if (mediumRegex.test(password)) {
        strength = "Media";
    }

    strengthIndicator.textContent = `Fortaleza: ${strength}`;
}
