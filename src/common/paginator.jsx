import React from 'react';
import './paginator.css';

// totalCount, всего элементов
// pageSize, количество элементов на странице
// currentPage, текущая страница
// onClick, действие при выборе страницы
// prevnext,  true/false показать/скрыть кнопку в предыдущий следующий
// startend - true/false показать/скрыть кнопку в начало в конец

const Paginator=({totalCount,pageSize,currentPage,onClick,prevnext,startend})=>{

  let pagesCount=Math.ceil(totalCount/pageSize);
  let pages=[];
  let sizeframe=10;
  let  minPView=currentPage>Math.ceil(sizeframe/2)?currentPage-Math.ceil(sizeframe/2):1;
  let  maxPView=currentPage<=pagesCount-Math.ceil(sizeframe/2)?minPView+sizeframe-1:pagesCount;
  minPView=maxPView-(sizeframe-1);
  for(let i=1;i<=pagesCount;i++) pages.push(i);
  return <div className="pagenator">
    {startend && currentPage>=7 && <span onClick={()=>{onClick(1,pageSize)}}>1</span>}
    {prevnext && currentPage!==1 && <span onClick={()=>{onClick(currentPage-1,pageSize)}}> &#8592; </span>}
    {minPView>1 && <>&emsp;...&emsp;</>}
    {pages.map(p=>{
    return (
      (p>=minPView && p<=maxPView &&
      <span onClick={()=>{onClick(p,pageSize)}}
            className={currentPage===p ?"selectedPageNumber":"PageNumber"}>{p}
      </span>)
      )
    })}
     {maxPView<pagesCount &&  <>&emsp;...&emsp;</>}
       {prevnext && currentPage!==pagesCount && <span onClick={()=>{onClick(currentPage+1,pageSize)}}> &#8594; </span>}
     {startend&&prevnext&& currentPage<=pagesCount-5 && <span onClick={()=>{onClick(pagesCount,pageSize)}}>Конец</span>}
     {startend&&!prevnext&& currentPage<=pagesCount-5 && <span onClick={()=>{onClick(pagesCount,pageSize)}}>{pagesCount}</span>}
     </div>
   }

export default Paginator;
