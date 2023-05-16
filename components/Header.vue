<template>
    <div class="row wrapper">
        <header id="header" class="row">
            <a href="/#ticker" class="header__gg">
                <img src="~/assets/images/gg.jpg" width="220" height="46" alt="Good Garage Scheme Banner" title="We are a member of the Good Garage Scheme" />
            </a>
            <div class="ctr">
                <div class="header__grid">
                    <div class="header__cell header__left flex-l">
                        <img src="~/assets/images/logo.png" width="229" height="165" alt="Duffy Motors Logo" title="Duffy Motors" />
                    </div>
                    <div class="header__cell header__right flex-r">
                        <a href="tel:01618344168" target="_blank">
                            <img src="~/assets/images/tel.jpg" width="212" height="48" alt="Telephone Number" title="Call us now on: 0161 834 4168" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <button class="hamburger hamburger--collapse" type="button" title="Toggle Menu" :class="{isActive: menuClose}" @click="menuClose=!menuClose">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <div class="header__nav-menu" :class="{isActive: menuClose}">
            <div class="row">
                <nuxt-link to="/" class="header__nav-logo">
                    <img src="~/assets/images/logo.jpg" width="220" height="46" alt="Duffy Motors Logo" title="Duffy Motors" />
                </nuxt-link>
                <ul>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/">
                            Home
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/mot/">
                            M.O.T
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/service/">
                            Servicing
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/tyres/">
                            Tyres
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/exhaust/">
                            Exhaust
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/blog/">
                            Blog
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/faq/">
                            FAQs
                        </nuxt-link>
                    </li>
                    <li @click="this.closeMenu">
                        <nuxt-link to="/contact/">
                            Contact
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'masthead',
    data () {
        return {
            menuClose: false
        }
    },
    destroyed() {
        this.menuClose = false
    },
    methods: {
        closeMenu () {
            this.menuClose = false
        }
    }
}
</script>
<style scoped>
/* HEADER */
.header__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header__left header__right";
    padding: 1rem 0;
}

@media all and (-ms-high-contrast:none) {
  .header__grid {
    display: -ms-grid;
    -ms-grid-columns: 1fr 1fr;
    -ms-grid-rows: 1fr;
  }
}

.header__left {
  grid-area: header__left;
}

.header__left img {
  width: 100px;
  position: absolute;
  z-index: 10;
}

.header__right img {
  width: 100px;
  margin-right: calc(40px + 1rem);
}

.header__right {
  grid-area: header__right;
}

/* MOBILE NAV */
.header__nav {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  flex: 1;
}
.header__nav-menu {
  background: var(--white);
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 2rem;
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  overflow-x: hidden;
  overflow-y: scroll;
  transform: translateX(-101vw);
  transition: transform ease 0.6s;
}

.header__nav-menu.isActive {
  transform: translateX(0);
}

.header__nav-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header__nav-menu ul li ul {
  display: none;
}

.header__nav-menu ul li:hover ul {
  display: block;
}

.header__nav-menu span,
.header__nav-menu a {
  color: var(--primary);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2;
  text-decoration: none;
}

.header__nav-menu ul li ul li span,
.header__nav-menu ul li ul li a {
  font-weight: 500;
  font-size: 1.1rem;
}

.header__nav-logo {
  top: 2rem;
  position: fixed;
}

.header__nav-logo img {
  height: auto;
  margin: 0 auto;
  width: 140px;
}

.header__gg {
  display: none;
}

@media only screen and (min-width: 600px) {
  #header {
    position: relative;
  }

  .header__gg {
    display: block;
    position: absolute;
    left: calc(50% - 75px);
    top: calc(50% - 15px);
    width: 150px;
    height: auto;
  }
}

@media only screen and (min-width: 1024px) {
  /* HEADER */
  .header__grid {
      padding: 2rem 0;
  }

  .header__gg {
    left: calc(50% - 90px);
    top: calc(50% - 19px);
    width: 180px;
  }

  .header__left img {
    width: 180px;
  }

  .header__right img {
    width: 170px;
  }
}

@media only screen and (min-width: 1300px) {
  /* HEADER */
  .header__right img {
    margin: 0;
  }

  .header__gg {
    left: calc(50% - 110px);
    top: calc(50% - 26px);
    width: 220px;
  }

  .header__nav {
    display: none;
  }
}
</style>
