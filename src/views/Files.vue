<template>
    <v-layout>
        <v-flex xs8 offset-xs2>
            <v-card v-if="!isEmpty">
            <v-list class="list">
            <template  v-for="file in files">
            <v-list-tile :key="file.id">
            <v-list-tile-content>
                {{file.title}}
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-icon color="red" @click="deleteFile(file.id)">close</v-icon>
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
            this.$store.commit("deleteFile", id);
        }
    }
}
</script>

<style scoped>
.close :hover{
    background-color: black;
    cursor: pointer;
}
.list{
    padding-bottom: 0px;
}
</style>
