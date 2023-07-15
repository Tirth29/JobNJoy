import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { Box, keyframes,Typography } from '@mui/material';
import styled from '@emotion/styled';





const Likepanel = () => {


    const [heart, setheart] = useState(false)
    const [save, setsave] = useState(false)

    const handleclick1= () => {
        if (heart == false ) {
            setheart(true)
        }
        else {
            setheart(false)
        }
    }
    const handleclick2= () => {
        if (save == false) {
            setsave(true)
        }
        else {
            setsave(false)
        }
    }
    let Spin = keyframes`
        0%{
           
            color:#f70aa8;
        }
        50%{
            
            color:#cf305d;
        }
        75%{
           
            color:#f70af7;
        }
        100%{
           
            color:red;
        }
     `
    const Wrapper = styled('div')(
        {
            color: 'red',
            animation: `${Spin} 1s `
        }
    )
    const Wrapped = styled(Box)`
        display:flex;
    `
    const Save= styled(Box)`
        margin-left:200px;
    `
   

    return (

        <>


            <Wrapped>
                <Box onClick={handleclick1} style={{display:'flex'}}>
                    {
                        heart ? <Wrapper>
                            <FavoriteIcon fontSize='large' />
                        </Wrapper>
                            : <FavoriteBorderIcon fontSize='large' />
                    }
                    
                </Box>
                
                <Save onClick={handleclick2}>
                    {
                        save ? <Wrapper>
                            <TurnedInIcon fontSize='large' />
                        </Wrapper>
                            : <TurnedInNotIcon fontSize='large' />
                    }
                </Save>
            </Wrapped>



        </>
    )
}

export default Likepanel;