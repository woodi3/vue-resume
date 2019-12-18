<template>
  <div class="builder">
    <div class="svg-background">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#723881" fill-opacity="1" 
        d="M0,192L40,181.3C80,171,160,149,240,133.3C320,117,400,107,480,133.3C560,160,640,224,720,240C800,256,880,224,960,176C1040,128,1120,64,1200,64C1280,64,1360,128,1400,160L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
      </svg>
    </div>
    <div class="builder-container">
      <div class="builder-row">
        <div class="builder-sections">
          <div class="builder-card">
            <div class="builder-card-body">
              <Sections />
            </div>
          </div>
        </div>
        <div class="builder-info">
          <div class="builder-card">
            <div class="builder-card-body">
              <Info />
            </div>
          </div>
        </div>
        <div class="builder-settings">
          <div class="builder-card">
            <div class="builder-card-body">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sections from '@/components/Sections.vue'
  import Info from '@/components/Info.vue'
  import Settings from '@/components/Settings.vue'
  export default {
    components: {
      Sections,
      Info,
      Settings
    }
  }
</script>

<style>
.builder {
  position: relative;
  background-color: #e0e0e0;
  height: 100%;
}
.builder > .svg-background {
    width: 100%;
    height: auto;
}
.builder-container {
  position: absolute;
  top: 10%;
  width: 100%;
}
.builder-row {
  display: flex;
  width: 100%;
}
.builder-row > div {
  height: 100%;
  max-height: 600px;
}
.builder-sections {
  flex: 20%;
  max-width: 20%;
  margin-right: .5rem;
  margin-left: .5rem;
}
.builder-sections > .builder-card > .builder-card-body {
  padding: 0 !important;
}

.builder-sections > .builder-card > .builder-card-body > .sections-component > .builder-card-title {
  text-align: left;
  margin-bottom: 0;
  margin-top: 0;
  padding: 1.5rem 1rem .5rem 1rem;
}
.builder-sections > .builder-card > .builder-card-body > .sections-component > .builder-card-subtitle {
  font-weight: bold;
  color: #9c9c9c;
  margin-top: .5rem;
  margin-bottom: .5rem;
  text-align: left;
  padding: 0 1rem;
}
.builder-info {
  flex: 50%;
  max-width: 50%;
  margin-right: .5rem;
  margin-left: .5rem;
}
.builder-settings {
  flex: 30%;
  max-width: 30%;
  margin-right: .5rem;
  margin-left: .5rem;
}

.builder-card {
  background-color: #fff;
  width: 100%;
  height: 100%;
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
}
.builder-card-body {
  padding: .5rem 1rem 1rem 1rem;
}
.builder-card-title {
  text-align: left;
  margin-bottom: 0;
}
.builder-card-subtitle {
  font-weight: bold;
  color: #9c9c9c;
  margin-top: .5rem;
  margin-bottom: .5rem;
  text-align: left;
}
</style>