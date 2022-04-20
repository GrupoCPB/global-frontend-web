import { styled } from "@material-ui/core";

export const StyledMainRelatorioWrapper = styled('main')`
    .site-navigation-area {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 60px;
    
        .navigation-path-div {
            width: max-content;
            display: grid;
            grid-template-columns: auto auto auto;
            place-items: center;
            column-gap: 15px;
        }
    }
    
    .options-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .relatorio-section-1 {
        .relatorio-section-1-first-box {
            display: flex;
            align-items: center;
            margin: 20px 0 10px;
    
            .checkboxes-box {
                margin-left: 40px;
            }
    
            .PDF-button-box {
                flex-grow: 4;
                display: flex;
                justify-content: flex-end;
            }
    
            .gerarPDF {
                color: black;
                border-color: black;
        
                &:hover {
                    background: rgba(0, 0, 0, 0.1);
                }
        
                .MuiTouchRipple-ripple {
                    background: rgba(0, 0, 0, 0.2);
                }
            }
        }
    
        .relatorio-section-1-second-box {
            display: grid;
            grid-template-columns: 85% 15%;
            width: 100%;
    
            .relatorio-datas-inputs {
                display: flex;
                width: fit-content;
            }
    
            span {
                font-size: 16px;
                font-weight: 700;
                display: grid;
                place-items: center;
                margin-right: 20px;
            }
    
            .p-div {
                font-size: 16px;
                font-weight: 600;
                display: grid;
        
                p {
                width: auto;
                justify-self: center;
                }
            }
        }
    }
    
    .relatorio-section-2 {
        .relatorio-section-2-table-header-div {
            .relatorio-section-2-table-header-inner-div {
                padding: 10px 0;
                display: grid;
                grid-template-columns: 70% 30%;
                font-size: 16px;
                font-weight: 600;
    
                & div {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    place-items: center;
                }
            }
        }
    }
    
    .relatorio-section-3 {
            .relatorio-section-3-table-header-div {
                display: grid;
                grid-template-columns: 70% 30%;
                margin: 14px 0 8px;

                & div:first-of-type {
                    h2 {
                        margin: 0;
                    }
                }

                & div:last-of-type {
                    display: grid;
                    grid-template-columns: 50% 50%;
                    place-items: center;
                    font-size: 16px;
                    font-weight: 600;
                }
            }
        }
    }
    
    .mais-doacoes {
        margin: 50px auto 100px;
        display: block;
        width: max-content;
        font-weight: 600;
        color: black;
        border-color: black;
        
        &:hover {
            background: rgba(0, 0, 0, 0.1);
            border-color: black;
        }
        
        .MuiTouchRipple-ripple {
            background: rgba(0, 0, 0, 0.2);
        }
    }
`


