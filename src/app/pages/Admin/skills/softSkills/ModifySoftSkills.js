import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, } from '@fortawesome/free-solid-svg-icons';
import JumboCardQuick from '@jumbo/components/JumboCardQuick';
import { useLocation, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { companyModifyApi } from 'app/services/Admin/company-services';
import { skillModifyApi } from 'app/services/Admin/skills-services';

const ModifySoftSkills = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const state = location?.state

    const goBackAction = () => {
        navigation("/admin/skills/soft")
    }
    const onSubmitAction = (values) => {
        if (state !== null) {
            values.skillId = state?.skillId
        }
        values.skillType = "Soft"
        dispatch(skillModifyApi(values, (res) => { goBackAction() }))
    }


    return (
        <JumboCardQuick
            title={"Add soft skill"}
            action={
                <Button
                    size='small'
                    onClick={goBackAction}
                    variant="contained"
                    startIcon={<FontAwesomeIcon icon={faCircleChevronLeft} />}>
                    back
                </Button>
            }
            headerSx={{
                borderBottom: 1,
                borderBottomColor: 'divider',

                '& .MuiCardHeader-action': {
                    my: -.75
                }
            }}
        >
            <Formik
                initialValues={{
                    skillName: state?.skillName || "",
                    // youKnow: state?.youKnow || "",
                }}

                validationSchema={Yup.object().shape({
                    skillName: Yup
                        .string()
                        .required('Technology name is required'),
                    // youKnow: Yup
                    //     .string()
                    //     .required('Company Size is required'),
                })}
                onSubmit={onSubmitAction}
            >
                {(props) => {
                    const { values, touched, errors, setFieldValue, handleBlur, handleChange, handleSubmit } = props;

                    return (
                        <>
                            <Grid container spacing={1.5} >
                                <Grid item xs={12}   >
                                    <TextField
                                        required
                                        fullWidth
                                        id="skillName"
                                        label="Soft skill"
                                        name='skillName'
                                        placeholder=''
                                        value={values.skillName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={Boolean(errors.skillName) && touched.skillName}
                                        helperText={Boolean(errors.skillName) && touched.skillName ? errors.skillName : ''}
                                    />
                                </Grid>

                            </Grid >
                            <Grid
                                container
                                sx={{ textAlignLast: "end", mt: 0.5 }}
                                spacing={1.5}>
                                <Grid item xs={12}>
                                    <Button
                                        sx={{ marginX: 1 }}
                                        variant="contained"
                                        className='save-button'
                                        onClick={handleSubmit}>
                                        Save
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className='cancel-button'>
                                        Cancel
                                    </Button>
                                </Grid>
                            </Grid >
                        </>
                    );
                }}
            </Formik >
        </JumboCardQuick >
    )
}

export default ModifySoftSkills
