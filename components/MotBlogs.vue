<template>
    <div id="blogs" class="row">
      <div class="ctr">
        <h6 class="main__title">MOT News</h6>
        <ul>
          <li v-for="post in posts" :key="post.id">
            <nuxt-link :to="{ path: '/blog/' + post.slug }">
              <div class="blogs__thumb">
                <img :src="post.fimg_url" width="600" height="450" alt="Blog Post Thumbnail" />
              </div>
              <div class="blogs__excerpt">
                <span class="blogs__crumb">
                  Latest News / MOT
                </span>
                <span class="blogs__title" v-html="post.title.rendered" />
                <p v-html="post.excerpt.rendered"/>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
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
      endPost: 3
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/posts?categories=7')
        .then((response) => {
          this.posts = response.data.filter((el, index) => index < this.endPost )
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
<style scoped>
#blogs {
  padding: 1rem;
  position: relative;
}

#blogs ul {
  display: block;
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#blogs li {
  background: var(--grey);
  display: block;
  transition: all ease 0.3s;
}

#blogs li:hover {
  background: var(--primary);
}

#blogs li a {
    display: block;
    color: var(--dgrey);
    text-decoration: none;
    padding: 1rem;
}

#blogs li a img {
  margin: 0 auto 1rem auto;
}

.blogs__title {
  color: var(--primary);
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  transition: all ease 0.3s;
}

#blogs li:hover .blogs__title,
#blogs li:hover .blogs__excerpt p {
  color: #fff;
}

.blogs__excerpt p {
    font-weight: 500;
    margin: 0 0 1rem 0;
    transition: all ease 0.3s;
}

.blogs__crumb {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    display: block;
}
@media only screen and (min-width: 1024px) {
  #blogs {
    padding: 0;
    margin: 0 0 2rem 0;
  }

  #blogs ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 2rem;
    grid-auto-flow: row;
    grid-template-areas:
      ". . .";
  }

  .blogs__title {
    font-size: 1.4rem;
  }

  .blogs__excerpt {
    padding: 0 1rem 1rem 1rem;
  }
  
  @media all and (-ms-high-contrast:none) {
    #blogs ul {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr 1fr;
      -ms-grid-rows: 1fr;
      gap: 2rem;
    }
  }

  #blogs li a .blogs__excerpt p {
    font-size: 0.86rem;
    line-height: 1.4;
  }
}
</style>
