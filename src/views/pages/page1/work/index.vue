<template>
    <section class="works">
        <div class="wrapper grid-wrap">
            <!-- data-scroll data-scroll-delay="0.6" data-scroll-speed="1" data-scroll-repeat -->
            <h1 data-scroll>
                <span class="enter-y">LATEST WORKS</span>
            </h1>
            <!-- <p>{{ getWorksData[0]['title'] }}</p> -->
            <div class="grid">
                <template v-if="getWorksData.length > 0">
                    <li v-for="(item, key) in getWorksData" :key="key" class="grid__item" data-scroll data-scroll-offset="50">
                        <router-link :to="`/work/${item.slug}`" class="enter-y delay-03">
                            <div class="grid__item-bg"></div>
                            <div class="grid__item-title">
                                <h2>{{ item.title }}</h2>
                                <div class="tools">
                                    <li v-for="(tool, keytools) in item.tools" :key="keytools">
                                        {{ tool }}
                                    </li>
                                </div>
                            </div>
                            <div class="grid__item-wrap">
                                <img class="grid__item-img" :src="require('@/assets'+item.poster)" alt="Some image" />
                            </div>
                            <h3 class="grid__item-role">{{ item.role }}</h3>
                            <h4 class="grid__item-number">{{ item.cat }}</h4>
                        </router-link>
                    </li>
                </template>
            </div>
        </div>
    </section>
</template>
<script>
import {Grid} from "@/helpers/modal/index.js"
import { mapGetters } from 'vuex';
export default {
    name:"works",
    props: {
        dataGrid: Array
    },
    computed:{
        ...mapGetters('works', ['getWorksData']),
    },
    data() {
        return {
        }
    },
    mounted() {
        this.$nextTick(()=>{
            let el = document.querySelector('.grid')
            const grid = new Grid(document.querySelector('.grid'));
        })
    }
}
</script>
<style lang="scss">
    .works{
        margin-top: 10rem;
        @include max1100px{
            margin-top: 5rem;
        }
        @include for-tablet-landscape-up{
            margin-top: 6rem;
        }
        h1{
            text-align: center;
            @include max1100px{
                span{
                    font-size: 2rem;
                }
            }
        }
        .grid{
            margin-top: 8rem;
            @include for-tablet-landscape-up{
                margin-top: 6rem;
                .grid__item-title h2 {
                    font-size: 1.6rem;
                }
                .grid__item-role{
                    margin: 0 0 0 -0.8rem;
                    font-size: 1.4rem;
                }
                .grid__item-number{
                    font-weight: 400;
                    font-size: 1.6rem;
                    margin: 0 0 0.85rem;
                }
            }
            @include max1100px{
                margin-top: 4rem;
                .grid__item{
                    padding: 1.75rem;
                    padding-bottom: 4.75rem;
                }
                .grid__item-title h2 {
                    font-size: 1.6rem;
                }
                .grid__item-number{
                    font-weight: 400;
                    font-size: 1.6rem;
                    margin: 0 0 0.85rem;
                }
            }
            @include max800px{
                .grid__item{
                    padding: 1.75rem;
                    padding-bottom: 4.75rem;
                    width: calc(100% - 6rem);
                    max-width: 400px;
                }
                .grid__item-title h2 {
                    font-size: 1.2rem;
                }
                .grid__item-role{
                    margin: 0 0 0 -0.8rem;
                    font-size: 1.2rem;
                }
                .grid__item-number{
                    font-weight: 400;
                    font-size: 1.2rem;
                    margin: 0 0 0.85rem;
                    margin-right: -1.5rem;
                }
            }

            @include min1920px{
                .grid__item-number{
                    font-weight: 400;
                    font-size: 2.6vh;
                    margin: 0 0 0.85rem;
                }
                .grid__item-title {
                    h2{
                        font-size: 3.6vh;
                    }
                }
                .grid__item-role{
                    margin: 0 0 0 -0.8rem;
                    font-size: 2.6vh;
                }
            }
        }
        .tools{
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            li{
                text-transform: uppercase;
                margin-left: .5rem;
                margin-top: .5rem;
                color: var(--color-dark);
                padding: .5rem;
                border-radius: 5px;
                border: 1px solid #a9a9a9;
                &:first-of-type{
                    margin-left: 0;
                }
            }
            @include max1100px{
                li{
                    font-size: .7rem;
                    line-height: 1.3rem;
                    padding: 0.1rem 0.6rem;
                }
            }
            @include max800px{
                // justify-content: center;
                li{
                    padding: 0.18rem 0.8rem;
                }
            }
            @include max576px{

            }
            ////////////////////////////////
            @include min1100px {
                li{
                    font-size: .8rem;
                    line-height: 1.3rem;
                }
            }
            @include min1920px {
                max-width: 1100px;
                li{
                    font-size: 1rem;
                    border-radius: .4vh;
                    padding: .5vh 1vh;
                    margin-top: .5rem;
                    margin-left: 1rem;
                }
            }
            @include min2400px {
                li{
                    font-size: 1.2vh;
                    line-height: 1.8vh;
                }
            }
        }
    }
</style>