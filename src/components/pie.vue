<template lang="html">

  <section class="pie bg-light py-5 border-top">
    <div>
      <div class="mb-4">
        <ul class="deck">
          <li class="deck__item deck__item--facebook">
            <a class="deck__link" href="#">
              <span class="deck__icon fontawesome-facebook"></span>
              <span class="deck__label">Facebook</span>
            </a>
          </li>
          <li class="deck__item deck__item--github">
            <a class="deck__link" href="#">
              <span class="deck__icon fontawesome-github"></span>
              <span class="deck__label">GitHub</span>
            </a>
          </li>
          <li class="deck__item deck__item--twitter">
            <a class="deck__link" href="#">
              <span class="deck__icon fontawesome-twitter"></span>
              <span class="deck__label">Twitter</span>
            </a>
          </li>
          <li class="deck__item deck__item--linkedin">
            <a class="deck__link" href="#">
              <span class="deck__icon fontawesome-linkedin"></span>
              <span class="deck__label">LinkedIn</span>
            </a>
          </li>
          <li class="deck__item deck__item--pinterest">
            <a class="deck__link" href="#">
              <span class="deck__icon fontawesome-pinterest"></span>
              <span class="deck__label">Pinterest</span>
            </a>
          </li>
          <li class="deck__item deck__item--googleplus">
            <a class="deck__link" href="#">
              <span class="deck__icon fontawesome-google-plus"></span>
              <span class="deck__label">Google+</span>
            </a>
          </li>
        </ul>
        <a href="https://github.com/JorgeRamirezDEV" target="_blank"> 
          <font-awesome-icon size="2x" :icon="['fab', 'github']" /> 
        </a>
        <a class="ml-4" href="https://twitter.com/GameStop?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"> 
          <font-awesome-icon size="2x" :icon="['fab', 'twitter']" />
        </a>
      </div>
      <div class="mb-3">
        <p class="font-weight-light">Esta página es un proyecto realizado solo con fines educativos.</p>
        <small class="font-weight-light text-dark"> Jorge Ramírez Molina</small>
      </div>    
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'pie',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
 

@import "../scss/animacion";


</style>
