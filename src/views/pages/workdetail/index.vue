<template>
    <section class="work__detail">
        <div class="wrapper">
            <article class="item layout1" data-scroll>
                <template v-if="isMobile()">
                    <div class="mobile">
                        <template v-for="(item, key) in detail['imgs']" :key="key">
                            <div class="item__content" v-if="key == 0">
                                <div class="item__content-wrap">
                                    <!-- <a @click="goback()" href="javascript:void(0)" class="item__content-back enter-y delay-03">back</a> -->
                                    <p class="year enter-y delay-03">{{ detail.year }}</p>
                                    <h2 class="item__content-title">{{ detail.title }}</h2>
                                    <div class="item__content-inf">
                                        <li class="enter-y delay-03">
                                            <p class="tools"><span v-for="(item, key) in detail.tools" :key="key">{{ item }}</span></p>
                                            <span>tools</span>
                                        </li>
                                        <li class="enter-y delay-1">
                                            <p>{{ detail.role }}</p>
                                            <span>role</span>
                                        </li>
                                        <li class="enter-y delay-2">
                                            <p>{{ detail.agency }}</p>
                                            <span>agency</span>
                                        </li>
                                        <li class="enter-y delay-3">
                                            <p><a :href="detail.website">{{ detail.website }}</a></p>
                                            <span>website</span>
                                        </li>
                                    </div>
                                </div>
                            </div>
                            <img class="fullwidth enter-y delay-03" :src="require(`@/assets${item}`)" :alt="detail.title">
                        </template>
                    </div>
                </template>
                <template v-else>
                    <template v-for="(item, key) in detail['imgs']" :key="key">
                        <img :class="(key > 1) ? 'fullwidth enter-y delay-03' : key == 1 ? 'enter-y delay-03' : 'enter-y'" :src="require(`@/assets${item}`)" :alt="detail.title">
                        <div class="item__content" v-if="key == 1">
                            <div class="item__content-wrap">
                                <!-- <a @click="goback()" class="item__content-back enter-y delay-03">back</a> -->
                                <p class="year enter-y delay-03">{{ detail.year }}</p>
                                <h2 class="item__content-title">{{ detail.title }}</h2>
                                <div class="item__content-inf">
                                    <li class="enter-y delay-03">
                                        <p class="tools"><span v-for="(item, key) in detail.tools" :key="key">{{ item }}</span></p>
                                        <span>tools</span>
                                    </li>
                                    <li class="enter-y delay-1">
                                        <p>{{ detail.role }}</p>
                                        <span>role</span>
                                    </li>
                                    <li class="enter-y delay-2">
                                        <p>{{ detail.agency }}</p>
                                        <span>agency</span>
                                    </li>
                                    <li class="enter-y delay-3">
                                        <p><a :href="detail.website">{{ detail.website }}</a></p>
                                        <span>website</span>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
                
            </article>

            <div class="nav wrapper">
                <div class="left">
                    <template v-if="currentIndex !== null && getWorksData[(currentIndex - 1)] !== undefined">
                        <a @click="redirectReload(`/work/${getWorksData[(currentIndex - 1)]['slug']}`)">
                            <span>PREVIOUS</span>
                            <span>
                                <strong>{{ getWorksData[(currentIndex - 1)]['title'] }}</strong>
                            </span>
                        </a>
                    </template>
                </div>
                <div class="right">
                    <template v-if="currentIndex !== null && getWorksData[(currentIndex + 1)] !== undefined">
                        <a @click="redirectReload(`/work/${getWorksData[(currentIndex + 1)]['slug']}`)">
                            <span>NEXT</span>
                            <span>
                               <strong>{{ getWorksData[(currentIndex + 1)]['title'] }}</strong>
                            </span>
                        </a>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex';
import {ContentItem} from '@/helpers/textAnimation.js'
export default {
    name: "work",
    computed:{
        ...mapGetters('works', ['getWorksData']),
    },
    data() {
        return {
            detail: {},
            currentIndex: null
        }
    },
    // watch: {
    //     $route (to){
    //         this.init()
            
    //     }
    // },
    methods: {
        isMobile(){
            // // device detection is mobile      
            // let check = false;
            //     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            // return check;
            return ( ( window.innerWidth <= 800 ) );
        },
        init() {
            return new Promise((resolve) => {
                let slug = this.$route.params['slug']
                let contentData = this.getWorksData.filter(item => item.slug == slug)
                this.detail = contentData[0]

                let index = this.getWorksData.findIndex( item => item.slug == slug );
                this.currentIndex = index
                console.log("get index", index)
                // setTimeout(resolve, 100);
                resolve()
            })
        },
        redirectReload(str) {
            this.$router
            .push({ path: str })
            .then(() => { this.$router.go() })
        },
        animate() {
            const workDetail = document.querySelector('.work__detail')
            const item = workDetail.querySelector('.item')
            const contentItems = new ContentItem(item);
        },
        goback() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.init().then(res => {
            this.animate()
        })
    },
}
</script>
<style lang="scss">
    .work__detail{
        min-height: 100vh;
        @include min1100px {
            padding-top: 4rem;
        }
        @include max800px{
            // padding-top: 4rem;
        }
        @include min1100px {
            margin-bottom: 3vw;
        }
        @include for-tablet-portrait-up{
            min-height: auto;
        }
        .item__content-back{
            cursor: pointer;
        }
        .item__content{
            font-size: 1vw;
            display: flex;
            justify-content: flex-end;
            .tools{
                span{
                    margin-left: 1rem;
                    &:first-of-type{
                        margin-left: 0;
                    }
                }
            }
            .item__content-wrap{
                position: relative;
                width: 50%;
                padding: 1rem;
                @include max800px{
                    width: 100%;
                    padding: 0;
                }
            }
            @include max800px{
                font-size: .8rem;
            }
        }
        .item__content-inf{
            li {
                // border-top: 1px solid #eee;
                border-top: 1px solid var(--color-dark);
                padding: 1.1vw 0;
                @include max800px{
                    padding: 1rem 0;
                }
            }
            p{
                font-weight: 700;
                @include max800px{
                    margin-bottom: .5rem;
                }
            }
        }
        .item{
            margin: 4rem auto 5vh;
            max-width: 1200px;
            display: flex;
            flex-wrap: wrap;
            text-transform: uppercase;
            @include max800px{
                margin-top: 1rem;
            }
            img{
                padding: 1rem;
            }
            &.layout1{
                img{
                    width: 50%;
                    &.fullwidth{
                        width: 100%;
                    }
                }
                .item__content{
                    width: 100%;
                    padding: 1rem;
                    @include max800px{
                        font-size: .8rem;
                        padding: 0;
                    }
                }
            }
            .year{
                font-weight: 700;
                margin: 1rem 0;
            }
        }
        .nav{
            margin: 4rem auto 5vh;
            max-width: calc(1200px - 2rem);
            display: flex;
            text-transform: uppercase;
            justify-content: space-between;
            padding: 1rem;
            position: relative;
            padding-top: 4rem;
            border-top: 2px solid var(--color-dark);
            a{
                cursor: pointer;
                span{
                    position: relative;
                    font-size: 1vw;
                    &:last-child{
                        display: block;
                        font-size: 1.4vw;
                    }
                }
            }
            .right{
                a {
                    display: block;
                    text-align: right;
                }
            }
        }
        .item__content-title {
            font-size: 2.5vw;
            span{
                opacity: 0;
            }
            @include min1100px {
                font-size: 2.5vw;
            }
            @include max800px{
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
        }
    }
</style>