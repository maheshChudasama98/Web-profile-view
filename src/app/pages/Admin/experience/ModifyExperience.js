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
    const [startYear, setStartYear] = useState(null);
    const [endYear, setEndYear] = useState(null);

    const goBackAction = () => {
        navigation("/admin/experience")
    }
    const handleDateChange = (fiend, date, setFieldValue) => {
        const month = date.$M + 1
        const year = date.$y;
        const combinedDate = `${month}-${year}`;
        if (fiend === "endYear") {
            setEndYear(date)
            setFieldValue("endYear", combinedDate)
        } else if (fiend === "startYear") {
            setStartYear(date)
            setFieldValue("startYear", combinedDate)
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
                        startYear: "",
                        endYear: "",
                        details: "",
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
                        startYear: Yup
                            .string()
                            .required('Start year is required'),
                        endYear: Yup
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
                                        >Experience Year </h3>
                                    </Grid>

                                    <Grid item xs={12} md={6} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label={'Start Year *'}
                                                views={['month', 'year']}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        error: Boolean(errors.startYear) && touched.startYear,
                                                        helperText: Boolean(errors.startYear) && touched.startYear ? errors.startYear : ''
                                                    },

                                                }}
                                                value={startYear}
                                                onChange={(date) => handleDateChange("startYear", date, setFieldValue)}
                                                maxDate={endYear}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                label={'End Year *'}
                                                views={['month', 'year']}
                                                value={endYear}
                                                onChange={(date) => handleDateChange("endYear", date, setFieldValue)}
                                                minDate={startYear}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        error: Boolean(errors.endYear) && touched.endYear,
                                                        helperText: Boolean(errors.endYear) && touched.endYear ? errors.endYear : ''
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
                                        >Experience details </h3>

                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField
                                            multiline
                                            rows={4}
                                            fullWidth
                                            id="details"
                                            label="Details"
                                            name='details'
                                            value={values.details}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.details) && touched.details}
                                            helperText={Boolean(errors.details) && touched.details ? errors.details : ''}
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
