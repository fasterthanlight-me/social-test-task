/*eslint-disable*/
import React, {useContext, useEffect, useState} from 'react';

import styles from './Linkedin.module.scss'
import globe from '../../../assets/icons/linkedin/globe.svg'
import more from '../../../assets/icons/linkedin/more.svg'
import send from '../../../assets/icons/linkedin/send.svg'
import repost from '../../../assets/icons/linkedin/repost.svg'
import comment from '../../../assets/icons/linkedin/comment.svg'
import like from '../../../assets/icons/linkedin/like.svg'
import cross from '../../../assets/icons/linkedin/cross.svg'
import PostContext from '../../../context/PostContext';
import InlineSVG from 'react-inlinesvg';
import Avatar from '@mui/material/Avatar';
import {excludeString, getAuthorName, truncateString} from '../../../common/utils';
import SocialContext from '../../../context/SocialContext';
import cx from 'classnames';

const LinkedinPost = () => {
    const {post} = useContext(PostContext)
    const {files, textContent, link} = post
    console.log(link)
    const {socialMediaList} = useContext(SocialContext)
    const [authorName, setAuthorName] = useState('')
    useEffect(() => {
        setAuthorName(getAuthorName('facebook'))
    }, [socialMediaList]);

    const renderTextPart = (string, number) => {
        if (number === 0) {
            return <span className={styles.textContent}>
                {!!link && link !== '' && string.includes(link) ?
                    <><span>{excludeString(string, link)}</span>
                        <span className={styles.link}>{link}</span>
                    </> : string}
            </span>
        } else {
            return <p className={styles.textContent}>
                {!!link && link !== '' && string.includes(link) ?
                    (
                        <><span>{excludeString(string, link)}</span>
                            <span className={styles.link}>{link}</span>
                        </>)
                    : <span>{string}</span>}
            </p>
        }

    }
    const renderDescription = () => {
        const cutString = truncateString(textContent + ' ' + link, 2200)
        return cutString.map((el, index) => renderTextPart(el, index))
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
            } else if (files.length === 2) {
                return <div className={styles.gridTwo}>
                    {files.map((file, index) => (
                        <div className={cx(styles.imageContainer, {[styles.fullWidth]: index === 0})}>
                            <img width="100%"
                                 alt="post-preview-default-image"
                                 src={URL.createObjectURL(file)}
                            />
                        </div>
                    ))}
                </div>
            } else if (files.length === 3) {
                return <div className={styles.gridThree}>
                    {files.map((file, index) => (
                        <div className={cx(styles.imageContainer, {[styles.fullWidth]: index === 0})}>
                            <img width="100%"
                                 alt="post-preview-default-image"
                                 src={URL.createObjectURL(file)}
                            />
                        </div>
                    ))}
                </div>
            } else if (files.length === 4) {
                return <div className={styles.gridFour}>
                    {files.map((file, index) => (
                        <div className={cx(styles.imageContainer, {[styles.fullWidth]: index === 0})}>
                            <img width="100%"
                                 alt="post-preview-default-image"
                                 src={URL.createObjectURL(file)}
                            />
                        </div>
                    ))}
                </div>


            } else if (files.length >= 5) {
                return <div className={styles.gridFive}>
                    <div className={styles.rowOne}>
                        {files.slice(0, 2).map((file, index) => (
                            <div className={styles.imageContainer}>
                                <img width="100%"
                                     alt="post-preview-default-image"
                                     src={URL.createObjectURL(file)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.rowTwo}>
                        {files.slice(2, 5).map((file, index) => (
                            <div className={styles.imageContainer}>
                                <img width="100%"
                                     alt="post-preview-default-image"
                                     src={URL.createObjectURL(file)}
                                />
                                {index === 2 && files.length > 5 && <div className={styles.morePhoto}>+{
                                    files.length - 5
                                }</div>}
                            </div>
                        ))}
                    </div>

                </div>
            }
        } else {
            return <div className={styles.imageContainer}/>
        }

    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Avatar alt={authorName} src="/static/images/avatar/2.jpg"
                            sx={{width: 48, height: 48, fontSize: 18, marginRight: '8px'}}/>
                    <div className={styles.info}>
                        <div className={styles.authorName}>{authorName}</div>
                        <div className={styles.caption}>Java developer</div>
                        <div className={styles.dateContainer}>
                            <div className={styles.date}>
                                1d
                            </div>
                            <div className={styles.dot}/>
                            <InlineSVG src={globe} className={styles.globe}/>
                        </div>
                    </div>

                </div>
                <div className={styles.right}>
                    <div className={styles.topIcons}>
                        <InlineSVG src={more} className={styles.icon}/>
                        <InlineSVG src={cross} className={styles.icon} style={{marginLeft: '4px'}}/>
                    </div>

                </div>
            </div>
            <div className={styles.description}>
                {renderDescription()}
            </div>
            {renderMedia()}
            <div className={styles.divider}/>
            <div className={styles.icons}>
                <div className={styles.bottomIconContainer}>
                    <InlineSVG src={like}/>
                    <div className={styles.bottomText}>
                        Like
                    </div>
                </div>
                <div className={styles.bottomIconContainer}>
                    <InlineSVG src={comment}/>
                    <div className={styles.bottomText}>
                        Comment
                    </div>
                </div>
                <div className={styles.bottomIconContainer}>
                    <InlineSVG src={repost}/>
                    <div className={styles.bottomText}>
                        Repost
                    </div>
                </div>
                <div className={styles.bottomIconContainer}>
                    <InlineSVG src={send}/>
                    <div className={styles.bottomText}>
                        Send
                    </div>
                </div>
            </div>


        </div>
    )
};

export default LinkedinPost;
