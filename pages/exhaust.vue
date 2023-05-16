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

    <Services />
    <Ticker />

  </div>
</template>

<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'IndexPage',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/1721?_embed').then((response) => {
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
          href: 'https://duffymotors.co.uk/exhaust/'
        }
      ]
    }
  }

}
</script>
