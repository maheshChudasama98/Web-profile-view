import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import JumboCardQuick from '@jumbo/components/JumboCardQuick';
import { useNavigate } from 'react-router-dom';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const ModifyEducation = () => {
    const navigation = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const goBackAction = () => {
        navigation("/admin/education")
    }

    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
    };
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
                        field: "",
                        board: "",
                        institute: ""
                    }}
                    validationSchema={Yup.object().shape({
                        field: Yup
                            .string()
                            .required('Field / Subject is Required'),
                        board: Yup
                            .string()
                            .required('Board is Required'),
                        institute: Yup
                            .string()
                            .required('Institute is Required'),
                    })}
                    onSubmit={(e) => { console.log(e) }}
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
                                            id="field"
                                            label="Fields/Subject"
                                            name='field'
                                            value={values.field}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.field) && touched.field}
                                            helperText={Boolean(errors.field) && touched.field ? errors.field : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <TextField
                                            required
                                            fullWidth
                                            id="institute"
                                            label="Institute"
                                            name='institute'
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
                                            value={values.board}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={Boolean(errors.board) && touched.board}
                                            helperText={Boolean(errors.board) && touched.board ? errors.board : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                required
                                                slotProps={{ textField: { fullWidth: true }, }}
                                                label={'Start Year'}
                                                views={['month', 'year']}
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                slotProps={{ textField: { fullWidth: true }, }}
                                                label={'End Year'}
                                                views={['month', 'year']}
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                renderInput={(params) => <TextField sx={{ marginX: 1 }} size="small" {...params} />}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                                <Grid
                                    container
                                    sx={{ textAlignLast: "end", mt: 0.5 }}
                                    spacing={1.5}>
                                    <Grid item xs={12}>
                                        <Button
                                            sx={{ marginX: 1 }}
                                            variant="contained"
                                            className='save-button'>
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
