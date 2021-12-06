import React,{useState, useMemo} from "react";
import FilterAndSearch from "./companents/FilterAndSearch";
import PostForm from "./companents/PostForm";
import TableList from "./companents/TableList";
import MyButton from "./companents/UI/button/MyButton";
import MyModal from "./companents/UI/modal/MyModal";
import "./style/style.css"

function App() {
  const[posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', stack: 'FULL Stack'},
    {id: 2, title: 'Python', stack: 'MERN Stack'},
    {id: 3, title: 'PHP', stack: 'JUNIOR'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const sortedPosts = useMemo(() =>{
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]) 

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter(s => s.id !== post.id))
  };

  return (
      <div className="app w-50 mx-auto">
        <MyButton onClick={() => setModal(true)} className="btn btn-primary">Add POST</MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <FilterAndSearch filter={filter} setFilter={setFilter} />
        {sortedAndSearchPosts.length 
          ? <TableList remove={removePost} posts={sortedAndSearchPosts} />
          : <h6 className='my-3 text-center'>Not Found</h6>
        }
      </div>
  );
};

export default App;
