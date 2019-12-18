<template>
    <div class="col-12">
        <div class="row m-0 justify-content-between">
            <div class="col" style="align-self: center;">
                <h3 class="builder-card-title">Fill in Your Work Experience</h3>
                <p class="builder-card-subtitle">Enter in your work experience.</p>
            </div>
            <div class="col-3" style="align-self: center; text-align: right;">
                <button class="icon-button" @click="addWorkExperience(genWorkExp()); updateLocalStorage()">
                    <v-icon :icon="['fas', 'plus']" size="2x"></v-icon>
                </button>
            </div>
        </div>
        <div style="max-height: 456px; overflow-y: auto;">
            <div class="row" v-for="workExp in workExperienceData" :key="workExp.idx">
                <div class="accordion" :class="[workExp.expanded ? '' : 'gray-border-bottom']">
                    <div class="row m-0 justify-content-between">
                        <div class="col">
                            <h3>
                                {{workExp.title === '' ? 
                                'Job'+(workExp.idx+1) 
                                : workExp.title}}
                            </h3>
                        </div>
                        <div class="col-4" style="align-self: center; text-align: right;">
                            <button class="icon-button" @click="toggle(workExp)">
                                <v-icon :icon="['far', 'edit']" size="2x"></v-icon>
                            </button>
                            <button class="icon-button" @click="removeWorkExperience(workExp); updateLocalStorage();">
                                <v-icon :icon="['far', 'trash-alt']" size="2x"></v-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="panel" 
                    :class="{'collapse': !workExp.expanded, 
                        'expand': workExp.expanded, 
                        'gray-border-bottom': workExp.expanded}">
                    <WorkExpItem :item="workExp" @editWorkExp="updateLocalStorage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import WorkExpItem from '../components/WorkExpItem'
import { mapActions } from 'vuex'
export default {
    components: {
        WorkExpItem
    },
    computed: {
        workExperienceData(){
            return this.$store.state.workExperienceData;
        }
    },
    methods: {
        ...mapActions([
            'editWorkExperience',
            'saveLocalStorage',
            'addWorkExperience',
            'removeWorkExperience'
        ]),
        updateLocalStorage: function(){
            this.saveLocalStorage({key:'resume-workExperience', value: JSON.stringify(this.workExperienceData)});
        },
        toggle: function(workExp){
            const workExpData = JSON.parse(JSON.stringify(this.workExperienceData));
            workExpData.forEach(w => {
                if(w.idx !== workExp.idx){
                    w.expanded = false;
                    this.editWorkExperience(w);
                }
            });
            workExp.expanded = !workExp.expanded;
            this.editWorkExperience(workExp);
        },
        genWorkExp(){
            const workExpData = JSON.parse(JSON.stringify(this.workExperienceData));
            workExpData.forEach(w => {
                w.expanded = false;
                this.editWorkExperience(w);
            });
            return {
                title: "",
                companyName: "",
                region: "",
                city: "",
                startMonth: "",
                startYear: "",
                endMonth: "",
                endYear: "",
                isCurrent: false,
                expanded: false,
                description: "",
                idx: this.workExperienceData.length
            }
        }
    }
}
</script>