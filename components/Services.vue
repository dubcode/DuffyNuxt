<template>
    <div id="services" class="row">
      <div class="services__gradient"></div>
      <div class="ctr">
        <ul>
          <li v-for="post in posts" :key="post.id">
            <nuxt-link :to="{ path: post.acf.url }">
              <div class="services__thumb">
                <img :src="post.acf.icon" width="173" height="150" alt="MOT Icon" :title="post.acf.title" />
              </div>
              <div class="services__excerpt">
                <span class="services__title">
                  {{ post.acf.title }}
                </span>
                <p>
                  {{ post.acf.excerpt}}
                </p>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import axios from 'axios'

// export data
export default {

  // data
  data () {
    return {
      posts: {}
    }
  },

  methods: {

    // get posts method
    getPosts () {
        axios.get(process.env.baseUrl + '/service')
        .then((response) => {
          this.posts = response.data
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
#services {
  padding: 2rem;
  position: relative;
}

.services__gradient {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
  background: rgb(36,196,232);
  background: -moz-linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
  background: linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#24c4e8",endColorstr="#4447a8",GradientType=1);
}

#services ul {
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

#services li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0 0 4rem 0;
  padding: 0 0 4rem 0;
}

#services li:last-child {
  border: none;
  margin: 0;
  padding: 0;
}

#services li a {
  color: #fff;
  text-decoration: none;
}

#services li a img {
  max-width: 120px;
  margin: 0 auto 2rem auto;
}

.services__title {
  display: block;
  font-size: 1.7rem;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0 0 1rem 0;
}
@media only screen and (min-width: 1024px) {
  #services {
    padding: 1rem 0 0 0;
    margin: 0;
  }

  #services ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      ". . .";
  }
  
  @media all and (-ms-high-contrast:none) {
    #services ul {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr 1fr;
      -ms-grid-rows: 1fr;
    }
  }

  #services li {
    border: none;
    margin: 0;
    padding: 0;
  }

  #services li a img {
    max-width: auto;
    height: 100px;
    margin: 0 auto;
    width: auto;
  }

  #services li a .services__excerpt {
    padding: 1rem;
  }

  #services li a .services__excerpt p {
    font-weight: 600;
    font-size: 0.86rem;
    line-height: 1.4;
    text-transform: uppercase;
  }
}
@media only screen and (min-width: 1300px) {
  #services li a .services__excerpt p {
    padding: 0 17%;
  }
}
</style>
