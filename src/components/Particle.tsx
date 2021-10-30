import React from 'react';
import Particles from 'react-tsparticles';

import {useSelector, RootStateOrAny} from 'react-redux';

const Particle = () => {
  const counter = useSelector( (state: RootStateOrAny) => state.counter);
  // const particlesInit = (main :any) => {
  //  console.log(main);
  // you can initialize the tsParticles instance (main) here,
  // adding custom shapes or presets
  //  };

  //  const particlesLoaded = (container :any) => {
  //   console.log(container);
  // };
  return (
    <Particles
      id="tsparticles"
      // init={particlesInit}
      //  loaded={particlesLoaded}
      options={{
        /* background: {
          color: {
            value: '#0d47a1',
          },
        },*/
        fpsLimit: 60,
        interactivity: {
          // detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'grab',
            },
            onHover: {
              enable: true,
              mode: 'grab',
            },
            resize: true,
          },
          /* modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },*/
        },
        particles: {
          color: {
            value: '#4fc7ef',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: counter,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'star',
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
