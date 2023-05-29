import React from 'react'

const SubmitEvent = () => {

  const send = e => {
    e.preventDefault(); // submit 기능 중지

    const $nick = document.getElementById('nickName');
    console.log($nick.value);
  };

  return (
    <form onSubmit={send}>
        <input type='text' id='nickName' name='nick' />
        <button type='submit'>확인</button>
    </form>
  );
}

export default SubmitEvent