import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css'
import ListUser from './components/ListUser'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'

function App() {

  return (
    <>
      <main className='w-7xl mx-auto'>
      <h1 className='text-4xl py-10'><a href="/">Full Stack Application</a></h1>
      <BrowserRouter>
      <nav className='w-7xl mx-auto py-5'>
        <ul>
         <li className='font-bold text-2xl'> <Link to="user/create">Create Users</Link></li>
         <li className='font-bold text-2xl'> <Link to="/">List Users</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<ListUser/>}/>
        <Route path='user/create' element={<CreateUser/>}/>
        <Route path='user/edit/:id' element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>
      </main>
    </>
  )
}

export default App
