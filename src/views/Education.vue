<template>
    <div class="col-12">
        <div class="row m-0 justify-content-between">
            <div class="col" style="align-self: center;">
                <h3 class="builder-card-title">Fill in Your Education</h3>
                <p class="builder-card-subtitle">Enter in your education information.</p>
            </div>
            <div class="col-3" style="align-self: center; text-align: right;">
                <button class="icon-button" @click="addEducation(genEducation()); updateLocalStorage()">
                    <v-icon :icon="['fas', 'plus']" size="2x"></v-icon>
                </button>
            </div>
        </div>
        <div style="max-height: 500px; overflow-y: auto;">
            <div class="row" v-for="education in educationData" :key="education.idx">
                <div class="accordion" :class="[education.expanded ? '' : 'gray-border-bottom']">
                    <div class="row m-0 justify-content-between">
                        <div class="col">
                            <h3>
                                {{education.institutionName === '' ? 
                                'Education '+(education.idx+1) 
                                : education.institutionName}}
                            </h3>
                        </div>
                        <div class="col-4" style="align-self: center; text-align: right;">
                            <button class="icon-button" @click="toggle(education)">
                                <v-icon :icon="['far', 'edit']" size="2x"></v-icon>
                            </button>
                            <button class="icon-button" @click="removeEducation(education); updateLocalStorage();">
                                <v-icon :icon="['far', 'trash-alt']" size="2x"></v-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="panel" 
                    :class="{'collapse': !education.expanded, 
                        'expand': education.expanded, 
                        'gray-border-bottom': education.expanded}">
                    <EducationItem :item="education" @editEducation="updateLocalStorage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import EducationItem from '../components/EducationItem'
import { mapActions } from 'vuex'
export default {
    components: {
        EducationItem
    },
    computed: {
        educationData(){
            return this.$store.state.educationData;
        }
    },
    methods: {
        ...mapActions([
            'editEducation',
            'saveLocalStorage',
            'addEducation',
            'removeEducation'
        ]),
        updateLocalStorage: function(){
            this.saveLocalStorage({key:'resume-education', value: JSON.stringify(this.educationData)});
        },
        toggle: function(education){
            education.expanded = !education.expanded;
            const educationData = JSON.parse(JSON.stringify(this.educationData));
            educationData.forEach(e => {
                if(e.idx !== education.idx){
                    e.expanded = false;
                    this.editEducation(e);
                }
            });
            this.editEducation(education);
        },
        genEducation(){
            const educationData = JSON.parse(JSON.stringify(this.educationData));
            educationData.forEach(e => {
                e.expanded = false;
                this.editEducation(e);
            });
            return {
                institutionName: "",
                fieldOfStudy: "",
                region: "",
                city: "",
                startMonth: "",
                startYear: "",
                endMonth: "",
                endYear: "",
                isCurrent: false,
                idx: this.educationData.length,
                expanded: false
            }
        }
    }
}
</script>

<style scoped>
    .accordion {
        /* background-color: #eee; */
        /* color: #444; */
        width: 100%;
        outline: none;
    }
    .panel {
        background-color: white;
        width: 100%;
    }
    .collapse {
        display: none;
        transition: 0.4s;
    }
    .expand {
        display: block;
        transition: 0.4s;
    }
</style>