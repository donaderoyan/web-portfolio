// eslint-disable-next-line no-unused-vars
const works = {
    namespaced: true,
    state: {
        worksData: [
            {
                title: "BBUMBU",
                slug: "bbumbu",
                role: "DEVELOPER AND DESIGNER",
                tools: ['VUE', 'ANIME.JS'],
                agency: "PT BBumboen Jaya",
                year: "2022",
                cat: "WEBSITE",
                website: "https://www.bbumbu.com/",
                poster: "/works/bbumbu/bbumbu-2-644x850.webp",
                imgs: [
                    "/works/bbumbu/bbumbu-1-1200x900.webp",
                    "/works/bbumbu/bbumbu-2-1200x900.webp",
                    "/works/bbumbu/bbumbu-3-1200x900.webp"
                ],
                desc: [""]
            },
            {
                title: "BLIBLI",
                slug: "blibli",
                role: "DEVELOPER",
                tools: ['VUE', "GOLANG"],
                agency: "PT Global Digital Niaga",
                year: "2022",
                cat: "ECOMMERCE",
                website: "https://www.blibli.com/",
                poster: "/works/blibli/blibli-3-644x850.webp",
                imgs: [
                    "/works/blibli/blibli-1-1200x900.webp",
                    "/works/blibli/blibli-2-1200x900.webp",
                    "/works/blibli/blibli-3-1200x900.webp"
                ],
                desc: [""]
            },
            {
                title: "MILEAPP",
                slug: "mileapp",
                role: "DEVELOPER",
                tools: ['VUE'],
                agency: "MileApp - Logistics Platform & Optimization",
                year: "2019 - 2022",
                cat: "WEB\nAPPLICATION",
                website: "https://mile.app/",
                poster: "/works/mileapp/mileapp-3-644x850.webp",
                imgs: [
                    "/works/mileapp/mileapp-1-1200x900.webp",
                    "/works/mileapp/mileapp-2-1200x900.webp",
                    "/works/mileapp/mileapp-3-1200x900.webp"
                ],
                desc: [""]
            },
            {
                title: "OKEZONE",
                slug: "okezone",
                role: "DEVELOPER",
                tools: ['PHP', 'LARAVEL'],
                agency: "MNC - Media Nusantara Citra",
                year: "2016 - 2019",
                cat: "WEBSITE",
                website: "https://www.okezone.com/",
                poster: "/works/okezone/okezone-3-644x850.webp",
                imgs: [
                    "/works/okezone/okezone-1-1200x900.webp",
                    "/works/okezone/okezone-2-1200x900.webp",
                    "/works/okezone/okezone-3-1200x900.webp"
                ],
                desc: [""]
            },
            {
                title: "VISIONPLUS",
                slug: "visionplus",
                role: "DEVELOPER",
                tools: ['VUE', 'QUASAR', 'PHP'],
                agency: "MNC - Media Nusantara Citra",
                year: "2019",
                cat: "STREAMING\nMEDIA",
                website: "https://www.visionplus.id/",
                poster: "/works/visionplus/visionplus-1-644x850.webp",
                imgs: [
                    "/works/visionplus/visionplus-1-1200x900.webp",
                    "/works/visionplus/visionplus-2-1200x900.webp",
                    "/works/visionplus/visionplus-3-1200x900.webp"
                ],
                desc: [""]
            }
        ]
    },
    getters: {
        getWorksData: (state) => state.worksData,
    },
    mutations: {},
    actions:{}
}
export default works;