import { styled } from '@material-ui/core/styles';
import BasicTextInput from '../ui/components/Inputs/basicTextInput';

const MainWrapper = styled('div')`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: calc(100vh - 100px);

    #logo {
        width: 40px;
        height: 40px;
    }

    #logoWrapper {
        position: absolute;
        font-family: Merriweather;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        align-items: center;
        transform: translate(50%, 20px);
    }

    #spanAfterLogo {
        margin-left: 15px;
    }

    form {
        display: flex;
        flex-direction: row;
        overflow-X: scroll;
        box-sizing: border-box;

        .sectionWrapper {
            width: 100%;
            overflow: hidden;
            flex: none;
        }

        section {
            margin: 0 auto;
            padding: 10%;
        }
        
        #sec1 {
            div {
                display: grid;
                grid-template-columns: 1fr 1fr;
                column-gap: 10px;

                input {
                    width: 100%;
                }
            }

        }
    }

    img {
        height: calc(100vh - 100px);
        width: 100%;
    }
`;

export default function CadastroPage() {
    return (
        <MainWrapper>
            <div id='logoWrapper'>
                <img id='logo' src='./logo.png'/>
                <span id='spanAfterLogo'>Global ORG</span>
            </div>

            <form>
                <div className='sectionWrapper'>
                    <section id='sec1'>
                        <BasicTextInput type='text' required={true} title='Nome completo' />
                        <BasicTextInput type='text' required={true} title='Nome da ONG' />
                        <BasicTextInput type='text' required={true} title='CNPJ' />

                        <div>
                            <BasicTextInput type='number' required={true} title='Telefone Fixo' />
                            <BasicTextInput type='number' required={true} title='Celular' />
                        </div>
                    </section>
                </div>

                <div className='sectionWrapper'>
                    <section id='sec2'>
                        <BasicTextInput type='text' required={true} title='Nome completo' />
                        <BasicTextInput type='text' required={true} title='Nome da ONG' />
                        <BasicTextInput type='text' required={true} title='CNPJ' />

                        <div>
                            <BasicTextInput type='number' required={true} title='Telefone Fixo' />
                            <BasicTextInput type='number' required={true} title='Celular' />
                        </div>
                    </section>
                </div>                
                
                <div className='sectionWrapper'>
                    <section id='sec3'>
                        <BasicTextInput type='text' required={true} title='Nome completo' />
                        <BasicTextInput type='text' required={true} title='Nome da ONG' />
                        <BasicTextInput type='text' required={true} title='CNPJ' />

                        <div>
                            <BasicTextInput type='number' required={true} title='Telefone Fixo' />
                            <BasicTextInput type='number' required={true} title='Celular' />
                        </div>
                    </section>
                </div>
            </form>

            <img src='./cadastrobackground.png' />
        </MainWrapper>
    )
}