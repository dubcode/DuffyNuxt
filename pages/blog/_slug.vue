<template>
  <div class="row article">
        <div class="ctr">
            <div class="row article__grid">
                <div class="article__cell">
                    <div class="row article__thumb">
                        <h1 v-html="title"></h1>
                        <img :src="thumb" :alt="title" v-if="thumb"/>
                    </div>
                    <div class="row content">
                        <div class="row" v-html="content"></div>
                    </div>
                </div>
                <div class="article__sidebar article__cell">
                  <Cats />
                  <RecentPosts />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.article {
  padding: 2rem 1rem;
}

.article__grid,
.article__cell {
  display: block;
  float: left;
  width: 100%;
}

.article__thumb {
  margin: 0 0 1rem 0;
  height: 240px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.article__thumb img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
}

.article__thumb h1 {
  background: var(--primary);
  display: block;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  font-size: 1.4rem;
  color: #fff;
  max-width: 600px;
}

@media only screen and (min-width: 1024px) {
  .article__thumb h1 {

    font-size: 1.7rem;
  }

  .article {
    padding: 2rem;
  }

  .article__sidebar {
    border-left: 1px solid var(--grey);
    padding: 2rem;
  }

  .article__grid {
    display: grid;
    grid-template-columns: 1.4fr 0.6fr;
    grid-template-rows: 1fr;
    gap: 2rem;
    grid-auto-flow: row;
    grid-template-areas: ". .";
    float: none;
  }

  @media all and (-ms-high-contrast:none) {
    .article__grid {
      display: -ms-grid;
      -ms-grid-columns: 1.4fr 0.6fr;
      -ms-grid-rows: 1fr;
      gap: 2rem;
    }
  }

  .article__sidebar {
    padding: 0 2rem;
  }
}
</style>
<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'Post',

  // layout template
  layout: 'default',

  asyncData ({ route, params }) {
    return axios.get(process.env.baseUrl + '/posts').then((response) => {
      // get route params
      const slug = route.params.slug
      // get response data - Note that you can't access the `this` instance inssluge asyncData
      const allPosts = response.data
      // filter response data by slug
      const filteredPost = allPosts.filter(post => post.slug === slug)
      // get data from index [0]
      const postData = filteredPost[0]
      // return data
      return {
        // returned data
        postData,
        // assign data vars
        title: postData.title.rendered,
        slug: postData.slug,
        content: postData.content.rendered,
        thumb: postData.fimg_urls.large,
        seo_title: postData.yoast_head_json.title,
        seo_desc: postData.yoast_head_json.og_description
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
          href: 'https://duffymotors.co.uk/' + this.$route.path + '/'
        }
      ]
    }
  }

}
</script>
