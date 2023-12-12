import Typography from '@mui/material/Typography';
import {Divider} from '@mui/material';
import Box from '@mui/material/Box';
import PublishTo from './PublishTo';
import PublishContent from './PublishContent';
import AddLink from './AddLink';

const CreatePost = () => (
    <>
        <Typography variant="h5" component="h2">
            Create post
        </Typography>

        <Divider/>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                padding: '10px'
            }}
        >
            <PublishTo/>
            <PublishContent/>
            <AddLink/>
        </Box>
    </>);

export default CreatePost;
