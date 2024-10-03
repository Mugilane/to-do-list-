import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <footer>Date {date.getDate()} Month {date.getMonth()}  year {date.getFullYear()}</footer>
  )
}

export default Footer
