import React from 'react'
import './Blog.css'

export default function Blog() {
  return (
    <div className='blog'>
      <img className='blogImg'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSSoL1J9Ngf-k3XsfExBGvgKZmjdbl-s43ng&s" 
      alt="" />
      <div className="blogInfo">
        <div className="blogCatg">
          <span className = "blogCat">Music</span>
          <span className = "blogCat">Life</span>
        </div>
        <span className = "blogTitle">
          Lorem ipsum sit amet
        </span>
        <hr />
        <span className="blogDate">
          1 hour ago
        </span>
      </div>
      <p className="blogDisc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente optio et ut, maiores, tempore quia nobis voluptatum animi, aliquam veritatis eius molestiae nostrum. Deleniti doloribus repellat minus expedita eveniet accusantium natus cupiditate a molestiae. Qui porro illum iure expedita deserunt praesentium quidem incidunt, odio quis sed molestias aliquid unde id!
      orem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente optio et ut, maiores, tempore quia nobis voluptatum animi, aliquam veritatis eius molestiae nostrum. Deleniti doloribus repellat minus expedita eveniet accusantium natus cupiditate a molestiae. Qui porro illum iure expedita deserunt praesentium quidem incidunt, odio quis sed molestias aliquid unde id!
      orem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente optio et ut, maiores, tempore quia nobis voluptatum animi, aliquam veritatis eius molestiae nostrum. Deleniti doloribus repellat minus expedita eveniet accusantium natus cupiditate a molestiae. Qui porro illum iure expedita deserunt praesentium quidem incidunt, odio quis sed molestias aliquid unde id!
      </p>
    </div>
  )
}
