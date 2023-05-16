<template>
    <footer id="footer" class="row">
        <div class="ctr">
            <div class="row">
                <div class="footer__grid">
                    <div class="footer__cell">
                        <h6>Site Map</h6>
                        <ul>
                            <li>
                                <nuxt-link to="/">Home</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/mot/">MOT</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/service/">Servicing</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/tyres/">Tyres</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/exhaust/">Exhaust</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/privacy/">Privacy</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/contact/">Contact</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__cell">
                        <h6>Address</h6>
                        <p>
                        Duffy Motors Manchester Ltd<br />
                        Arch 16-17<br />
                        Watson Street<br />
                        Manchester<br />
                        M3 4LP
                        </p>
                    </div>
                    <div class="footer__cell">
                        <h6>Follow Us</h6>
                        <p><a href="https://www.rapidcarcheck.co.uk/" target="_blank">
                            Vehicle data is powered by Rapid Car Check
                        </a></p>
                        <p><a href="#" target="_blank">
                            <img src="~/assets/images/goodgarage.gif" width="220" height="46" alt="The Good Garage Scheme" title="The Good Garage Scheme" />
                        </a></p>
                        <div class="copyblock">
                            <p>&copy; Duffy Motors Manchester Ltd</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
#footer {
  background: #343434;
  color: #fff;
  padding: 1rem;
}

.footer__grid,
.footer__cell {
    display: block;
    float: left;
    width: 100%;
}
.footer__cell {
    margin: 0 0 1rem 0;
}
.footer__cell h6 {
    font-size: 1.1rem;
    margin: 0 0 1rem 0;
    text-transform: uppercase;
}

.footer__cell p {
    font-size: 1rem;
    margin: 0 0 1rem 0;
    line-height: 1.7rem;
}

.footer__cell ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.footer__cell li {
    font-size: 1rem;
    line-height: 1.7rem;
}

.footer__cell a {
    color: #fff;
    text-decoration: none;
}

.footer__cell img {
    height: auto;
    width: 200px;
}
@media only screen and (min-width: 768px) {
    #footer {
        padding: 2rem 0;
    }
    .footer__grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        gap: 1rem;
        float: none;
        grid-auto-flow: row;
    }
    .footer__cell {
        float: none;
        width: auto;
        margin: 0;
        position: relative;
    }

    .copyblock {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    @media all and (-ms-high-contrast:none) {
        .footer__grid {
            display: -ms-grid;
            -ms-grid-columns: 1fr 1fr 1fr;
            -ms-grid-rows: 1fr;
        }
    }
}

@media only screen and (min-width: 1024px) {
    #footer {
    padding: 2rem;
    }
}
</style>
