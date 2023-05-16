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
    <div class="row content">
      <div class="ctr">
        <p>&nbsp;</p>
        <div v-html="page.content.rendered" />
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
  name: 'PrivacyPage',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/1842?_embed').then((response) => {
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

        content: page.content.rendered,

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
          href: 'https://duffymotors.co.uk/privacy/'
        }
      ]
    }
  }

}
</script>
