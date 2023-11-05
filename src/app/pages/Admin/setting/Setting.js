import React from 'react'
import JumboCardQuick from '@jumbo/components/JumboCardQuick'
import { Button } from '@mui/material'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import JumboScrollbar from '@jumbo/components/JumboScrollbar'
const Setting = () => {
    return (
        <>
            <JumboCardQuick
                title={"Setting"}
                // action={
                //     <Button
                //         size='small'
                //         onClick={experienceAddAction}
                //         variant="contained"
                //         startIcon={<FontAwesomeIcon icon={faGraduationCap} />}>
                //         Add
                //     </Button>
                // }
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

                    <h1>
                        coming soon ...
                    </h1>
                </JumboScrollbar>
            </JumboCardQuick>
        </>
    )
}

export default Setting
