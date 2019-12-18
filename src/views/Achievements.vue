<template>
    <div class="col-12">
        <div class="row m-0 justify-content-between">
            <div class="col" style="align-self: center;">
                <h3 class="builder-card-title">Fill in Your Achievements</h3>
                <p class="builder-card-subtitle">These will be the things you are most proud of.</p>
            </div>
            <div class="col-3" style="align-self: center; text-align: right;">
                <button class="icon-button" @click="addAchievement(genAchievement()); updateLocalStorage();">
                    <v-icon :icon="['fas', 'plus']" size="2x"></v-icon>
                </button>
            </div>
        </div>
        <div class="row" v-if="achievements.length === 0">
            <div class="col" style="text-align: center;">
                <button class="add-button"
                @click="addAchievement(genAchievement()); updateLocalStorage();">Add Achievement</button>
            </div>
        </div>
        <div class="row" v-for="achievement in achievements" :key="achievement.idx">
            <div class="accordion" :class="[achievement.expanded ? '' : 'gray-border-bottom']">
                <div class="row m-0 justify-content-between">
                    <div class="col">
                        <h3>
                            {{achievement.title === '' ? 
                            'Achievement '+(achievement.idx+1) 
                            : achievement.title}}
                        </h3>
                    </div>
                    <div class="col-4" style="align-self: center; text-align: right;">
                        <button class="icon-button" @click="toggle(achievement)">
                            <v-icon :icon="['far', 'edit']" size="2x"></v-icon>
                        </button>
                        <button class="icon-button" @click="removeAchievement(achievement); updateLocalStorage();">
                            <v-icon :icon="['far', 'trash-alt']" size="2x"></v-icon>
                        </button>
                    </div>
                </div>
            </div>
            <div class="panel" 
                :class="{'collapse': !achievement.expanded, 
                    'expand': achievement.expanded, 
                    'gray-border-bottom': achievement.expanded}">
                <AchievementItem :item="achievement" @editAchievement="updateLocalStorage"/>
            </div>
        </div>
    </div>
</template>
<script>
import AchievementItem from '../components/AchievementItem'
import { mapActions } from 'vuex'
export default {
    components: {
        AchievementItem
    },
    computed: {
        achievements(){
            return this.$store.state.achievements;
        }
    },
    methods: {
        ...mapActions([
            'editAchievement',
            'saveLocalStorage',
            'addAchievement',
            'removeAchievement'
        ]),
        updateLocalStorage: function(){
            this.saveLocalStorage({key:'resume-achievements', value: JSON.stringify(this.achievements)});
        },
        toggle: function(achievement){
            achievement.expanded = !achievement.expanded;
            const achievements = JSON.parse(JSON.stringify(this.achievements));
            achievements.forEach(a => {
                if(a.idx !== achievement.idx){
                    a.expanded = false;
                    this.editAchievement(a);
                }
            });
            this.editAchievement(achievement);
        },
        genAchievement(){
            const achievements = JSON.parse(JSON.stringify(this.achievements));
            achievements.forEach(a => {
                a.expanded = false;
                this.editAchievement(a);
            });
            return {
                title: "",
                description: "",
                idx: this.achievements.length,
                expanded: false
            }
        }
    }
}
</script>

<style scoped>
.add-button {
    padding: 1rem;
    background-color: #723881;
    font-weight: bold;
    font-size: .95rem;
    color: white;
    border-color: #723881;
    margin: 1rem;
}
.add-button:hover {
    cursor: pointer;
}
</style>