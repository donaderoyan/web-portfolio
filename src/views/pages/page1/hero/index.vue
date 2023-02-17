<template>
    <section id="hero" >
        <div class="wrapper">
            <!-- data-scroll data-scroll-repeat -->
            <div anime="hero" class="intro animateTitle" data-scroll>
                <!-- class="enter-y" -->
                <h1>
                    <span class="enter-y delay-1">I'M DONA ADEROYAN.</span>
                    <br/>
                    <span class="enter-y delay-2">a regular IT guy.</span>
                    <!-- <span>{{ tittle }}</span> -->
                </h1>
                <p class="enter-y delay-1">I'M A DEVELOPER AND DESIGNER WITH 8 YEARS OF EXPERIENCES. I LOVE WORKING WITH PEOPLE FROM ALL OVER THE WOLRD TO MAKE THINGS FASTER, BETTER AND EASIER</p>
            </div>

            <div class="detail_box" data-scroll>
                <div class="left enter-y delay-1">
                    <h2>I CAN HELP OUT WITH</h2>
                </div>
                <div class="right">
                    <div class="can_do">

                        <div class="list enter-y delay-3">
                            <li>WEBSITES</li>
                            <li>ui design</li>
                            <li>Animation, Gsap</li>
                            <li>sql, nosql</li>
                            <li>golang, php</li>
                            <li>graphql, rest</li>
                            <li>React, Node, Vue</li>
                            <li>CI/CD</li>
                            <li>docker, kubernetes</li>
                            <li>typescript and javascript</li>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
// import charming from '@/helpers/modal/charming';
export default {
    name: "home-hero",
    data() {
        return {
            tittle: "I'M\tDONA\tADEROYAN.\na\tregular\tIT\tguy."
        }
    },
    methods: {
        // init() {
        //     const wordWrapper = document.querySelector("#hero .intro")
        //     const words = wordWrapper.querySelector("h1 span")
        //     charming(words, {
		// 		setClassName: function (index, letter) {
		// 		  return `word-${index} ${letter == "\t" ? 'space': letter == "\n" ? 'newLine' : ''}`
		// 		}
		// 	  })
        // },
    },
    mounted() {
        // this.init()
    },
}
</script>
<style lang="scss">
    #hero{
        min-height: auto;
        @include min1100px {
            margin-bottom: 3vw;
        }
        @include for-tablet-portrait-up{
            min-height: auto;
        }
        .intro {
            margin: 4rem auto 5vh;
            max-width: 700px;
            h1,p{
                text-align: center;
            }
            h1{
                span{
                    text-transform: uppercase;
                }
            }
            p{
                margin-top: 1.4rem;
                font-size: 2vh;
                line-height: 2.5vh;
            }
            @include max1100px{
                p{
                    font-size: 1.2rem;
                    line-height: 2rem;
                    margin-top: 2rem;
                }
                h1{
                    span{
                        font-size: 2rem;
                    }
                }
            }
            @include max800px{
                max-width: 70%;
            }
            @include max576px{
                max-width: 100%;
            }
            ////////////////////////////////
            @include min1100px {
                margin: 8rem auto 5rem;
                p{
                    margin-top: 4rem;
                    font-size: 1.4rem;
                    line-height: 2.1rem;
                }
            }
            @include min1920px {
                max-width: 1100px;
                margin: 12vh auto 8vh;
                p{
                    margin-top: 4vh;
                    font-size: 2.6vh;
                    line-height: 3.8vh;
                }
            }
            @include min2400px {
                max-width: 1200px;
            }
            @include min3840px {
                max-width: 1800px;
            }
        }

        .detail_box{
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                width: calc(70% - 10px);
                &.left{
                    justify-content: flex-end;
                    flex-direction: column;
                    display: flex;
                    align-items: flex-end;
                    padding-right: 2rem;
                }
            }
            h2{
                font-size: 1.4rem;
                margin-bottom: 1.5rem;
                font-weight: 400;
            }
            @include max1100px{
                h2{
                    font-size: 1.2rem;
                }
                div{
                    width: 80%;
                }
            }
            @include max800px{
                flex-direction: column;
                div{
                    width: 100%;
                    max-width: 440px;
                    &.left{
                        justify-content: center;
                        flex-direction: row;
                        align-items: center;
                        padding-right: 0;
                    }
                }
            }
            @include min1100px {
                h2{
                    font-size: 1.4rem;
                }
            }
            @include min1920px {
                h2{
                    font-size: 2.6vh;
                }
            }
        }

        .list{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            li{
                text-transform: uppercase;
                margin-left: .5rem;
                margin-top: .5rem;
                background: var(--color-dark);
                color: #fff;
                padding: .5rem;
                border-radius: 5px;
            }
            @include max1100px{
                li{
                    font-size: 1rem;
                    line-height: 1.5rem;
                }
            }
            @include max800px{
                justify-content: center;
            }
            @include max576px{

            }
            ////////////////////////////////
            @include min1100px {
                li{
                    font-size: 1rem;
                    line-height: 1.4rem;
                }
            }
            @include min1920px {
                max-width: 1100px;
                li{
                    font-size: 1.4rem;
                    border-radius: .4vh;
                    padding: .8vh 1vh;
                    margin-top: 1rem;
                    margin-left: 1rem;
                }
            }
            @include min2400px {
                li{
                    font-size: 1.6vh;
                    line-height: 2.6vh;
                }
            }
        }

        .can_do{
            margin: auto 5px;
            text-align: center;
            cursor: pointer;
            p{
                &:first-child{
                    font-size: 13vh;
                }
                &:last-child{
                    font-size: 4vh;
                    font-weight: 700;
                }
            }
            @include max800px{
            }
            @include max1100px{
                margin: auto;
            }
        }
    }
</style>