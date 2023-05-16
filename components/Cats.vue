<template>
    <div class="row sidebar__section">
        <h2 class="sidebar__title">Categories</h2>
        <ul>
            <li>
                <nuxt-link :to="{ path: '/blog/company/'}">
                  <span class="post__cat">Company News</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/industry/'}">
                  <span class="post__cat">Industry News</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/driving/'}">
                  <span class="post__cat">Driving</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/mot/'}">
                  <span class="post__cat">M.O.T</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/service/'}">
                  <span class="post__cat">Service</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/tyres/'}">
                  <span class="post__cat">Tyres</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/misc/'}">
                  <span class="post__cat">Miscellaneous</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{ path: '/blog/'}">
                  <span class="post__cat">All News</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>
// Import axios
import axios from 'axios'

// export data
export default {

  // data
  data () {
    return {
      posts: {},
      page: 1,
      perPage: 5,
      pages: []
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/posts')
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
