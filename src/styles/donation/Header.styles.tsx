import { styled } from '@material-ui/core'

export const StyledHeader = styled('header')`
    ul {
        padding: 0;
        list-style-type: none;
        display: flex;
    }

    a {
        text-decoration: none;
        color:#5E595C;
        font-weight: 500;
    }

    .header-links-main-wrapper {
        display: flex;
        justify-content: end;
        border-bottom: solid 1px ${({ theme }) => theme.palette.grey['200']};
        padding-right: 100px;
        
        .header-links-inner-wrapper {
            display: flex;
            align-items: center;

            li {
                margin: 0 10px;
                    
                a {
                    display: grid;
                    place-items: center;
                }
            }
        }

        .idioma {
            margin: 0 50px;
            display: grid;
            grid-template-columns: auto auto;
            column-gap: 20px;
            place-items: center;
        }
    }

    .donation-header-main-bar {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        justify-content: space-between;

        nav {
            display: flex;

            ul {
                margin-right: 30px;

                li {
                    margin: 0 20px;
                }
            }

            .login-or-signin {
                display: flex;
                align-items: center;
                column-gap: 20px;
            }
        }
    }

`;