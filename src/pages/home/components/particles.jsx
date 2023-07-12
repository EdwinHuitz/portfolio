import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
//import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    return {
      background: {
        color: "#000",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 200, // distance of the particles from the cursor
            duration:2,
            size:0,
            opacity:0,
          },
        },
      },
      particles: {
        number: {
          value: 160, // number of particles on the screen
          density:{
            enable:false,
          }
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
        },
        opacity: {
          value: { min: 0.1, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;