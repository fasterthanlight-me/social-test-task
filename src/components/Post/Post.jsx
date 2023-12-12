import React from 'react';
import Box from '@mui/material/Box';
import SocialTabs from './SocialTabs';
import PostPreview from './PostPreview';

const Post = () => (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '10px',
                flexGrow: 1
            }}
        >
            <SocialTabs/>
            <PostPreview/>
        </Box>
    );

export default Post;
