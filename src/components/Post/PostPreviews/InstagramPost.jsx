/*eslint-disable*/
import React, {useContext, useEffect, useState} from 'react';

import styles from './Instagram.module.scss'
import like from '../../../assets/icons/instagram/like.svg'
import comment from '../../../assets/icons/instagram/comment.svg'
import share from '../../../assets/icons/instagram/share.svg'
import save from '../../../assets/icons/instagram/save.svg'
import more from '../../../assets/icons/instagram/more.svg'
import PostContext from '../../../context/PostContext';
import InlineSVG from 'react-inlinesvg';
import Avatar from '@mui/material/Avatar';
import {getAuthorName, truncateString} from '../../../common/utils';
import SocialContext from '../../../context/SocialContext';
import Slider from "react-slick";

const InstagramPost = () => {
    const {post} = useContext(PostContext)
    const {files, textContent, link} = post
    const {socialMediaList} = useContext(SocialContext)
    const [authorName, setAuthorName] = useState('')
    useEffect(() => {
        setAuthorName(getAuthorName('instagram'))
    }, [socialMediaList]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const renderMedia = () => {
        if (files.length > 0) {
            if (files.length === 1) {
                return (<div className={styles.imageContainer}>
                    <img width="100%"
                         alt="post-preview-default-image"
                         src={URL.createObjectURL(files[0])}
                    />
                </div>)
            } else {
                return <Slider {...settings}>
                    {files.slice(0, 10).map((el) => (
                        <div className={styles.imageContainer}>
                            {files.length > 0 && <img width="100%"
                                                      alt="post-preview-default-image"
                                                      src={URL.createObjectURL(el)}
                            />}
                        </div>
                    ))}
                </Slider>
            }
        } else {
            return <div className={styles.imageContainer}/>
        }

    }
    console.log(socialMediaList.find(el => !!el.currentTab)?.name)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Avatar alt={authorName} src="/static/images/avatar/2.jpg"
                            sx={{width: 32, height: 32, fontSize: 16, marginRight: '12px'}}/>
                    <span className={styles.authorName}>{authorName}</span>
                </div>
                <div className={styles.right}>
                    <InlineSVG src={more} className={styles.icon}/>
                </div>
            </div>
            {renderMedia()}
            <div className={styles.icons}>
                <div className={styles.left}>
                    <InlineSVG src={like} className={styles.icon}/>
                    <InlineSVG src={comment} className={styles.icon}/>
                    <InlineSVG src={share} className={styles.icon}/>
                </div>
                <div className={styles.right}>
                    <InlineSVG src={save} className={styles.icon}/>
                </div>
            </div>
            <div className={styles.description}>
                <span className={styles.authorName}>{authorName}</span>{' '}
                {truncateString(textContent+' '+link, 2200).map((el, index) => index === 0 ? (
                    <span className={styles.textContent}>{el}</span>) : (<p className={styles.textContent}>{el}</p>))}
            </div>
        </div>
    )
};

export default InstagramPost;
