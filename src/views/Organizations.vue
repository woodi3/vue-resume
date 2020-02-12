<template>
    <div class="col-12">
        <div class="row m-0 justify-content-between">
            <div class="col" style="align-self: center;">
                <h3 class="builder-card-title">Fill in your Organizations</h3>
                <p class="builder-card-subtitle">Organizations you are affilated with may possess 
                    a network that helps get you selected.
                </p>
            </div>
            <div class="col-3" style="align-self: center; text-align: right;">
                <button class="icon-button" @click="addOrganization(genOrganization()); updateLocalStorage();">
                    <v-icon :icon="['fas', 'plus']" size="2x"></v-icon>
                </button>
            </div>
        </div>
        <div class="row" v-if="organizations.length === 0">
            <div class="col" style="text-align: center;">
                <button class="add-button"
                @click="addOrganization(genOrganization()); updateLocalStorage();">Add Organization</button>
            </div>
        </div>
        <div style="max-height: 456px; overflow-y: auto;">
            <div class="row" v-for="organization in organizations" :key="organization.idx">
                <div class="accordion" :class="[organization.expanded ? '' : 'gray-border-bottom']">
                    <div class="row m-0 justify-content-between">
                        <div class="col">
                            <h3>
                                {{organization.name === '' ? 
                                'Organization '+(organization.idx+1) 
                                : organization.name}}
                            </h3>
                        </div>
                        <div class="col-4" style="align-self: center; text-align: right;">
                            <button class="icon-button" @click="toggle(organization)">
                                <v-icon :icon="['far', 'edit']" size="2x"></v-icon>
                            </button>
                            <button class="icon-button" @click="removeOrganization(organization); updateLocalStorage();">
                                <v-icon :icon="['far', 'trash-alt']" size="2x"></v-icon>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="panel" 
                    :class="{'collapse': !organization.expanded, 
                        'expand': organization.expanded, 
                        'gray-border-bottom': organization.expanded}">
                    <OrganizationItem :item="organization" @editOrganization="updateLocalStorage"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import OrganizationItem from '../components/OrganizationItem'
import { mapActions } from 'vuex'
export default {
    components: {
        OrganizationItem
    },
    computed: {
        organizations(){
            return this.$store.state.organizations;
        }
    },
    methods: {
        ...mapActions([
            'editOrganization',
            'saveLocalStorage',
            'addOrganization',
            'removeOrganization'
        ]),
        updateLocalStorage: function(){
            this.saveLocalStorage({key:'resume-organizations', value: JSON.stringify(this.organizations)});
        },
        toggle: function(organization){
            organization.expanded = !organization.expanded;
            const organizations = JSON.parse(JSON.stringify(this.organizations));
            organizations.forEach(o => {
                if(o.idx !== organization.idx){
                    o.expanded = false;
                    this.editOrganization(o);
                }
            });
            this.editOrganization(organization);
        },
        genOrganization(){
            const organizations = JSON.parse(JSON.stringify(this.organizations));
            organizations.forEach(o => {
                o.expanded = false;
                this.editOrganization(o);
            });
            return {
                name: "",
                position: "",
                idx: this.organizations.length,
                expanded: false
            }
        }
    }
}
</script>
<style scoped>
.add-button {
    padding: 1rem;
    background-color: #723881;
    font-weight: bold;
    font-size: .95rem;
    color: white;
    border-color: #723881;
    margin: 1rem;
}
.add-button:hover {
    cursor: pointer;
}
</style>