import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"

const Wrapper = styled(Box)`
    margin:10px 0px 30px 16px;
`

const Text = styled(Typography)`
    margin-bottom:10px;
`


const about = ({aboutval}) =>{

    return(

        <Box>
            <Wrapper>
                <Text style={{fontSize:'18px',fontWeight:'550',textDecoration:'underline'}}>
                    About Us
                </Text>
                <Text>This is a <b>{aboutval.company.type}</b> base company</Text>
                <Text>Networth is <b>{aboutval.company.networth}</b></Text>
                <Text>CEO of the Company is <b>{aboutval.company.ceo}</b></Text>
                <Text>Menagers are <b>{aboutval.company.manager}</b></Text>
            </Wrapper>
            <Wrapper>
                <Text style={{fontSize:'18px',fontWeight:'550',textDecoration:'underline'}}>
                    FieldS in Company :
                </Text>
                <Wrapper>
                    <Text>1.{aboutval.fields.f1}</Text>
                    <Text>2.{aboutval.fields.f2}</Text>
                    <Text>3.{aboutval.fields.f3}</Text>
                </Wrapper>
            </Wrapper>
        </Box>
    )
}

export default about;