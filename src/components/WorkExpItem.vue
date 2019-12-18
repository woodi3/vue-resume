<template>
    <div style="padding-bottom: 1rem;">
        <div class="row">
            <div class="col-6">
                <label :for="'workExpTitle'+item.idx">Job Title</label>
                <input class="form-control"
                :id="'workExpTitle'+item.idx" 
                :name="'workExpTitle'+item.idx"
                type="text"
                required
                placeholder="Enter your job title."
                :value="item.title" 
                @blur="update($event.target.value, 'title')"/>
            </div>
            <div class="col-6">
                <label :for="'workExpCompany'+item.idx">Company Name</label>
                <input class="form-control"
                :id="'workExpCompany'+item.idx" 
                :name="'workExpCompany'+item.idx"
                type="text"
                required
                placeholder="Enter your company's name."
                :value="item.companyName" 
                @blur="update($event.target.value, 'companyName')"/>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label :for="'workExpRegion'+item.idx">Region</label>
                <input class="form-control" 
                :id="'workExpRegion'+item.idx"
                :name="'workExpRegion'+item.idx"
                type="text"
                required
                placeholder="Your company's region/state."
                :value="item.region"
                @blur="update($event.target.value, 'region')"/>
            </div>
            <div class="col-6">
                <label :for="'workExpCity'+item.idx">City</label>
                <input class="form-control"
                :id="'workExpCity'+item.idx"
                :name="'workExpCity'+item.idx"
                type="text"
                required
                placeholder="Enter your company's city."
                :value="item.city"
                @blur="update($event.target.value, 'city')"/>
            </div>
        </div>
        <div class="row">
            <div class="col-3">
                <label :for="'workExpStartMonth'+item.idx">Time Period</label>
                <select class="form-control" 
                    :id="'workExpStartMonth'+item.idx"
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
                    :id="'workExpStartYear'+item.idx"
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
                    :id="'workExpEndMonth'+item.idx"
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
                    :id="'workExpEndYear'+item.idx"
                    :value="item.endYear"
                    @change="update($event.target.value, 'endYear')">
                    <option value="">Year</option>
                    <option v-for="year in years" :key="year" :value="year">
                        {{year}}
                    </option>
                </select>
            </div>
        </div>
        <div class="row mb-0" style="justify-content: flex-end;">
            <div class="col-6" style="text-align: right;">
                <input type="checkbox" 
                class="form-check-input"
                :value="true"
                :checked="item.isCurrent"
                @change="update(!item.isCurrent, 'isCurrent')" 
                :id="'workExpIsCurrent'+item.idx">
                <label class="form-check-label" :for="'workExpIsCurrent'+item.idx">Currently work here</label>
            </div>
        </div>
        <div class="row m-0">
            <div class="col">
                <div class="form-group m-0">
                    <label :for="'workExpDescription'+item.idx">Job Description</label>
                    <textarea class="form-control" 
                    :id="'workExpDescription'+item.idx"
                    spellcheck="true" 
                    rows="2" 
                    :value="item.description"
                    @blur="update($event.target.value.trim(), 'description');"></textarea>
                </div>
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
            'editWorkExperience'
        ]),
        update: function(value, key){
            const workExp = JSON.parse(JSON.stringify(this.item));
            workExp[key] = typeof value === "string" ? value.trim() : value;
            this.editWorkExperience(workExp);
            this.$emit('editWorkExp');
        }
    }
}
</script>