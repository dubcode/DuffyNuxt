<template>
    <a href="https://www.google.com/search?q=duffy+motors" id="google" class="row" target="_blank">
        <div class="ctr">
            <img src="~/assets/images/svg/google.svg" class="google__logo" width="496" height="496" alt="Google Reviews" title="Google Reviews" />
            <img src="~/assets/images/svg/review.svg" class="google__review" width="330" height="268" alt="Google Reviews" title="Google Reviews" />
        </div>
    </a>
</template>
<script>
export default {
  name: 'intro',
  // props
  props: [
    // eslint-disable-next-line vue/require-prop-types
    'introTitleOne',
    'introTitleTwo',
    'introExcerpt',
    'introBackground'
  ]
}
</script>
<style scoped>
#google {
  margin: 0 0 4rem 0;
}

#google .ctr {
  background: rgb(36,196,232);
  background: -moz-linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
  background: -webkit-linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
  background: linear-gradient(90deg, rgba(36,196,232,1) 0%, rgba(68,71,168,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#24c4e8",endColorstr="#4447a8",GradientType=1);
  padding: 2rem;
}

#google .google__logo {
  display: block;
  float: left;
  height: 100px;
  width: auto;
}

#google .google__review {
  display: block;
  float: right;
  height: 100px;
  width: auto;
}

@media only screen and (min-width: 1300px) {
  /* INTRO */
}
</style>



