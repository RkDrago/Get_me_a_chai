import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className='bg-blue-950 text-white py-6 flex flex-col md:flex-row items-center justify-center'>
        <p>Copyright &copy; {currentYear}</p>
        <p> Get me a chai - All rights reserved!</p>
    </footer>
  )
}

export default Footer
