import React from 'react';

import Box from '@material-ui/core/Box';
import './Aside.css';

const Aside = () => {
  return (
    <Box component="aside" className="aside">
      <input type="text"/>
      <ul>
        <li>오늘 할 일</li>
        <li>중요</li>
        <li>계획된 일정</li>
        <li>작업</li>
      </ul>
      <hr />
    </Box>
  );
}

export default Aside;
