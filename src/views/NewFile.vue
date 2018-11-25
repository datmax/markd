<template>
<v-container>

<v-layout>
<v-flex xs3>
    <v-text-field v-if="!preview" v-model="title" label="File name"></v-text-field>
    <h2 v-else>{{title}}</h2>
</v-flex>
</v-layout>
<v-layout>
<v-flex xs12>
    <v-tabs color="grey lighten-4" slider-color="green lighten-3">
    <v-spacer></v-spacer>
    <v-tab @click="changeView('code')"><v-icon class="icon" >code</v-icon>Edit</v-tab>
    <v-tab @click="changeView('preview')"><v-icon class="icon" @>visibility</v-icon>Preview</v-tab>
    </v-tabs>
    <v-textarea v-if="!preview" full-width class="textarea" rows="30"
     placeholder="This seems pretty empty.."
     v-model="body"></v-textarea>
    <div class="preview" v-else v-html="previewBody"></div>

</v-flex>

</v-layout>
</v-container>
</template>


<script>
import MarkdownIt from "markdown-it";
var md = new MarkdownIt();
export default {
    data: ()=>({
        title: null,
        body: null,
        preview: false,
    }),
    computed:{
        previewBody: function(){
            return md.render(this.body);
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
        }
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

</style>
