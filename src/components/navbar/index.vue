<template>
    <nav class="menu-wrapper" style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
        <div class="nav-content wrapper">
            <router-link to="/" class="nav-link">Dona Aderoyan™</router-link>
            <!-- <div class="nav-right">
                <div data-w-id="df285ec8-8645-8caf-9625-09dc604bb0c0" class="menu-btn" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                    <div class="menu-line is-top" style="transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                    <div class="menu-line is-middle" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; width: 1.5rem; height: 1px;"></div>
                    <div class="menu-line is-btm" style="transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                    <div class="menu-btn-bg" style="width: 100%; height: 100%;"></div>
                </div>
            </div> -->
        </div>
        
    </nav>
</template>
<script>
export default {
    name: "main-navbar"
}
</script>
<style lang="scss">
    .menu-wrapper{
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: auto;
        z-index: 100;
        width: 100%;
        max-width: 100vw;
        padding-top: 1.5em;
        padding-right: 2em;
        padding-left: 2em;
        opacity: 0;
            @include max800px{
            }
            @include max576px{
                padding-right: 0;
                padding-left: 0;
                padding-top: 0;
            }
            @include min1100px {
            }
            @include min1920px {
            }
    }
    .nav-content{
        position: relative;
        z-index: 101;
        display: flex;
        width: 100%;
        padding-top: 2rem;
        padding-bottom: 1.5rem;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .nav-link{
        font-size: 1.5rem;
        line-height: 1;
        letter-spacing: -.02rem;
        font-weight: 700;
    }
    .nav-right{
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: end;
        -webkit-justify-content: flex-end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }
</style>