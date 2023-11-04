import JumboContentLayout from '@jumbo/components/JumboContentLayout'
import React from 'react'
import Footer from 'app/components/footer/index'
import Header from 'app/components/header/index'
import Slider from 'app/components/slider/index'
import { Grid } from '@mui/material'
import Technology from 'app/components/Cards/Technology'

import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faReact, faHtml5, faCss3, faJava, faNode, faSquareJs } from '@fortawesome/free-brands-svg-icons';

const index = () => {
    const technologyList = [
        { title: "HTML", icon: faHtml5, value: 4.5 },
        { title: "CSS", icon: faCss3, value: 4 },
        { title: "JavaScript", icon: faSquareJs, value: 3.5 },
        { title: "React js", icon: faReact, value: 3 },
        { title: "Node js", icon: faNode, value: 3 },
        { title: "Express js", icon: faHtml5, value: 3 },
        { title: "Database", icon: faDatabase, value: 2 },
    ]
    return (
        <>
            <Header />
            <Slider />
            <h1 style={{ marginLeft: "40px" }}>Technology skills</h1>
            <Grid container spacing={2} sx={{ paddingX: 6 }}>
                {
                    technologyList.map((item, key) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} md={4}  >
                                    <Technology
                                        title={item.title}
                                        icon={item.icon}
                                        value={item.value} />
                                </Grid>
                            </>)
                    })
                }

            </Grid>
            <Footer />
        </>
    )
}

export default index
