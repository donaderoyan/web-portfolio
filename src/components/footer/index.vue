<template>
    <footer id="footer" class="is-footer" data-scroll data-scroll-offset="15%, 10%">
        <div class="footer-w">
            <div class="footer-container">
                <div id="meta1" class="footer-meta margin-mobile enter-y delay-1">Designer and Webflow Developer<br>Portfolio 2022 –&nbsp;2023</div>
                <div id="meta2" class="footer-name enter-y delay-1">DONA ADEROYAN &trade;</div>
                <div id="meta3" class="footer-meta is--right enter-y delay-1">I'm also available for small and<br>short-term projects.</div>
                <div id="meta4" class="footer-center">
                    <div anime="footer" class="footer-center_title animateTitle">
                        <!-- <h1><span>Interested&nbsp;in&nbsp;working&nbsp;<br>together?</span></h1> -->
                        <h1>
                            <span class="enter-y delay-1">
                                Interested in working
                            </span>
                            <br/>
                            <span class="enter-y delay-2">
                                together
                            </span>
                        </h1>
                        <!-- <h1><span>{{ tittle }}</span></h1> -->
                    </div>
                    <div class="footer-center_cta">
                            <div class="footer-meta enter-y delay-1">Drop me an email:</div>
                            <a href="mailto:contact@donaderoyan.com" class="mailme footer-link w-inline-block enter-y delay-2">
                                <div class="footer-link_arrow-w">
                                    <img :src="require('@/assets/pixel-arrow-white.png')" loading="lazy" width="14" height="13" alt="black arrow" class="footer-link_arrow">
                                </div>
                                <div class="email">donaderoyan@gmail.com</div>
                            </a>
                    </div>
                </div>
                <div id="meta5" class="footer-meta_item">
                    <div class="footer-meta hide-mobile"><span class="enter-y delay-2">Design by: Dona Aderoyan</span><br><span class="enter-y delay-3">Development by: Dona Aderoyan</span></div>
                </div>
                <div id="meta6" class="footer-btns">
                   
                </div>
                <div id="meta7" class="footer-meta_item">
                    <a class="back-top_btn w-inline-block">
                        <div class="footer-meta is--right enter-y delay-2">Back to top</div>
                        <div class="back-top_arrow-w enter-y delay-2">
                            <img :src="require('@/assets/arrow-up-white.png')" loading="lazy" height="12" width="12" alt="arrow pointing upwards" class="back-top_arrow">
                            <img :src="require('@/assets/arrow-up-white.png')" loading="lazy" height="12" width="12" alt="arrow pointing upwards" class="back-top_arrow">
                        </div>
                    </a>
                    <div class="footer-meta is--right enter-y delay-2">©2022 – All Rights Reserved</div>
                </div>
            </div>
            <div class="footer-bg"></div>
        </div>
    </footer>
</template>
<script>
import gsap from "gsap";
// import charming from "@/helpers/modal/charming";
export default {
    name: "main-footer",
    data() {
        return {
            tittle: "Interested\tin\tworking\ntogether?"
        }
    },
    methods: {
        // init() {
        //     const wordWrapper = document.querySelector(".footer-center_title")
        //     const words = wordWrapper.querySelector("h1 span")
        //     charming(words, {
		// 		setClassName: function (index, letter) {
		// 		  return `word-${index} ${letter == "\t" ? 'space': letter == "\n" ? 'newLine' : ''}`
		// 		}
		// 	  })
        // },
        hoverAnim() {
            const textWrap = document.querySelector(".mailme");
            const email = textWrap.querySelector(".email")
            const arrowPixel = textWrap.querySelector('img')
            const animation = gsap.from(arrowPixel, {
                paused: true,
                opacity: 0,
                rotation: 45,
                y:"-1.2rem",
                duration: .3,
            });
            // Text
            const emailAnim = gsap.from(email, {
                paused: true,
                opacity: .6,
                duration: .3
            })

            textWrap.addEventListener("mouseenter", () => {
                animation.play()
                emailAnim.play()
            });
            textWrap.addEventListener("mouseleave", () => {
                animation.reverse()
                emailAnim.reverse()
            });
        },
        backTop(){
            const triggerRef = document.querySelector(".back-top_btn")
            const text = triggerRef.querySelector(".footer-meta")
            const arrowsBox = document.querySelector(".back-top_arrow-w")
            
            // Arrows
            const arrows = []
            const anim = (el) => {
                return gsap.to(el, {
                    paused: true,
                    // opacity: 0,
                    y:"-100%",
                    duration: .3,
                });
            }
            Array.from(arrowsBox.querySelectorAll('img')).forEach(img => {
                arrows.push(anim(img))
			});

            // Text
            const textAnim = gsap.to(text, {
                paused: true,
                opacity: .6,
                duration: .3
            })

            triggerRef.addEventListener("mouseenter", () => {
                arrows.forEach(el => {
                    el.play()
                })
                textAnim.play()
                // animation.play()
            });
            triggerRef.addEventListener("mouseleave", () => {
                arrows.forEach(el => {
                    el.reverse()
                })
                textAnim.reverse()
                // animation.reverse()
            });
        }
    },
    mounted() {
        // this.init()
        this.hoverAnim()
        this.backTop()
    },
}
</script>
<style lang="scss">
    .is-footer{
        // background: #333;
        display: flex;
        width: 100%;
        height: 100vh;
        padding: 2.5rem 2rem;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;

        color: #fff;
        a{
            color: #fff;
        }
    }
    .back-top_btn{
        cursor: pointer;
        display: flex;
        margin-left: auto;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        grid-column-gap: 0.5em;
        grid-row-gap: 0.5em;
        justify-content: flex-end;
        @include max800px{
            justify-content: center;
        }
    }
    .back-top_arrow-w{
        display: flex;
        overflow: hidden;
        width: .8em;
        height: .8em;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        @include min1100px {
            width: 1em;
            height: 1em;
        }
        @include min1920px {
            width: .6vw;
            height: .6vw;
        }
        @include min2400px {

        }
        @include min3840px {

        }
    }
    .footer-w{
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;
        height: 100%;
        padding: 1.5rem 1.25rem;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .footer-container{
        position: relative;
        z-index: 1;
        display: -ms-grid;
        display: grid;
        width: 97%;
        height: 97%;
        -webkit-align-content: space-between;
        -ms-flex-line-pack: justify;
        align-content: space-between;
        grid-auto-columns: 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        -ms-grid-columns: 0.35fr 1fr 0.35fr;
        grid-template-columns: 0.35fr 1fr 0.35fr;
        -ms-grid-rows: 0.25fr 1fr 0.25fr;
        grid-template-rows: 0.25fr 1fr 0.25fr;
        @include max800px{
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            justify-items: center;
            -webkit-align-content: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            grid-auto-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
            -ms-grid-rows: -webkit-max-content -webkit-max-content auto -webkit-max-content -webkit-max-content -webkit-max-content;
            -ms-grid-rows: max-content max-content auto max-content max-content max-content;
            grid-template-rows: -webkit-max-content -webkit-max-content auto -webkit-max-content -webkit-max-content -webkit-max-content;
            grid-template-rows: max-content max-content auto max-content max-content max-content;
            text-align: center;
        }
        #meta1{
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
        }
        #meta2{
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-column-align: center;
            justify-self: center;
        }
        #meta3{
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-column-align: end;
            justify-self: end;
            @include max800px{
                -ms-grid-column-align: center;
                justify-self: center;
            }
        }
        #meta4{
            -ms-grid-column: span 3;
            grid-column-start: span 3;
            -ms-grid-column-span: 3;
            grid-column-end: span 3;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-column-align: center;
            justify-self: center;
            -ms-grid-row-align: center;
            align-self: center;
            @include max800px{
                -ms-grid-column: span 1;
                grid-column-start: span 1;
                -ms-grid-column-span: 1;
                grid-column-end: span 1;
            }
        }
        #meta5{
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-row-align: end;
            align-self: end;
            -ms-grid-column-align: start;
            justify-self: start;
        }
        #meta6{
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-column-align: stretch;
            justify-self: stretch;
            -ms-grid-row-align: end;
            align-self: end;
        }
        #meta7{
            -ms-grid-column: span 1;
            grid-column-start: span 1;
            -ms-grid-column-span: 1;
            grid-column-end: span 1;
            -ms-grid-row: span 1;
            grid-row-start: span 1;
            -ms-grid-row-span: 1;
            grid-row-end: span 1;
            -ms-grid-row-align: end;
            align-self: end;
            -ms-grid-column-align: end;
            justify-self: end;
            @include max800px{
                -ms-grid-column-align: center;
                justify-self: center;
                -webkit-box-ordinal-group: 8;
                -webkit-order: 7;
                -ms-flex-order: 7;
                order: 7;
            }
        }
    }
    .footer-center_cta{
        text-align: center;
    }
    .footer-center{
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        max-width: 700px;
        @include max800px{
            max-width: 500px;
        }
        @include max576px{
            
        }
        @include min1920px {
            max-width: 1000px;
        }
        @include min2400px {
            max-width: 1400px;
        }
    }
    .footer-link_arrow-w{
        position: absolute;
        left: 0;
        overflow: hidden;
        width: .5em;
        -webkit-transform: translate(-150%,0);
        -ms-transform: translate(-150%,0);
        transform: translate(-150%,0);
        .footer-link_arrow{
            width: 100%;
        }
        img{
            transform: rotateZ(-45deg) translateY(-.1rem);
            opacity: 1;
        }
    }
    .footer-link{
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 1.5em;
        @include max800px{

        }
        @include min1920px {
            font-size: 2vh;
            line-height: 2.8vh;
        }
    }
    .footer-meta{
        &.is--right{
            text-align: right;
        }
        
        @include max800px{
            font-size: 1.2rem;
            line-height: 1.8rem;
            &.hide-mobile{
                display: none;
            }
            &.margin-mobile{
                margin-bottom: 1rem;
            }
            &.is--right{
                text-align: center;
            }
        }
        @include min1100px {
            font-size: 1.2rem;
            line-height: 2.1rem;
        }
        @include min1920px {
            font-size: 1.8vh;
            line-height: 2.4vh;
        }
        @include min2400px {

        }
        @include min3840px {

        }
    }
    .footer-name{
        @include max800px{
            display: none;
        }
        @include min1100px {
            font-size: 1.4rem;
            line-height: 2.1rem;
        }
        @include min1920px {
            font-size: 2vh;
            line-height: 2.8vh;
        }
    }
    .footer-center_title{
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        padding: 1.5rem;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        h1{
            span{
                font-size: 3vw;
                line-height: 3.3vw;
                @include max800px{
                    padding-right: 0;
                    padding-left: 0;
                    // font-size: 3vw;
                    // line-height: 4vw;
                    font-size: 4vw;
                    line-height: 4.8vw;
                }
                @include max576px{
                    font-size: 5vw;
                    line-height: 7vw;
                }
            }
        }
        
    }
    .footer-bg{
        position: absolute;
        z-index: 0;
        width: 110%;
        height: 110%;
        border-radius: 3vw;
        // background-color: var(--grid-item-bg);
        background-color: var(--color-dark);;
        @include max576px{
            width: 115%;
            height: 115%;
        }
    }
</style>
