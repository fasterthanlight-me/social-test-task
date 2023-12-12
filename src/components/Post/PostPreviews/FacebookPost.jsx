/*eslint-disable*/
import React, {useContext, useEffect, useState} from 'react';

import styles from './Facebook.module.scss'
import globe from '../../../assets/icons/facebook/globe.svg'
import more from '../../../assets/icons/facebook/more.svg'
import PostContext from '../../../context/PostContext';
import InlineSVG from 'react-inlinesvg';
import Avatar from '@mui/material/Avatar';
import {getAuthorName, truncateString} from '../../../common/utils';
import SocialContext from '../../../context/SocialContext';
import cx from 'classnames'
const FacebookPost = () => {
    const {post} = useContext(PostContext)
    const {files, textContent, link} = post
    const {socialMediaList} = useContext(SocialContext)
    const [authorName, setAuthorName] = useState('')
    useEffect(() => {
        setAuthorName(getAuthorName('facebook'))
    }, [socialMediaList]);

    const renderMedia = () => {
        if (files.length > 0) {
            if (files.length === 1) {
                return (<div className={styles.imageContainer}>
                    <img width="100%"
                         alt="post-preview-default-image"
                         src={URL.createObjectURL(files[0])}
                    />
                </div>)
            } else if(files.length===2) {
                return <div className={styles.gridTwo}>
                    {files.map((file, index) => (
                        <div className={cx(styles.imageContainer, {[styles.fullWidth]: index===0})}>
                            <img width="100%"
                                 alt="post-preview-default-image"
                                 src={URL.createObjectURL(file)}
                            />
                        </div>
                    ))}
                </div>
            } else if(files.length === 3) {
                return <div className={styles.gridThree}>
                    {files.map((file, index) => (
                        <div className={cx(styles.imageContainer, {[styles.fullWidth]: index===0})}>
                            <img width="100%"
                                 alt="post-preview-default-image"
                                 src={URL.createObjectURL(file)}
                            />
                        </div>
                    ))}
                </div>
            }
            else if (files.length === 4) {
                return <div className={styles.gridFour}>
                    {files.map((file, index) => (
                        <div className={cx(styles.imageContainer, {[styles.fullWidth]: index===0})}>
                            <img width="100%"
                                 alt="post-preview-default-image"
                                 src={URL.createObjectURL(file)}
                            />
                        </div>
                    ))}
                </div>


            } else if(files.length>=5) {
                return <div className={styles.gridFive}>
                    <div className={styles.rowOne}>
                        {files.slice(0,2).map((file, index) => (
                            <div className={styles.imageContainer}>
                                <img width="100%"
                                     alt="post-preview-default-image"
                                     src={URL.createObjectURL(file)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.rowTwo}>
                        {files.slice(2,5).map((file, index) => (
                            <div className={styles.imageContainer}>
                                <img width="100%"
                                     alt="post-preview-default-image"
                                     src={URL.createObjectURL(file)}
                                />
                                {index===2 && files.length>5 && <div className={styles.morePhoto}>+{
                                    files.length-5+1
                                }</div> }
                            </div>
                        ))}
                    </div>

                </div>
            }
        } else {
            return <div className={styles.imageContainer}/>
        }

    }
    const currentDate = new Date()
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Avatar alt={authorName} src="/static/images/avatar/2.jpg"
                            sx={{width: 40, height: 40, fontSize: 18, marginRight: '12px'}}/>
                    <div className={styles.info}>
                        <div className={styles.authorName}>{authorName}</div>
                        <div className={styles.dateContainer}>
                            <div className={styles.date}>
                                {currentDate.toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    hour12: true,
                                })}
                            </div>
                            <div className={styles.dot}/>
                            <InlineSVG src={globe} className={styles.globe}/>


                        </div>
                    </div>

                </div>
                <div className={styles.right}>
                    <InlineSVG src={more} className={styles.icon}/>
                </div>
            </div>
            <div className={styles.description}>
                {truncateString(textContent + ' ' + link, 63206).map((el, index) => index === 0 ? (
                    <span className={styles.textContent}>{!!link && link!=='' && el.includes(link) ?
                        <span className={styles.link}>{el}</span> : el}</span>) : (
                    <p className={styles.textContent}>{!!link && link!=='' && el.includes(link) ?
                        <span className={styles.link}>{link}</span> : el}</p>))}
            </div>
            {renderMedia()}
            <div className={styles.divider}/>
            <div className={styles.icons}>
                <div className={styles.bottomIconContainer}>
                    <div className={styles.likeIcon}/>
                    <div className={styles.bottomText}>
                        Like
                    </div>
                </div>
                <div className={styles.bottomIconContainer}>
                    <div className={styles.commentIcon}/>
                    <div className={styles.bottomText}>
                        Comment
                    </div>
                </div>
                <div className={styles.bottomIconContainer}>
                    <div className={styles.commentIcon}/>
                    <div className={styles.bottomText}>
                        Share
                    </div>
                </div>
            </div>
            <div className={styles.divider}/>

        </div>
    )
};

export default FacebookPost;
