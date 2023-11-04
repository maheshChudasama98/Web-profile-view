import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import 'app/styles/login.css'

// Material  
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

// formik
import * as yup from 'yup';
import { useFormik } from 'formik';

// login api 
import { loginApiAction } from 'app/services/auth-services';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const LoginComponents = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.clear();
    }, [])

    const formik = useFormik({
        initialValues: {
            email: 'admin@gmail.com',
            password: 'Admin@1234',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const data = {
                email: values.email,
                password: values.password,
            }

            dispatch(loginApiAction(data, (response) => {
                let tempObject = {
                    id: response.userId,
                    user: response.role,
                    role: response.roleId,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email,
                    mobile: response.mobile,
                    // themeColor: response.themeColor,
                }
                localStorage.setItem('user', JSON.stringify(tempObject))
                localStorage.setItem('themeColor', response.themeColor)
                navigate('/admin/dashboard')
            }))
        },
    });

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className="backGround">
                {/* <ParticlesComponent /> */}
                <div className=' box-form' >
                    <div className='text-center Login'>Login</div>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            sx={{ my: 2 }}
                            variant="standard"
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            size="small"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircleOutlinedIcon className='icon' />
                                    </InputAdornment>
                                ),
                            }}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        <TextField
                            fullWidth
                            sx={{ my: 2 }}
                            type={showPassword ? 'text' : 'password'}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOutlinedIcon fontSize="small" /> : <VisibilityOffOutlinedIcon fontSize="small" />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockOutlinedIcon className='icon' />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            id="outlined-adornment-password"
                            name="password"
                            label="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />

                        <p className='float-end mt-3'>Forgot password?</p>
                        <div className='container'>
                            <Button
                                fullWidth
                                color="primary"
                                className='mt-2 mb-3'
                                variant="contained"
                                type="submit"
                            >
                                LOGIN
                            </Button>
                        </div>
                    </form>

                    {/* <div className=' text-center'>
                        <FacebookIcon className='social-media' />
                        <InstagramIcon className='social-media' />
                        <LinkedInIcon className='social-media' />
                    </div> */}

                    <p className='text-center '>Or Sign Up Using</p>
                    <p className='text-center'>SIGN UP</p>
                </div>
            </div>
        </>
    )
}

export default LoginComponents
