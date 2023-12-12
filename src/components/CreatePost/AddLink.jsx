import {Grid, TextField, Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {useContext, useEffect, useState} from 'react';
import PostContext from '../../context/PostContext';
import styles from '../Post/PostPreviews/Linkedin.module.scss'

const AddLink = () => {
    const [linkParameters, setLinkParameters] = useState({
        websiteLink: null,
        campaignSource: null,
        campaignMedium: null,
        campaignName: null,
        campaignContent: null
    })
    const {post, setPost} = useContext(PostContext)

    const isStringEmpty = (string)=>!!string &&string!==''

    const handleInputChange = (e) => {
        setLinkParameters({...linkParameters, [e.target.id]: e.target.value})

    }
    useEffect(() => {
        if(isStringEmpty(linkParameters.websiteLink)) {

            setPost((prev)=>({...prev,
                link: `${linkParameters.websiteLink}${linkParameters.campaignSource ?
                    `/?utm_source=${linkParameters.campaignSource}` : ''}${linkParameters.campaignMedium ?
                    `&utm_medium=${linkParameters.campaignMedium}` : ''}${linkParameters.campaignName ?
                    `&utm_campaign=${linkParameters.campaignName}` : ''}${linkParameters.campaignContent ?
                    `&utm_content=${linkParameters.campaignContent}` : ''}`}))

        }
    }, [linkParameters]);


    return (
        <Grid container spacing={2} alignItems="flex-start" textAlign="left" marginTop={2}>
            <Grid item xs={12}>
                <Typography variant="h6">Add Link</Typography>
            </Grid>
            <Box sx={{padding: 2, display: 'flex', flexDirection: 'column', gap: 2, width: '100%'}}>
                <TextField
                    id="websiteLink"
                    label="Add the link to your website"
                    fullWidth
                    onChange={handleInputChange}
                    value={linkParameters.websiteLink}
                />
                <TextField
                    id="campaignSource"
                    label="Campaign Source"
                    onChange={handleInputChange}
                    value={linkParameters.campaignSource || ''}
                    fullWidth
                />
                <TextField
                    id="campaignMedium"
                    label="Campaign Medium"
                    onChange={handleInputChange}
                    value={linkParameters.campaignMedium || ''}
                    fullWidth
                />
                <TextField
                    id="campaignName"
                    label="Campaign Name"
                    onChange={handleInputChange}
                    value={linkParameters.campaignName || ''}
                    fullWidth
                />
                <TextField
                    id="campaignContent"
                    label="Campaign Content"
                    onChange={handleInputChange}
                    value={linkParameters.campaignContent || ''}
                    fullWidth
                />
                <Grid xs={12}>
                    <Typography variant="caption" component="span" sx={{marginTop: 2}}>Link Preview</Typography>
                    <Paper elevation={0} sx={{backgroundColor: 'rgba(0, 0, 0, 0.06)', padding: 2, maxWidth:'100%', wordWrap: 'break-word'}}>
                        <Typography variant="caption" component="span" className={styles.textContent}>{
                            isStringEmpty(linkParameters.websiteLink) &&
                                `${linkParameters.websiteLink}${linkParameters.campaignSource?`/?utm_source=${linkParameters.campaignSource}` : ''}${linkParameters.campaignMedium?`&utm_medium=${linkParameters.campaignMedium}` : ''}${linkParameters.campaignName?`&utm_campaign=${linkParameters.campaignName}` : ''}${linkParameters.campaignContent?`&utm_content=${linkParameters.campaignContent}` : ''}`
                        }
                        </Typography>
                    </Paper>
                </Grid>

            </Box>
        </Grid>
    );
}

export default AddLink;
