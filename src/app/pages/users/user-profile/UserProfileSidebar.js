import React from 'react';
import Grid from "@mui/material/Grid";
import Contacts from "./components/Contacts";
import Friends from "./components/Friends";

const UserProfileSidebar = ({ skills }) => {
    const skillsTypes = ["Technical", "Language", "Soft", "Certificate"]
    const listArray = []
    if (skills && skills.length > 0) {
        skillsTypes.map((type) => {
            listArray.push({ [type]: skills.filter(item => item?.skillType === type) });
        })
    }
    return (
        <Grid container spacing={3.75}>
            <Grid item xs={12} md={6} lg={12}>
                <Contacts />
            </Grid>
            {
                listArray && listArray.length > 0 && listArray.map((item, key) => {
                    if (item[skillsTypes[key]].length > 0) {
                        return (
                            <Grid key={key} item xs={12} md={6} lg={12}>
                                <Friends item={item[skillsTypes[key]]} title={skillsTypes[key]} />
                            </Grid>
                        )
                    }
                })

            }
        </Grid>
    );
};

export default UserProfileSidebar;
