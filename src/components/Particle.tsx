import React from 'react';
import Particles from 'react-tsparticles';

import {useSelector, RootStateOrAny} from 'react-redux';

const Particle = () => {
  const counter = useSelector( (state: RootStateOrAny) => state.counter);
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
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
