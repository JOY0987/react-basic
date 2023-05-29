import React, { useState } from 'react'
import PropTypes from 'prop-types'

// 김철수의 값을 척척박사의 값으로 바꾸고 유지하려면? 클로저 함수 or useState hook 사용
const NickName = props => {

  // useState 훅은 배열을 리턴하는데
  // 0번 : 상태변수값
  // 1번 : 상태변수값을 변경하는 setter 함수가 들어있음
  const [nickName, setNickName] = useState('김철수');

  // const nickName = statement[0];
  // const setNickName = statement[1];
  // console.log('statement: ', statement);
  // let nickName = '김철수';

  const changeNickName = e => {
    console.log('changeNickName!! call!');

    setNickName('척척박사');
    console.log('nickName: ', nickName);
  };

    return (
      <>
        <h1>Hello~ {nickName}</h1>
        <button className='btn' onClick={changeNickName}>척척박사</button>
        <button className='btn' onClick={() => setNickName('척척석사')}>척척석사</button>
      </>
    );
}

NickName.propTypes = {}

export default NickName