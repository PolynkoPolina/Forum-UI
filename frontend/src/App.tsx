import './styles/App.css'
import './styles/posts.css'
import Header from './components/Header'
import PostList from './components/PostList'
import posts from './data/posts'
import reactImage from "./assets/react.svg";


function App() {
  
  return (
    <div>
      <Header title='Posts' image={reactImage}></Header>
      <main>
        <h1>Latest posts</h1>
        <PostList posts={posts}></PostList>
      </main>
    </div>
  )
}

export default App
