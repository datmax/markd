<template>
<v-container>
<h2>New file</h2>
<v-layout>
<v-flex xs6>
    <v-text-field label="File name"></v-text-field>
</v-flex>
</v-layout>
<v-layout>
<v-flex xs12>
    <v-tabs color="grey lighten-4" slider-color="green lighten-3">
    <v-tab><v-icon class="icon">code</v-icon>Edit</v-tab>
    <v-tab><v-icon class="icon">visibility</v-icon>Preview</v-tab>
    </v-tabs>
    <v-textarea full-width class="textarea" rows="30" placeholder="This seems pretty empty.."></v-textarea>
</v-flex>

</v-layout>
</v-container>
</template>


<script>
export default {
    data: ()=>({
        title: null,
        body: null
    })
}
</script>

<style>
.textarea{
    border: 1px solid grey;
    border-radius: 3px;
}
.icon{
    padding-right: 10px;
}

</style>
