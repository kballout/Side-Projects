import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'
import CreateNote from './CreateNote'

function App() {

  return (
    <Container className='my-4'>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/new' element={<CreateNote/>} />
        <Route path='/:id'>
          <Route index element={<h1>Show</h1>} />
          <Route path='edit' element={<h1>edit note</h1>} />
        </Route>
        <Route path='*' element={<Navigate to={'/'}/>} />
      </Routes>
    </Container>
  )
}

export default App
