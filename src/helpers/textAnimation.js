const Charming = require('./modal/charming.min.js');
const {TimelineMax} = require('./modal/TweenMax.min.js');

const MathUtils = {
    lineEq: (y2, y1, x2, x1, currentVal) => {
        const m = (y2 - y1) / (x2 - x1);
        const b = y1 - m * x1;
        return m * currentVal + b;
    },
    lerp: (a, b, n) => (1 - n) * a + n * b,
    getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
};
class ContentItem {
    constructor(el) {
        this.DOM = {el: el};
        this.DOM.title = this.DOM.el.querySelector('.item__content-title');
        // Create spans out of every letter
        Charming(this.DOM.title);
        this.DOM.titleLetters = [...this.DOM.title.querySelectorAll('span')];
        this.titleLettersTotal = this.DOM.titleLetters.length;
        // this.DOM.backCtrl = this.DOM.el.querySelector('.item__content-back');
        this.initEvents()
        this.openItem()
    }
    initEvents() {
        // this.DOM.backCtrl.addEventListener('click', (ev) => {
        //     ev.preventDefault();
        //     menu.closeItem()
        // });
    }
    openItem() {
        const duration = 1.2;
        const delay = .5;
        // const ease = new Ease(BezierEasing(1, 0, 0.735, 0.775));
        const columnsStagger = 0;
        const twwen = new TimelineMax({
            onComplete: () => this.isAnimating = false,
        })
        .set(this.DOM.titleLetters, {
            opacity: 0
        }, delay)
        .staggerTo(this.DOM.titleLetters, duration, {
            ease: Expo.easeOut,
            startAt: {
                cycle: {
                    y: (i,_) => i % 2 == 0 ? MathUtils.getRandomFloat(-35,-15) : MathUtils.getRandomFloat(15,35),
                    rotation: MathUtils.getRandomFloat(-20,0)
                }
            },
            y: 0,
            rotation: 0,
            opacity: 1
        }, -0.01, delay);
    }
    setCurrent() {
        this.DOM.el.classList.add('item--current');
    }
    resetCurrent() {
        this.DOM.el.classList.remove('item--current');
    }
}

export {
    ContentItem
}