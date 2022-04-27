import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ArrowForward } from '@mui/icons-material'

import styles from './login.module.css'
import accountService from "../../services/account.service"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function Login() {

    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [accountName, setAccountName] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const account = {phone, password}
    

    const handleLogin = (e) => {
        e.preventDefault()

        accountService.login(account)
            .then(response => {
                //save token to localstorage
                localStorage.setItem('account', JSON.stringify(response.data))
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })

        if(!JSON.parse(localStorage.getItem('account'))){
            setPasswordError("Vui lòng kiểm tra lại số điện thoại hoặc mật khẩu")
        }
    }

    //get account token from localStorage
    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem('account')))
        if(JSON.parse(localStorage.getItem('account'))){
            setAccountName(JSON.parse(localStorage.getItem('account')).fullname)
        }
    }, [accountName])

    return (
        <>
            <Header/>
            <div className={clsx(styles.login, "container px-4")}>
                <form action="" className={styles.form} id="login">
                    <div className={styles.heading}>Đăng nhập</div>
                    <div className={styles.spacer}>{passwordError}</div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Số điện thoại</label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={styles.input}
                            placeholder=""
                        />
                        <div className={styles.message}></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.label}>Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder=""
                        />
                        <div className={styles.message}></div>
                    </div>
                    <button className={styles.button} onClick={(e) => handleLogin(e)}>Đăng nhập
                        <ArrowForward className={styles.forwardButton} />
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Login