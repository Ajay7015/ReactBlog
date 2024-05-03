import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className = "sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img className = "sidebarImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTInwJpysvTWZIs5PlspFsLmgrXvop41m5aqA&s" 
        alt="" />
        <p>
            Lorem, ipsum doddfmfslksdl kjdkls jndf ldjfnsksld  jasdanldnal asjd explicabo! Est.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList"></ul>
        <li className="sidebarlistItem">Movies</li>
        <li className="sidebarlistItem">Technologies</li>
        <li className="sidebarlistItem">Nature</li>
        <li className="sidebarlistItem">Sports</li>
        <li className="sidebarlistItem">Lifestyle</li>
        <li className="sidebarlistItem">Social</li>

      </div>
    </div>
  )
}
