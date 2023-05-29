import logo from './logo.svg';
import './App.css';
import SayHello from './SayHello';
import ClickEvent from './component/chap01_event/ClickEvent';
import ChangeEvent from './component/chap01_event/ChangeEvent';
import SubmitEvent from './component/chap01_event/SubmitEvent';
import FoodList from './component/chap02_props/FoodList';
import NickName from './component/chap03_state/NickName';
import Counter from './component/chap03_state/Counter';

function App() {

  const looping = () => {
    const helloList = [];
    for (let i = 0; i < 5; i++) {
      helloList.push(<SayHello />);
    }
    return helloList;
  };

  // JSX 문법에서는 row한 스크립트 코드 사용 불가 (소괄호 안에서 불가)
  // {} 안에서 함수호출문이나 변수 참조를 할 수 있음
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
