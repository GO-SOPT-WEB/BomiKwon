### React에서 Props Drilling을 해결하는 전략들은 무엇이 있을까?

- props drilling은 너무 많은 prop가 전달되는 구조의 컴포넌트 환경에서 문제가 발생한다. props를 추적하기 어렵고, 코드의 유지보수도 힘들어진다. 이를 해결하는 전략은 아래와 같다.

1) 전역 상태관리 라이브러리 사용
- redux, recoil을 통해 전역 상태 관리를 해줌으로써, 필요한 컴포넌트에서 상위/하위 구분 없이 바로 불러서 사용한다.

2) children 사용
- 컴포넌트의 구조가 명확하지 않거나 여러 개일 때, 컴포넌트에 전달되는 그려질 내용을 children으로 받을 수 있다. 이는 하나의 컴포넌트에서만 값을 관리해도 되고 그 값을 하위요소가 추적하기 쉽다는 점에서 장점을 가진다.

3) 탄탄한 폴더 구조
- 전역변수를 사용하기 이전에 컴포넌트를 정리하고 구성요소를 구조화할 필요가 있다. 성능 및 관리에 관한 측면에서 상태를 어떤 컴포넌트에서 어떤 구성요소가 관리할지를 미연에 체계적으로 구성해놓는다면, 해당 props drilling 문제는 보다 줄어들 것이다.

### 그렇다면 나는 합동세미나, 솝커톤, 웹잼에서 어떤걸 시도해보고 싶은가?
> 👉 또 그이유는 무엇인가?!

- 우선 폴더 구조와 구성요소에 대한 고민을 프로젝트에 앞서 팀원과 공유하고 싶다. 어떤 상태를 써야하며 어떤 컴포넌트로 관리할 것인지에 대한 설계를 해두어서, props drilling이 문제가 되어 유지보수가 어려운 상황을 방지할 것이다. 그런 측면에서 Atomic 디자인이나, 디자인 패턴에 관한 여러가지 방법론에 대한 결정이 먼저 필요할 것 같다.

- 또한 무분별하게 사용하던 useState를 대신해, useMemo나 useRef 등 적재적소의 hook을 사용해보고 싶다. 상위 컴포넌트에서도 충분히 useRef로 추적해올 수 있는 값을 하위에서 props로 넘겨왔다는 생각을 해본 적이 있기에, 더더욱 활용도 높은 hook 사용을 해보고 싶다.

- 물론, 전역 변수나 커스텀 훅 등을 통해 더 가독성 있게 상태관리를 하는 것도 해결책이 될 것이다. 그 전에 이 기능을 위와 같은 전역변수, 커스텀 훅으로 다뤘을 때의 이점을 생각하며 '왜 그렇게 했는지'라는 질문에 대한 답을 끊임없이 내리면서 여러가지를 시도할 것이다.

