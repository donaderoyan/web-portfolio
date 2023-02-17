<template>
    <section class="about">
        <div class="wrapper">
            <div class="picture_box" data-scroll>
                <div class="pictures">
                    <div class="border enter-y delay-2"></div>
                    <div class="border_btm enter-y delay-3">
                        <p>IT guy of the Month</p></div>
                    <img class="poster1" :src="require('@/assets/pp/poster1-400x700.webp')" alt="regular guy"/>
                    <img class="poster2" :src="require('@/assets/pp/poster2-400x700.webp')" alt="regular"/>
                </div>
                <div class="M-title" data-scroll>
                    <!-- data-scroll data-scroll-delay="0.2" data-scroll-speed="1" data-scroll-repeat -->
                    <h1>
                        <span class="enter-y">A BIT </span>
                        <span class="enter-y delay-03">ABOUT ME</span>
                    </h1>
                </div>
            </div>
            <div class="about_detail">
                <p>
                    Hello! I'm an experienced coder. As a normal "Regular IT Guy" I started my career just after my college graduation, I worked as a web developer for Media Nusantara Citra ( MNC ) one of biggest media industry in Indonesia. My work with Media Nusantara Citra allowed me to working with Okezone and Visionplus.
                    <br/>
                    After years I got chance to work at MileApp that provides a field operation management platform with no-code mobile app builder and worker monitoring features.
                </p>
                <p>
                    As a creative developer, I focus on both design and development — allowing me to work on projects from concept until the very moment we hit publish.
                </p>
            </div>
        </div>
    </section>
</template>
<script>
// const TweenMax = require('@/helpers/modal/TweenMax.min.js');
import gsap from 'gsap';
export default {
    name: "about-component",
    data() {
        return {
            DOM: {},
            tiltconfig: {   
                // title: {translation : {x: [-8,8], y: [4,-4]}},
                // number: {translation : {x: [-5,5], y: [-10,10]}},
                img1: {translation : {x: [-5,5], y: [-5,5]}},
                img2: {translation : {x: [-15,15], y: [-10,10]}}
			},
            allowTilt: true
        }
    },
    methods: {
        getMousePos(e) {
            const body = document.body;
	        const docEl = document.documentElement;
            let posx = 0;
            let posy = 0;
            if (!e) e = window.event;
            if (e.pageX || e.pageY) 	{
                posx = e.pageX;
                posy = e.pageY;
            }
            else if (e.clientX || e.clientY) 	{
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            return { x : posx, y : posy }
        },
        getAngle(el) {
            const st = window.getComputedStyle(el, null);
            const tr = st.getPropertyValue('transform');
            let values = tr.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            return Math.round(Math.asin(values[1]) * (180/Math.PI));
        },
        aboutPhotoInit() {
            this.DOM = {
                tilt: {}
            }
            this.DOM.el = document.querySelector('.picture_box')
            this.DOM.imgWrap = document.querySelector('.picture_box .pictures')
            this.DOM.tilt.img1 = this.DOM.imgWrap.querySelector('.poster1');
            this.DOM.tilt.img2 = this.DOM.imgWrap.querySelector('.poster2');
            // let angle = this.getAngle(DOM.tilt.img[1]);
            this.initEvents();
        },
        initEvents() {
			/**
			 * Mouseenter: 
			 * - Scale up the DOM.bg element.
			 * - Animate the number letters.
			 * 
			 * Mousemove: 
			 * - tilt - move both the number, image and title elements. 
			 * 
			 * 
			 * Mouseleave: 
			 * - Scale down the DOM.bg element.
			 * - Animate the number letters.
			 */
			this.toggleAnimationOnHover = (type) => {
				
			};
			this.mouseenterFn = (ev) => {
				if ( !this.allowTilt ) return;
				// this.toggleAnimationOnHover(ev.type);
            };
            this.mousemoveFn = (ev) => requestAnimationFrame(() => {
				if ( !this.allowTilt ) return;
                this.tilt(ev);
            });
            this.mouseleaveFn = (ev) => {
				if ( !this.allowTilt ) return;
				this.resetTilt();
				// this.toggleAnimationOnHover(ev.type);
            };
            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
		},
		tilt(ev) {
            const body = document.body;
	        const docEl = document.documentElement;
			// Get mouse position.
			const mousepos = this.getMousePos(ev);
            // Document scrolls.
            const docScrolls = {left : body.scrollLeft + docEl.scrollLeft, top : body.scrollTop + docEl.scrollTop};
            const bounds = this.DOM.el.getBoundingClientRect();
            // Mouse position relative to the main element (this.DOM.el).
            const relmousepos = {
                x : mousepos.x - bounds.left - docScrolls.left, 
                y : mousepos.y - bounds.top - docScrolls.top 
            };
            // Movement settings for the tilt elements.
            for (let key in this.DOM.tilt) {
				let t = this.tiltconfig[key].translation;
				// Animate each of the elements..
                gsap.to(this.DOM.tilt[key], {
                    ease: "Expo.easeOut",
                    x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
                    y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
                    duration: 2
                });
            }
		},
		resetTilt() {
			for (let key in this.DOM.tilt ) {
                gsap.to(this.DOM.tilt[key], {
					ease: "Elastic.easeOut.config(1,0.4)",
                    x: 0,
                    y: 0,
                    duration: 2
                });
            }
		}
    },
    mounted() {
        this.aboutPhotoInit()
    },
}
</script>
<style lang="scss">
    .about{
            position: relative;
            max-width: 700px;
            margin: auto;
            margin-top: 10rem;
            @include max800px{
                max-width: 70%;
            }
            @include max576px{
                max-width: 100%;
            }
            @include min1100px {
                max-width: 960px;
            }
            @include min1920px {
                max-width: 1280px;
            }
            @include min2400px {
                max-width: 1680px;
            }
            @include min3840px {
                max-width: 2520px;
            }

            .picture_box{
                position: relative;
                display: flex;
                flex-direction: row;
                justify-items: center;
                align-items: center;
                h2{
                    font-family: var(--font-sans);
                    font-size: 5vh;
                }
                .M-title{
                    position: relative;
                    width: calc(100% - 55vh);
                    @include for-tablet-landscape-up {
                        width: calc(100% - 40vh);
                        h1{
                            span{
                                font-size: 7vh;
                                line-height: 7vh;
                            }
                        }
                    }
                    @include max1100px{
                        width: 40%;
                        h1{
                            span{
                                font-size: 4rem;
                                line-height: 4.4rem;
                            }
                        }
                    }
                    @include max800px{
                        width: 40%;
                        h1{
                            span{
                                font-size: 3rem;
                                line-height: 3.4rem;
                            }
                        }
                    }

                    @include min1100px {
                        h1{
                            span{
                                font-size: 12vh;
                                line-height: 12vh;
                            }
                        }
                    }
                }
            }
            .pictures{
                width: calc(100% - 40vh);
                padding-top: 75%;
                position: relative;
                display: block;
                overflow: hidden;
                margin-bottom: 3rem;
                @include max1100px{
                    width: 65%;
                }
                @include max800px{
                    margin-bottom: 1rem;
                }

                @include for-tablet-landscape-up {
                    width: calc(100% - 25vh);
                }
                img{
                    position: absolute;
                }
                .poster1 {
                    width: 65%;
                    bottom: 5px;
                    left: -1rem;
                }
                .poster2 {
                    width: 50%;
                    right: 2rem;
                    bottom: 5px;
                    z-index: 11;
                }
                .border{
                    position: absolute;
                    width: 90%;
                    height: 100%;
                    border: 2rem solid var(--grid-item-bg);
                    z-index: 10;
                    top: 0;
                    @include max800px{
                        border: 1rem solid var(--grid-item-bg);
                    }
                    @include max576px{
                    }
                    @include min1100px {
                    }
                }
                .border_btm{
                    position: absolute;
                    bottom: -5px;
                    width: 90%;
                    height: 5rem;
                    background: var(--grid-item-bg);
                    z-index: 12;
                    padding-top: 1.5rem;
                    @include max800px{
                        height: 3rem;
                        padding-top: .5rem;
                    }
                    @include min1100px {
                        height: 8vh;
                        padding-top: 2.2vh;
                    }
                    p{
                        position: relative;
                        text-align: center;
                        font-size: 1.2rem;
                        @include max800px{
                            font-size: 1rem;
                        }
                        @include min1920px {
                            font-size: 2.2vh;
                        }
                    }
                }
            }
            .about_detail{
                p{
                    font-size: 1.4rem;
                    line-height: 2.2rem;
                }
                @include max1100px{
                    p{
                        font-size: 1.2rem;
                        line-height: 2rem;
                        margin-top: 2rem;
                    }
                }
                @include max800px {
                    margin-top: 1rem;
                }
                @include min1100px {
                    p{
                        margin-top: 4rem;
                        font-size: 1.4rem;
                        line-height: 2.1rem;
                    }
                }
                @include min1920px {
                    p{
                        margin-top: 4vh;
                        font-size: 2.6vh;
                        line-height: 3.8vh;
                    }
                }
            }
        }
</style>