import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesjs from '../../assets/particles/particles2.json'
// import particlesjs from '../../assets/particles/particlesjs-config (2).json'

const ParticlesComponent = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesjs}
            />
        </>
    )
}

export default ParticlesComponent
