<template>
    <div class="col-12">
        <h3 class="builder-card-title">Fill in Your Personal Information</h3>
        <p class="builder-card-subtitle">Enter your information so that recruiters get an idea of who you are before your interview.</p>
        <div class="row">
            <div class="col-6">
                <label for="resumePersonalInfoFirstName">First Name</label>
                <input class="form-control"
                id="resumePersonalInfoFirstName" 
                name="resumePersonalInfoFirstName"
                type="text"
                required
                placeholder="Enter your first name."
                :value="personalInfo.firstName" 
                @blur="update($event, 'firstName')"/>
            </div>
            <div class="col-6">
                <label for="resumePersonalInfoLastName">Last Name</label>
                <input class="form-control"
                id="resumePersonalInfoLastName"
                name="resumePersonalInfoLastName"
                type="text"
                required
                placeholder="Enter your last name."
                :value="personalInfo.lastName"
                @blur="update($event, 'lastName')"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="resumePersonalInfoEmail">Email</label>
                <input class="form-control" 
                id="resumePersonalInfoEmail"
                name="resumePersonalInfoEmail"
                type="email"
                required
                placeholder="Enter your email address."
                :value="personalInfo.email"
                @blur="update($event, 'email')"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label for="resumePersonalInfoRegion">Region/State</label>
                <input class="form-control" 
                id="resumePersonalInfoRegion"
                name="resumePersonalInfoRegion"
                type="text"
                required
                placeholder="Enter your region or state."
                :value="personalInfo.region"
                @blur="update($event, 'region')"/>
            </div>
            <div class="col-6">
                <label for="resumePersonalInfoCity">City</label>
                <input class="form-control"
                id="resumePersonalInfoCity"
                name="resumePersonalInfoCity"
                type="text"
                required
                placeholder="Enter your city."
                :value="personalInfo.city"
                @blur="update($event, 'city')"/>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <label for="resumePersonalInfoLink">Important URL</label>
                <input class="form-control" 
                id="resumePersonalInfoLink"
                name="resumePersonalInfoLink"
                type="url"
                placeholder="Enter in your personal or portfolio website."
                :value="personalInfo.link"
                @blur="update($event, 'link')"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    computed:{
        personalInfo(){
            return this.$store.state.personalInfo;
        }
    },
    methods: {
        ...mapActions([
            'editPersonalInfo',
            'saveLocalStorage'
        ]),
        update: function($event, key){
            // TODO: validate email
            const personalInfo = JSON.parse(JSON.stringify(this.personalInfo));
            personalInfo[key] = $event.target.value.trim();
            this.editPersonalInfo(personalInfo);
            this.saveLocalStorage({key: 'resume-personalInfo', value: JSON.stringify(this.personalInfo)});
        }
    }
}
</script>

<style scoped>
.personal-info-container {
    flex: 1;
    max-width: 100%;
}
</style>