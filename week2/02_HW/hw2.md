<!-- PR의 제목은 "[ n주차 기본/심화/생각 과제 ] 과제명 " 으로 작성해주시면 되겠습니다 -->
<!-- PR은 리뷰어를 위한 글입니다, 보다 더 상세하게 적음으로써 소통을 활성화해봐요! -->


## ✨ 구현 기능 명세
### 기본과제 

- [ ] ‼️‼️‼️ 할일 목록 데이터는 상수파일에 저장해 사용합니다 ‼️‼️‼️

#### ✅ `하트 안의 숫자`

- [ ] 1.  미완료한 할일의 갯수를 계산하여 보여줍니다.
- [ ] 2. 할 일 완료 클릭시 갯수가 줄어듭니다.

#### ✅ `카테고리별 할일 추가`

- [ ] 1. 카테고리별 할일 추가가 가능합니다.
- [ ] 2. 모달을 띄워 진행합니다

#### ✅ `달력 / MY 버튼 클릭시 페이지 이동`

- [ ] 1. 달력 → href=”/” 
- [ ] 2. MY → href=”/mycategory”

### 심화 과제
#### ✅ 카테고리별 할일 추가

- [ ] 1. 모달안의 input에 자동 포커스 되는 기능이 있습니다.
- [ ] 2. 연달아 추가되며 , 중복되는 할일을 추가되지 않습니다.

#### ✅ ****Vanilla JavaScript로 SPA구현하기****

- [ ] 1. 바닐라자스 → 라우터 구현해보기
- [ ] 2. 👇 폴더구조 참고 + 응용
    
    ```jsx
    ├── 📁 src
    │   ├── 📁 pages
    │   │   └── main.js
    │   ├── 📁 components
    │   │   └── router.js  //페이지 이동
    │   ├── App.js         // App 컴포넌트
    │   └── index.js       // 애플리케이션의 시작점 (App을 생성)
    └── index.html      // 브라우저에 업로드될 HTML파일
    ```
    

### ✅ MY 페이지 : Drag and Drop

- [ ] 1. 할 일 카테고리들이 존재
- [ ] 2. 드래그앤 드랍으로 카테고리 순서변경
- [ ] 3. 새로고침해도 유지
    - [ ] 1. localStorage
- [ ] 4. 메인에도 반영
* * *


## 🌼 PR Point
### 1. 할일 숫자 연동
```js
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
```
- 카테고리와 할 일을 js의 dom으로 관리하고, 해당 할 일의 아이콘이 클릭 될 때마다 js로 숫자를 계산하는 방법으로 구현하였습니다 ! 아이콘을 할 일마다 구분해야 할일 숫자를 중복으로 계산하는 것을 막을 수 있기 때문에, 체크된 아이콘의 id를 `checkedList`로 구분해주었습니다.

### 2. 할일 추가와 localStorage 연동
```js
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
```
- 할 일을 윈도우 창이 로드될 때마다 localStorage에서 가져와서, 새로운 할 일이 추가 되어서 localStorage가 업데이트되었을 때 새로운 데이터를 가져와 보여줄 수 있도록 하였습니다. 이 과정에서 데이터의 키, 값을 관리하고 불러오는 과정이 조금 헷갈렸던 것 같아요 ㅎㅎ.

- 이렇게 로컬 스토리지를 연동함에 따라 할일 데이터를 가져오는 부분도 관련해서 조금 수정되었습니다 !
```js
    const keys=Object.keys(window.localStorage);
    keys.sort()
    if (keys[i]===data[i].id){
        const value=window.localStorage[keys[i]];
        const values=value.split(',');
        for (var v of values){
            todoContainer.append(todoPlus(v));
        }
    }
```

## 🥺 소요 시간, 어려웠던 점

<br />

- `6h`

<br />

- 가장 시간을 많이 쓴 부분은 로컬 스토리지를 연동하는 부분이었고, dom에 대한 이벤트를 관리하는 부분을 1번 과제에서 했어도 2번 과제에서도 좀 시간을 썼던 것 같습니다. ㅎㅎ 


<br />

* * * 

## 🌈 구현 결과물
- 할 일에 대한 아이콘이 체크될 때마다 금요일의 하트 속 숫자가 줄어드는 모습입니다.
![hw2_02](https://user-images.githubusercontent.com/49463954/233651969-0f56b20d-1ab6-4274-9deb-abedc6fc59e8.gif)


- 카테고리에 대한 할 일을 추가할 수 있는 부분입니다.
![hw2_01](https://user-images.githubusercontent.com/49463954/233652216-73c58a70-4fce-4e56-a69e-c31fa944c21e.gif)
