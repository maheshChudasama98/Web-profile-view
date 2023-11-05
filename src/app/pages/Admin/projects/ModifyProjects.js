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

const ModifyProjects = () => {
    const navigation = useNavigate()
    const [startDuration, setStartDuration] = useState(null);
    const [endDuration, setEndDuration] = useState(null);

    const goBackAction = () => {
        navigation("/admin/projects")
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
                title={"Add Projects"}
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
                        projectTitle: "",
                        projectRole: "",
                        startDuration: "",
                        endDuration: "",
                        description: "",
                    }}
                    validationSchema={Yup.object().shape({
                        projectTitle: Yup
                            .string()
                            .required('Project title is required'),
                        projectRole: Yup
                            .string()
                            .required('Project role is required'),
                        startDuration: Yup
                            .string()
                            .required('Start Duration is required'),
                        endDuration: Yup
                            .string()
                            .required('End Duration is required'),
                        description: Yup
                            .string()
                            .required('Description is required'),
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
                                            id="projectTitle"
                                            label="Project title"
                                            name='projectTitle'
                                            placeholder={"E-commerce Website Redesign"}
                                            value={values.projectTitle}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.projectTitle) && touched.projectTitle}
                                            helperText={Boolean(errors.projectTitle) && touched.projectTitle ? errors.projectTitle : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="projectRole"
                                            label="Project role"
                                            name='projectRole'
                                            placeholder={"Lead Front-End Developer"}
                                            value={values.projectRole}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.projectRole) && touched.projectRole}
                                            helperText={Boolean(errors.projectRole) && touched.projectRole ? errors.projectRole : ''}
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
                                        >Project Duration</h3>
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
                                        >Project Description </h3>

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

export default ModifyProjects;
