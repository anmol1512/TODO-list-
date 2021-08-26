function del(ind){
    let arr=JSON.parse(localStorage.getItem('itemsjson'));
        arr.splice(ind,1);
        localStorage.setItem('itemsjson',JSON.stringify(arr));
        var itemm=``;
        cou=1;
        arr.forEach((element,index) => {
            itemm+=`<tr>
            <td scope="row">${index+1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button type="submit" class="btn btn-primary del" onclick="del(${index})" >Delete</button></td>  
            </tr>
            `
        });
        document.getElementById('row').innerHTML=itemm;
}
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
    JSON.parse(localStorage.getItem('itemsjson')).forEach((element,index) => {
        item+=`<tr>
        <td scope="row">${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="submit" class="btn btn-primary" onclick="del(${index})" >Delete</button></td>  
        </tr>
        `
        
    });
    document.getElementById('row').innerHTML=item;
    document.getElementById('title').value="";
    document.getElementById('desc').value="";
}
document.getElementById('title').value='';
document.getElementById('desc').value='';
if(localStorage.getItem('itemsjson')!=null){
    var it=``;
    // document.getElementById('row').innerHTML="";
    JSON.parse(localStorage.getItem('itemsjson')).forEach((element,index) => {
        it+=`<tr>
        <td scope="row">${index+1}</td>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button type="submit" class="btn btn-primary" onclick="del(${index})" >Delete</button></td>  
        </tr>
        `
        
    });
    document.getElementById('row').innerHTML=it;
}
btn=document.getElementById("add");
btn.addEventListener("click",update);


// d=document.getElementsByClassName("del");
// for(var i=0;i<del.length;i++){
//     del[i].addEventListener("click",()=>{
//         let arr=JSON.parse(localStorage.getItem('itemsjson'));
//         arr.splice(i,1);
//         localStorage.setItem('itemsjson',JSON.stringify(arr));
//         var itemm=``;
//         cou=1;
//         arr.forEach(element => {
//             itemm+=`<tr>
//             <td scope="row">${cou++}</td>
//             <td>${element[0]}</td>
//             <td>${element[1]}</td>
//             <td><button type="submit" class="btn btn-primary del">Delete</button></td>  
//             </tr>
//             `  
//         });
//         document.getElementById('row').innerHTML=item;

//     })

// }

// window.addEventListener('load',()=>{
//     document.getElementById('title').value='';
//     document.getElementById('desc').value='';
// })