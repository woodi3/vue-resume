<template>
    <div class="sections-component">
        <h3 class="builder-card-title">Sections</h3>
        <p class="builder-card-subtitle">We've provided some default sections.</p>
        <div class="sections-row">
            <div class="section-item"
            v-for="(item, index) in sections" :key="item.key"
            @click="selectSection(item)"
            style="text-align: center;"
            :class="{'active': item.current, 'gray-border-right': index % 2 === 0, 'gray-border-bottom': index < sections.length-2}">
                <v-icon :icon="item.icon" style="font-size: 1.5rem;"></v-icon>
                <h5>{{item.text}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
      return {
        maxSections: 10
      }
    },
    computed: {
        sections() {
            return this.$store.state.sections;
        }
    },
    methods: {
        addSection: function(section) {
            this.$store.dispatch("addSection", section);
        },
        selectSection: function(section){
            const sections = JSON.parse(JSON.stringify(this.sections));
            sections.forEach(s => {s.current = false; this.$store.dispatch("editSection", s);});
            section.current = true;
            this.$store.dispatch("editSection", section);
        }
    }
}
</script>

<style scoped>
.sections-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.section-item {
    flex: 50%;
    max-width: 50%;
    padding: 1rem;
}
.section-item:not(.active):hover {
    background-color: #e0e0e0;
    cursor: pointer;
}
.section-item > h5 {
    margin: 0;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
}
.new-section-button {
    padding: 1.25rem;
    background-color: #723881;
    font-weight: bold;
    font-size: .95rem;
    color: white;
    border-color: #723881;
    margin: 3rem 0 3rem 0;
}
.active {
    background-color: #723881;
    color: #fff;
}
</style>