import React from 'react';
import { Typography } from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from '@jumbo/shared/Div';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/material';


const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const Education = ({ item }) => {
    return (
        <JumboCardQuick
            title={<Typography variant={"h4"} mb={0} color={"primary.main"}> Education</Typography>}
            // subheader={"A little flash back of Kiley Brown"}
            headerSx={{ pb: 0 }}
            sx={{ mb: 3.75 }}
        >

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                    margin: "0px"
                }}>
                {
                    item && item.length > 0 && item.map((education, key) => {
                        return (
                            <TimelineItem key={key}>
                                <TimelineSeparator>
                                    <TimelineDot color="primary" />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant={"h4"} color="#000"  >
                                            {education?.degreeName}</Typography>
                                        <Typography variant={"h6"} color="text.primary" >
                                            ( {monthNames[education?.startMonth]}-{education?.startYear} to {monthNames[education?.endMonth]}-{education?.endYear} )
                                        </Typography>
                                    </Div>
                                    <Typography variant={"h6"} color="text.primary"  >{education?.institute}</Typography>
                                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant={"h6"} color="text.primary"><span style={{ fontWeight: 600 }}>Board</span>-{education?.board} </Typography>
                                    </Div></TimelineContent>
                            </TimelineItem>
                            // <TimelineItem key={key}>
                            //     <TimelineSeparator>
                            //         <TimelineDot variant="outlined" color="primary" />
                            //         <TimelineConnector />
                            //     </TimelineSeparator>
                            //     <TimelineContent>
                            //         <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                            //             <Typography variant={"h4"} color="#000"  >
                            //                 {education?.degreeName}</Typography>
                            //             <Typography variant={"h6"} color="text.primary" >
                            //                 ( {monthNames[education?.startMonth]}-{education?.startYear} to {monthNames[education?.endMonth]}-{education?.endYear} )
                            //             </Typography>
                            //         </Div>
                            //         <Typography variant={"h6"} color="text.primary"  >{education?.institute}</Typography>
                            //         <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                            //             <Typography variant={"h6"} color="text.primary"><span style={{ fontWeight: 600 }}>Board</span>-{education?.board} </Typography>
                            //         </Div>
                            //     </TimelineContent>
                            // </TimelineItem>
                        )
                    })
                }
            </Timeline>


        </JumboCardQuick >
    );
};

export default Education;
