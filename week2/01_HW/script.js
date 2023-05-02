import data from './dummy.js';
/**
 * nav에서 선택된 카테고리에 따라 카드, 태그 생성/삭제
 */
var target=document.querySelectorAll('.nav-container');
var btnClose=document.querySelectorAll('.selected-ctgr .cancel-btn')
var targetID, targetClass;
const selectedCtgr=[];
var ctgrAllList=[".ctgr-dish",".ctgr-tang",".ctgr-side",".ctgr-alcohol"]
var nonSelectedCtgr=[];
// 생성
for(var i=0;i<target.length;i++){
    target[i].addEventListener('click',function(){
        targetID=this.getAttribute('href');
        document.querySelector(targetID).style.display='block';
        if (targetID==="#ctgr-all"){
            for (var t=0;t<ctgrAllList.length;t++){
                for (var j=0;j<document.querySelectorAll(ctgrAllList[t]).length;j++){
                    document.querySelectorAll(ctgrAllList[t])[j].style.display='block';
                }
            }
        }
        else{
            targetClass=targetID.replace('#','.');
            for (var j=0;j<document.querySelectorAll(targetClass).length;j++){
                document.querySelectorAll(targetClass)[j].style.display='block';
            }
            selectedCtgr.push(targetClass);
        }
    });
}

for(var j=0;j<target.length;j++){
    btnClose[j].addEventListener('click',function(){
        this.parentNode.parentNode.style.display='none'
        targetClass="."+this.parentNode.parentNode.getAttribute('id');
        if (targetClass===".ctgr-all"){
            nonSelectedCtgr = ctgrAllList.filter(x=> !selectedCtgr.includes(x));
            for (var t=0;t<nonSelectedCtgr.length;t++){
                for (var j=0;j<document.querySelectorAll(nonSelectedCtgr[t]).length;j++){
                    var clsList=document.querySelectorAll(nonSelectedCtgr[t])[0].classList;
                    document.querySelectorAll(nonSelectedCtgr[t])[j].style.display='none';
                }
            }
        }
        else{
            for (var j=0;j<document.querySelectorAll(targetClass).length;j++){
                var clsList=document.querySelectorAll(targetClass)[0].classList;
                document.querySelectorAll(targetClass)[j].style.display='none';
            }
        }
    });
}


/**
 * 메뉴를 더미데이터에서 가져옴
 */
function ctgrMatch(post){
    if (post.category==="안주"){
        return "ctgr-dish";
    }
    else if (post.category==="탕"){
        return "ctgr-tang";
    }
    else if (post.category==="사이드"){
        return "ctgr-side";
    }
    else if (post.category==="술"){
        return "ctgr-alcohol";
    }
}
function postTitle(post){
    const h2=document.createElement('h2')
    h2.setAttribute('class','card-title')
    h2.textContent=post.menuName
    return h2
}
function postTag(post){
    const div=document.createElement('div')
    div.setAttribute('class','card-tag')
    const h3=document.createElement('p')
    h3.innerText=post.menuTag
    const icon=document.createElement('img')
    icon.setAttribute('src','./images/square-caret-down-solid.svg')
    icon.setAttribute('class','modal-open-icon')
    icon.setAttribute('alt','더보기아이콘')
    div.append(h3)
    div.append(icon)
    return div
}
function postImg(post){
    const img=document.createElement('img')
    img.setAttribute('src',post.menuImgUrl)
    img.setAttribute('class','menuImg')
    img.setAttribute('alt','메뉴이미지')
    return img
}
for (var i=0;i<data.length;i++){
    const cardContent= document.querySelector("#card-wrap")
    const section=document.createElement('section')
    section.setAttribute('class','card')
    // 더미데이터의 카테고리를 태그의 속성과 매치해주는 부분
    section.classList.add(ctgrMatch(data[i]))
    cardContent.append(section)
    const div=document.createElement('div')
    div.setAttribute('id','content')
    section.append(div)
    div.append(postTitle(data[i]));
    div.append(postTag(data[i]));
    // 팝업되는 태그 모달
    const modal=document.createElement('div')
    modal.setAttribute('class','tag-modal')
    modal.innerText=data[i].menuTag
    const icon=document.createElement('img')
    icon.setAttribute('src','./images/square-caret-down-solid.svg')
    icon.setAttribute('class','modal-close-icon')
    icon.setAttribute('alt','더보기아이콘')
    modal.append(icon)
    modal.style.display='none';
    div.append(modal)
    
    div.append(postImg(data[i]));
    const img=document.createElement('img')
    img.setAttribute('src','./images/glass-water-solid.svg')
    img.setAttribute('class','icon')
    img.setAttribute('alt','찜아이콘')
    div.append(img)
}


var modalOpenTarget=document.querySelectorAll('.card-tag .modal-open-icon');
// var modalCloseTarget=document.querySelectorAll('.modal-close-icon');
for(var i=0;i<modalOpenTarget.length;i++){
    modalOpenTarget[i].addEventListener('click',function(){
        this.parentNode.parentNode.querySelector('.tag-modal').style.display='block';
    });
}
var modalCloseTarget=document.querySelectorAll('.modal-close-icon');
for(var i=0;i<modalCloseTarget.length;i++){
    modalCloseTarget[i].addEventListener('click',function(){
        this.parentNode.style.display='none';
    });
}
