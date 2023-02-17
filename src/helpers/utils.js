const imagesLoaded = require('imagesloaded');

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => clamp((x - a) * (d - c) / (b - a) + c, Math.min(c,d), Math.max(c,d));

// Map number x from range [a, b] to [c, d]
const mapReverse = (x, a, b, c, d) => clamp((x - a) * (d - c) / (b - a) + c, Math.max(c,d) ,Math.min(c,d));

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

// Clamps a value between an upper and lower bound
const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Gets the mouse position
const getMousePos = e => {
    // console.log('getMousePos', e)
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};

// Map List Item number x from range [a, b] to [c, d]
const mapListItem = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Gets the mouse position List Item
const getMousePosListItem = (e) => {
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    }
    else if (e.clientX || e.clientY)    {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    
    return { x : posx, y : posy }
};

// Generate a random float.
const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // console.log('pre image load', imagesLoaded)
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

// Preload images
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

// Viewport size
const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

// from https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
const isObject = (object) => object != null && typeof object === 'object';
const deepEqual = (object1, object2) => {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (const key of keys1) {
        const val1 = object1[key];
        const val2 = object2[key];
        const areObjects = isObject(val1) && isObject(val2);
        if ( areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2 ) {
            return false;
        }
    }
    return true;
} 

export {
    mapReverse,
    map, 
    lerp, 
    clamp,
    randomNumber,
    getMousePos,
    preloadImages,
    preloadFonts,
    deepEqual,
    calcWinsize,
    mapListItem,
    getMousePosListItem,
    getRandomFloat
};