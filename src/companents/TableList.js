import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TableItem from './TableItem';

const TableList = ({posts, remove}) => {
  if(!posts.length) {
    return (
      <h6 className="text-center">Not Found</h6>
    )
  }
  return (
      <>
          <h4 className="text">Fovourite Programing Language</h4>
          <TransitionGroup>
            {posts.map((post, index) =>(
              <CSSTransition
                key={post.id}
                timeout={500}
                classNames="item"
              >
                <TableItem remove={remove} number={index + 1} post={post} />
              </CSSTransition>
            ))}
          </TransitionGroup>
          
      </>
  );
};

export default TableList;