import data from "./dummy.js"


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
    for(var j=0;j<data[i].todo.length;j++){
        // data[i].todo[j]
        const todo=document.createElement('div')
        todo.setAttribute('class','todo')
        const todoIcon=document.createElement('img')
        todoIcon.setAttribute('src','./images/check-to-slot-solid.svg')
        todoIcon.setAttribute('alt','할일체크아이콘')
        todo.innerText=data[i].todo[j]

        todo.prepend(todoIcon)
        todoContainer.append(todo)
    }

}