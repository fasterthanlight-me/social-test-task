import React, {useContext, useEffect, useMemo} from 'react';
import {Tab, Tabs} from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import {createIcon, getAuthorName} from '../../common/utils';
import SocialContext from '../../context/SocialContext';
import TabsContext from '../../context/TabsContext';


const SocialTabs = () => {
    const {socialMediaList, setSocialMediaList} = useContext(SocialContext);
    const {tabs, setTabs} = useContext(TabsContext);


    useEffect(() => {
        setTabs(socialMediaList.filter(el=>!!el.value).map((el, index)=>{
            if(index===0) {
                return ({...el, active: true})
            } 
                return  ({...el, active: false})
            
        }))
    }, [socialMediaList]);



    const handleChange = (event, newValue) => {
        const newTabs = tabs.map((el, index)=>{
            if(index === newValue) {
                return ({...el, active: true})
            }
                return ({...el, active: false})

        })
        setTabs(newTabs)

    };


    const renderTabs = useMemo(() => tabs?.map(el => (
            <Tab icon={createIcon(el.name)} label={
                <Box sx={{display: 'flex', gap: '5px', alignItems: 'center', paddingRight: '5px', borderRadius: 2}}>
                    <Avatar alt={getAuthorName(el.name)} src="/static/images/avatar/2.jpg"
                            sx={{width: '15px', height: '15px', fontSize: '10px', backgroundColor: '#red'}}/>
                    <Typography variant="caption" component="span"> {getAuthorName(el.name)}</Typography>
                </Box>
            } />


        )),
        [tabs]
    )
    return (
        <Grid item xs={12}>
            <Tabs
                value={tabs.findIndex(el=>!!el.active)}
                onChange={handleChange}
                aria-label="icon position tabs example"
            >
                {renderTabs}


            </Tabs>
        </Grid>
    );
}

export default SocialTabs;
