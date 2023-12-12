import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Grid} from '@mui/material';
import {useContext} from 'react';
import FileUpload from './FileUpload';
import PostContext from '../../context/PostContext';

const PublishContent = () => {
        const {post, setPost} = useContext(PostContext)
        const {textContent} = post
        return (

            <Grid xs={12} marginTop={2}>
                <Typography variant="h6" component="h3" textAlign="left">Content</Typography>
                <Paper elevation={6} variant="outlined"
                       sx={{
                           display: 'flex',
                           width: '100%',
                           padding: '20px 30px',
                           backgroundColor: '#fbfbfb90',
                           flexDirection: 'column'
                       }}>
                    <div className="mui-textarea-container">
                    <textarea className="mui-textarea"
                              id="textContent" name="textContent" value={textContent}
                              onChange={(e) => setPost({...post, textContent: e.target.value})}
                              rows={5}
                    />
                        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                        <label htmlFor="textContent">Write your content here</label>
                    </div>
                    {/* TODO: put the real material ui text area when this issue is fixed on the materialui side */}
                    {/* <TextField */}
                    {/*    id="textContent" name="textContent" value={textContent} */}
                    {/*    onChange={(e) => setPost({...post, textContent: e.target.value})} */}
                    {/*    label="Write your content here" */}
                    {/*    multiline */}
                    {/*    variant="filled" */}
                    {/*    minRows={5} */}
                    {/*    fullWidth */}
                    {/* /> */}
                    <FileUpload/>


                </Paper>
            </Grid>
        )
    }
;

export default PublishContent;
