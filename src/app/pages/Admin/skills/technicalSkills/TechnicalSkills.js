import React, { useEffect, useState } from 'react'
import { faGraduationCap, faMicrochip, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JumboCardQuick from '@jumbo/components/JumboCardQuick'
import JumboScrollbar from '@jumbo/components/JumboScrollbar'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { skillDeleteApi, skillsFetchListApi } from 'app/services/Admin/skills-services'
import { sweetAlertDelete } from 'app/config/sweetAlertsActions'
import ListCard from 'app/components/Cards/ListCard'
import Div from '@jumbo/shared/Div'
import JumboDdMenu from '@jumbo/components/JumboDdMenu'


const TechnicalSkills = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [skillList, setSkillList] = useState([])


    const skillListFetchApiAction = () => {
        dispatch(skillsFetchListApi({ skillType: "Technical" }, (res) => {
            setSkillList(res)
        }))
    }

    useEffect(() => {
        skillListFetchApiAction()
    }, [])

    const navigationAction = () => navigation("/admin/skills/technical/create")
    const editAction = (option, state) => navigation(`/admin/skills/technical/edit`, { state })

    const deleteAction = (option, item) => {
        sweetAlertDelete().then((result) => {
            if (result === 'deleted') {
                dispatch(skillDeleteApi(item.skillId, (res) => {
                    skillListFetchApiAction()
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
        <JumboCardQuick
            title={"Technical skills"}
            action={
                <Button
                    size='small'
                    onClick={navigationAction}
                    variant="contained"
                    startIcon={<FontAwesomeIcon icon={faMicrochip} />}>
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
                    skillList && skillList.length > 0 && skillList.map((item, key) => {
                        return (
                            <ListCard key={key} >
                                <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant={"h4"} color={"primary.main"} >{item?.skillName}</Typography>
                                    <Div>
                                        <JumboDdMenu
                                            menuItems={menuItems}
                                            item={item}
                                        />
                                    </Div>
                                </Div>
                            </ListCard>
                        )
                    })
                }

            </JumboScrollbar>
        </JumboCardQuick>
    )
}

export default TechnicalSkills
