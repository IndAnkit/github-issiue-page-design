import React, { useCallback, useRef } from 'react'
import { IssueCard, IssueHeaderCard } from '.'
import Loader from './Loader';

const List = ({data,loading,loadMore}) => {

    const observer = useRef(); // (*)
  const lastBookElementRef = useCallback(  // (*)
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadMore && loadMore()
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, loadMore]
  );

  return (
    <div className='overflow-hidden'>
      <IssueHeaderCard/>
      <div className='relative'>
      {data && data.map((ele,index) => {
          if(index+1===data.length){
            return <IssueCard ref={lastBookElementRef} item={ele} />
          }
        return <IssueCard item={ele} />
      })}
      </div>
      {loading &&<Loader/>}

     
    </div>
  )
}

export default List