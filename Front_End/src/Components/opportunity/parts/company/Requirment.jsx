import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"

const Title = styled(Typography)`
    font-size:22px;
    margin:7px;
    font-weight:650;
`

const Wrapper = styled(Box)`
    margin:10px 0px 0px 17px;
`



const requirment = ({Requirementval}) =>{

    return(
        <Box>
            <Title>Require Jobs</Title>
            <Box>
                <Wrapper>
                    <Typography style={{fontSize:'18px',fontWeight:550}}>1.{Requirementval.jobs.job1}</Typography>
                    <Typography>Salary : {Requirementval.salary.salary1}</Typography>
                    <Typography>About job : {Requirementval.aboutJob.job1}</Typography>
                </Wrapper>
                <Wrapper>
                    <Typography style={{fontSize:'18px',fontWeight:550}}>2.{Requirementval.jobs.job2}</Typography>
                    <Typography>Salary : {Requirementval.salary.salary2}</Typography>
                    <Typography>About job : {Requirementval.aboutJob.job2}</Typography>
                </Wrapper>
                <Wrapper>
                    <Typography style={{fontSize:'18px',fontWeight:550}}>3.{Requirementval.jobs.job3}</Typography>
                    <Typography>Salary : {Requirementval.salary.salary3}</Typography>
                    <Typography>About job : {Requirementval.aboutJob.job3}</Typography>
                </Wrapper>
            </Box>
        </Box>
    )
}
export default requirment;