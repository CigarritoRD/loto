const form = document.querySelector('.form');

document.addEventListener('submit', (e)=>{
    e.preventDefault();

    const nombreValor = document.querySelector('#nombre').value

   
    loteria(); 
})


function loteria() {

    const randomNumber =(min, max)=>{
        return Math.floor(Math.random() * (max - min + 1) + min);
        
      }
      function numerosLoto (){
      
        const ticketLoto = [];

        while (ticketLoto.length < 6){
        const numero = randomNumber (1, 35);
        if(!ticketLoto.includes(numero))  ticketLoto.push(numero)
      }
      
     numerosListos(ticketLoto); 

    }
             
   numerosLoto ()    
}

function numerosListos(numeros){
    const body = document.querySelector('.bolos-contenedor');
    const div = document.createElement('DIV');
    div.classList.add('ticket');
    div.innerHTML = `<p>numeros para jugar</p>           
    
    `


   for (let n = 0; n < numeros.length; n++) {
        const span = document.createElement("span");
        span.style.fontWeight = 'bold'
        span.style.fontSize = '2rem'
       const e = numeros[n];
       console.log(e)
       span.innerHTML = ` | ${e} | `
       div.appendChild(span)
       body.appendChild(div)

   }
   
}