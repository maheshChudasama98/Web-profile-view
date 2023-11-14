import React, { useEffect, useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { projectModifyApi } from 'app/services/Admin/project-services';
import dayjs from 'dayjs';

const ModifyProjects = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const state = location?.state

    const [startDuration, setStartDuration] = useState(null);
    const [endDuration, setEndDuration] = useState(null);

    const goBackAction = () => {
        navigation("/admin/projects")
    }

    useEffect(() => {
        if (state !== null) {
            const endDate = dayjs(`${state?.endYear}-${state?.endMonth}`);
            const startDate = dayjs(`${state?.startYear}-${state?.startMonth}`);
            setStartDuration(startDate);
            setEndDuration(endDate);
        }
    }, []);

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
        if (state !== null) {
            values.projectId = state?.projectId
        }
        let startSplit = values.startDuration.split('-');
        let endSplit = values.endDuration.split('-');
        delete values.startDuration
        delete values.endDuration
        values.startMonth = startSplit[0]
        values.startYear = startSplit[1]
        values.endMonth = endSplit[0]
        values.endYear = endSplit[1]

        dispatch(projectModifyApi(values, (res) => {
            navigation("/admin/projects")
        }))
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
                        projectName: state?.projectName || "",
                        projectRole: state?.projectRole || "",
                        startDuration: state !== null ? `${state?.startMonth}-${state?.startYear}` : "",
                        endDuration: state !== null ? `${state?.endMonth}-${state?.endYear}` : "",
                        description: state?.description || "",
                    }}
                    validationSchema={Yup.object().shape({
                        projectName: Yup
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
                                            id="projectName"
                                            label="Project title"
                                            name='projectName'
                                            placeholder={"E-commerce Website Redesign"}
                                            value={values.projectName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.projectName) && touched.projectName}
                                            helperText={Boolean(errors.projectName) && touched.projectName ? errors.projectName : ''}
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
                                            value={values.achievements}
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
