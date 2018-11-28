<template>
<v-container>

<v-layout>
<v-flex xs3>
    <v-text-field v-model="file.title" label="File name"></v-text-field>
</v-flex>
</v-layout>
<v-layout>
<v-flex xs12>
    <v-tabs color="grey lighten-4" slider-color="green lighten-3">
    <v-spacer></v-spacer>
    <v-tab @click="changeView('code')"><v-icon class="icon" >code</v-icon>Edit</v-tab>
    <v-tab @click="changeView('preview')"><v-icon class="icon">visibility</v-icon>Preview</v-tab>
    </v-tabs>
    <v-textarea spellcheck="false" v-if="!preview" full-width class="textarea" rows="30"
     placeholder="This seems pretty empty.."
     v-model="file.body"></v-textarea>
    <div class="preview" v-else ><p v-html="previewBody"></p></div>
</v-flex>
</v-layout>
<v-layout>
    <v-spacer></v-spacer>
    <v-btn class="success" @click="save()">Save</v-btn>
    <v-btn color="error">Delete</v-btn>
</v-layout>
</v-container>
</template>


<script>
import MarkdownIt from "markdown-it";
var md = new MarkdownIt();
export default {
    data: ()=>({
        file:{
            title: "",
            body: "",
            id: null
        },
        preview: false,
    }),
    computed:{
        previewBody: function(){
            return md.render(this.file.body);
        }
    },

    methods:{
        changeView(arg){
            if(arg == "code"){
                this.preview = false;
            }
            if(arg == "preview"){
                this.preview = true;
            }
        },
        save(){
            if(this.file.id == null){
                this.file.id = '_' + Math.random().toString(36).substr(2, 9)
            }
            this.$store.dispatch("save", this.file);            
        }
    },
    mounted(){
        this.file.id = null;
    }
}
</script>

<style scoped>
.textarea{
    border: 1px solid grey;
    border-radius: 3px;
}
.icon{
    padding-right: 10px;
}
.preview{
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}
.v-btn{
    margin-right: 0px;
}
p{
    margin-top: 10px;
}
</style>
