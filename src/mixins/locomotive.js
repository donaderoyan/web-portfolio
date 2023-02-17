import _ from "lodash";
// import { store, mutations } from "~/store/store.js";
import locomotiveScroll from "locomotive-scroll";
// import { mapGetters } from 'vuex';
import {preloadImages, preloadFonts, clamp, map} from '@/helpers/utils.js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
// import Charming from "@/helpers/modal/charming.min.js";
// import Cursor from '@/helpers/cursor';
const OFFSET = 100;
const NAVBARLOGOFFSET = 250;

gsap.registerPlugin(ScrollTrigger);
const ST = ScrollTrigger

const MathUtils = {
  lineEq: (y2, y1, x2, x1, currentVal) => {
      const m = (y2 - y1) / (x2 - x1);
      const b = y1 - m * x1;
      return m * currentVal + b;
  },
  lerp: (a, b, n) => (1 - n) * a + n * b,
  getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};

export default {
  data() {
    return {
      scrollPosition: 0,
      lmS: null,
      cursor:null,
      footerView: false
      // horizontalScroll: null
    };
  },
  watch: {
    $route (to, from){
      this.lmS.destroy();
      ST.killAll();
      // this.$store.dispatch('setPreLoading', true)

      // this.$store.dispatch('setScrollPosition', false)
      // this.$store.dispatch('setScrollPositionLogoNavbar', false)
      // this.$store.dispatch('setScrollDirection', false)
      let self = this
      this.$nextTick(
        function() {
          self.initialize().then(() => {
            ST.refresh()
            self.initScrollTrigger()
            self.animateFooter()
            self.animateNavbar()
            // if( document.querySelector('body').classList.contains('loading') ) {
            //   document.querySelector('body').classList.remove('loading')
            // }
            // document.querySelector('body').classList.add('loaded')
          })
          // this.onLmsResize()
          // console.log("destroy",ScrollTrigger);
        }.bind(this)
      );
    }
  },
  mounted() {
    let self = this
    this.$nextTick(
      function() {
        // console.log('MOUNTED')
        self.initialize().then(() => {
          self.initScrollTrigger()
          self.animateFooter()
          self.animateNavbar()
          // self.animateHeroList()
          // self.animateTitle()

          if( document.querySelector('body').classList.contains('loading') ) {
            document.querySelector('body').classList.remove('loading')
          }
          document.querySelector('body').classList.add('loaded')
        })
      }.bind(this)
    );
  },
  destroyed() {
    // this.lmS.destroy();
    // window.removeEventListener("resize", this.onLmsResize);
    // this.cursor.reset();
  },
  computed: {
    // ...mapGetters(['getScrollPositionTop', 'getScrollLogoNavbarPositionTop']),
  },
  methods: {
    initialize() {
      return new Promise((resolve, reject) => {
        const pageContainer = document.querySelector('[data-scroll-container]');
        if(pageContainer == null) {return}
        let self = this
        this.lmS = new locomotiveScroll({
            el: pageContainer,
            smooth: true,
            getDirection: true,
            smartphone: {smooth: true},
            tablet: {smooth: true}
        });

        let backtop = document.querySelector(".back-top_btn");
        backtop.addEventListener("click", function() {
          self.lmS.scrollTo(0, {
            duration : 800
          })
        });

        setTimeout(() => {
          new ResizeObserver(() => {
            self.lmS.update()
            // console.log("update")
            resolve(true)
          }).observe(document.querySelector("[data-scroll-container]"))
        }, 2000)
        
      })
          // Promise.all([preloadImages('img')]).then(() => { //preloadFonts('vxy2fer')

              // const duration = 1.2;
              // const delay = .5;
              // const titleWrap = document.querySelectorAll('.animateTitle');
              // console.log('titleWrap', titleWrap)
              // Array.from(titleWrap).forEach(itemEL => {
              //   console.log('itemEL',itemEL)
              //   const elSpan = itemEL.querySelector('h1 span')
              //   Charming(elSpan);
              //   const letters = [...elSpan.querySelectorAll('span')];

              //   gsap.timeline({
              //     scrollTrigger: {
              //       trigger: ".animateTitle",
              //       scroller: pageContainer,
              //       // scrub: true,
              //       start: "top bottom",
              //       end: "top top",
              //       // onUpdate: self => console.log(self.direction)
              //     },
              //     onComplete: () => console.log('anim title', itemEL),
              //   })
              //   .set(letters, {
              //     opacity: 0
              //   }, delay)
              //   .to(letters, {
                    
              //       ease: Expo.easeOut,
              //       startAt: {
              //         y: (i,_) => i % 2 == 0 ? MathUtils.getRandomFloat(-35,-15) : MathUtils.getRandomFloat(15,35),
              //         rotation: MathUtils.getRandomFloat(-20,0)
              //       },
              //       y: 0,
              //       rotation: 0,
              //       opacity: 1
              //   })
              // })
              
                
              // onscroll event
              // this.lmS.on("scroll", _.throttle(this.onLmsScroll, 150));
              // this.lmS.on("scroll", _.throttle(this.onScrollEffect, 150));
              
              // // this.lmS.on('call', this.handler)

              // // Remove loader (loading class)
              // // let hasloading = document.body.classList.contains('loading')
              // // setTimeout(() => {
              // //   if (hasloading) {}
              // // }, 400)
              // document.body.classList.remove('loading');


              // Initialize custom cursor
              // const cursor = new Cursor(document.querySelector('.cursor'));
              // this.cursor = cursor;
          
              // Mouse effects on all links and others
              // [...document.querySelectorAll('a,h2,h1,p,.gallery__item-img,.title-img__inner,.gallery__item-number')].forEach(link => {
              //     link.addEventListener('mouseenter', () => cursor.enter());
              //     link.addEventListener('mouseleave', () => cursor.leave());
              // });


              // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
              // ScrollTrigger.addEventListener("refresh", () => this.lmS.update());

              // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
              
          // });
    },
    initScrollTrigger() {
      // console.log('INIT ST')
      const pageContainer = document.querySelector('[data-scroll-container]');
      let self = this
      this.lmS.on("scroll", ST.update);

      ST.scrollerProxy(pageContainer, {
        scrollTop(value) {
          return arguments.length ? self.lmS.scrollTo(value, 0, 0) : self.lmS.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
      });

      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      // ST.addEventListener("refresh", () => this.lmS.update());
      ST.defaults({ scroller: pageContainer });

      // ST.refresh();
    },

    animateNavbar(){
      const pageContainer = document.querySelector('[data-scroll-container]');
      const body = document.querySelector("body")
      const nav = document.querySelector('.menu-wrapper')
      let temp = 1
      gsap.to(".menu-wrapper", {
        scrollTrigger: {
          trigger: pageContainer,
          // scroller: pageContainer,
          // markers: true,
          toggleActions: "play none none complete",
          start: "top bottom",
          // end: "top top",
          onUpdate: self => {
            if(self.direction == 1 && temp !== self.direction && temp !== null) {
              // console.log("DOWN",self.direction)
              gsap.to('.menu-wrapper', {
								ease: "Expo.easeOut",
								// startAt: {y: pos % 2 == 0 ? '70%' : '-70%', opacity: 0},
								y: '-100%',
								opacity: 1,
								duration: .3
							});
            } else if(self.direction == -1 && temp !== self.direction && temp !== null) {
              // console.log("UP",self.direction)
              gsap.to('.menu-wrapper', {
								ease: "Expo.easeOut",
								// startAt: {y: pos % 2 == 0 ? '70%' : '-70%', opacity: 0},
								y: '0',
								opacity: 1,
								duration: .3
							});
            }
            temp = self.direction
          }
        },
        // y: "0",
        opacity: 1,
      })
    },

    animateFooter() {
      ST.refresh()
      // FOOTER BG ANIMATION
      const pageContainer = document.querySelector('[data-scroll-container]');
      gsap.to(".footer-bg", {
        scrollTrigger: {
          trigger: ".is-footer",
          scroller: pageContainer,
          scrub: true,
          // markers: true,
          start: "top bottom",
          end: "top top",
          // onUpdate: self => console.log(self.direction)
        },
        scaleX: .9,
        scaleY: .9,
        'border-radius': 0,
        // transformOrigin: "left center",
        ease: "none"
      });
    },

    animateHeroList() {
      const pageContainer = document.querySelector('[data-scroll-container]');
      const hero = document.querySelector('#hero')
      const list = hero.querySelector('.list')
      const item = [...list.querySelectorAll('li')]
      item.forEach((item, pos) => {
        gsap.to(item, {
          scrollTrigger: {
            trigger: list,
            scroller: pageContainer,
            // scrub: true,
            markers: true,
            toggleActions: "play none none complete",
            start: "top bottom",
            end: "top top",
            // onUpdate: self => console.log(self.direction)
          },
          ease: Quad.easeIn,
					delay: pos*.05,
          y: "-50%",
          opacity: 0,
					duration: .2,
						onComplete: () => {
							gsap.to(item, {
								// ease: Elastic.easeOut.config(1,0.4),
								startAt: {y: '70%', opacity: 1},
								y: '0%',
								// opacity: 1,
								duration: pos % 2 == 0 ? .3 : .6
							});
						}
        })
      })
    },

    animateTitle() {
      // const duration = 1.2;
      const delay = .5;
      const pageContainer = document.querySelector('[data-scroll-container]');
      const titleWrap = document.querySelectorAll('.animateTitle');
      Array.from(titleWrap).forEach((item) => {
        
        const elSpan = item.querySelector('h1 span')
        const letters = [...elSpan.querySelectorAll('span')];
        const trigger = item.getAttribute('anime');
        // let trigger = 
        console.log('item',item, trigger)
        console.log('letters ',letters)

        letters.forEach((letter,pos) => {
          gsap.to(letter, {
            scrollTrigger: {
              trigger: trigger,
              scroller: pageContainer,
              // scrub: true,
              markers: true,
              toggleActions: "restart none none complete",
              start: trigger == 'hero' ? "top bottom" : "top bottom",
              end: trigger == 'hero' ? "top bottom" : "top top",
              // onUpdate: self => console.log(self.direction)
            },
						ease: Quad.easeIn,
						delay: pos*.03,
						y: pos % 2 == 0 ? '-50%' : '50%',
						opacity: 0,
						duration: .2,
						onComplete: () => {
							gsap.to(letter, {
								ease: pos % 2 == 0 ? Expo.easeOut : Elastic.easeOut.config(1,0.4),
								startAt: {y: pos % 2 == 0 ? '70%' : '-70%', opacity: 0},
								y: '0%',
								opacity: 1,
								duration: pos % 2 == 0 ? .3 : .6
							});
						}
					});
        })

      })
    },
    // footerOnview() {
    //   this.footerView = !this.footerView
    //   // console.log("footer is on view", this.footerView)
    // },
    onLmsResize() {
      if (this.lmS == null) return
      
      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ST.addEventListener("refresh", () => this.lmS.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ST.refresh();
    }
  }
};
