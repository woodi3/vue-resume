<template>
    <div>
        <div class="row">
            <div class="col-6">
                <label :for="'educationInstitutionName'+item.idx">Institution Name</label>
                <input class="form-control"
                :id="'educationInstitutionName'+item.idx" 
                :name="'educationInstitutionName'+item.idx"
                type="text"
                required
                placeholder="Enter your institution's name."
                :value="item.institutionName" 
                @blur="update($event.target.value, 'institutionName')"/>
            </div>
            <div class="col-6">
                <label :for="'educationFieldOfStudy'+item.idx">Field of Study</label>
                <input class="form-control"
                :id="'educationFieldOfStudy'+item.idx" 
                :name="'educationFieldOfStudy'+item.idx"
                type="text"
                required
                placeholder="e.g Computer Science"
                :value="item.fieldOfStudy" 
                @blur="update($event.target.value, 'fieldOfStudy')"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label :for="'educationRegion'+item.idx">Region</label>
                <input class="form-control" 
                :id="'educationRegion'+item.idx"
                :name="'educationRegion'+item.idx"
                type="text"
                required
                placeholder="Your institution's region/state."
                :value="item.region"
                @blur="update($event.target.value, 'region')"/>
            </div>
            <div class="col-6">
                <label :for="'educationCity'+item.idx">City</label>
                <input class="form-control"
                :id="'educationCity'+item.idx"
                :name="'educationCity'+item.idx"
                type="text"
                required
                placeholder="Enter your institution's city."
                :value="item.city"
                @blur="update($event.target.value, 'city')"/>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label :for="'educationStartMonth'+item.idx">Time Period</label>
                <select class="form-control" 
                    :id="'educationStartMonth'+item.idx"
                    :value="item.startMonth"
                    @change="update($event.target.value, 'startMonth')">
                    <option value="">Month</option>
                    <option v-for="month in months" 
                    :key="month" 
                    :value="month">
                        {{month}}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label><br></label>
                <select class="form-control" 
                    :id="'educationStartYear'+item.idx"
                    :value="item.startYear"
                    @change="update($event.target.value, 'startYear')">
                    <option value="">Year</option>
                    <option v-for="year in years" :key="year" :value="year">
                        {{year}}
                    </option>
                </select>
            </div>
            <div class="col-1" style="align-self: center;">
                <br>
                <h4 class="m-0" style="text-align: center;">
                    -
                </h4>
            </div>
            <div class="col-3">
                <label><br></label>
                <select class="form-control" 
                    :id="'educationEndMonth'+item.idx"
                    :value="item.endMonth"
                    @change="update($event.target.value, 'endMonth')">
                    <option value="">Month</option>
                    <option v-for="month in months" 
                    :key="month" 
                    :value="month">
                        {{month}}
                    </option>
                </select>
            </div>
            <div class="col-2">
                <label><br></label>
                <select class="form-control" 
                    :id="'educationEndYear'+item.idx"
                    :value="item.endYear"
                    @change="update($event.target.value, 'endYear')">
                    <option value="">Year</option>
                    <option v-for="year in years" :key="year" :value="year">
                        {{year}}
                    </option>
                </select>
            </div>
        </div>
        <div class="row" style="justify-content: flex-end;">
            <div class="col-6" style="text-align: right;">
                <input type="checkbox" 
                class="form-check-input"
                :value="true"
                :checked="item.isCurrent"
                @change="update(!item.isCurrent, 'isCurrent')" 
                :id="'educationIsCurrent'+item.idx">
                <label class="form-check-label" :for="'educationIsCurrent'+item.idx">Currently study here</label>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: ['item'],
    computed: {
        months(){
            return [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ]
        },
        years(){
            const end = new Date().getFullYear();
            const years = [];
            for(let i =1900; i <= end; i++){
                years.push(i.toString());
            }
            return years;
        }
    },
    methods: {
        ...mapActions([
            'editEducation'
        ]),
        update: function(value, key){
            const education = JSON.parse(JSON.stringify(this.item));
            education[key] = typeof value === "string" ? value.trim() : value;
            this.editEducation(education);
            this.$emit('editEducation');
        }
    }
}
</script>