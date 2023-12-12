import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Checkbox, FormControlLabel} from '@mui/material';
import {useContext, useMemo, useState} from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import {createIcon, getAuthorName} from '../../common/utils';
import SocialContext from '../../context/SocialContext';

const PublishTo = () => {
    const {socialMediaList, setSocialMediaList} = useContext(SocialContext);
console.log(socialMediaList)
    const handleCheckboxChange = (e) => {
        const newList = socialMediaList.map(el => {
            if (el.name === e.target.name) {
                return ({...el, value: e.target.checked})
            }
            return el

        })
        setSocialMediaList(newList)
    }

    const renderList = useMemo(() => socialMediaList.map(el => (
                <FormControlLabel
                    key="name"
                    control={
                        <Checkbox checked={el.value} onChange={handleCheckboxChange} name={el.name} id={el.name}
                                  icon={createIcon(el.name, el.value)} checkedIcon={createIcon(el.name, el.value)}/>}
                    label={
                        <Box sx={{display: 'flex', gap: '5px', alignItems: 'center', paddingRight: '5px', borderRadius: 2}}>
                            <Avatar alt={getAuthorName(el.name)} src="/static/images/avatar/2.jpg"
                                    sx={{width: '15px', height: '15px', fontSize: '10px', backgroundColor: '#red'}}/>
                            <Typography variant="caption" component="span"> {getAuthorName(el.name)}</Typography>
                        </Box>
                    }
                    sx={{display: 'flex', backgroundColor: el.value?'#b7d3e963':'#f4eeee63', paddingRight: '5px', flexShrink: 0}}
                />
            )),
            [socialMediaList]
        )
    ;
    return (
        <>
            <Typography variant="h6" component="h3" textAlign="left">Publish to</Typography>
            <Paper elevation={6} variant="outlined"
                   sx={{display: 'flex', width: '100%', padding: '20px 30px', backgroundColor: '#fbfbfb90', maxWidth: '100%', flexWrap: 'wrap', gap: 1}}>


                {renderList}
            </Paper>
        </>

    )
};

export default PublishTo;
