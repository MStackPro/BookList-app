import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext'

const Navbar = () => {
    const {books} = useContext(BookContext)
  return (
    <nav className='navbar'>
        <h1>Ninja Reading List</h1>
        <p>Currently you have {books.length} books to get through...</p>
    </nav>
  )
}

export default Navbar;