<template>
<div text-xs-left>
    <h1 class="display-4">Preferences </h1>
    <br><br>
    <h2>Coming soon&#8482</h2>
<!--
    <v-container id="dropdown-example" grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <p class="display-1">Theme:</p>
        <v-overflow-btn @click="save($event)"
          :items="styles"
          :label="currentTheme"
          target="#dropdown-example"
        ></v-overflow-btn>
      </v-flex>
    </v-layout>
    <v-btn color="primary" @click="save()"></v-btn>
    </v-container>
    !-->
</div>
</template>

<script>
//THIS IS NOT WORKING
//HOW DO I GET THE VALUE OF THAT BUTTON IDK
export default {
    data:()=>({
        styles: ["Mbo", "Base16-dark", "Solarized Light", "Material"]
    }),
    computed: {
        currentTheme(){
            return this.$store.state.preferences.theme
        }
    },
    methods:{
        save(e){
            console.log(e.target.value);
        }
    }
}
</script>

<style>

</style>
