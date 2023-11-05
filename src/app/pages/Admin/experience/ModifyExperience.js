import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import JumboCardQuick from '@jumbo/components/JumboCardQuick';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from 'react-router-dom';

const ModifyExperience = () => {
    const navigation = useNavigate()
    const [startDuration, setStartDuration] = useState(null);
    const [endDuration, setEndDuration] = useState(null);

    const goBackAction = () => {
        navigation("/admin/experience")
    }
    const handleDateChange = (fiend, date, setFieldValue) => {
        const month = date.$M + 1
        const year = date.$y;
        const combinedDate = `${month}-${year}`;
        if (fiend === "endDuration") {
            setEndDuration(date)
            setFieldValue("endDuration", combinedDate)
        } else if (fiend === "startDuration") {
            setStartDuration(date)
            setFieldValue("startDuration", combinedDate)
        }
    };

    const onSubmitAction = (values) => {
        console.log(values);
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
                        jobTitle: "",
                        companyName: "",
                        position: "",
                        location: "",
                        achievements: "",
                        startDuration: "",
                        endDuration: "",
                        description: "",
                    }}
                    validationSchema={Yup.object().shape({
                        jobTitle: Yup
                            .string()
                            .required('Job title is required'),
                        companyName: Yup
                            .string()
                            .required('Company name is required'),
                        position: Yup
                            .string()
                            .required('Position is required'),
                        location: Yup
                            .string()
                            .required('Location is required'),
                        // achievements: Yup
                        //     .string()
                        //     .required('Achievements is required'),
                        startDuration: Yup
                            .string()
                            .required('Start year is required'),
                        endDuration: Yup
                            .string()
                            .required('End year is required'),
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
                                            id="jobTitle"
                                            label="Job title"
                                            name='jobTitle'
                                            defaultValue={"Software Engineer"}
                                            value={values.jobTitle}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.jobTitle) && touched.jobTitle}
                                            helperText={Boolean(errors.jobTitle) && touched.jobTitle ? errors.jobTitle : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="companyName"
                                            label="Company name"
                                            name='companyName'
                                            defaultValue={"Tech Innovators, Inc."}
                                            value={values.companyName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.companyName) && touched.companyName}
                                            helperText={Boolean(errors.companyName) && touched.companyName ? errors.companyName : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="position"
                                            label="Position"
                                            name='position'
                                            value={values.position}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.position) && touched.position}
                                            helperText={Boolean(errors.position) && touched.position ? errors.position : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="location"
                                            label="Location"
                                            name='location'
                                            value={values.location}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.location) && touched.location}
                                            helperText={Boolean(errors.location) && touched.location ? errors.location : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            // required
                                            fullWidth
                                            id="achievements"
                                            label="Achievements"
                                            name='achievements'
                                            value={values.Achievements}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.achievements) && touched.achievements}
                                            helperText={Boolean(errors.achievements) && touched.achievements ? errors.achievements : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12}  >
                                        <h3
                                            style={{
                                                marginBottom: "7px",
                                                marginTop: "7px"
                                            }}
                                        >Experience Duration </h3>
                                    </Grid>

                                    <Grid item xs={12} md={6} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label={'Start *'}
                                                views={['month', 'year']}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        error: Boolean(errors.startDuration) && touched.startDuration,
                                                        helperText: Boolean(errors.startDuration) && touched.startDuration ? errors.startDuration : ''
                                                    },

                                                }}
                                                value={startDuration}
                                                onChange={(date) => handleDateChange("startDuration", date, setFieldValue)}
                                                maxDate={endDuration}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label={'End *'}
                                                views={['month', 'year']}
                                                value={endDuration}
                                                onChange={(date) => handleDateChange("endDuration", date, setFieldValue)}
                                                minDate={startDuration}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        error: Boolean(errors.endDuration) && touched.endDuration,
                                                        helperText: Boolean(errors.endDuration) && touched.endDuration ? errors.endDuration : ''
                                                    },

                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item xs={12}  >
                                        <h3
                                            style={{
                                                marginBottom: "7px",
                                                marginTop: "7px"
                                            }}
                                        >Experience Description </h3>

                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField
                                            multiline
                                            rows={4}
                                            fullWidth
                                            id="description"
                                            label="Description"
                                            name='description'
                                            value={values.description}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.description) && touched.description}
                                            helperText={Boolean(errors.description) && touched.description ? errors.description : ''}
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
            </JumboCardQuick>
        </>
    )
}

export default ModifyExperience;
