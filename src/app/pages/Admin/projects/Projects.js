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
import { projectDeleteApi, projectFetchListApi } from 'app/services/Admin/project-services'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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

const Projects = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [projectList, setProjectList] = useState([])


    const experienceAddAction = () => {
        navigation("/admin/project/create")
    }

    const projectListFetchApiAction = () => {
        dispatch(projectFetchListApi((res) => {
            setProjectList(res)
        }))
    }

    useEffect(() => {
        projectListFetchApiAction()
    }, [])

    const editAction = (option, state) => {
        navigation(`/admin/project/edit`, { state })
    }
    const deleteAction = (option, item) => {
        sweetAlertDelete().then((result) => {
            if (result === 'deleted') {
                dispatch(projectDeleteApi(item.projectId, (res) => {
                    projectListFetchApiAction()
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
                title={"Projects"}
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
                        projectList && projectList.length > 0 && projectList.map((item, key) => {
                            return (
                                <ListCard key={key}>
                                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant={"h4"} color={"primary.main"} >{item?.projectName}</Typography>
                                        <Div>
                                            <JumboDdMenu
                                                menuItems={menuItems}
                                                item={item}
                                                // icon={<MoreVertIcon fontSize='20px' />} 
                                                />

                                        </Div>
                                    </Div>

                                    <Typography variant={"h6"} color={"text.secondary"} >{item?.projectRole}</Typography>
                                    <Typography variant={"h6"} color={"text.secondary"} >Board-{item?.achievements}</Typography>

                                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant={"h6"} color={"text.secondary"} >{item?.description} </Typography>
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

export default Projects
