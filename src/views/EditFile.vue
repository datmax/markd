<template>
<v-container >

<v-layout>
<v-flex xs12 md6>
    <v-text-field label="File name" v-model="file.title"></v-text-field>
</v-flex>
</v-layout>
<v-layout>
<v-flex xs12>
    <v-tabs color="grey lighten-5" slider-color="green lighten-3">
    <v-spacer></v-spacer>
    <v-tab @click="changeView('code')"><v-icon class="icon" >code</v-icon>Edit</v-tab>
    <v-tab @click="changeView('preview')"><v-icon class="icon">visibility</v-icon>Preview</v-tab>
    </v-tabs>
    <v-textarea no-resize spellcheck="false" v-if="!preview" full-width class="textarea" rows="5"
     placeholder="This seems pretty empty.." v-model="file.body"></v-textarea>
    <div class="preview" v-else ><p v-html="previewBody"></p></div>
</v-flex>
</v-layout>
<v-layout>
    <v-spacer></v-spacer>
    <v-btn color="success" @click="save()">Save</v-btn>
    <v-btn color="error" @click="showDialog()">Delete</v-btn>
            <v-dialog class="dialog" v-model="dialog" width="500px">
            <v-card>
                <v-card-title class="headline green lighten-3" primary-title>
                Delete file
                </v-card-title>
                <v-card-text>
                    <h3>Are you sure you want to delete "{{file.title}}.md?"</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="deleteFile(file.id)" color="error">Delete</v-btn>
                <v-btn @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
</v-layout>
</v-container>
</template>


<script>
import MarkdownIt from "markdown-it";
var md = new MarkdownIt();
export default {
    data: ()=>({
        preview: false,
        dialog: false
    }),
    computed:{
        previewBody: function(){
            return md.render(this.file.body);
        },
        file: function(){
            //"file" object has this structure:        
            //title: "",
            //body: "",
            //id: null,
            //date: null
            return this.$store.getters.getFile(this.$route.params.id)
        },
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
            this.file.date = new Date().toJSON().slice(0,10).replace(/-/g,'/'); 
            this.$store.dispatch("save", this.file);
            this.$notify({
                group: 'notification',
                text:  "File saved.",
                type: "success"
            });         
        },
        showDialog(){               
            this.dialog = true;
            //console.log(this.dialog);
        },
        deleteFile(id){
            this.$store.commit("deleteFile", id);
            this.$router.replace("files");
            this.dialog = false;
            this.$notify({
                group: 'notification',
                text:  "File deleted successfully.",
                type: "success"
            });


        }
    },

    beforeDestroy(){
        this.$store.dispatch("updateStorage");
    }
}
</script>

<style>
.textarea{
    border: 1px solid grey;
}
.icon{
    padding-right: 10px;
}
.v-btn{
    margin-right: 0px;
}
p{
    margin-top: 10px;
}
</style>
