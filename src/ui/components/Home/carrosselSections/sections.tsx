import { Sec1Style, Sec2Style, Sec3Style, Sec4Style, Sec5Style } from "./sections.styles"


export function Section1() {
    return (
        <Sec1Style className='section' id='sec1'>
            <div>
                <h1>Global ORG <br /> conectando voluntários</h1>
                <p>
                    Cadastre‌ ‌a‌ ‌sua‌ ‌ONG‌ ‌na‌ ‌nossa‌ ‌plataforma‌ ‌e‌ ‌alcance‌ ‌voluntários‌ ‌do‌ ‌mundo‌ ‌todo.‌ ‌
                    A‌ ‌Global‌ ORG‌ ‌também‌ ‌oferece‌ ‌uma‌ ‌série‌ ‌de‌ ‌ferramentas‌ ‌de‌ ‌gerenciamento‌ ‌para‌ ‌a‌ ‌sua‌ ‌ONG!‌
                </p>
                <button>Cadastre sua causa</button>
            </div>
            <div>
                <img src='./homepage_imgs/mundo1.png'></img>
            </div>
        </Sec1Style>
    )
}

export function Section2() {
    return (
        <Sec2Style className='section' id='sec2'>
            <div>
                <img src='./homepage_imgs/Group33560.png'></img>
            </div>
            <div>
                <h1>
                    Faça parte da nossa rede
                </h1>
                <p>
                    Você é uma ONG e precisa de voluntários?
                    Divulgue as suas vagas para voluntários de todo o Brasil e do mundo.
                </p>
                <button>
                    Cadastre sua vaga
                </button>
            </div>
        </Sec2Style>
    )
}

export function Section3() {
    return (
        <Sec3Style className='section' id='sec3'>
            <div>
                <h1>
                    Seja voluntário e participe de uma causa
                </h1>
                <p>
                    Encontre a sua oportunidade para mudar o mundo!
                    Busque por uma vaga de voluntariado e candidate-se.
                    Em alguns dias, a ONG irá entrar em contato com você.
                </p>
                <button>
                    Encontre sua vaga
                </button>
            </div>
            <div>
                <img src='./homepage_imgs/Group33561.png'></img>
            </div>
        </Sec3Style>
    )
}

export function Section4() {
    return (
        <Sec4Style className='section' id='sec4'>
            <div>
                <img src='./homepage_imgs/Rectangle421.png'></img>
            </div>
            <div>
                <h1>
                    Otimizar o trabalho da sua ONG ou projeto social
                </h1>
                <p>
                    Além de alcançar voluntários do mundo todo, você também tem acesso às nossas ferramentas de gerenciamento, para otimizar o trabalho da sua ONG.
                </p>
                <button>
                    Saiba mais
                </button>
            </div>
        </Sec4Style>
    )
}

export function Section5() {
    return (
        <Sec5Style  id='sec5'>
            <div>
                <h1>
                    Global ORG para as empresas
                </h1>
                <p>
                    Estratégia e implementação de voluntariado empresarial e responsabilidade social: essas são as nossas paixões e especialidades.
                </p>
                <button>
                    Novas ferramentas
                </button>
            </div>
            <div>
                <img src='./homepage_imgs/mundo2.png'></img>
            </div>
        </Sec5Style>
    )
}