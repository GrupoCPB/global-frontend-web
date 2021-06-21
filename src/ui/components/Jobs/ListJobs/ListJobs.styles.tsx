import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, List } from '@material-ui/core';


export const BodyCard = styled(Card)`
    min-width: 400px;
`;

export const ListJobsSection = styled(List)`
    overflow-y: scroll;
    height: 835px;
    overflow-x: hidden;

    /* width */
        ::-webkit-scrollbar {
        width: 15px;
    
        }

        /* Track */
        ::-webkit-scrollbar-track {
        background: #0a0a0a;
        border-left: 6px solid #FFF;
        border-right: 6px solid #FFF;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.palette.secondary.dark};
        border-radius: 10px;
        }

`;

export const DividerJobs = styled('hr')`
    width: 100%;
    border-style: solid;
    border-color: #262626;
    border-width: 1px;
`;