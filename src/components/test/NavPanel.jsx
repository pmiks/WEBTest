import React from 'react';
import './testslist.css';

const NavPanel=({tp,onPrev,onNext,allIsChecked,testIsDone})=>{
  return <div>
     {!tp.type_levelgame&&onPrev&& <button onClick={onPrev}>Предыдущий</button>}
     {!tp.type_levelgame&&onNext&& <button onClick={onNext}>Следующий</button>}
     {!tp.type_levelgame&&allIsChecked&& <button onClick={testIsDone}>Завершить</button>}
  </div>
}

export default NavPanel;
