document.getElementById('contador').addEventListener('click', (e) =>{
    e.preventDefault();
 var frase = document.getElementById('texto').value;

 var indices = [];
 for (let i = 1; i < frase.length; i++) {
     if (frase[i] === ' ') {
         indices.push(i)
     }
     
     
 }

 if(indices <= 0){
 indices= 1
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else if(indices.length <= 1){
    indices = 2
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else if(indices.length <= 2){
    indices = 3
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else if(indices.length <= 3){
    indices = 4
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else if(indices.length <= 4){
    indices = 5
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else if(indices.length <= 5){
    indices = 6
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else if(indices.length <= 6){
    indices = 7
 console.log(indices)
 document.getElementById('empieza').innerHTML = `Contiene: ${indices} palabras.`
 }else{
     alert('La frase es demasiado larga, no seas pesadilla')
 }
})