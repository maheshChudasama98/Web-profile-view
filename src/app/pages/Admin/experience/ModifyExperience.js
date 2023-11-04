import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import JumboCardQuick from '@jumbo/components/JumboCardQuick';
import { useNavigate } from 'react-router-dom';

const ModifyExperience = () => {
    const navigation = useNavigate()
    const goBackAction = () => {
        navigation("/admin/experience")
    }
    return (
        <>
            <JumboCardQuick
                title={"Add Experience"}
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
                        userName: ""
                    }}
                    validationSchema={Yup.object().shape({
                        userName: Yup
                            .string()
                            .required('Name is Required'),
                    })}
                    onSubmit={(e) => { console.log(e) }}
                >
                    {(props) => {
                        const { values, touched, errors, setFieldValue, handleBlur, handleChange, handleSubmit } = props;
                        return (
                            <>
                                <Grid container spacing={1.5} >
                                    <Grid item xs={12} md={6} lg={3} >
                                        <TextField
                                            required
                                            fullWidth
                                            id="userName"
                                            label="User Name"
                                            name='userName'
                                            value={values.userName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.userName) && touched.userName}
                                            helperText={Boolean(errors.userName) && touched.userName ? errors.userName : ''}
                                        />
                                    </Grid>
                                </Grid>
                            </>
                        );
                    }}
                </Formik >
            </JumboCardQuick>
        </>
    )
}

export default ModifyExperience;
