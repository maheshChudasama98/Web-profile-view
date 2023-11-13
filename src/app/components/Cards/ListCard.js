import React from 'react'
import { useJumboTheme } from '@jumbo/hooks'
import { Card, CardContent, alpha } from '@mui/material';

const ListCard = ({ children }) => {
    const { theme } = useJumboTheme();
    return (
        <>
            <Card
                sx={{
                    margin: 1,
                    cursor: 'auto',
                    transition: 'all 0.2s',
                    borderBottom: 1,
                    borderBottomColor: 'divider',

                    boxShadow: `rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px`,
                    [theme.breakpoints.down('md')]: {
                        flexWrap: 'wrap'
                    },
                    '&:hover': {
                        boxShadow: `0 3px 10px 0 ${alpha('#000', 0.2)}`,
                        transform: 'translateY(-4px)',
                        cursor: 'auto',
                        borderBottomColor: 'transparent',
                    }
                }}>
                <CardContent>
                    {children}
                </CardContent>

            </Card>
        </>
    )
}

export default ListCard
