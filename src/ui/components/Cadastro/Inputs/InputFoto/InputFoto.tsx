import { ChangeEvent, useState, useEffect } from 'react';
import { FotoLabel } from './InputFoto.styles';

export default function InputFoto(props) {
    const [state, setState] = useState({
        valid: false
    })

    function selectFile(ev) {
        ev.preventDefault();
        document.getElementById("hiddenFileInput").click();
    }

    function isValid(ev:ChangeEvent<HTMLInputElement>) {
        let img_display = document.getElementById('img_display');
        let img_input = document.getElementById('hiddenFileInput');
        
        if (/\.jpeg|\.jpg|\.png/i.test(ev.target.value)) {
            setState({
                valid: true
            })
            img_display.classList.remove('invalidInput')
            img_input.classList.remove('invalidInput')
        } else {
            setState({
                valid: false
            })
            img_display.classList.add('invalidInput')
            img_input.classList.add('invalidInput')
        }
    }

    useEffect(() => {
        document.getElementById('img_display').style.border = 'solid 2px black'
    }, [])

    return (
        <FotoLabel>
            <span id='referenciaWidth'>{props.required ? '*' : ''}{props.label}</span>
            <div id='img_display' style={{border: `${state.valid ? 'solid 2px black' : 'solid 3px red'}` }}></div>
            <input required className='section1' onChange={isValid} type='file' accept="image/png, image/jpeg, image/jpg" id='hiddenFileInput' style={{ display: "none" }} ></input>
            <button id='foto_input_button' onClick={selectFile}>Escolher foto</button>
        </FotoLabel>
    )
}