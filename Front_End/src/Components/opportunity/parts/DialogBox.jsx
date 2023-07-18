import { Dialog, styled, Box, Typography } from "@mui/material";
import sample_image from '../../opportunity/sample_picture.jpg'
import CancelIcon from '@mui/icons-material/Cancel';

import Likepanel from "./panel";
import Bio from "./Bio";
import Follow from "./follow";

const DialogBox = ({ openDialog, setopenDialog, companyDomain,companyName,companySite,companyDesc,hiring,salary }) => {

    
    const HandleClose = () => {
        setopenDialog(false)
    };


    const Image = styled('img')({
        height: 290,
        width: 295,


    });

    const DialogStyle = styled(Dialog)`
        top:-20px;
        
    `
    const Wrapper = styled(Box)`
        display:flex;
        background:#d5c7fc;
        & : last-child{
            
        }

    `

    const Image_main = styled('img')({
        borderRadius: '50%',
        height: 50,
        width: 50,
        padding: 5,
    })
    const Cancel = styled(Box)`
        margin:7px 0px 5px 5px;
        color:#FFF;
       
    `

    const Text = styled(Typography)`
        font-size:13px;
        font-family:inherit;
        font-weight:700;
        padding:12px 5px 0px 7px;
        
        width: 24vh;
   
        white-space: nowrap;
    
        overflow: hidden;
    
        text-overflow: ellipsis;
        text-align: center;
    `
    const Info = styled(Box)`
        width:295px;
        height:250px;
        overflow: scroll;
    `
    const LikeBox = styled(Box)`
        height:40px;
        
    `
    const Like = styled(Typography)`
         margin:0px 1px 3px 3px;
         font-weight:450;
    `

    return (
        <>
            <DialogStyle open={openDialog} onClose={HandleClose}>
                <Box style={{ background: '#FFFFFF' }}>

                    <Box>
                        <Wrapper className="flex justify-between">
                            <Image_main src={sample_image} alt="" />
                            <Text>{companyName}</Text>
                            {/* <Follow /> */}
                            <Cancel onClick={HandleClose} className="mx-1">
                                <CancelIcon />
                            </Cancel>
                        </Wrapper>
                        <Image src={sample_image} alt="img" />
                    </Box>
                    <LikeBox>
                        <Likepanel />

                    </LikeBox>
                    <Like>Liked by <b>Deni_001</b> and  <b>Others</b></Like>
                    <Info>
                        <Bio ComapanySite={companySite} companyDesc={companyDesc} hiring={hiring}companyDomain={companyDomain} salary={salary} />
                    </Info>
                </Box>
            </DialogStyle>

        </>
    )
}


export default DialogBox;

