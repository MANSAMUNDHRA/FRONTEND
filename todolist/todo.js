let arr=[];
display();

function addtodo(){
  let work=document.querySelector('#work');
  let toadd=work.value;
  let date=document.querySelector('#lastdate');
  let duedate=date.value;
  if(toadd&&duedate)
  arr.push({item:toadd,date:duedate});
  work.value='';
  date.value='';
  display();
}

function display(){
   let list=document.querySelector('.pool');
   let newHTMl='';
   for(let i=0;i<arr.length;i++){
    let item=arr[i].item;
    let date=arr[i].date;
    newHTMl+=`
    <span class="try">${item}</span>
    <span class="trydate">${date}</span>
    <button class="remove" onclick="arr.splice(${i},1); display()";>DELETE</button>
 `;
   }
   list.innerHTML=newHTMl;
}

