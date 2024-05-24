# 3강. JSX
<br>

## JSX 란?
> A syntax extension to JavaScript 
<br> 자바스크립트의 확장 문법
<br> 
JavaScript + XML/HTML
<br> 
ex)

```JSX
const element = <h1>Hello, world! </h1>;
```

<br> 

## JSX 역할
JSX 코드를 JavaScript 코드로 변환하는 역할을 하는 것이 createElement 함수.

```JSX
class Hello extends React.Component {
    render(){
        return <div> Hello {this.props.toWhat}</div>
    }
}

ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root')
)
```

createElement 함수의 파라미터
```JavaScript
React.createElement(
    type,
    [props],
    [...children]
)
```
1. 엘리먼트의 유형 (타입)
2. props 
3. children (현재 엘리먼트가 포함하고 있는 자식 엘리먼트)

*React에서 JSX를 쓰는 것이 필수는 아님! JSX 사용하기 싫은 경우, 직접 모든 코드를 createElement 함수를 사용해서 개발하면 됨. 다만, JSX 사용하면 코드가 간결해지고 생산성, 가독성이 올라가는 등 장점들이 많아 편리함. 
<br><br>

## JSX 장점
1. 간결해지는 코드
<br>
JSX 사용함
```JSX
<div>Hello, {name}</div>
```
<br>
JSX 사용 안함
```JavaScript
React.createElement('div',null,'Hello, ${name}');
```
<br>

2. 가독성 향상 (가독성이 높을수록 버그를 찾기 쉬움)<br>
3. Injection Attacks 방어<br>
Injection Attacks라는 해킹 방법을 방어함. <br>
Injection Attacks는 입력창에 문자/숫자 같은 일반적 값이 아닌 소스 코드를 입력하여 해당 코드가 실행되도록 만드는 해킹 방법.<br>

## JSX 사용법
HTML과 자바스크립트가 섞인 형태.
```JavaScript
/* XML, HTML 코드를 사용하다가 중간에 JavaScipt 코드를 사용하고 싶은 경우, 중괄호를 써서 묶어주면 됨. */
...XML/HTML
{JavaScript 코드}
...XML/HTML
```

ex)
```JavaScript
const element = (
    <h1>
        Hello, {formatUser(user)}
    </h1>
);
```

## 실습. JSX 코드 작성해보기
