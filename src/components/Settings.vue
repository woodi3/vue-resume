<template>
    <div class="settings-component">
        <h3 class="builder-card-title">Resumé Settings</h3>
        <p class="builder-card-subtitle">Configure your resumé to fit your needs.</p>
        <!-- <div class="change-template">
            <h4>Template</h4>
            <div class="change-template-container">
                <img class="template-icon" src="https://via.placeholder.com/400"/>
                <p>{{settings.template.text}}</p>
                <button class="primary-button">
                    Change Template
                </button>
            </div>
        </div> -->
        <div class="change-colors">
            <h4>Border and Divider Color</h4>
            <div class="color-wheel row">
                <div class="col-2 color-circle-container" 
                    v-for="color in colors" 
                    :key="color.class"
                    @click="selectColor(color)">
                    <div class="color-circle" :class="color.class"></div>
                    <div class="selected-color" v-if="color.selected">
                        <v-icon :icon="['fas', 'check']" style="color: #fff"></v-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// TODO
// - Make 2 More Templates
// - Add Validation to all sections
//      - Max 3 Work experiences
//      - Max 3 Education
//      - Max 240 Characters in any text area
//      - Max 20 skills
//      - Max 5 achievements
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions([
            'changeColor',
            'saveLocalStorage'
        ]),
        selectColor: function(selectedColor){
            // could set it here but would be redundant 
            // since we set the selected attribute
            // in the computed 'colors'
            // selectedColor.selected = true
            this.colors.forEach(c => {
                if(c.class !== selectedColor.class){
                    c.selected = false;
                }
            });
            let color = {text: selectedColor.class, hex: selectedColor.hex};
            this.changeColor(color);
            this.updateLocalStorage();
        },
        updateLocalStorage: function(){
            this.saveLocalStorage({key:'resume-settings', value: JSON.stringify(this.settings)});
        }
    },
    computed: {
        settings(){
            return this.$store.state.settings;
        },
        colors(){
            let colors = [
                {
                    "class": "red",
                    "selected": false,
                    "hex": "#FF3333"
                },
                {
                    "class": "yellow",
                    "selected": false,
                    "hex": "#F9FF33"
                },
                {
                    "class": "light-green",
                    "selected": false,
                    "hex": "#3FFF33"
                },
                {
                    "class": "dark-green",
                    "selected": false,
                    "hex": "#0D420A"
                },
                {
                    "class": "light-blue",
                    "selected": false,
                    "hex": "#0AE7EE"
                },
                {
                    "class": "blue",
                    "selected": false,
                    "hex": "#0000ff"
                },
                {
                    "class": "purple",
                    "selected": false,
                    "hex": "#910AEE"
                },
                {
                    "class": "dark-purple",
                    "selected": false,
                    "hex": "#51056F"
                }
            ];
            let selected = colors.filter(c => c.class === this.settings.color.text)[0];
            if(selected){
                selected.selected = true;
            }
            return colors;
        }
    }
}
</script>

<style scoped>
.change-template-container {
    text-align: center;
    border: 2px solid #e0e0e0;
    padding: 1rem;
}
.template-icon {
    border-radius: 50%;
    width: 100px;
}
.color-circle-container {
    margin: .5rem;
    position: relative;
}
.selected-color {
    position: absolute;
    top: 14px;
    left: 25px;
}
.color-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.color-circle:hover {
    cursor:pointer;
}
.red {
    background-color: #FF3333;
}
.yellow {
    background-color: #F9FF33;
}
.light-green {
    background-color: #3FFF33;
}
.dark-green {
    background-color: #0D420A;
}
.light-blue {
    background-color: #0AE7EE;
}
.blue {
    background-color: #0000ff;
}
.purple {
    background-color: #910AEE;
}
.dark-purple {
    background-color: #51056F;
}

</style>