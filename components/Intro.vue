<template>
    <div id="intro" class="row" v-bind:style="{ 'background-image': 'url(' + introBackground + ')' }" style="background-repeat: no-repeat; background-position: center center; background-size: cover;">
      <div class="row intro__overlay">
        <div class="ctr">
          <div class="flex">
            <div class="row">
              <div class="row">
                <h1>
                  <span>
                    <span>{{ introTitleOne }}</span>
                  </span>
                  <span>
                    <span>{{ introTitleTwo }}</span>
                  </span>
                </h1>
              </div>
              <div class="row">
                <p>{{ introExcerpt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'intro',
  // props
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'introTitleOne',
    'introTitleTwo',
    'introExcerpt',
    'introBackground'
  ]
}
</script>
<style scoped>
/* INTRO */
#intro.intro__banner {
  background: none;
  margin: 4rem 0;
  padding: 0;
}

.intro__overlay {
  background: rgb(0,0,0);
  background: -moz-linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 90%);
  background: -webkit-linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 90%);
  background: linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  padding: 8rem 0;
}

#intro.intro__banner .intro__overlay {
  background: none;
  padding: 0;
}

#intro.intro__banner .intro__banner-inner {
  padding: 8rem 0;
  background: rgb(0,0,0);
  background: -moz-linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 90%);
  background: -webkit-linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 90%);
  background: linear-gradient(90deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 90%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
}

#intro h1 {
  margin: 0 0 1rem 0;
}

#intro h1 span {
  display: block;
}

#intro h1 span span {
  background: var(--primary);
  color: #fff;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  padding: 0 30px;
  position: relative;
}

#intro h1 span span:before,
#intro h1 span span:after {
  content:"";
  position:absolute;
  background: var(--primary);
  top:0;
  left:-15px;
  bottom: 0;
  width: 30px;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -ms-transform: skew(-20deg);
  transform: skew(-20deg);
}

#intro h1 span span:after {
  left: auto;
  right:-15px;
}

#intro h1 span:nth-child(even) span,
#intro h1 span:nth-child(even) span:before,
#intro h1 span:nth-child(even) span:after {
  background: var(--secondary);
}

#intro p {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  text-transform: uppercase;
  padding: 0 1rem;
}

#intro .intro__cta {
  color: #fff;
  display: block;
  font-size: 1.4rem;
  font-weight: 800;
  padding: 1rem 0 0 0;
  text-transform: uppercase;
}

@media only screen and (min-width: 600px) {
  /* INTRO */
  #intro p {
    padding: 0 10%;
  }
}

@media only screen and (min-width: 1024px) {
  /* INTRO */
  #intro p {
    padding: 0 20%;
  }

  .intro__banner-wrapper {
    padding: 0 1rem;
  }
}

@media only screen and (min-width: 1300px) {
  /* INTRO */
  #intro p {
    padding: 0 30%;
  }
  #intro h1 span span {
    font-size: 1.9rem;
  }

  .intro__banner-wrapper {
    padding: 0 2rem;
  }
}
</style>



