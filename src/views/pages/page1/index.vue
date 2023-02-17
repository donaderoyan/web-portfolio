<template>
    <div>
        <hero/>
        <about/>
        <work/>
        <div class="reachOut" data-scroll data-scroll-offset="10%, 10%">
            <a class="enter-y delay-03" href="mailto:contact@donaderoyan.com">Reach out and say hi 👋</a>
        </div>
    </div>
</template>
<script>
import hero from "@/views/pages/page1/hero"
import work from "@/views/pages/page1/work"
import about from "@/views/pages/page1/about"
export default {
    name: "home",
    components: {
        hero,
        work,
        about
    },
}
</script>
<style lang="scss">
    .reachOut{
        text-align: center;
        margin-bottom: 8rem;
        a{
            font-size: 1.6rem;
            /* text-decoration: underline; */
            position: relative;
            font-weight: 700;
            &::after{
                content: "";
                position: absolute;
                height: 0.12rem;
                width: 100%;
                background: var(--color-dark);
                bottom: -0.5rem;
                left: 0;
            }
        }
    }
</style>