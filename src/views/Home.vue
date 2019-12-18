<template>
  <div class="home">
    <div class="svg-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#61f2f5" fill-opacity="1" 
      d="M0,320L40,314.7C80,309,160,299,240,261.3C320,224,400,160,480,144C560,128,640,160,720,154.7C800,149,880,107,960,90.7C1040,75,1120,85,1200,106.7C1280,128,1360,160,1400,176L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
      </path>
      </svg>
    </div>
    <div class="landing-container">
      <div class="landing-jumbotron">
        <h1 class="title">Need a Resumé?</h1>
        <h3 class="subtitle">Generate a Resumé now.</h3>
        <button class="landing-get-started" @click="getStarted()">Get Started</button>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    getStarted: function() {
      this.$router.push('builder');
    }
  }
}
</script>

<style scoped>
  .svg-background {
    width: 100%;
    height: auto;
  }
  .landing-container {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .landing-container > .landing-jumbotron > .title {
    margin-bottom: .5rem;
  }
  .landing-container > .landing-jumbotron > .subtitle {
    margin-top: .5rem;
  }
  .landing-get-started {
    padding: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #723881;
    border-color: #723881;
    color: #fff;
  }
  .landing-reasons {
    /* margin-top: 30rem; */
  }
</style>
