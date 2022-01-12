
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

console.log('correcto');
document.getElementById('Lista').addEventListener('change', cambioselect);
carets= document.getElementsByClassName('caret');

function cambioselect() {
    var sel=document.getElementById('Lista')
    var opcion=sel.value;
    var texto=sel.options[sel.selectedIndex].text;


    switch (opcion) {
        case '1':
            var ObjetcRequest= new XMLHttpRequest();
            ObjetcRequest.open('get','Arbol.json',true);
            ObjetcRequest.send();
            ObjetcRequest.onreadystatechange= function(){

                if(this.readyState ==4 && this.status==200){

                    let datosjson = JSON.parse(this.responseText);
                    let nameJson=Object.keys(datosjson)[0];
                    let tabla = document.querySelector('#datos');
                    tabla.innerHTML=JSON.stringify(datosjson);

                    let code="datosjson."+nameJson+"[0].id";
                    let code2="datosjson."+nameJson;
                    console.log(eval(code));
                    
                    let tabla2 = document.querySelector('#LoadTree');

                    tabla2.innerHTML=`<h1>${texto}</h1>`;
                

                    if (!$.isEmptyObject(datosjson)) {
                        
                       tabla2.innerHTML+= `<ul > 
                       <li id="frontEnd" > 
                       <span  class="caret">${nameJson}</span>
                            <ul   class="nested"  >
                            <li>hoja</li>
                            <li>hoja</li>
                             </ul>
                       </li>
                   </ul>`;

                   if (!$.isEmptyObject(eval(code2))) {
                    console.log("hola");

                   }
                   
                   
                       
                    }
                    

                }

            }
            
           
            break;
    
        default:
            break;
    }
}


for (let index = 0; index < carets.length; index++) {
    carets[index].addEventListener('click',function(){
       // console.log(this);
       // console.log(this.parentElement);
       // console.log(this.parentElement.querySelector('.nested'));
        li=this.parentElement;
        li.querySelector('.nested').classList.toggle('active');
        this.classList.toggle('caret-down');
    })
    
}
