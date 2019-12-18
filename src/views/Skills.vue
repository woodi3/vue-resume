<template>
    <div class="col-12">
        <h3 class="builder-card-title">Fill in your skills</h3>
        <p class="builder-card-subtitle">
            Enter all of your skills. Every skill matters.
        </p>
        <div class="form-group">
            <div class="row m-0">
                <div class="col">
                    <form @submit="add($event);">
                        <label for="skillsInput">Add Skills</label>
                        <input class="form-control"
                            type="search" 
                            id="skillsInput" 
                            name="skillsInput"
                            placeholder="Add a skill..."
                            v-model="skill"/>
                    </form>
                </div>
                <div class="col-2">
                    <button class="icon-button"
                    style="margin-top: 50%;"
                     @click="add($event);">
                        <v-icon :icon="['fas', 'plus']" size="2x"></v-icon>
                    </button>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="item in skills" :key="item" :class="getColSize(item)">
                <h2 class="m-0" style="display: inline;">
                    <span class="badge skill">
                        {{item}}
                    </span>
                </h2>
                <button class="icon-button" @click="removeSkill(item); updateLocalStorage();">
                    <v-icon :icon="['far', 'trash-alt']" size="2x"></v-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            skill: ""
        }
    },
    methods: {
        ...mapActions([
            'addSkill',
            'removeSkill',
            'saveLocalStorage'
        ]),
        add: function($event){
            $event.preventDefault();
            this.addSkill(this.skill); 
            this.skill=''; 
            this.updateLocalStorage();
        },
        updateLocalStorage: function(){
            this.saveLocalStorage({key: 'resume-skills', value: JSON.stringify(this.skills)})
        },
        getColSize(item){
            if(item.length < 7){
                return "col-3"
            }
            else if(item.length >=7 && item.length < 12){
                return "col-4"
            }
            else if(item.length >=12 && item.length <20){
                return "col-6"
            }
            else {
                return "col"
            }
        }
    },
    computed: {
        skills(){
            return this.$store.state.skills;
        }
    }
}
</script>

<style scoped>
.skill {
    background-color: #723881;
    color: #fff;
}
</style>