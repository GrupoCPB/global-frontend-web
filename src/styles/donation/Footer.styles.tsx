import { styled } from '@material-ui/core';

export const StyledFooter = styled('footer')`
    background-color: #F3F3F3;
    padding: 50px 0 25px;
    
    .footer-inner-wrapper-1 {
        display: flex;
        justify-content: space-between;
        padding-bottom: 50px;

        & .footer-area {
            display: flex;
            flex-direction: column;
            width: max-content;
            padding: 0 50px 0 0;

            &:last-of-type {
                padding: 0 0 0 50px;
            }

            h2, h1 {
                width: max-content;
                margin: 0;
            }
    
            ul {
                flex-direction: column;

                li {
                    margin: 5px 0;
                }
            }

            & .inputs-container {
                width: 70%;
                display: grid;
                grid-template-columns: 60% 40%;

                .footer-newsletter-email-input {
                    padding: 0 0 0 10px;
                }
            }
        }
    }

    hr {
        width: 86%;
        border: none;
        border-top: solid 1px ${({theme}) => theme.palette.grey['200']};
    }

    .footer-inner-wrapper-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`