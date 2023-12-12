import React, {useContext} from 'react';
import {Button, Grid, Typography,} from '@mui/material';
import {CloudUpload, Delete} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import PostContext from '../../context/PostContext';


const FileUpload = () => {
    const {post, setPost} = useContext(PostContext);
    const {files} = post

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setPost({
            ...post, files: [...files, ...selectedFiles]
        });
    };

    const handleFileRemove = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setPost({
            ...post, files: newFiles
        });
    };

    const handleRemoveAllFiles = () => {

        setPost({
            ...post, files: []
        });
    };


    return (
        <Grid container spacing={2} alignItems="flex-start" textAlign="left" marginTop={2}>
            <Grid item xs={12}>
                <Typography variant="subtitle1">Upload Images or Videos</Typography>
            </Grid>
            <Grid item xs={12} justifyContent="space-between" textAlign="left">
                <input
                    accept={'image/*'}
                    style={{display: 'none'}}
                    id="file-upload-input"
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor="file-upload-input">
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        startIcon={<CloudUpload/>}
                    >
                        {files?.length > 0 ? 'Add Files' : 'Upload Files'}
                    </Button>
                </label>
                {files?.length > 0 && <Button
                    variant="contained"
                    color="error"
                    component="span"
                    startIcon={<Delete/>}
                    sx={{marginLeft: 2}}
                    onClick={handleRemoveAllFiles}
                >
                    Remove all
                </Button>}
            </Grid>


            {files.length > 0 && <Box sx={{
                display: 'flex',
                width: '100%',
                marginTop: 5,
            }}>
                <Masonry columns={{xs: 2, sm: 3, md: 3, lg: 3, xl: 3}} spacing={2} defaultHeight={0}>
                {files.map((file, index) => (
                    <Box key={file.name} sx={{display: 'flex', flexDirection: 'column',}}>
                        {file.type.startsWith('video/') ? (
                            <video
                                src={URL.createObjectURL(file)}
                                controls
                                style={{minWidth: '30%'}}
                            >
                                <track kind="captions" src="src/components/ui" label="English" default/>

                            </video>
                        ) : (
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`Selected File ${index + 1}`}
                                // style={{maxWidth: '100%', height: '200px'}}
                            />
                        )}
                        <Button variant="outlined" onClick={() => handleFileRemove(index)} sx={{marginTop: '5px'}}>
                            Remove
                        </Button>
                    </Box>
                ))}

            </Masonry>
            </Box>}

        </Grid>
    );
};

export default FileUpload;
