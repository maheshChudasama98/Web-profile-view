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
import { companyDeleteApi, companyFetchListApi } from 'app/services/Admin/company-services'
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

const Companies = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()

  const [companyList, setCompanyList] = useState([])

  const companyAddAction = () => {
    navigation("/admin/company/create")
  }

  const companyListFetchApiAction = () => {
    dispatch(companyFetchListApi((res) => {
      setCompanyList(res)
    }))
  }

  useEffect(() => {
    companyListFetchApiAction()
  }, [])

  const editAction = (option, state) => {
    navigation(`/admin/company/edit`, { state })
  }

  const deleteAction = (option, item) => {
    sweetAlertDelete().then((result) => {
      if (result === 'deleted') {
        dispatch(companyDeleteApi(item.companyId, (res) => {
          companyListFetchApiAction()
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
      slug: "edit",
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
        title={"Companies"}
        action={
          <Button
            size='small'
            onClick={companyAddAction}
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
            companyList && companyList.length > 0 && companyList.map((item, key) => {
              return (
                <>
                  <ListCard >
                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant={"h4"} color={"primary.main"} >{item?.companyName}</Typography>
                      <Div>
                        <JumboDdMenu
                          menuItems={menuItems}
                          item={item}
                        // icon={<MoreVertIcon fontSize='20px' />}
                        />
                      </Div>
                    </Div>

                    <Typography variant={"h6"} color={"text.secondary"} >{item?.companySize}</Typography>
                    <Typography variant={"h6"} color={"text.secondary"} >Board-{item?.companyEmail}</Typography>

                    <Div sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Typography variant={"h6"} color={"text.secondary"} >{item?.state}, {item?.city} </Typography>
                      <Typography
                        variant={"h6"}
                        color={"text.secondary"} >
                        Start - ( {item?.startYear} )
                      </Typography>
                    </Div>
                  </ListCard>
                </>
              )
            })

          }

        </JumboScrollbar>
      </JumboCardQuick>
    </>
  )
}

export default Companies
