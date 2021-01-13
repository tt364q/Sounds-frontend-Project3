// import Producer from '../components/Producer/Producer';
import SoundPack from '../components/SoundPack/SoundPack';
import React, {useEffect, useState} from 'react';
import {getSoundPacks} from '../services/userService';
import Perc from '../img/Perc.jpg'
import Rhodes from '../img/Rhodes.jpg'
import Synth from '../img/Synth.png'



export default function DashboardPage(props) {
    const [packs, setPacks] = useState([]);
    useEffect(() => {
        getData();
    }, [])
    async function getData() {
        const result = await getSoundPacks()
        setPacks(result)
        console.log(result)
    } 
    return (
        <>
        <main className="Sounds">
        {packs?.map(pack => 
        <SoundPack data={pack}/>)}

        </main>
        <div className="Sounds2">
        <img src={Perc} alt="Perc"/>
        <img src={Rhodes} alt="Rhodes"/>
        <img src={Synth} alt="Synth"/>
        </div>
        </>
    );
};
