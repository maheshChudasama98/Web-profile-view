import React, { useEffect, useState } from 'react';
import Header from "./Header";
import HeaderMain from "app/components/header";
import JumboContentLayout from "@jumbo/components/JumboContentLayout";
import useJumboTheme from "@jumbo/hooks/useJumboTheme";
// import Events from "../../../shared/widgets/Events";
import { alpha } from "@mui/material/styles";
import About from "./components/About";
import UserProfileSidebar from "./UserProfileSidebar";
import Footer from "app/components/footer";
import { ASSET_IMAGES } from "../../../utils/constants/paths";
import { getAssetPath } from "../../../utils/appHelpers";
import { useJumboContentLayout } from '@jumbo/hooks';
import Education from './components/Education';
import { useDispatch } from 'react-redux';
import { webProfileFetchApi } from 'app/services/web-services';
import Experience from './components/Experience';


const UserProfile = () => {
    const dispatch = useDispatch()
    const { theme } = useJumboTheme();
    const contentLayout = useJumboContentLayout();
    const [fetchList, setFetchList] = useState([]);

    useEffect(() => {
        dispatch(webProfileFetchApi((res) => {
            setFetchList(res.data[0]);
        }))
    }, [])

    return (
        <>
            {/* <HeaderMain /> */}
            <JumboContentLayout
                header={<Header />}
                sidebar={<UserProfileSidebar skills={fetchList?.Skills} />}
                footer={<Footer />}
                layoutOptions={{
                    header: {
                        sx: {
                            // mt: -4,
                            mb: -6.25,
                            mx: { xs: -4, lg: -6 },
                            p: { xs: theme.spacing(6, 4, 11), lg: theme.spacing(6, 6, 11) },
                            background: `#002447 url(${getAssetPath(`/images/callouts/camera.jpeg`, "1920x580")}) no-repeat center`,
                            backgroundSize: 'cover',
                            color: 'common.white',
                            position: 'relative',

                            '&::after': {
                                display: 'inline-block',
                                position: 'absolute',
                                content: `''`,
                                inset: 0,
                                backgroundColor: alpha(theme.palette.common.black, .65)
                            }
                        }
                    },
                    sidebar: {
                        sx: {
                            mr: 3.75,
                            mb: 3,
                            width: { xs: '100%', lg: '33%' },
                            [theme.breakpoints.down('lg')]: {
                                minHeight: 0,
                                mr: 0,
                                order: 2
                            }
                        }
                    },
                    wrapper: {
                        sx: {
                            mx: 3,
                            [theme.breakpoints.down('lg')]: {
                                flexDirection: 'column'
                            }
                        }
                    },
                    main: {
                        sx: {
                            [theme.breakpoints.down('lg')]: {
                                minHeight: 0
                            }
                        }
                    }
                }}
            >
                <About />
                <Education item={fetchList?.Education} />
                <Experience item={fetchList?.Experiences} />
                {/* <Biography /> */}
            </JumboContentLayout>
        </>
    );
};

export default UserProfile;
