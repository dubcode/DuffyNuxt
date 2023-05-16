<template>
  <div class="row page">

    <!-- intro -->
    <Intro
      :intro-title-one="intro_title_one"
      :intro-title-two="intro_title_two"
      :intro-excerpt="intro_excerpt"
      :intro-background="page.acf.hero_background"
    />

    <!-- cards -->
    <div id="cards" class="row">
      <div class="ctr">
        <div class="row card__grid">
          <div v-for="card in page.acf.card" :key="card.card_id" class="card__row">
            <div class="card__cell card__thumb" v-bind:style="{ 'background-image': 'url(' + card.card_background + ')' }" style="background-repeat: no-repeat; background-position: center center; background-size: contain;">
              &nbsp;
            </div>
            <div class="card__cell card__excerpt">
              <div class="row">
                <div v-html="card.card_content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="row">
      <div class="ctr">
        <!-- checklist -->
        <div class="row">
          <span class="card__title">Areas we check are:</span>
        </div>
        <div class="mot">
          <div class="mot__cell">
            <div class="row checklist">
              <ul class="checklist">
                <!-- checks -->
                <li v-for="check in page.acf.checklist" :key="check.check_id" v-html="check.check_title" />
              </ul>
            </div>
          </div>
          <div class="mot__cell">
            <!-- form -->
            <iframe src="https://duffymotors.co.uk/api/mot-reminder-form/" title="MOT Reminder Form"></iframe>
          </div>
        </div>
      </div>
    </div>
    <RapidCarCheck />
    <Services />
    <MotBlogs />
    <Ticker />

  </div>
</template>

<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'MotPage',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/1712?_embed').then((response) => {
      // get response data - Note that you can't access the `this` instance inside asyncData
      const page = response.data
      console.log(page)
      // return data
      return {
        // returned data
        page,

        // meta vars
        // meta vars
        seo_title: page.yoast_head_json.title,
        seo_desc: page.yoast_head_json.og_description,

        // Intro Props
        intro_title_one: page.acf.hero_title_line_one,
        intro_title_two: page.acf.hero_title_line_two,
        intro_excerpt: page.acf.hero_excerpt,
        intro_background: page.acf.hero_background

      }
    })
  },

  head () {
    return {
      title: this.seo_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.seo_desc
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.seo_title
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.seo_desc
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://duffymotors.co.uk/mot/'
        }
      ]
    }
  }

}
</script>
<style scoped>
.mot {
  margin: 0 0 1rem 0;
  padding: 0 1rem;
}

.mot .mot__cell:first-child {
  margin: 0 0 2rem 0;
}

.mot,
.mot__cell {
  display: block;
  float: left;
  width: 100%;
}

.mot__cell iframe {
  border: none;
  outline: 0;
  display: block;
  float: left;
  height: 1300px;
  width: 100%;
}

.checklist ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.checklist li {
  background: var(--grey) url('/images/tick.svg') no-repeat 1rem center;
  background-size: 24px auto;
  color: var(--black);
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  padding: 1rem 2rem;
  padding-left: calc(24px + 2rem);
}

@media only screen and (min-width: 1024px) {
  .mot {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
    grid-auto-flow: row;
    grid-template-areas: ". .";
  }

  @media all and (-ms-high-contrast:none) {
    .mot {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr;
    }
  }
  .mot__cell iframe {
    height: 100%;
  }
}
@media only screen and (min-width: 1300px) {
    .mot {
        padding: 0;
    }
}
</style>
