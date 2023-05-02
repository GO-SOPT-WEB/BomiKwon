<!-- PR의 제목은 "[ n주차 기본/심화/생각 과제 ] 과제명 " 으로 작성해주시면 되겠습니다 -->
<!-- PR은 리뷰어를 위한 글입니다, 보다 더 상세하게 적음으로써 소통을 활성화해봐요! -->


## ✨ 구현 기능 명세
### 기본과제 
- [ ] ‼️‼️‼️ 상품 데이터는 상수파일에 저장해 사용합니다 ‼️‼️‼️

#### ✅ `nav`

- [ ] 1. 종류 선택시 태그를 카드섹션 위에 하나씩 부착합니다
- [ ] 2. 태그별 상품 리스트 보여줍니다. 
    - [ ] 1. 전체 → 다보여주기
    - [ ] 2. 종류별 → 필터기능
- [ ] 3. x 클릭시 
    - [ ] 1. 카드 다시 정렬 
    - [ ] 2. 종류 선택 해제 
        - [ ] 1. 태그 삭제

#### ✅ `card article`

- [ ] 1. `+`  아이콘 클릭시 태그 모달이 등장합니다.
- [ ] 2. 카드 위에 덮어씌워지는 창 → 해시태그 목록 담은 content 보여주기
- [ ] 3. x 버튼을 누르면 모달이 닫힙니다.

<br />

### 심화 과제

#### ✅ `목록`

- [ ] 1. 목록 선택시 리스트로 새 상품 추가가 나타납니다. 
    - [ ] 1. 새 상품 추가 → href =’/addCard’

#### ✅ `새 상품 추가 페이지`

- [ ] 1. `label, input` 을 연결시켜서 구현합니다.
    - [ ] 1. 상품명 
    - [ ] 2. 태그 종류 → ,로 구분해서 담기
    - [ ] 3. 이미지 
        - [ ] 1. 파일선택후 이미지 보여주기 필수
- [ ] 2. 추가 버튼
    - [ ] 1. 모든 정보가 입력되면 localStorage에 추가후 main페이지로 이동
    - [ ] 2. 메인페이지에서 추가된 상품 조회가능
    
- [ ] → 이미지 미리보기까지만 구현…! 메인페이지의 이미지는 임의!⁄로

#### ✅ `카드 띄울때 애니메이션`

- [ ] 1. 태그 기능으로 보여지는 상품 카드들이 달라질때 동적인 애니메이션을 가지고 변경됩니다!
* * *


## 🌼 PR Point
### 1. 더미 데이터에서 가져오기

```js 
    import data from './dummy.js';

    const div=document.createElement('div')
    div.setAttribute('id','content')
    section.append(div)
    div.append(postTitle(data[i]));

    function postTitle(post){
        const h2=document.createElement('h2')
        h2.setAttribute('class','card-title')
        h2.textContent=post.menuName
        return h2
    }
```

- 객체 형태로 `dummy.js` 파일을 만들어서, `script.js`파일에서 import해서 더미 데이터를 활용했습니다. 직접 js로 data를 활용해 dom을 만들어보는 경험이 처음이었어서 해맸는데, dom 선택자인 `querySelectorAll, createElement, this.parentNode` 등을 이용해서 js단에서 요소를 만들 수 있었습니다.

### 2. 태그 클릭 시 카테고리를 띄우고, 카드 연동하기
- 크게 태그를 클릭해서 1) 카테고리/카드를 `생성`하는 부분과 2) 카테고리/카드를 `삭제`하는 부분으로 나눠서 구현했습니다. 

    ```js
        document.querySelector(targetID).style.display='block';
    ```
    클릭되는 요소의 id값을 받아와 해당 id의 카테고리(카드 위에 생성되는 부분)를 만들었으며,
    해당 카테고리를 dummy.js의 카드마다 다 지정해주어서
    ```js
        document.querySelectorAll(ctgrAllList[t])[j].style.display='block';
    ``` 
    위처럼 카테고리에 해당하는 카드를 나타나게 지정해주었습니다 :)
     
    이와 비슷하게 삭제 버튼을 눌렀을 때 display의 값을 none으로 해줌으로써 삭제 기능을 구현했습니다.

- 또한 `전체` 카테고리를 선택했을 경우에는 다른 필터를 지워도 카테고리가 남게 하고, `전체` 카테고리를 지워도 다른 필터가 남은 경우에 나머지 카테고리가 남게 하기 위해서, `ctgrAllList`와 `selectedCtgr`를 비교해주는 부분을 만들었습니다.
    ```
        nonSelectedCtgr = ctgrAllList.filter(x=> !selectedCtgr.includes(x));
    ```

### 3. 카드마다 태그 모달 만들기
 ```js
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
 ```
- js로 모달에 대한 dom을 만들어, 카드 dom마다 나타날 수 있도록 해주었습니다.
또한 이부분도 위의 카테고리/카드 생성 및 삭제와 마찬가지로 js의 dom에 대한 접근 및 style 변경을 이용한 기능으로 구현했습니다.

## 🥺 소요 시간, 어려웠던 점

<br />

- `8h`
<br />

- 바닐라 js를 다뤄서 이러한 기능을 구현해본 게 처음이었어서, 버튼에 대한 클릭 반응이나 더미 데이터를 다뤄볼 수 있는 소중한 경험이었습니다.
- 그래서 사실 dom에 대한 접근에 관한 것도 하나하나 구글링하면서 만들어가서 오래걸린 것 같은데, 이를 계기로 더 효율적으로 js로 구현할 수 있는 방법도 알아가고 싶다는 생각을 했습니다 🥹🔥
<br />

* * * 

## 🌈 구현 결과물
- 카테고리 별로 태그,카드가 생성 및 삭제되는 부분입니다.
![hw1_01](https://user-images.githubusercontent.com/49463954/233651516-e3fc0cb7-bd59-493a-835f-a7447b683826.gif)

- 각 카드 별로 태그를 모달로 확인할 수 있습니다.
![hw1_02](https://user-images.githubusercontent.com/49463954/233651948-c41e7824-91ab-4a8c-8768-2003641cba66.gif)