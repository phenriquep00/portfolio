import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function Background() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000",
                    },
                },
                fpsLimit: 40,
                particles: {
                    color: { value: "#ffffff" },
                    line_linked: {
                      color: "#ffffff",
                      distance: 150,
                      enable: false,
                      opacity: 0.4,
                      width: 1
                    },
                    move: {
                      size: true,
                      attract: { enable: false, rotateX: 600, rotateY: 600 },
                      bounce: false,
                      direction: "none",
                      enable: true,
                      out_mode: "out",
                      random: true,
                      speed: 0.3,
                      straight: false
                    },
                    number: { density: { enable: true, value_area: 800 }, value: 100 },
                    opacity: {
                      anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
                      random: true,
                      value: 1
                    },
                    shape: {
                      character: {
                        fill: false,
                        font: "Verdana",
                        style: "",
                        value: "*",
                        weight: "400"
                      },
                      image: {
                        height: 100,
                        replace_color: true,
                        src: "images/github.svg",
                        width: 100
                      },
                      polygon: { nb_sides: 5 },
                      stroke: { color: "#000000", width: 0 },
                      type: "circle"
                    },
                    size: {
                      anim: { enable: false, size_min: 0.3, speed: 4, sync: false },
                      random: true,
                      value: 3
                    }
                  },
                detectRetina: true,
            }}
        />
    );
}