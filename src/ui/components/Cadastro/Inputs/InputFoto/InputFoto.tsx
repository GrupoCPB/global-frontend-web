import { FotoLabel } from './InputFoto.styles';

export default function InputFoto(props) {
    function selectFile(ev) {
        ev.preventDefault();
        let element = document.querySelector("#hiddenFileInput");
        (element as HTMLElement).click();
    }

    return (
        <FotoLabel>
            <span>{props.required ? '*' : ''}{props.label}</span>
            <div id='img_display'></div>
            <input type='file' id='hiddenFileInput' style={{ display: "none" }}></input>
            <button id='foto_input_button' onClick={selectFile}>Escolher foto</button>
        </FotoLabel>
    )
}