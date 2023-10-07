
// React
import React from 'react';

// MUI 
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


// SocialFeed: A React component that displays a social feed.
export default function SocialFeed({ posts }) {
    return (
        <Box>
            
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{
                        // display: 'flex',
                        // flexDirection: 'column',
                        // alignItems: 'center',
                        // justifyContent: 'center',
                        // backgroundImage: `url(${posts.background_image})`,
                        // height: 200,
                        // width: '100%',
                        // color: 'white'

                        width: '100%',
                        height: 300,
                        bgcolor: 'rgba(0, 0, 0, 0.05)',
                        backgroundImage: `url(${posts.background_image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 4,

                    }}>
                        <Typography variant="h3" component="div" sx={{ color: 'white' }}>
                            {posts.name}
                        </Typography>
                        <Avatar alt={posts.name} src={posts.avatar} sx={{
                            // width: 100,
                            // height: 100,
                            // border: '2px solid white',
                            // boxShadow: 3,
                            // mt: 2,

                            width: 100,
                            height: 100,
                            position: 'absolute',
                            bottom: -50,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            border: '4px solid white',
                        }} />
                    </Box>
                </Grid>
            </Grid>

            {/* Timeline content */}
            <Container maxWidth="sm">
                <Stack spacing={2} sx={{ mb: 20 }}>
                    {posts.post_data.map(post => (
                        <Card key={post.id} sx={{ marginBottom: 2 }}>
                            <CardHeader
                                avatar={<Avatar alt={posts.name} src={posts.avatar} />}
                                title={posts.name}
                                subheader={post.timestamp}
                            />
                            <CardContent>
                                {/* If type note, use header size font */}
                                {post.type === "note" ? (
                                    <Typography variant="h5" component="div">
                                        {post.description}
                                    </Typography>
                                ) : (
                                    <Typography variant="body1" component="div">
                                        {post.description}
                                    </Typography>
                                )}
                            </CardContent>
                            {post.image && (
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={post.image}
                                    alt={post.description}
                                />
                            )}
                        </Card>
                    ))}
                </Stack>
            </Container>

            <Box sx={{ p: 1,  }} />
        </Box>
    );
}
