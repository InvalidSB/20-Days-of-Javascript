let btn = document.getElementById('halTaile');
let khaliThau = document.getElementById('khalithau')

let toDoVado =document.getElementById('toDoVado')

// button thichne bittikai k hos ta ?

btn.addEventListener('click',function(){
    var talakokura = document.createElement('p')
    talakokura.classList.add('talakothau');

    talakokura.innerHTML=`<p> ${khaliThau.value} 
    </p>`
    // var p =document.createElement('p')
    // p.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>'

    // talakokura.appendChild(p)
    toDoVado.appendChild(talakokura)
    khaliThau.value=""

    talakokura.addEventListener('click',function(){
        talakokura.style.backgroundColor="green";
        talakokura.style.color="white"
    })
    talakokura.addEventListener('dblclick',function(){
        toDoVado.removeChild(talakokura)
        
    })

    // var i = document.querySelector('i')
    // i.addEventListener('click',()=>{
    //     toDoVado.removeChild(talakokura)
    // })
   //try it but remenber you may delete all the items at one click on any list items which is not good so it is done for better practice only.




})

console.log("yaha ahile samma sikeko sabai logic haru use vayeko xa")