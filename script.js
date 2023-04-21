import data from "./dummy.js"
/**
 * 더미데이터 연동
 */
for (var i=0;i<data.length;i++){
    const maintodoContainer= document.querySelector("#main-todo-container")
    const todoContainer=document.createElement('div')
    todoContainer.setAttribute('class','todo-container')
    maintodoContainer.append(todoContainer)
    const todoCtgr=document.createElement('div')
    todoCtgr.setAttribute('class','todo-category')
    todoCtgr.setAttribute('id',data[i].id)
    todoCtgr.innerText=data[i].ctgr
    const ctgrIcon=document.createElement('img')
    ctgrIcon.setAttribute('src','./images/circle-plus-solid.svg')
    ctgrIcon.setAttribute('alt','카테고리아이콘')
    todoCtgr.append(ctgrIcon)
    todoContainer.append(todoCtgr)

    const todoObj= Object.entries(data[i].todo);
    for(var j=0;j<todoObj.length;j++){
        // data[i].todo[j]
        const todo=document.createElement('div')
        todo.setAttribute('class','todo')
        const todoIcon=document.createElement('img')
        todoIcon.setAttribute('src','./images/check-to-slot-solid.svg')
        todoIcon.setAttribute('alt','할일체크아이콘')
        todoIcon.setAttribute('class','todo-icon')
        todo.innerText=todoObj[j][1]
        todo.prepend(todoIcon)
        todo.setAttribute('id',todoObj[j][0])
        todoContainer.append(todo)
    }
}
/**
 * 할 일 체크 후 하트의 숫자를 조정하는 부분
 */
var target=document.querySelectorAll('.todo-icon');
var todoRemain=target.length;
const todoRemainContainer=document.querySelector('#today .todo-num');
todoRemainContainer.innerText=todoRemain;
const checkedList=[];
for(var i=0;i<target.length;i++){
    target[i].addEventListener('click',(e)=>{
        if(!checkedList.includes(e.target.parentNode.id)){
            e.target.style.filter='invert(0%) sepia(0%) saturate(7500%) hue-rotate(327deg) brightness(96%) contrast(104%)';
            todoRemain-=1;
            todoRemainContainer.innerText=todoRemain;
            checkedList.push(e.target.parentNode.id);
        }
    })
}
