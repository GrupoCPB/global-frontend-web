import { styled } from '@material-ui/core'

export const StyledHeader = styled('header')`
    .main-flex-div {
        display: flex;
        align-items: center;
    }

    .nav {
        width: 100%;
        display: grid;
        grid-template-columns: 75% 25%;

        @media (max-width: 1000px) {
            grid-template-columns: 1fr;
            grid-template-rows: 60% 40%;
            position: absolute;
            width: 40%;
            top: 0;
            right: 0;
            background: white;
            padding-top: 10px;
            z-index: 10;
        }

        ul {
            margin: 0;
            padding: 20px 0;

            li {
                a:hover {

                    @media (min-width: 1000px) {
                        border-bottom: solid 1px red;
                    }
                }
            }
        }
    }

    .nav-ul-1 {
        display: flex;
        justify-content: space-around;

        li {
            display: flex;
            align-items: center;

            &:hover {
                color: ${({theme}) => theme.palette.secondary.main};
            }
        }

        @media (max-width: 1000px) {
            flex-direction: column;

            li {
                padding: 10px 20px;
                justify-content: center;
                cursor: pointer;

                &:hover {
                    background: ${({theme}) => theme.palette.secondary.main};
                    color: white;
                }
            }
        }
    }

    .nav-ul-2 {
        justify-content: end;
        column-gap: 10px;
        width: auto;

        @media (max-width: 1000px) {
            flex-direction: column-reverse;
            row-gap: 10px;
            justify-content: center;
            align-items: center;
        }
    }
`;