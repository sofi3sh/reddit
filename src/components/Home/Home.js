import React from 'react'
import { SideBar } from './side-bar/SideBar'
import { MainHome } from './main-home/MainHome'
import './home.css'


export const Home = () => {
  return (
    <div className='home_container'>
        <MainHome />
        <SideBar />
    </div>
  )
}
