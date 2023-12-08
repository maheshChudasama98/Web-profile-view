import React from 'react';
import { Typography } from "@mui/material";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import Div from '@jumbo/shared/Div';

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
const Experience = ({ item }) => {
    return (
        <JumboCardQuick
            title={"Experiences"}
            // subheader={"A little flash back of Kiley Brown"}
            headerSx={{ pb: 0 }}
            sx={{ mb: 3.75 }}
        >
            {
                item && item.length > 0 && item.map((object) => {
                    return (
                        <>
                            <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant={"h4"}  >{object?.jobTitle}</Typography>
                                <Typography variant={"h6"}>
                                    ( {monthNames[object?.startMonth]}-{object?.startYear} to {monthNames[object?.endMonth]}-{object?.endYear} )
                                </Typography>

                            </Div>
                            <Typography variant={"h6"}  >{object?.companyName}</Typography>
                            <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant={"h6"}  >Board-{object?.position} </Typography>
                                <Typography variant={"h6"}>
                                    {object?.description}
                                </Typography>
                                <Typography variant={"h6"}  >Board-{object?.location} </Typography>
                            </Div>
                        </>
                    )
                })
            }

        </JumboCardQuick >
    );
};

export default Experience;
