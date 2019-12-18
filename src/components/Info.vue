<template>
    <div class="row m-0">
        <component :is="currentView.key"></component>
        <div class="row justify-content-between">
            <div class="col-2" style="text-align: left;">
                <button class="next-section-button"
                v-if="!hideBack"
                @click="previousSection">Back</button>
            </div>
            <div class="col" style="text-align: right;">
                <button class="preview-button" @click="preview">Download PDF</button>
                <button class="next-section-button"
                v-if="!hideNext"
                @click="nextSection">Next Section</button>
            </div>
        </div>
        
    </div>
</template>

<script>
// TODO: Loop over said sections
// TODO: Create separate components for each section (the panels)
// TODO: Each section gets there own accordion
// TODO: Each accordion needs a title (left aligned) and action buttons (right aligned)

import AccordionItem from './AccordionItem';
import PersonalInfo from '../views/PersonalInfo';
import Objective from '../views/Objective';
import WorkExp from '../views/WorkExp';
import Education from '../views/Education';
import Languages from '../views/Languages';
import Skills from '../views/Skills';
import Achievements from '../views/Achievements';
import Organizations from '../views/Organizations';
import pdfHelper from '../pdfHelper.js';

export default {
    components: {
        AccordionItem,
        PersonalInfo,
        Objective,
        WorkExp,
        Education,
        Languages,
        Skills,
        Achievements,
        Organizations
    },
    data(){
        return {
            views: [
                "PersonalInfo",
                "Objective",
                "WorkExp",
                "Education",
                "Languages",
                "Skills",
                "Achievements",
                "Organizations"
            ],
            currentViewIdx: 0
        }
    },
    methods: {
        nextSection: function(){
            if(this.disableNext){
                return;
            }
            this.currentViewIdx++;
            this.updateSection();
        },
        previousSection: function(){
            if(this.hideBack){
                return;
            }
            this.currentViewIdx--;
            this.updateSection();
        },
        updateSection: function(){
            const sections = JSON.parse(JSON.stringify(this.sections));
            sections.forEach(s => {s.current = false; this.$store.dispatch("editSection", s);});
            sections[this.currentViewIdx].current = true;
            this.$store.dispatch("editSection", sections[this.currentViewIdx]);
        },
        preview: function(){
            const resume = {
                personalInfo: this.$store.state.personalInfo,
                objective: this.$store.state.objective,
                workExperienceData: this.$store.state.workExperienceData,
                educationData: this.$store.state.educationData,
                languages: this.$store.state.languages,
                skills: this.$store.state.skills,
                organizations: this.$store.state.organizations,
                achievements: this.$store.state.achievements,
                settings: this.$store.state.settings
            }
            pdfHelper.generatePDF(resume)
        }
    },
    computed: {
        sections(){
            return this.$store.state.sections;
        },
        currentView(){
            const idx = this.sections.findIndex(s => s.current);
            this.currentViewIdx = idx;
            return this.sections[idx];
        },
        hideBack(){
            return this.currentViewIdx < 1;
        },
        hideNext(){
            return this.currentViewIdx >= this.views.length-1;
        }
    }
}
</script>

<style scoped>
    .next-section-button {
        padding: 1rem;
        background-color: #723881;
        font-weight: bold;
        font-size: .95rem;
        color: white;
        border-color: #723881;
        margin: 1rem;
    }
    .preview-button {
        padding: 1rem;
        font-weight: bold;
        font-size: .95rem;
        color: black;
        border-color: #e0e0e0;
        margin: 1rem 0 1rem 0;
    }
    .next-section-button:hover, .preview-button:hover {
        cursor: pointer;
    }
</style>