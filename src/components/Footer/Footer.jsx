import React from 'react'
import clsx from 'clsx'
import styles from './footer.module.css'
import { FacebookOutlined, Instagram, YouTube } from '@mui/icons-material'

function Footer() {
    return (
        <div className={clsx(styles.footer)}>
            <div className={clsx(styles.footerWrapp, "container px-4")}>
                <div className="row g-5">
                    <div className="col-lg-3">
                        <img src={require("../../images/logoFooter.png")} alt="" className={styles.logo}/>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.footerBlock}>
                            <div className={styles.title}>Giới thiệu</div>
                            <a href="google.com" className={styles.link}>Hệ thống nhà hàng</a>
                            <a href="google.com" className={styles.link}>Câu chuyện thương hiệu</a>
                            <a href="google.com" className={styles.link}>Ưu đãi thành viên</a>
                            <a href="google.com" className={styles.link}>Tin tức & sự kiện</a>
                            <a href="google.com" className={styles.link}>Tuyển dụng</a>
                        </div>
                        <div className={styles.footerBlock}>
                            <div className={styles.title}>VĂN PHÒNG ĐẠI DIỆN</div>
                            <a href="google.com" className={styles.link}>
                                <span>
                                    Công ty Cổ phần Pizza Ngon  77 Trần Nhân Tôn, Phường 9, Quận 5, Thành phố Hồ Chí Minh
                                </span>
                            </a>
                            <a href="google.com" className={styles.link}>
                                <span>SĐT: +84 (028) 7308 3377 </span>
                            </a>
                            <a href="google.com" className={styles.link}>
                                <span>MST: 0104115527 </span>
                            </a>
                            <a href="google.com" className={styles.link}>
                                <span>Cấp lần đầu ngày 17 tháng 08 năm 2009 và có thể được sửa đổi vào từng thời điểm</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.footerBlock}>
                            <div className={styles.title}>Liên hệ</div>
                            <a href="google.com" className={styles.link}>Liên hệ</a>
                            <a href="google.com" className={styles.link}>Hướng dẫn mua hàng</a>
                            <a href="google.com" className={styles.link}>Chính sách giao hàng</a>
                            <a href="google.com" className={styles.link}>Chính sách bảo mật</a>
                            <a href="google.com" className={styles.link}>Điều khoản và Điều kiện</a>
                        </div>
                        <div className={styles.footerBlock}>
                            <div className={styles.title}>TỔNG ĐÀI HỖ TRỢ</div>
                            <a href="tel:0825210701" className={styles.link}>Đặt hàng: 0825210701 (9:30 – 21:30)</a>
                            <a href="tel:0825210701" className={styles.link}>Tổng đài CSKH: 0825210701 (9:30 – 21:30)</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className={styles.footerBlock}>
                            <div className={styles.title}>LIÊN KẾT VỚI CHÚNG TÔI</div>
                            <div className={styles.socail}>
                                <a href="https://www.facebook.com/docongban" target="noreferrer" className={styles.item}>
                                    <FacebookOutlined className={styles.icon}/>
                                </a>
                                <a href="https://www.facebook.com/docongban" target="noreferrer" className={styles.item}>
                                    <Instagram className={styles.icon}/>
                                </a>
                                <a href="https://www.facebook.com/docongban" target="noreferrer" className={styles.item}>
                                    <YouTube className={styles.icon}/>
                                </a>
                            </div>
                            <img src={require("../../images/bocongthuong.png")} alt="" className={styles.bct}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>Bản quyền © 2022 The Pizza Company. Cloned by BanDC.</div>
        </div>
    )
}

export default Footer