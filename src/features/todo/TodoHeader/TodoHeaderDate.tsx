import React from 'react'
import moment from 'moment';
import "moment/locale/ko";

moment.locale("ko");

const TodoHeaderDate = () => {
  let m = moment();
  return (
    <span>{m.format('M월 D일 dddd')}</span>
  )
}

export default TodoHeaderDate;