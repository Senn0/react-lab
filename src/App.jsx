import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


{/*7*/}

{/*
function App() {
  return <>
    <div>
      <p className='paragraph'>hello1</p>
      <p className='paragraph'>hello2</p>
      <p className='paragraph'>hello3</p>
    </div>
  </>
}
*/}

{/*8*/}

{/*
function App() {
  return <>
    <div className='theme'>Тема 8</div>
    <div className='exercise'>1:</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </>
}
*/}

{/*9*/}

{/*
function App() {
  return <>
    <ul>
			<li>text1</li>
			<li>text2</li>
			<li>text3</li>
		</ul>;
  </>
}
*/}

{/*10*/}

{/*
function App() {
  return <>
    <ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </ul>
    <ul>
      <li>text1</li>
      <li>text2</li>
      <li>text3</li>
    </ul>;
  </>
}
*/}

{/*11*/}

{/*
function App() {
  return <>
    <input />
  </>
}
*/}

{/*12*/}

{/*
function App() {
  return <>
    <input/><input/><input/>;
  </>
}
*/}

{/*13*/}

{/*
function App() {
  const str1 = 'text1';
  const str2 = 'text1';

  return <>
    <div>
      <p>{str1}</p>
      <p>{str1}</p>
    </div>;
  </>
}
*/}

{/*14*/}

{/*
function App() {
  const name = 'user, ';
  const age = '30';

  return <>
    <div>
      name: {name}
      age:  {age}
    </div>
  </>
}
*/}

{/*15*/}

{/*
function App() {
  const arr = [1, 2, 3, 4, 5];

  return <>\
    <p>{arr[0]}</p>
		<p>{arr[1]}</p>
		<p>{arr[2]}</p>
		<p>{arr[3]}</p>
		<p>{arr[4]}</p>
  </>
}
*/}

{/*16*/}

{/*
function App() {
  const obj = {
    name: 'john',
    surname: 'smit'
  };

  return <>
    <p>
      name:    <span>{obj.name}</span>,<br/>
      surname: <span>{obj.surname}</span>,
    </p>
  </>
}
*/}

{/*17*/}

{/*
function App() {
  const attr = 'block';

  return <>
    <div id={attr}>
      text
    </div>
  </>
}
*/}

{/*18*/}

{/*
------------Net-Uprazneniya-------------
*/}

{/*19*/}

{/*
function App() {
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;

  return <>
    {li1}
    {li2}
    {li3}
  </>
}
*/}

{/*20*/}

{/*
function App() {
  const items = (<>
    <li>text1</li>
    <li>text2</li>
    <li>text3</li>
  </>
  );

  return <>
    <ul>
      {items}
    </ul>
  </>
}
*/}

{/*21*/}

{/*
------------Net-Uprazneniya-------------
*/}

{/*22*/}

{/*
function App() {
  const items = (<>
    <li>text1</li>
    <li>text2</li>
    <li>text3</li>
  </>
  );

  return <>
    <div>
      <input/>
      <br />
      <input/>
      <br />
      <input/>
    </div>
  </>
}
*/}

{/*23*/}

{/*
function App() {
  const items = (<>
    <li>text1</li>
    <li>text2</li>
    <li>text3</li>
  </>
  );

  return <>
    <div>2</div>
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div>2</div>
    <div>
      <table>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  </>
}
*/}

{/*24*/}

{/*
function App() {
  const num1 = 3;
  const num2 = 2;

  const name = 'john';
  const surname = 'smit';

  const num = 4;

  return <>
    <div>1</div>
    result: {num1 ** num2}
    <div>2</div>
    result: {name + ' ' + surname}
    <div>3</div>
    result: {Math.sqrt(num)}
  </>
}

*/}

{/*25*/}

{/*
------------Net-Uprazneniya-------------
*/}

{/*26*/}

{/*
function App() {
  let age;
  const isAdult = false;
  if (isAdult) {
		age = <p>more 18</p>;
	}
  else {
		age = <p>not more 18</p>;
  }
  return <>
    {age}
  </>
}
*/}

{/*27*/}

{/*
function App() {
  let admin;
  const isAdmin = true;
  if (isAdmin) {
		admin = <div><p>yes</p></div>;
	}
  return <>
    {admin}
  </>
}
*/}

{/*28*/}

{/*
function App() {
  const age = 19;
  return <>
    {age > 18 ? 'more 18' : 'less 18'}
  </>
}
*/}

{/*29*/}

{/*
function App() {
  const isAuth = true;
  return <>
    {isAuth && <p>вы авторизованы</p>}
  </>
}
*/}

{/*30*/}

{/*
function App() {
  const isAuth = false;
  return <>
    {!isAuth && <p>пожалуйста, авторизуйтесь</p>}
  </>
}
*/}

{/*31*/}

{/*
function App() {
  function getDigitsSum(a) {
    let sum = 0;
    a = String(a);
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i]);
    }
		return sum;
	}
	
	const sum = getDigitsSum(123);
  return <>
    {sum}
  </>
}
*/}

{/*32*/}

{/*
function App() {
  function getDigitsSum(a) {
    let sum = 0;
    a = String(a);
    for (let i = 0; i < a.length; i++) {
      sum += Number(a[i]);
    }
		return sum;
	}
	
	const sum = getDigitsSum(12345);
  return <>
    {sum}
  </>
}
*/}

//Проверка обновления


export default App;
