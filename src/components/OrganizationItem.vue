<template>
    <div>
        <div class="row">
            <div class="col-6">
                <label :for="'organizationName'+item.idx">Organization Name</label>
                <input class="form-control"
                :id="'organizationName'+item.idx" 
                :name="'organizationName'+item.idx"
                type="text"
                required
                placeholder="Enter your organization name."
                :value="item.name" 
                @blur="update($event.target.value.trim(), 'name')"/>
            </div>
        </div>
        <div class="row m-0">
            <div class="col">
                <div class="form-group m-0">
                    <label :for="'organizationPosition'+item.idx">Your Position</label>
                    <input class="form-control" 
                    :id="'organizationPosition'+item.idx"
                    :value="item.position"
                    @blur="update($event.target.value.trim(), 'position');"/>
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
            'editOrganization'
        ]),
        update: function(value, key){
            const organization = JSON.parse(JSON.stringify(this.item));
            organization[key] = value;
            this.editOrganization(organization);
            this.$emit('editOrganization');
        }
    }
}
</script>