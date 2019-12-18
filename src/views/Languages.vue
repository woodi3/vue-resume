<template>
    <div class="col-12">
        <h3 class="builder-card-title">Fill in Languages You Speak</h3>
        <p class="builder-card-subtitle">
            Knowing multiple languages may increase your chances of being selected.
        </p>
        <div class="form-group autocomplete">
            <label for="languageSearch">Search languages</label>
            <input class="form-control" 
                type="search" 
                id="languageSearch" 
                name="languageSearch"
                placeholder="Search a language..."
                v-model="searchVal"
                @input="searchLanguages"/>
            <div class="autocomplete-items" v-if="autoCompleteItems.length > 0">
                <div v-for="item in autoCompleteItems" :key="item" @click="addLanguage(item); updateLocalStorage();">
                    <span>
                        <strong>{{item.substr(0, searchVal.length)}}</strong>{{item.substr(searchVal.length)}}
                    </span>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="item in languages" :key="item" :class="getColSize(item)">
                <h2 class="m-0" style="display: inline;">
                    <span class="badge language">
                        {{item}}
                    </span>
                </h2>
                <button class="icon-button" @click="removeLanguage(item); updateLocalStorage();">
                    <v-icon :icon="['far', 'trash-alt']" size="2x"></v-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            autoCompleteItems: [],
            searchVal: ""
        }
    },
    mounted() {
        document.addEventListener('click', this.closeAutoComplete);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.closeAutoComplete);
    },
    methods: {
        ...mapActions([
            'addLanguage',
            'removeLanguage',
            'saveLocalStorage'
        ]),
        searchLanguages: function($event){
            const val = $event.target.value.trim();
            if(val === '') return;

            this.autoCompleteItems = this.options
                .filter(l => l.substr(0, val.length).toUpperCase() === val.toUpperCase());
        },
        closeAutoComplete: function(){
            this.autoCompleteItems = [];
        },
        updateLocalStorage: function(){
            this.saveLocalStorage({key: 'resume-languages', value: JSON.stringify(this.languages)})
        },
        getColSize(item){
            if(item.length < 7){
                return "col-3"
            }
            else if(item.length >=7 && item.length < 12){
                return "col-4"
            }
            else if(item.length >=12 && item.length <20){
                return "col-6"
            }
            else {
                return "col"
            }
        }
    },
    computed: {
        languages(){
            return this.$store.state.languages;
        },
        options(){
            return [
                "Afrikaans",
                "Akan",
                "Albanian",
                "Amharic",
                "Arabic",
                "Armenian",
                "ASL",
                "Assamese",
                "Assyrian",
                "Azerbaijani",
                "Belarusian",
                "Bengali",
                "Bosnian",
                "Bulgarian",
                "Burmese",
                "Cambodian",
                "Cantonese",
                "Catalan",
                "Cebuano",
                "Chinese",
                "Creole",
                "Croatian",
                "Czech",
                "Danish",
                "Dari",
                "Dutch",
                "English",
                "Estonian",
                "Ewe",
                "Fanti",
                "Farsi",
                "Finnish",
                "French",
                "Ga",
                "German",
                "Greek",
                "Gujarati",
                "Hakka",
                "Hausa",
                "Hebrew",
                "Hindi",
                "Hungarian",
                "Ilocano",
                "Indonesian",
                "Italian",
                "Japanese",
                "Khmer",
                "Kikongo",
                "Korean",
                "Kurdish",
                "Laotian",
                "Latin",
                "Latvian",
                "Lingala",
                "Lithuanian",
                "Macedonian",
                "Malay",
                "Malayalam",
                "Maltese",
                "Mandarin",
                "Mandigo",
                "Marathi",
                "Mongolian",
                "Nepali",
                "Norwegian",
                "Oromo",
                "Pashto",
                "Persian",
                "Pilipino",
                "Polish",
                "Portuguese",
                "Punjabi",
                "Romanian",
                "Russian",
                "Serbian",
                "Sinhalese",
                "Slovenian",
                "Somali",
                "Spanish",
                "Swahili",
                "Swedish",
                "Tagalog",
                "Taiwanese",
                "Tamil",
                "Telegu",
                "Thai",
                "Tibetan",
                "Tigrinya",
                "Turkish",
                "Twi",
                "Ukrainian",
                "Urdu",
                "Vietnamese",
                "Yiddish",
                "Yoruba",
                "Zulu"
            ]
        }
    }
}
</script>

<style scoped>
.autocomplete {
    position: relative;
    display: inline-block;
    width: 100%;
}
.autocomplete-items {
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  /*position the autocomplete items to be the same width as the container:*/
  top: 100%;
  left: 0;
  right: 0;
}
.autocomplete-items div {
  padding: 10px;
  cursor: pointer;
  background-color: #fff; 
  border-bottom: 1px solid #d4d4d4; 
}

/*when hovering an item:*/
.autocomplete-items div:hover {
  background-color: #e9e9e9; 
}

.language {
    background-color: #723881;
    color: #fff;
}
</style>