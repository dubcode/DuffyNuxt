<template>
  <div class="row page">

    <!-- intro -->
    <Intro
      :intro-title-one="intro_title_one"
      :intro-title-two="intro_title_two"
      :intro-excerpt="intro_excerpt"
      :intro-background="intro_background"
    />

    <!-- grid -->
    <div class="row">
      <div class="ctr">
        <div class="posts__grid">

          <!-- faqs -->
          <div class="row faqs">
            <div class="row">
              <h5 class="card__title">MOT Test FAQs</h5>
            </div>
            <div v-for="faq in page.acf.faqs" :key="faq.faq_id" class="row faq">
              <h6><b>{{ faq.faq_question }}</b></h6>
              <p v-html="faq.faq_answer" />
            </div>
          </div>

          <!-- mot posts -->
          <MotPosts />

        </div>
      </div>
    </div>

    <RapidCarCheck />
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
  name: 'FaqPage',

  // layout template
  layout: 'default',

  // SSR asyncData Request
  asyncData () {
    return axios.get(process.env.baseUrl + '/pages/1724?_embed').then((response) => {
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
          href: 'https://duffymotors.co.uk/faq/'
        }
      ]
    }
  }

}
</script>
<style scoped>
/* FAQs */
.faqs {
  margin: 2rem 0 2rem 0;
  padding: 0 1rem;
}

.faq {
  margin: 0 0 0.25rem 0;
}

.faq h6 {
  background: var(--grey);
  padding: 1rem;
  color: var(--black);
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  transition: all ease 0.3s;
}

.faq p {
  height: 0;
  overflow: hidden;
  opacity: 0;
  font-weight: 500;
  transition: all ease 0.6s;
  transition-delay: 0.3s;
}

.faq:hover {
  cursor: pointer;
}

.faq:hover h6 {
  background: var(--primary);
  color: #fff;;
}

.faq:hover p {
  opacity: 1;
  padding: 1rem;
  height: auto;
}
@media only screen and (min-width: 1300px) {
    .faqs {
        padding: 0;
    }
}
</style>
