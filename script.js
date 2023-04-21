import data from "./dummy.js"

window.onload=function(){
    // window.localStorage.clear();
    if (callNum){
        for (var i=0;i<data.length;i++){
            const todoObj= Object.entries(data[i].todo);
            for(var j=0;j<todoObj.length;j++){
                // var todoList=JSON.stringify(todoObj[j][1]);
                window.localStorage.setItem(todoObj[j][0],todoObj[j][1]);
            }
        }
    }
}
/**
 * 더미데이터 연동
 */
function todoPlus(postTarget){
    const todo=document.createElement('div')
    todo.setAttribute('class','todo')
    const todoIcon=document.createElement('img')
    todoIcon.setAttribute('src','./images/check-to-slot-solid.svg')
    todoIcon.setAttribute('alt','할일체크아이콘')
    todoIcon.setAttribute('class','todo-icon')
    todo.innerText=postTarget
    todo.prepend(todoIcon)
    todo.setAttribute('id',postTarget)
    return todo
}
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
    ctgrIcon.setAttribute('class','ctgr-icon')
    todoCtgr.append(ctgrIcon)
    todoContainer.append(todoCtgr)
    const keys=Object.keys(window.localStorage);
    keys.sort()
    if (keys[i]===data[i].id){
        const value=window.localStorage[keys[i]];
        const values=value.split(',');
        for (var v of values){
            todoContainer.append(todoPlus(v));
        }
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
/**
 * 모달을 이용한 카테고리 별 할일 추가 부분
 */
const callNum=0;
var ctgrTarget=document.querySelectorAll('.ctgr-icon');
for(var i=0;i<ctgrTarget.length;i++){
    ctgrTarget[i].addEventListener('click',(e)=>{
        const ctgr=e.target.parentNode.id;
        const modal = document.querySelector('#modal-container')
        modal.style.display='block';
        const modalBtn = document.querySelector('#modal-container #modal button')
        const modalInput=document.querySelector('#modal-container #modal input')
        
        modalBtn.addEventListener('click',(e)=>{
            modal.style.display='none';
            const text=modalInput.value;
            var todoText=localStorage.getItem(ctgr);
            todoText=todoText+','+text;
            localStorage.setItem(ctgr, todoText);
            callNum+=1;
        })
    })
}
