import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm({createPost}) {
    const [post, setPost] = useState({title: '', stack: ''})
    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setPost({title: '', stack: ''})
      }

    return (
        <form>
          <h6 className="text">Create your first post</h6>
          <MyInput  type="text" className="form-control" placeholder="Programming Language" value={post.title} onChange={e =>setPost({...post, title: e.target.value})} />
          <MyInput type="text" className="form-control my-3" placeholder="Enter your favourite stack" value={post.stack} onChange={e =>setPost({...post, stack: e.target.value})} />
          <MyButton className="btn btn-primary w-100" onClick={addPost}>Add post</MyButton>
        </form>
    );
}

export default PostForm;