var container=document.querySelector('.container')
var value1=document.querySelector('.input');
var add1=document.querySelector('.add');

class item {
    constructor(name)
    {
        this.create(name);
    }
    create(name)
    {
        var ll=document.createElement('div');

        ll.classList.add('item');
         
        var input=document.createElement('input');
        input.type="text";
        input.disabled=true;
        input.value=name;
        input.classList.add('item_input');

        var remove=document.createElement('button')
        remove.classList.add('remove'); 
        remove.innerHTML='<i class="fas fa-trash"></i>';
        remove.addEventListener('click',()=>this.remove(ll));


        container.appendChild(ll);

        ll.appendChild(input);

        ll.appendChild(remove);
    }

    remove(ll)
    {
        container.removeChild(ll);
    }
}    

add1.addEventListener('click',check);

window.addEventListener('keydown',(e)=>{

    if (e.which==13)
    {
        check();
    }

})

function check()
{
    if(value1.value!="");
    {
        new item(value1.value);
        value1.value="";
    }
}


function removeAll()
{
    document.querySelector('.container').innerHTML="";
}