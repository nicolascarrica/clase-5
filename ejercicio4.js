//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


document.querySelector("#calcular").onclick = function(){
    const numeros = obtenerArray();
    mostrarResultado('mayor', obtenerMayorNumero(numeros));
    mostrarResultado('menor', obtenerMenorNumero(numeros));
    mostrarResultado('promedio', obtenerPromedio(numeros));
    mostrarResultado('frecuente', obtenerMasFrecuente(numeros));
  
   document.querySelector("#calcular").disabled = true
}

  


    function  obtenerMayorNumero(numeros){
        let mayorNumero = numeros[0];
        for(let i=0; i<numeros.length; i++){
         if(numeros[i]>mayorNumero){
            mayorNumero=numeros[i];
            }
          
        }
        return mayorNumero;  
    
    }

    function obtenerMenorNumero(numeros){
        let menorNumero = numeros[0];
        for(let i=0; i<numeros.length; i++){
            if(numeros[i]<menorNumero){
                menorNumero=numeros[i]
            }
            
            
        }
        
        return menorNumero;
    }

    function obtenerPromedio(numeros){
        let acumulador = 0;
        for(let i=0; i<numeros.length; i++){
            acumulador+=numeros[i];
        }
        return (acumulador/numeros.length).toFixed(2);
        
        
        
    }

    function obtenerMasFrecuente(numeros){
        let numeroFrecuente = 0
        let contador = 0
        let contadorActual = 0
    
        for(let i=0; i<numeros.length; i++){
            for(let j=i+1; j<numeros.length; j++){
                if(numeros[i] === numeros[j]){
                    contadorActual ++
                    if(contadorActual>contador){
                        numeroFrecuente = numeros[i]
                        contador = contadorActual
                    }
                }
            }
            contadorActual = 0

    }
    return numeroFrecuente;
}

    function  mostrarResultado(tipo, valor) {
    document.querySelector(`#${tipo}-numero`).textContent = valor;
    }

    function obtenerArray(){

        let $array = document.querySelectorAll('li')
        let array = []
        for(let i=0; i<$array.length; i++){
             array.push(Number($array[i].innerText));
        }
    
        return array;
        
    }
    