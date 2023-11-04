import React from 'react';
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import ContentHeader from "../../../layouts/shared/headers/ContentHeader";
import List from "@mui/material/List";
import MenuItem from "@mui/material/MenuItem";
import SettingsIcon from '@mui/icons-material/Settings';
import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { ASSET_AVATARS } from "../../../utils/constants/paths";
import { getAssetPath } from "../../../utils/appHelpers";
import { Link } from 'react-router-dom/dist';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    padding: theme.spacing(0, 1),

    '&:hover': {
        backgroundColor: 'transparent',
    },

    '& .MuiTouchRipple-root': {
        display: 'none'
    }

}));

const Item = styled("div")({
    textAlign: 'center',
});


const Header = () => {
    return (
        <ContentHeader
            avatar={
                <Avatar
                    sx={{ width: 100, height: 100 }}
                    alt={"Mahesh Chusasama"}
                    src={"/images/callouts/camera.jpeg"}
                />
            }
            title={"Mahesh Chusasama"}
            subheader={<Typography fontSize={15} variant={'body1'} color={'inherit'} mt={.5}>Rajkot, India</Typography>}
            // children={
            //     <Stack
            //         direction={"row"}
            //         justifyContent={"space-evenly"}
            //         divider={<Divider orientation="vertical" flexItem />}
            //         spacing={2}
            //         sx={{
            //             mx: 1
            //         }}
            //     >
            //         <Item>
            //             <Typography variant={"h6"} color={'inherit'} mb={0}>457</Typography>
            //             <Typography variant={'body1'} fontSize={12}>Followers</Typography>
            //         </Item>
            //         <Item>
            //             <Typography variant={"h6"} color={'inherit'} mb={0}>689</Typography>
            //             <Typography variant={'body1'} fontSize={12}>Friends</Typography>
            //         </Item>
            //         <Item>
            //             <Typography variant={"h6"} color={'inherit'} mb={0}>283</Typography>
            //             <Typography variant={'body1'} fontSize={12}>Following</Typography>
            //         </Item>
            //     </Stack>
            // }
            tabs={
                <List
                    disablePadding
                    sx={{
                        display: 'flex',
                        minWidth: 0,

                    }}
                >
                    <StyledMenuItem>Timeline</StyledMenuItem>
                    <StyledMenuItem>About</StyledMenuItem>
                    <StyledMenuItem>Photos</StyledMenuItem>
                    <StyledMenuItem>Friends</StyledMenuItem>
                    <StyledMenuItem>More</StyledMenuItem>
                </List>
            }
            action={
                <Link to={'/login'} >
                    <Button
                        disableRipple
                        variant="text"
                        startIcon={<SettingsIcon />}
                        sx={{
                            color: 'inherit',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        Settings
                    </Button>
                </Link>
            }
            sx={{
                position: 'relative',
                zIndex: 1,

                '& .MuiCardHeader-action': {
                    alignSelf: 'center'
                }
            }}
        />
    );
};

export default Header;
