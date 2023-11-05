import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JumboButton from '@jumbo/components/JumboButton'
import JumboCardQuick from '@jumbo/components/JumboCardQuick'
import JumboDdMenu from '@jumbo/components/JumboDdMenu'
import JumboScrollbar from '@jumbo/components/JumboScrollbar'
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Companies = () => {
  const navigation = useNavigate()
  const companyAddAction = () => {
    navigation("/admin/company/create")
  }
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


        </JumboScrollbar>
      </JumboCardQuick>
    </>
  )
}

export default Companies
