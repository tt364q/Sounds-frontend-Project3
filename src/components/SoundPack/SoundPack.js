import './SoundPack.css';

function SoundPack(props) {
    return(
        <div className="inline">
            <h1>{props.data.title}</h1>
            <a target="_blank" href={props.data.soundUrl}>Click to Preview</a>
        </div>
    
    );
}

export default SoundPack;