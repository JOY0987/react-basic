import React from 'react'

// li 태그 하나를 관리하는 컴포넌트
const FoodItem = ({foodId: id, foodName, price}) => {

  // console.log('props : ', props);
  return (
    <li id={id}> {foodName}({price}원) </li>
  )
}

export default FoodItem