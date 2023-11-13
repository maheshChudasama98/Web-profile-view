import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import JumboCardQuick from '@jumbo/components/JumboCardQuick';
import { useLocation, useNavigate } from 'react-router-dom';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { educationModifyApi } from 'app/services/education-services';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';

const ModifyEducation = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const state = location?.state

    const [startDuration, setStartDuration] = useState(null);
    const [endDuration, setEndDuration] = useState(null);
    const goBackAction = () => {
        navigation("/admin/education")
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
        console.log("values", values);
        if (state !== null) {
            values.educationId = state?.educationId
        }
        let startSplit = values.startDuration.split('-');
        let endSplit = values.endDuration.split('-');
        delete values.startDuration
        delete values.endDuration
        values.startMonth = startSplit[0]
        values.startYear = startSplit[1]
        values.endMonth = endSplit[0]
        values.endYear = endSplit[1]

        dispatch(educationModifyApi(values, (res) => {
            navigation("/admin/education")
        }))
    }

    return (
        <>
            <JumboCardQuick
                title={"Add Education"}
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
                        degreeName: state?.degreeName || "",
                        board: state?.board || "",
                        institute: state?.institute || "",
                        startDuration: state !== null ? `${state?.startMonth}-${state?.startYear}` : "",
                        endDuration: state !== null ? `${state?.endMonth}-${state?.endYear}` : "",
                        state: state?.state || "",
                        city: state?.city || "",
                    }}
                    validationSchema={Yup.object().shape({
                        degreeName: Yup
                            .string()
                            .required('Degree earned is required'),
                        board: Yup
                            .string()
                            .required('Board is required'),
                        institute: Yup
                            .string()
                            .required('Institute is required'),
                        startDuration: Yup
                            .string()
                            .required('Start year is required'),
                        endDuration: Yup
                            .string()
                            .required('End year is required'),
                        state: Yup
                            .string()
                            .required('State is required'),
                        city: Yup
                            .string()
                            .required('City year is required'),

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
                                            id="degreeName"
                                            label="Degree Earned"
                                            name='degreeName'
                                            placeholder='Bachelor of Science , Master of Business'
                                            value={values.degreeName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.degreeName) && touched.degreeName}
                                            helperText={Boolean(errors.degreeName) && touched.degreeName ? errors.degreeName : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="institute"
                                            label="Institute"
                                            name='institute'
                                            placeholder='college, university'
                                            value={values.institute}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.institute) && touched.institute}
                                            helperText={Boolean(errors.institute) && touched.institute ? errors.institute : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="board"
                                            label="Board"
                                            name='board'
                                            placeholder='GTU,'
                                            value={values.board}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.board) && touched.board}
                                            helperText={Boolean(errors.board) && touched.board ? errors.board : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12} >
                                        <h3
                                            style={{
                                                marginBottom: "7px",
                                                marginTop: "7px"
                                            }}
                                        >Education Place</h3>
                                    </Grid>

                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="state"
                                            label="State"
                                            name='state'
                                            value={values.state}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.state) && touched.state}
                                            helperText={Boolean(errors.state) && touched.state ? errors.state : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <TextField
                                            required
                                            fullWidth
                                            id="city"
                                            label="City"
                                            name='city'
                                            value={values.city}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.city) && touched.city}
                                            helperText={Boolean(errors.city) && touched.city ? errors.city : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}  >
                                        <h3
                                            style={{
                                                marginBottom: "7px",
                                                marginTop: "7px"
                                            }}
                                        >Education Duration </h3>
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
        </>
    )
}

export default ModifyEducation;
