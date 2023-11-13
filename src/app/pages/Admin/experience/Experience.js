import { faGraduationCap, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JumboButton from '@jumbo/components/JumboButton'
import JumboCardQuick from '@jumbo/components/JumboCardQuick'
import JumboDdMenu from '@jumbo/components/JumboDdMenu'
import JumboScrollbar from '@jumbo/components/JumboScrollbar'
import Div from '@jumbo/shared/Div'
import { Button, Typography } from '@mui/material'
import ListCard from 'app/components/Cards/ListCard'
import { sweetAlertDelete } from 'app/config/sweetAlertsActions'
import { experienceDeleteApi, experienceFetchListApi } from 'app/services/Admin/experience-services'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MoreVertIcon from '@mui/icons-material/MoreVert';


const monthNames = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const Experience = () => {
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const [experienceList, setExperienceList] = useState([])

    const experienceAddAction = () => {
        navigation("/admin/experience/create")
    }

    const experienceListFetchApiAction = () => {
        dispatch(experienceFetchListApi((res) => {
            setExperienceList(res)
        }))
    }

    useEffect(() => {
        experienceListFetchApiAction()
    }, [])

    const editAction = (option, state) => {
        navigation(`/admin/experience/edit`, { state })
    }

    const deleteAction = (option, item) => {
        sweetAlertDelete().then((result) => {
            if (result === 'deleted') {
                dispatch(experienceDeleteApi(item.experienceId, (res) => {
                    experienceListFetchApiAction()
                }))
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    var menuItems = [
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faPenToSquare} color='green' />,
            title: "Edit",
            slug: "eidt",
            onClickCallback: editAction
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faTrash} color='red' />,
            title: "Delete",
            slug: "delete",
            onClickCallback: deleteAction
        }
    ];
    return (
        <>
            <JumboCardQuick
                title={"Experience"}
                action={
                    <Button
                        size='small'
                        onClick={experienceAddAction}
                        variant="contained"
                        startIcon={<FontAwesomeIcon icon={faGraduationCap} />}>
                        Add
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
                <JumboScrollbar
                    autoHeight
                    autoHeightMin={450}
                    autoHide
                    autoHideDuration={200}
                    autoHideTimeout={500}
                >
                    {
                        experienceList && experienceList.length > 0 && experienceList.map((item, key) => {
                            return (
                                <ListCard key={key} >
                                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant={"h4"} color={"primary.main"} >{item?.jobTitle}</Typography>
                                        <Div>
                                            <JumboDdMenu
                                                menuItems={menuItems}
                                                item={item}
                                                icon={<MoreVertIcon fontSize='20px' />} />
                                        </Div>
                                    </Div>

                                    <Typography variant={"h6"} color={"text.secondary"} >{item?.companyName}</Typography>
                                    <Typography variant={"h6"} color={"text.secondary"} >Board-{item?.location}</Typography>

                                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                        {/* <Typography variant={"h6"} color={"text.secondary"} >{item?.state}, {item?.city} </Typography> */}
                                        <Typography
                                            variant={"h6"}
                                            color={"text.secondary"} >
                                            ( {monthNames[item?.startMonth]}-{item?.startYear} to {monthNames[item?.endMonth]}-{item?.endYear} )
                                        </Typography>
                                    </Div>
                                </ListCard>
                            )
                        })

                    }



                </JumboScrollbar>
            </JumboCardQuick>
        </>
    )
}

export default Experience
