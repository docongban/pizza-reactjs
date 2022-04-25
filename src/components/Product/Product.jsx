import { ArrowForward } from '@mui/icons-material'
import React from 'react'

import styles from './product.module.css'

function Product({product}) {
  return (
    <div className={styles.product}>
      <div className={styles.wrapper}>
        <img src={product.thumbnail} alt="" className={styles.image} />
        <div className={styles.title}>{product.title}</div>
        <div className={styles.description}>{product.content}</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>
          <div className={styles.priceText}>Giá chỉ từ</div>
          <div className={styles.amount}>{product.price}đ</div>
        </div>
        <div className={styles.button}>
          <a href="google.com" className={styles.buttonText}>Mua ngay</a>
          <ArrowForward className={styles.buttonIcon}/>
        </div>
      </div>
    </div>
  )
}

export default Product