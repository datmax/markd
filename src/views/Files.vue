<template>
    <v-layout>
        <v-flex xs8 offset-xs2>
            <v-card v-if="!isEmpty">
            <v-list class="list">
            <template  v-for="file in files">
            <v-list-tile :key="file.id" @click="edit(file.id)">
            <v-list-tile-content>
                {{file.title}}
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-subheader>{{file.date}}</v-subheader>
            <v-dialog class="dialog" v-model="dialog" width="500px">
            <v-icon slot="activator" color="red" @click="dialog = true">close</v-icon>
            <v-card>
                <v-card-title class="headline green lighten-3" primary-title>
                Delete file
                </v-card-title>
                <v-card-text>
                    <h3>Are you sure you want to delete {{file.title}}.md?</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="deleteFile(file.id)" color="error">Delete</v-btn>
                <v-btn @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
            </v-list-tile>
            <v-divider :key="file.title"></v-divider>
            </template>
            </v-list>
            </v-card>
        </v-flex>
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
        }
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
        }
    },

}
</script>

<style scoped>
.close :hover{
    background-color: black;
    cursor: pointer;
}
.list{
    padding-bottom: 0px;
    padding-top: 0px;
}

</style>
