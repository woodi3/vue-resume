<template>
    <div class="col-12">
        <h3 class="builder-card-title">Fill in Your Objective</h3>
        <p class="builder-card-subtitle">
            Your objective tells the hiring company why you are seeking employment. 
            It is a concisely written statement of your career and position goals.
        </p>
        <div class="form-group">
            <label for="objective">Write your objective</label>
            <textarea class="form-control" 
            id="objective"
            spellcheck="true" 
            rows="3" 
            :value="objective"
            @blur="editObjective($event.target.value.trim()); updateLocalStorage();"></textarea>
        </div>
    </div>
</template>

<script>
// TODO: Run grammar checks
import { mapActions } from 'vuex'
export default {
    computed: {
        objective(){
            return this.$store.state.objective;
        }
    },
    methods: {
        ...mapActions([
            'editObjective',
            'saveLocalStorage'
        ]),
        updateLocalStorage(){
            this.saveLocalStorage({key: 'resume-objective', value: this.objective});
        }
    }
}
</script>