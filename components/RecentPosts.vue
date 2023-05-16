<template>
    <div class="row sidebar__section">
        <h6 class="sidebar__title">Recent Posts</h6>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <nuxt-link :to="{ path: '/blog/' + post.slug }">
                    <span v-html="post.title.rendered" />
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
      startPost: 5,
      endPost: 11
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/posts')
        .then((response) => {
          this.posts = response.data.filter((el, index) => index > this.startPost && index < this.endPost )
          console.log(this.posts)
        })
        .catch((response) => {
          console.log(response)
        })
    }

  },

  // created
  created () {
    this.getPosts()
  },

}
</script>
