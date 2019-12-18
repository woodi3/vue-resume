<template>
    <div>
        <div class="row">
            <div class="col-6">
                <label :for="'achievementTitle'+item.idx">Title</label>
                <input class="form-control"
                :id="'achievementTitle'+item.idx" 
                :name="'achievementTitle'+item.idx"
                type="text"
                required
                placeholder="Give your achievement a title."
                :value="item.title" 
                @blur="update($event.target.value, 'title')"/>
            </div>
        </div>
        <div class="row m-0">
            <div class="col">
                <div class="form-group m-0">
                    <label :for="'achievementDescription'+item.idx">Description</label>
                    <textarea class="form-control" 
                    :id="'achievementDescription'+item.idx"
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
    methods: {
        ...mapActions([
            'editAchievement'
        ]),
        update: function(value, key){
            const achievement = JSON.parse(JSON.stringify(this.item));
            achievement[key] = value;
            this.editAchievement(achievement);
            this.$emit('editAchievement');
        }
    }
}
</script>