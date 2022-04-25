import React from 'react'
import clsx from 'clsx'

import Header from '../../components/Header/Header'
import Slide from '../../components/Slide/Slide'
import styles from './home.module.css'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <div className={clsx(styles.home, "container px-4")}>
        <Slide />
        <Products />
      </div>
      <Footer/>
    </>
  )
}

export default Home