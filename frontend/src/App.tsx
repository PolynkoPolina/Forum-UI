import './styles/App.css'
import './styles/posts.css'
import './styles/auth.css'
import Header from './components/Header'
import PostList from './components/PostList'
import reactImage from "./assets/react.svg";
import { useGetPostsQuery } from './api/baseApi'
import { RegisterForm } from './components/RegisterForm';


function App() {
  const {data, isLoading, isError} = useGetPostsQuery()
  return (
    <div>
      <Header title='Posts' image={reactImage}></Header>
      <main>
        <RegisterForm></RegisterForm>
        <h1>Latest posts</h1>
        {isLoading && <h2>Loading posts...</h2>}
        {isError && <h2>Something went wrong</h2>}
        { data ?  
          <PostList posts={data}></PostList> 
        : 
          <h2>Posts not found</h2>
        }
      </main>
    </div>
  )
}

export default App
