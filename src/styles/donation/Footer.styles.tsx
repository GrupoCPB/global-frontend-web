import { styled } from '@material-ui/core';

export const StyledFooter = styled('footer')`
    background-color: #F3F3F3;
    padding: 50px 0 25px;

    .the-grid {
        @media(max-width: 1200px) {
            text-align: center;
        }
    }
    
    .footer-inner-wrapper-1 {
        padding-bottom: 50px;

        h2 {
            margin: 0;
        }
    
        ul {
            flex-direction: column;

            li {
                margin-top: 5px;
            }
        }
        
    }

    .inputs-container {
        width: 100%;
        display: grid;
        grid-template-columns: 60% 40%;

        .footer-newsletter-email-input {
            padding: 0 0 0 10px;
        }

        @media (max-width: 1200px) {
            grid-template-columns: 100%;
            grid-template-rows: 1fr 1fr;

            .footer-newsletter-send-button {
                width: 50%;
                margin-inline: auto;
                margin-top: 10px;
            }

            .footer-newsletter-email-input {
                margin-inline: auto;
                width: 70%;
            }
        }
    }

    hr {
        width: 86%;
        border: none;
        border-top: solid 1px ${({ theme }) => theme.palette.grey['200']};
    }

    .footer-inner-wrapper-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


`