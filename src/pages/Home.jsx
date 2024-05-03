import React from 'react'
import Header from '../components/Header'
import Posts from '../posts/Posts'
import Sidebar from '../components/Sidebar'
import './Home.css'


export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
    <Posts/>
    <Sidebar/>
    </div>
    </>
  )
}
