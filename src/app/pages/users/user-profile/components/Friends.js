import React from 'react';
import { Typography } from "@mui/material";
import Span from "@jumbo/shared/Span";
import Stack from "@mui/material/Stack";
import JumboCardQuick from "@jumbo/components/JumboCardQuick";
import styled from "@mui/material/styles/styled";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import { faCircleDot, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Div from '@jumbo/shared/Div';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const Friends = ({ item, title }) => {
    return (
        <JumboCardQuick
            title={
                <Typography variant={"h4"} mb={0} color={"primary.main"}>
                    {title} skills
                </Typography>
            }
            wrapperSx={{ pt: 0 }}
        >
            {
                item && item.length > 0 && item.map((skill, key) => {
                    return (
                        <Typography variant={"h5"} >
                            <Brightness1Icon color="primary" fontSize='5px' />   {skill?.skillName}
                        </Typography>
                    )
                })
            }
        </JumboCardQuick >
    );
};

export default Friends;
