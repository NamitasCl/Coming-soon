const email = document.getElementById("text");
const boton = document.getElementById("boton");

let validarCorreo = () => {
    
    if(email.value.includes('@')) {
        email.classList.remove('error');
        return true;

    } else {
        const tag = document.createElement('p');
        const error = document.createTextNode('Please provide a valid email.');
        email.classList.add('error');
        tag.appendChild(error);
        document.getElementById('form').appendChild(tag);
        
        return false;

        
    }

}
