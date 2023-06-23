import styled from '@emotion/styled';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';
import { Box } from '@mui/material';
import { useState } from 'react';



const Follow = () =>{

    const [add,setadd] = useState(false)

    const handleclick=() =>{
            if(add == true)
            {
                setadd(false)
            }
            else
            {
                setadd(true)
            }

    }
    const Style = styled(Box)`
        margin:7px 4px 0px 2px;
    `

    return(

        <>
            <Style onClick={handleclick}>

                {
                    add ? <PersonAddIcon fontSize='medium'/>
                    :<PersonAddDisabledIcon fontSize='medium' />
                }
            </Style>
        </>
    )
}



export default Follow;