import React from 'react';
import MyButton from './UI/button/MyButton';

const TableItem = (props) => {
    return (
        <div className="d-flex justify-content-between border p-2 my-2">
            <p>{props.number}</p>
            <p>{props.post.title}</p>
            <p>{props.post.stack}</p>
            <p>
                <MyButton className='btn btn-outline-danger w-100' onClick={() => props.remove(props.post)}>delete</MyButton>
            </p>
        </div>
    );
};

export default TableItem;