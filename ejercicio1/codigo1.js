

// opcion 2

document.getElementById('calcularPa').addEventListener('click', (e) =>{
    e.preventDefault()
    var word = document.getElementById('text3').value.toLocaleLowerCase();

    for (let i = 0; i < word.length; i++) {
       if(word[0] == 'a'){
            document.getElementById('empieza').innerHTML = 'la palabra empieza por "a"'
            console.log('hola')
       }else if (word[word.length - 1] == 'a'){
        document.getElementById('empieza').innerHTML = 'la palabra termina por "a"'
        console.log('menos')
    }else{
        alert('algo estas haciendo mal')
        break
    }
}

});
