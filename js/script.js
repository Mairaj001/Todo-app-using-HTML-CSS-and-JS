

let tasks_container = document.getElementById('tasks_container');
var value_arr = [];
function show_data_to_the_task_container(){
  for(var i=0;i<localStorage.length;i++)
  {
   console.log(typeof localStorage.length);
    if(localStorage.length==0)
    {
      console.log("no data")
      return;
      
    }
    var key = localStorage.key(i);
    var value= localStorage.getItem(key);
    let div = document.createElement('div');
     let key_and_value={
      key:key,
      value:value
    }
    value_arr.push(key_and_value);
    // console.log(value_arr[1].key)
    div.classList.add('task1')
    div.innerHTML = `
    <img class="image"   src="imgs/unchecked.png" alt="">
    
    <span class="task_text" >${value}</span>
    <i class="ri-close-line x"></i>
   ` 
   tasks_container.appendChild(div);
  }
}




show_data_to_the_task_container();




let random_key = ()=>{
  return  Math.floor(1000 + Math.random() * 9000)
}

console.log(random_key());


console.log(tasks_container);





function get_data_from_input(){
  
    let input = document.getElementById('input').value;
    localStorage.setItem(random_key(),input);
    if(input=="")
    {
       
      alert('Please fill the task');
    }
    else{
       let div = document.createElement('div');
       div.innerHTML=`
       <img class="image"   src="imgs/unchecked.png" alt="">
       
       <span class="task_text" >${input}</span>
       <i class="ri-close-line x"></i>
      ` 
      div.classList.add("task1");
      tasks_container.appendChild(div);
    }
    
 

}


console.log(key_and_value);


function get_divs()
{
  var delete_label= document.querySelectorAll(".x");

  delete_label.forEach(function(label,index) {
    // console.log(label.parentElement,index);
    label.addEventListener("click",()=>{
      console.log(label.parentElement,index);
      var div_delte = label.parentElement;
      div_delte.parentNode.removeChild(div_delte);
      let obj = value_arr[index];
      // console.log(obj.key);
      localStorage.removeItem(obj.key);
    })
    
  })
    
    
}
  













   

   
