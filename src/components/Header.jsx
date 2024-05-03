import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="titleName">
        <span className="title1">React</span>
        <span className="title2">Blog</span>
      </div>
      <img className = "headerImg"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa91b2ImS-EgrXT-8nIcB8a_uZwjulWgFJXA&s"
      alt="Image" 
      />
    </div>
  )
}
