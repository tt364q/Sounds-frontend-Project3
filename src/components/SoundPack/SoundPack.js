import './SoundPack.css';

function SoundPack(props) {
    return(
        <div>
            <h1>{props.data.title}</h1>
            {/* <h2>{props.data.sound}</h2> */}
            {/* <h3>{props.data.image}</h3> */}
        </div>
    
    );
}

export default SoundPack;