<template>
  <div class="row posts__wrapper">
    <div class="ctr">
      <h2 class="card__title">Latest News</h2>
        <div class="posts__grid">
          <div class="posts posts__cell">
            <ul class="post__news">
              <li v-for="post in displayedPosts" :key="post.id">
                <nuxt-link :to="{ path: '/blog/' + post.slug }">
                  <div class="post__news-thumb">
                    <img :src="post.fimg_urls.thumbnail" width="600" height="450" :alt="post.title.rendered" />
                  </div>
                  <div class="post__news-content">
                    <span class="post__title" v-html="post.title.rendered" />
                    <span class="post__date" v-html="post.formatted_date" />
                    <span class="post__cat" v-if="post.categories[0] === 21">Category: Company News</span>
                    <span class="post__cat" v-if="post.categories[0] === 22">Category: Industry News</span>
                    <span class="post__cat" v-if="post.categories[0] === 61">Category: Driving</span>
                    <span class="post__cat" v-if="post.categories[0] === 7">Category: M.O.T</span>
                    <span class="post__cat" v-if="post.categories[0] === 8">Category: Service</span>
                    <span class="post__cat" v-if="post.categories[0] === 9">Category: Tyres</span>
                    <span class="post__cat" v-if="post.categories[0] === 1">Category: Uncategorised</span>
                    <p v-html="post.excerpt.rendered"></p>
                  </div>
                </nuxt-link>
              </li>
            </ul>
            <div class="pager">
              <div class="pager__ctr">
                <button type="button" v-if="page != 1" @click="page--"> prev </button>
                <button type="button" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
                <button type="button" @click="page++" v-if="page < pages.length"> next </button>
              </div>
            </div>
          </div>
          <div class="row posts__cell posts_sidebar">
            <Cats />
            <RecentPosts />
          </div>
        </div>
      </div>
  </div>
</template>
<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // Page Name/Id
  name: 'Blog',

  // layout template
  layout: 'default',

  // head
  head () {
    return {
      title: 'Blog | Duffy Motors Manchester',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'New and useful information from Duffy Motors, the most convenient MOT and service centre in #Manchester.'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Blog | Duffy Motors Manchester'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'New and useful information from Duffy Motors, the most convenient MOT and service centre in #Manchester.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://duffymotors.co.uk/blog/company/'
        }
      ]
    }
  },

  // data
  data () {
    return {
      posts: [],
      page: 1,
      perPage: 6,
      pages: []
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/posts?categories=21')
        .then((response) => {
          this.posts = response.data
          console.log(this.posts)
        })
        .catch((response) => {
          console.log(response)
        })
    },

    // set pages
    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },

    // paginate
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = page * perPage - perPage
      const to = page * perPage
      return posts.slice(from, to)
    }

  },

  // created
  created () {
    this.getPosts()
  },

  // watch
  watch: {
    posts () {
      this.setPages()
    }
  },

  // computed
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
    }
  }

}
</script>
