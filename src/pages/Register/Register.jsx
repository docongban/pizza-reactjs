import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { ArrowForward } from '@mui/icons-material'

import styles from './register.module.css'
import accountService from "../../services/account.service"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function Register() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [phoneExist, setPhoneExist] = useState('')
    const [allphones, setAllphones] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        accountService.getAllPhone()
            .then(response => {
                setAllphones(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    },[phone])

    //check phone exist
    const handleCheckPhoneExist = (e) => {
        if(allphones.includes(phone)) {
            setPhoneExist("Số điện thoại đã tồn tại vui lòng chọn số khác")
        }else{
            setPhoneExist("")
        }
    }

    //register
    const handleRegister = (e) => {
        e.preventDefault()

        const account = {fullname, email, address, phone, password, passwordConfirm}

        //create a new account
        accountService.create(account)
            .then(response => {
                navigate('/login')
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Header/>
            <div className={clsx(styles.register, "container px-4")}>
                <form action="" className={styles.form} id="registerForm">
                    <div className={styles.heading}>Tạo tài khoản</div>
                    <div className={styles.spacer}></div>
                    <div className={styles.formGroup}>
                        <label htmlFor="fullname" className={styles.label}>Họ và tên</label>
                        <input 
                            type="text" 
                            name="fullname" 
                            id="fullname" 
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className={styles.input} 
                            placeholder="VD: Đỗ Công Ban"
                        />
                        <div className={styles.message}></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input} 
                            placeholder="VD: ban@gmail.com"
                        />
                        <div className={styles.message}></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address" className={styles.label}>Địa Chỉ</label>
                        <input 
                            type="text" 
                            name="address" 
                            id="address" 
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className={styles.input} 
                            placeholder="Số nhà, ngách/ngõ, Đường, Phố, Quận"
                        />
                        <div className={styles.message}></div>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.label}>Số điện thoại</label>
                        <input 
                            type="text" 
                            name="phone" 
                            id="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onBlur={(e) => handleCheckPhoneExist(e)}
                            className={styles.input} 
                            placeholder=""
                        />
                        <div className={styles.message}>{phoneExist}</div>
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
                    <div className={styles.formGroup}>
                        <label htmlFor="passwordConfirm" className={styles.label}>Nhập lại mật khẩu</label>
                        <input 
                            type="password" 
                            name="passwordConfirm" 
                            id="passwordConfirm"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            className={styles.input} 
                            placeholder=""
                        />
                        <div className={styles.message}></div>
                    </div>
                    <button className={styles.button} onClick={(e) => handleRegister(e)}>Đăng ký
                        <ArrowForward className={styles.forwardButton}/>
                    </button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export default Register