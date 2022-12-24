import React from 'react';
import css from './Footer.module.css';
import Logo from '../../assets/logo.png'
import {InboxIcon, LinkIcon, LocationMarkerIcon, LoginIcon, PhoneIcon, UsersIcon, }  from '@heroicons/react/outline';



const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
        <hr/>

        <div className={css.cFooter}>
            <div className={css.logo}>
                <img src={Logo} alt="amazon" />
                <span>amazon</span>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Contact Us</span>
                    <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue Orlando, Fl 32801</span>
                    </span>
                    <span className={css.pngLine}>
                        {' '}
                        <PhoneIcon className={css.icon}/>
                        <span><a href="tel:+998900474602">+998(90){' '}047-46-02</a></span>
                    </span>

                    <span className={css.pngLine}>
                        <InboxIcon className={css.icon}/>
                        <span><a href="mailto:+support@amazon.com">support@amazon.com</a></span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Account</span>
                    <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                        <span>Sign In</span>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Company</span>
                    <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                        <a href='/about'>
                            <p>About us</p>
                        </a>
                    </span>
                </div>
            </div>
            <div className={css.block}>
                <div className={css.detail}>
                    <span>Resources</span>
                    <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>     
                            <p>Safety Privacy & Terms</p>
                    </span>
                </div>
            </div>
        </div>
        <div className={css.copyRight}>
            <span>Copyright ©2022 by Komil, Inc.</span>
            <span>All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer;