var ul = document.getElementById('list');
var li;

var addbutton = document.getElementById('add');
addbutton.addEventListener('click',  addItem);

var removebutton = document.getElementById('remove');
removebutton.addEventListener('click' ,removeItem);

function addItem(){
    console.log('Add button clicked');
    var ip = document.getElementById('input');
    var newItem = ip.value;
    var textnode = document.createTextNode(newItem);
    var ul = document.getElementById('list');
    if(newItem == '' || newItem[0] == ' '){
        return false;
    }
    else{
        //create li
       li = document.createElement('li');
       
       //create checkbox
       var checkbox = document.createElement('input');
       checkbox.type = 'checkbox';
       checkbox.setAttribute('id' ,'check');

       //create label
       var label = document.createElement('label');
       label.setAttribute('for' ,'item');

    //add to webpage
      ul.appendChild(label);
      li.appendChild(checkbox);
      label.appendChild(textnode);
      li.appendChild(label);
      ul.insertBefore(li , ul.childNodes[0]);
      li.className = 'visual';

      input.value = '';
    }
    
}


function removeItem(){
    li = ul.children;
    console.log(li);
    for(var i = 0;i<li.length;i++){
        console.log(li[i]);
        while(li[i] && li[i].children[0].checked){
            ul.removeChild(li[i]);
        }
    }
}

var deletebutton = document.getElementById('del');
deletebutton.addEventListener('click' ,deleteAllItem);

// function deleteAllItem(){
//     li = ul.children;
//     for(var i =0; i<li.length;i++){
//         while(li[i] && li[i].children[0]){
//             ul.removeChild(li[i]);
//         }
//     }
// }

function deleteAllItem(){
       var res =  document.querySelectorAll("#check");
       for(var i=0;i<res.length;i++){
           res[i].checked = true;
       }
       setTimeout(removeItem,400);
}