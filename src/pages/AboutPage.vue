<script setup>
    const particlesLoaded = ()=>{
        console.log("bga mounted")
    }
</script>

<template>
    <div id="greeting">
        <span>
            Funding for this program was made possible<br/>by viewers like <span style="color: red;">U</span>.
        </span>
    </div>
    <vue-particles
        id="tsparticlesBG"
        @particles-loaded="particlesLoaded"
        :options="{
                background: {
                    color: {
                        value: '#FFFFFF'
                    }
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: 'push'
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse'
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 365,
                            duration: 2,
                            opacity: 0.6,
                            size: 33
                        },
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#e799b0'
                    },
                    links: {
                        color: '#9ac8e2',
                        distance: 124,
                        enable: true,
                        opacity: 0.7,
                        width: 1
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: 'bounce',
                        random: false,
                        speed: 5,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: { min: 0.3, max: 3 }
                    }
                },
                detectRetina: true
            }"
    />
</template>

<style scoped>
    #greeting {
        width: 100%;
        min-height: 100%;
        text-align: center;
        align-content: center;
        font-size: 37px;
        line-height: 45px;
    }
    #tsparticlesBG {
        position:absolute;
        z-index:-1;
    }
</style>