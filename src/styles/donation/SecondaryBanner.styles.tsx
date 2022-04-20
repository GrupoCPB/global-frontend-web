import { styled, Container } from "@material-ui/core";


export const StyledSecondaryBanner = styled('div')`
    background: ${({ theme }) => theme.palette.grey["100"]};

    .secondary-banner-container {
        display: flex;
        height: 160px;
        justify-content: space-between;
        position: relative;
        
        .banner-text {
            display: grid;

            h1 {
                color: ${({ theme }) => theme.palette.secondary.main};
                width: 100%;
                place-self: center start;
                font-size: 150%;
            }
        }

        .banner-background {
            width: 850px;   
            background-repeat: no-repeat;  
            background-size: contain;
            position: relative;
            border-bottom-left-radius: 20px;

            &::after {
                content: '';
                position: absolute;
                left: -10px;
                width: 10px;
                height: 60%;
                background: ${({ theme }) => theme.palette.secondary.light};
                border-bottom-left-radius: 150px;
            }
        }
    }
    
`;