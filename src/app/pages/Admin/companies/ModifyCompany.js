import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import JumboCardQuick from '@jumbo/components/JumboCardQuick';
import { useLocation, useNavigate } from 'react-router-dom';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { companyModifyApi } from 'app/services/Admin/company-services';


const ModifyCompany = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const state = location?.state

    const [startDuration, setStartDuration] = useState(null);
    const [endDuration, setEndDuration] = useState(null);

    const goBackAction = () => {
        navigation("/admin/companies")
    }

    useEffect(() => {
        if (state !== null) {
            const startDate = dayjs().set('year', Number(state.startYear));
            setStartDuration(startDate);
            if (state?.endYear) {
                const endDate = dayjs(state?.endYear);
                setEndDuration(endDate);
            }
        }
    }, []);


    const handleDateChange = (fiend, date, setFieldValue) => {
        const year = date.$y;
        if (fiend === "endDuration") {
            setEndDuration(date)
            setFieldValue("endDuration", year)
        } else if (fiend === "startDuration") {
            setStartDuration(date)
            setFieldValue("startDuration", year)
        }
    };

    const onSubmitAction = (values) => {
        if (state !== null) {
            values.companyId = state?.companyId
        }
        values.startYear = values.startDuration
        delete values.startDuration

        dispatch(companyModifyApi(values, (res) => { goBackAction() }))
    }
    return (
        <>
            <JumboCardQuick
                title={"Add Company"}
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
                        companyName: state?.companyName || "",
                        companySize: state?.companySize || "",
                        state: state?.state || "",
                        city: state?.city || "",
                        startDuration: state !== null ? state?.startYear : "",
                        companyEmail: state?.companyEmail || "",
                    }}

                    validationSchema={Yup.object().shape({
                        companyName: Yup
                            .string()
                            .required('Company Name is required'),
                        companySize: Yup
                            .string()
                            .required('Company Size is required'),
                        state: Yup
                            .string()
                            .required('State is required'),
                        city: Yup
                            .string()
                            .required('city is required'),
                        startDuration: Yup
                            .string()
                            .required('Start is required'),
                        companyEmail: Yup
                            .string()
                            .required('Email is required'),
                    })}
                    onSubmit={onSubmitAction}
                >
                    {(props) => {
                        const { values, touched, errors, setFieldValue, handleBlur, handleChange, handleSubmit } = props;

                        return (
                            <>
                                {
                                    console.log(values, "------------")
                                }
                                <Grid container spacing={1.5} >
                                    <Grid item xs={12}   >
                                        <TextField
                                            required
                                            fullWidth
                                            id="companyName"
                                            label="Company Name"
                                            name='companyName'
                                            // placeholder='Bachelor of Science , Master of Business'
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
                                            id="companySize"
                                            label="Company Size"
                                            name='companySize'
                                            // placeholder='college, university'
                                            value={values.companySize}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.companySize) && touched.companySize}
                                            helperText={Boolean(errors.companySize) && touched.companySize ? errors.companySize : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="companyEmail"
                                            label="Company Email"
                                            name='companyEmail'
                                            placeholder='GTU,'
                                            value={values.companyEmail}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.companyEmail) && touched.companyEmail}
                                            helperText={Boolean(errors.companyEmail) && touched.companyEmail ? errors.companyEmail : ''}
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
                                                views={['year']}
                                                slotProps={{
                                                    textField: {
                                                        fullWidth: true,
                                                        error: Boolean(errors.startDuration) && touched.startDuration,
                                                        helperText: Boolean(errors.startDuration) && touched.startDuration ? errors.startDuration : ''
                                                    },

                                                }}
                                                value={startDuration}
                                                onChange={(date) => handleDateChange("startDuration", date, setFieldValue)}
                                            // maxDate={endDuration}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    {/* <Grid item xs={12} md={6} >
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
                                    </Grid> */}
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

export default ModifyCompany;
