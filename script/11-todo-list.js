const todoList =[{name:'attend class',
                dueDate:'9-02-2026'},
                {name:'prepare for exam',
                dueDate:'10-02-2026'} ];

renderTodoList();
function renderTodoList(){
    let todoListHTML='';

    for(let i=0;i<todoList.length;i++){
        const todoObj= todoList[i];
        // const name= todoObj.name; 
        // const date=todoObj.dueDate;
        const {name,dueDate}= todoObj;

        const html=`
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
        " class="delete-todo-button"> Delete</button>
        `;

        todoListHTML+=html;
    }
   

    document.querySelector('.js-todo-list').innerHTML= todoListHTML;
}

function addTodo(){
    const inputElement= document.querySelector('.js-name-input');
    const dateInputElement =document.querySelector('.js-date-input');
    const name= inputElement.value;

    const dueDate = dateInputElement.value;
   
    
    todoList.push({name,dueDate});
   

    inputElement.value='';
    renderTodoList();
}
