import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Header from './Header';
import CreatePost from '../CreatePost/CreatePost';
import Post from '../Post/Post';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: `${theme.spacing(1)} 0`,
}));
const Layout = () => (
    <Box sx={{display: 'flex', width: '100%', flexDirection: 'column'}} >
        <Grid xs={12}>
            <Header/>
        </Grid>
        <Box sx={{display: 'flex', width: '100%', gap: 2, padding: '30px 10px'}} >
            <Grid xs={12} container spacing={2}>
                <Grid xs={12} sm={12} md={6}>
                    <Item>
                        <CreatePost/>
                    </Item>

                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <Item><Post/></Item>
                </Grid>
            </Grid>

        </Box>
    </Box>
);

export default Layout;
