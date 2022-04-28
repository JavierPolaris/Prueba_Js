document.getElementById('calcularnum').addEventListener('click', (e) =>{
    e.preventDefault();
    var n1 = parseInt(document.getElementById('text1').value);
    var n2 = parseInt(document.getElementById('text2').value);

    if( n1 %2 == 0 && n2 %2 ==0){
        
        document.getElementById('calculo').innerHTML = `${n1} y ${n2} son numeros pares`
    }else if(n1 %2 != 0 && n2 %2 ==0){
        document.getElementById('calculo').innerHTML = `${n2} es numeros par`
    }else if(n1 %2 == 0 && n2 %2 !=0){
        document.getElementById('calculo').innerHTML = `${n1} es numeros par`
    }else if(n1 %2 != 0 && n2 %2 !=0){
        document.getElementById('calculo').innerHTML = `Ninguno es par`
    }else{
        alert('Algo estas haciendo mal');
    }
    
    if( n1 %3 == 0 && n2 %3 ==0){
        
        document.getElementById('calculo1').innerHTML = `${n1} y ${n2} son multiplos de 3`
    }else if(n1 %3 != 0 && n2 %3 ==0){
        document.getElementById('calculo1').innerHTML = `${n2} es multiplo de 3`
    }else if(n1 %3 == 0 && n2 %3 !=0){
        document.getElementById('calculo1').innerHTML = `${n1} es multiplo de 3`
    }else if(n1 %3 != 0 && n2 %3 !=0){
        document.getElementById('calculo1').innerHTML = `Ninguno es multiplo de 3`
    }else{
        alert('Algo estas haciendo mal');
    }

   

});



