//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."



let $numeros = document.querySelectorAll('li')
let numeros = []
for(let i=0; i<$numeros.length; i++){
    numeros.push(Number($numeros[i].innerText));
}


document.querySelector("#calcular").onclick = function(){
   obtenerMayorNumero();
   obtenerMenorNumero();
   obtenerPromedio();
   obtenerMasFrecuente();
  
    function obtenerMayorNumero(){
        let mayorNumero = numeros[0];
        for(let i=0; i<numeros.length; i++){
         if(numeros[i]>mayorNumero){
            mayorNumero=numeros[i];
            }
        }
        let mayor = document.querySelector("#mayor-numero");
        mayor.textContent = mayor.textContent + mayorNumero;
    
    }

    function obtenerMenorNumero(){
        let menorNumero = numeros[0];
        for(let i=0; i<numeros.length; i++){
            if(numeros[i]<menorNumero){
                menorNumero=numeros[i]
            }
        }
        let menor = document.querySelector("#menor-numero");
        menor.textContent = menor.textContent + menorNumero;
    
    }

    function obtenerPromedio(){
        let acumulador = 0;
        for(let i=0; i<numeros.length; i++){
            acumulador+=numeros[i];
        }
        let promedio = acumulador/numeros.length;
        
        let media = document.querySelector("#promedio-numero");
        media.textContent = media.textContent + promedio;

        
    }

    function obtenerMasFrecuente(){
        let numeroFrecuente = 0
        let count = 0
        let countActual = 0
    
        for(let i=0; i<numeros.length; i++){
            for(let j=i+1; j<numeros.length; j++){
                if(numeros[i] === numeros[j]){
                    countActual ++
                    if(countActual>count){
                        numeroFrecuente = numeros[i]
                        count = countActual
                    }
                }
            }
            countActual = 0

    }
    let repetido = document.querySelector("#frecuente-numero");
    repetido.textContent = repetido.textContent + numeroFrecuente;
}

document.querySelector("#calcular").disabled = true
}

