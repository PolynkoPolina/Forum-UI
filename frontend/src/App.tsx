import './styles/App.css'
import './styles/posts.css'
import './styles/auth.css'
import './styles/profile.css'
import Header from './components/Header'
import PostList from './components/PostList'
import reactImage from "./assets/react.svg";
import { useGetMeQuery, useGetPostsQuery } from './api/baseApi'
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm'
import Profile from './components/Profile'


function App() {
  const {
    data: postData,
    isLoading: postIsLoading,
    isError: postIsError 
  }  = useGetPostsQuery()
  const {
    data: profileData, 
    isLoading: profileIsLoading,
  } = useGetMeQuery()
  return (
    <div>
      <Header title='Posts' image={reactImage}></Header>
      <main>

        {profileIsLoading ? (
          <h2>Loading profile...</h2>
        ) : profileData ? (
          <Profile email={profileData.email} />
        ) : (
          <div className="auth-forms">
            <RegisterForm />
            <LoginForm />
          </div>
        )}

        <h1>Latest posts</h1>
        {postIsLoading && <h2>Loading posts...</h2>}
        {postIsError && <h2>Something went wrong</h2>}
        {postData ?  
          <PostList posts={postData}></PostList> 
        : 
          <h2>Posts not found</h2>
        }

      </main>
    </div>
  )
}

export default App
