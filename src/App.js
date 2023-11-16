import React, { useState, useEffect} from 'react'
import Todos from './components/Todos';
import Pagination from './components/Pagination';
import './App.css'


const App = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10)


  useEffect(() => {
    const fetchTodos = async() => {
      setLoading(true)
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json()
        setTodos(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    };
    fetchTodos();
  },[])

  // Get current items 
  const startIndex = (currentPage-1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = todos.slice(startIndex, endIndex);
  const howManyPages = Math.ceil(todos.length / itemsPerPage)


  return (
    <div className="container">
      {loading && <h1>Loading...</h1>}
      <h1 className='heading'>Todos Lists</h1>
      <Todos todos={currentItems} />
      <Pagination 
        pages={howManyPages} 
        setCurrentPage={setCurrentPage} 
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage} 
      />
    </div>
  )
}

export default App
