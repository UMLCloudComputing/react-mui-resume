
// React
import React from 'react';

// MUI 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


// Custom Card Component
export default function ResumeCard({ children, sx, ...props}) {
    return (
        <Card {...props} sx={{ borderRadius: 3,  boxShadow: 3,  mb: 2, ...sx }} >
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}
