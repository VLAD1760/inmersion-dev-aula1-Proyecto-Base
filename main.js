let cantidad = document.getElementById('cantidad');

let boton = document.getElementById('generar');

let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

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

}

//HW: add symbols, add a button to clean the code after code has been generated, strong weak good password detector  