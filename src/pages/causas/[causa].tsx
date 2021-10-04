// export async function getStaticPaths() {
//     let res = await fetch('http://localhost:3000/api/causasinfo');
//     let data = await res.json();

//     const paths = data.map(obj => {
//         return {
//             params: { causa: obj.pathName }
//         }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps(context) {
//     const pathName = context.params.causa;
//     const res = await fetch('http://localhost:3000/api/causasinfo')
//     const data = await res.json();

//     const dados = data.find(el => {
//         if (el.pathName == pathName) {
//             return el
//         }
//     })

//     return {
//         props: { dados }
//     }
// }

export default function Causa() {
    return(
        <>
            <h1>oi</h1>
            <h3>oi</h3>
        </>
    )
}