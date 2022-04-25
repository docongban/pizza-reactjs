import { useEffect, useState } from 'react'

import Product from '../Product/Product'
import styles from './products.module.css'
import productService from '../../services/product.service'
import categoryService from '../../services/category.service'
import { useParams } from 'react-router-dom'

function Products() {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const {id} = useParams();
    const {text} = useParams();
    
    //get all categories
    useEffect(() => {
        categoryService.getAll()
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    },[])

    //get products
    useEffect(() => {
        if(id){
            categoryService.getProductByCategoryId(id)
                .then(response => {
                    setProducts(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }else{
            productService.getAll()
                .then(response => {
                    setProducts(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
    
        }
    }, [id])

    //search products by name
    useEffect(() => {
        if(text){
            productService.searchProduct(text)
                .then(response => {
                    setProducts(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },[text])


    return ( 
        <div className={styles.products}>
            <div className={styles.title}>{ id ? categories[id-1].name : "Thực đơn"}</div>
            <div className="row g-5">
                {
                    products.map((product) => (
                        <div className="col-lg-3" key={product.id}>
                            <Product product={product}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products