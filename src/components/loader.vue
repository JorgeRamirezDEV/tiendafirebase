<template lang="html">

  <section class="loader d-flex justify-content-center">
    <div class="lds-ripple"><div></div><div></div></div> 
    <div class="d-flex align-items-center" style="margin-left: 50px;">Cargando... </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'loader',
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

.loader {
  position: absolute;
  top: 45vh;
  left: 48vw;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid rgb(36, 197, 49);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 102px;
    height: 102px;
    opacity: 0;
  }
}

</style>
