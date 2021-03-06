import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AccountCircleOutlined, HomeOutlined, LocationOnOutlined, Menu, Moped, Search, ShoppingCartOutlined, Store } from '@mui/icons-material';

import styles from './header.module.css'
import categoryService from '../../services/category.service'

function Header() {
    const [categories, setCategories] = useState([])
    const [searchBox, setSearchBox] = useState(false)
    const [yourLocation, setYourLocation] = useState(true)
    const [storeLocation, setStoreLocation] = useState(false)
    const [inputYourLocation, setInputYourLocation] = useState(true)
    const [inputStoreLocation, setInputStoreLocation] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [accountName, setAccountName] = useState('')
    const navigate = useNavigate()

    //cal API get all categories
    useEffect(() => {
        categoryService.getAll()
            .then(response => {
                setCategories(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    //toggle button search
    const handleToggleSearch = () => {
        setSearchBox(!searchBox)
    }

    //delivery tab
    const handleChangeTabLocation = () => {
        setYourLocation(!yourLocation)
        setStoreLocation(!storeLocation)
        setInputYourLocation(!inputYourLocation)
        setInputStoreLocation(!inputStoreLocation)
    }

    // enter to search name product
    const handleEnterSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search/${searchText}`)
        }
    }

    //get account token from localStorage
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('account')))
        if(JSON.parse(localStorage.getItem('account'))){
            setAccountName(JSON.parse(localStorage.getItem('account')).fullname)
        }
    }, [accountName])

    // logout
    const handleLogout = () => {
        localStorage.removeItem('account')
        navigate("/login")
    }

    return (
        <>
            {/* PC */}
            <div className={clsx(styles.header, styles.hide)}>
                <div className={clsx(styles.headerWrap,"container px-4")}>
                    <div className={clsx(styles.headerTop)}>
                        <Link to="/" className={styles.logo} >
                            <img src={require("../../images/logo.png")} alt="" className={styles.logoImg} />
                        </Link>
                        <div className={styles.delivery}>
                            <div className={styles.deliveryWrap}>
                                <div
                                    className={yourLocation ? clsx(styles.deliverItem, styles.active) : styles.deliverItem}
                                    onClick={handleChangeTabLocation}>
                                    <Moped className={styles.icon} />
                                    <span className={styles.deliverItemText}>?????t giao h??ng</span>
                                </div>
                                <div
                                    className={storeLocation ? clsx(styles.deliverItem, styles.active) : styles.deliverItem}
                                    onClick={handleChangeTabLocation}>
                                    <Store className={styles.icon} />
                                    <span className={styles.deliverItemText}>?????t ?????n l???y</span>
                                </div>
                            </div>
                            <div className={inputYourLocation ? clsx(styles.location, styles.active) : styles.location}>
                                <LocationOnOutlined className={styles.locationIcon} />
                                <input type="text" placeholder="Nh???p ?????a ch??? c???a b???n" className={styles.locationInput} />
                            </div>
                            <div className={inputStoreLocation ? clsx(styles.location, styles.active) : styles.location}>
                                <HomeOutlined className={styles.locationIcon} />
                                <input type="text" placeholder="Nh???p c???a h??ng" className={styles.locationInput} />
                            </div>
                        </div>
                        <div className={styles.account}>
                            <div className={styles.login}>
                                <AccountCircleOutlined className={styles.accountIcon} />
                                {
                                    accountName ? 
                                    (<Link to="/" className={styles.accountText}>{accountName}</Link>) : 
                                    (<Link to="/login" className={styles.accountText}>????ng nh???p</Link>)
                                }
                            </div>
                            <div className={styles.register}>
                                <span className={styles.character}>/ </span>
                                {
                                    accountName ? 
                                    (<div className={styles.accountText} onClick={handleLogout}>????ng xu???t</div>) : 
                                    (<Link to="/register" className={styles.accountText}>T???o t??i kho???n</Link>)
                                }
                            </div>
                        </div>
                    </div>
                    <nav className={clsx(styles.navbar)}>
                        <div className={styles.options}>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    <Link to="/" className={styles.itemLink}>
                                        <span className={styles.itemText}>Khuy???n m??i</span>
                                    </Link>
                                </li>
                                {
                                    categories.map(category => (
                                        <li className={styles.item} key={category.id}>
                                            <Link to={`/category/${category.id}`} className={styles.itemLink}>
                                                <span className={styles.itemText}>{category.name}</span>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.search}>
                                <Search className={styles.searchIcon} onClick={handleToggleSearch} />
                                <div className={searchBox ? clsx(styles.searchBox, styles.active) : styles.searchBox}>
                                    <input
                                        type="text"
                                        className={styles.searchInput}
                                        value={searchText}
                                        onChange={e => setSearchText(e.target.value)}
                                        onKeyPress={handleEnterSearch}
                                        placeholder="T??m s???n ph???m" />

                                    <Link to={`/search/${searchText}`}>
                                        <button
                                            type="submit"
                                            className={styles.searchButton}
                                        >
                                            <Search className={styles.icon} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.navbarWrap}>
                                <div className={styles.cart}>
                                    <ShoppingCartOutlined className={styles.cartIcon} />
                                    <a href="google.com" className={styles.cartLink}>Gi??? h??ng</a>
                                    <span className={styles.quantity}>0</span>
                                </div>
                                <div className={styles.cartList}>
                                    <p className={styles.cartListTitle}>R???t ti???c!!! B???n kh??ng c?? s???n ph???m ??? ????y.</p>
                                    <p className={styles.cartListText}>Ch??ng t??i s??? giao h??ng v???i ho?? ????n tr??n <span>100,000 ??</span></p>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
            <div className={styles.pdb140}></div>
            {/* Mobile */}
            <div className={clsx("container px-4", styles.mobileHeader, styles.hidePC)}>
                <a href="google.com">
                    <img src={require("../../images/logoMobile.png")} alt="" className={styles.mobileLogo} />
                </a>
                <div className={styles.mobileRight}>
                    <Search className={styles.mobileSearchIcon} />
                    <a href="goole.com" className={styles.mobileCart}>
                        <ShoppingCartOutlined className={styles.mobileCartIcon} />
                        <span className={styles.mobileQuantity}>0</span>
                    </a>
                    <Menu className={styles.mobileMenuIcon} />
                </div>
                <div className={styles.overlay}>
                    <ul className={styles.mobileList}>
                        <li className={styles.mobileItem}>
                            <a href="google.com" className={styles.mobileItemLink}>Khuy???n m??i</a>
                        </li>
                        {
                            categories.map(category => (
                                <li className={styles.mobileItem} key={category.id}>
                                    <a href="google.com" className={styles.mobileItemLink}>{category.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className={styles.mobileAccount}>
                        <div className={styles.mobileLogin}>
                            <AccountCircleOutlined className={styles.mobileAccountIcon} />
                            <a href="google.com" className={styles.mobileAccountText}>????ng nh???p</a>
                        </div>
                        <div className={styles.mobileRegister}>
                            <span>/</span>
                            <a href="google.com" className={styles.mobileAccountText}>T???o t??i kho???n</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header