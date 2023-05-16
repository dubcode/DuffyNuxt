<template>
    <div class="cookies row" :class="{accepted: cookiesClose}">
      <div class="ctr">
        <div class="cookie__grid">
            <div class="cookie__grid-content">
                <p>We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.</p>
            </div>
            <div class="cookie__grid-buttons">
                <span @click="cookiesClose=!cookiesClose">Accept</span>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'cookies',
    data () {
        return {
            cookiesClose: false
        }
    },
    methods: {
        closeCookies () {
            this.cookiesClose = false
        }
    }
}
</script>
<style scoped>
.cookies {
    background: #222;
    display: block;
    padding: 1rem;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: all ease 0.3s;
    z-index: 1000;
}

.cookies.accepted {
    transform: translateY(101%);
}

.cookie__grid,
.cookie__grid-content,
.cookie__grid-buttons {
    display: block;
    float: left;
    width: 100%;
}

.cookie__grid-content {
    padding: 0 0 1rem 0;
}

.cookie__grid-buttons {
    background: rgba(36,196,232,1);
    transition: all ease 0.3s;
    position: relative;
    overflow: hidden;
}

.cookie__grid-buttons::after {
    background: rgb(36,196,232);
    background: -moz-linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
    background: linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
    position: absolute;
    height: 100%;
    width: 100%;
    display: block;
    z-index: 2;
    content: "";
    top: 0;
    left: 0;
    opacity: 0;
    transition: all ease 0.3s;
}

.cookie__grid-buttons span {
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    font-weight: 500;
    position: relative;
    z-index: 5;
    min-height: 30px;
}

.cookie__grid-buttons:hover {
    cursor: pointer;
}

.cookie__grid-buttons:hover::after {
    transform: translateX(0);
    opacity: 1;
}

@media only screen and (min-width: 900px) {
    .cookie__grid {
        display: flex;
        justify-content: flex-start;
    }

    .cookie__grid-content {
        flex: 1;
        padding: 0 1rem 0 0;
    }

    .cookie__grid-buttons {
        width: 150px;
    }
}
</style>
