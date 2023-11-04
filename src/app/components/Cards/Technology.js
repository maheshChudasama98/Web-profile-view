import { Button, Card, CardActions, CardContent, Rating, Typography } from '@mui/material'
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Technology = ({ title, icon, value }) => {
    return (
        <>
            <Card className='services-pre' >
                <CardContent>
                    <FontAwesomeIcon icon={icon} className='icon' />
                    <h3>{title}</h3>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Rating name="read-only" size='small' value={value} readOnly />
                    {/* <Button size="small">Learn More</Button> */}
                </CardActions>
            </Card>
        </>
    )
}

export default Technology
