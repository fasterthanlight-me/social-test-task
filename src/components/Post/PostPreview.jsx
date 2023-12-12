import React, {useContext, useEffect, useState} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramPost from './PostPreviews/InstagramPost';
import FacebookPost from './PostPreviews/FacebookPost';
import LinkedinPost from './PostPreviews/LinkedinPost';
import TabsContext from '../../context/TabsContext';

const PostPreview = () => {
    const {tabs} = useContext(TabsContext);

    const [currentTab, setCurrentTab] = useState(null)
    useEffect(() => {
        setCurrentTab(tabs.find(el => !!el.active))
    }, [tabs]);


    const renderPreview = () => {

        switch (currentTab?.name) {
            case 'instagram':
                return <InstagramPost/>
            case 'facebook':
                return <FacebookPost/>
            case 'linkedIn': return <LinkedinPost/>
            default:
                return (<Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <Typography variant="h6" component="span">
                        Your post will be here. Please add the social media account to see the preview.
                    </Typography>
                    <img width="100%"
                         alt="post-preview-default"
                         src="/preview-default2.jpeg"
                         style={{filter: 'opacity(80%) contrast(120%)'}}
                    /></Box>)
        }
    }

    return (

        <Grid xs={12} md={12} container justifyContent="center" marginTop={2}>
            <Grid display="flex"  xs={12} sm={8} md={8}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    {renderPreview()}
            </Grid>

        </Grid>
    )
};

export default PostPreview;
