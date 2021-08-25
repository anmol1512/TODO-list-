function update(){
    tit=document.getElementById("title").value;
    desc=document.getElementById("desc").value;
    if(localStorage.getItem('itemsjson')==null){
        items=[];
        items.push([tit,desc]);
        localStorage.setItem('itemsjson',JSON.stringify(items));
    }
    else{
        items=JSON.parse(localStorage.getItem('itemsjson'));
        items.push([tit,desc]);
        localStorage.setItem('itemsjson',JSON.stringify(items));
    }
    var item=``;
    count=1;
    // document.getElementById('row').innerHTML="";
    JSON.parse(localStorage.getItem('itemsjson')).forEach(element => {
        item+=`<tr>
        <th scope="row">${count++}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        </tr>
        `
        
    });
    document.getElementById('row').innerHTML=item;
    document.getElementById('title').value="";
    document.getElementById('desc').value="";
}

btn=document.getElementById("add");
btn.addEventListener("click",update);
window.addEventListener('load',()=>{
    document.getElementById('title').value='';
    document.getElementById('desc').value='';
})