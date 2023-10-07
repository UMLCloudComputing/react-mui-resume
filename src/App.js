
// React
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

// MUI 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Local
import Portfolio from './components/Resume';
import SocialFeed from './components/SocialFeed';


// Fade In/Out Variants
const fadeInOutVariants = {
    hidden: { opacity: 0, scale: 0.9 }, // start a bit smaller
    visible: { opacity: 1, scale: 1 }, // grow past the original size
    exit: { opacity: 0, scale: 0.9 } // revert back to smaller size on exit
};

// MUI Theme
const defaultTheme = createTheme();

// The App
export default function App({ data }) {

    // Tabs
    const [activeTab, setActiveTab] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const updateFavicon = (tabIndex) => {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';

        // Set the favicon based on tabIndex
        switch (tabIndex) {
            case 0:
                link.href = `${data.profile.avatar}`;
                document.title = `${data.profile.name}`
                break;
            case 1:
                link.href = `${data.profile.avatar}`;
                document.title = `${data.profile.name}`
                break;
            case 2:
                link.href = `${data.profile.avatar}`;
                document.title = `${data.profile.name}`
                break;
            default:
                link.href = `${data.profile.avatar}`;
                document.title = `${data.profile.name}`
                break;
        }

        document.getElementsByTagName('head')[0].appendChild(link);
    };

    React.useEffect(() => {
        updateFavicon(activeTab); // Update favicon on initial load and on activeTab state change
        // eslint-disable-next-line
    }, [activeTab]);


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Box sx={{
                display: 'flex',
                position: "fixed",
                overflow: 'auto',
                width: '100%',
                height: "100%",
                bgcolor: 'rgba(0, 0, 0, 0.05)',
            }}>
                <Container component="main" maxWidth="lg">
                    <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ mb: 2 }}>
                        <Tab label="Resume" />
                        <Tab label="Updates" />
                        {/* <Tab label="Social Media" /> */}
                    </Tabs>
                    <AnimatePresence mode='wait'>
                        {activeTab === 0 && (
                            <motion.div
                                key="resume"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={fadeInOutVariants}
                            >
                                <Portfolio profile={data.profile}/>
                            </motion.div>
                        )}
                        {activeTab === 1 && (
                            <motion.div
                                key="portfolio"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={fadeInOutVariants}
                            >
                                <SocialFeed posts={data.posts}/>
                            </motion.div>
                        )}
                        {activeTab === 2 && (
                            <motion.div
                                key="socialMedia"
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={fadeInOutVariants}
                            >
                                Social Media content here.
                            </motion.div>
                        )}
                    </AnimatePresence>

                </Container>
            </Box>
        </ThemeProvider>
    );
}
