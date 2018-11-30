<template>
    <v-layout>
        <v-flex xs8 offset-xs2>
            <v-card v-if="!isEmpty">
            <v-layout>
            <v-list class="list">
            <template  v-for="file in files">
            <v-list-tile class="tile" :key="file.id"  @click="edit(file.id)">
            <v-list-tile-title>
                {{file.title}}
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-subheader>{{file.date}}</v-subheader>
            <span @click="showDialog()">
                <v-icon color="red">close</v-icon>
            </span>
            </v-list-tile>
            <v-divider :key="file.title"></v-divider>
            </template>
            </v-list>
            </v-layout>
            </v-card>   
        </v-flex>
        <v-dialog class="dialog" v-model="dialog" width="500px">
            <v-card>
                <v-card-title class="headline green lighten-3" primary-title>
                Delete file
                </v-card-title>
                <v-card-text>
                    <h3>Are you sure you want to deletemd?</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error">Delete</v-btn>
                <v-btn @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
    </v-layout>
</template>

<script>
export default {
    data: ()=>({
        dialog: false
    }),

    computed: {
        files(){
            return this.$store.state.storage;
        },
        isEmpty(){
            return this.files.length > 0 ? false : true;
        },
    },
    methods:{
        deleteFile(id){
            this.dialog = false;
            this.$store.commit("deleteFile", id);
            this.$notify({
                group: 'notification',
                text:  "File deleted successfully.",
                type: "success"
    });
        },
        edit(id){
            this.$router.replace("edit/" + id);
        },
        
        showDialog(){               
            this.dialog = true;
            console.log(this.dialog);
        }
    },

}
</script>

<style scoped>
.list{
    padding-bottom: 0px;
    padding-top: 0px;
}
.tile{
    width: 100%;

}
.v-list__tile :hover{
    background-color: gray !important;
}
</style>
