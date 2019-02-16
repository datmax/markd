<template>
    <v-layout>
        <v-flex xs12>
            <v-card v-if="!isEmpty">
            <v-list class="list">
            <v-list-tile v-for="file in files" :key="file.id" class="tile" @click="edit(file.id)">
            <v-list-tile-content>
            <v-list-tile-title>
                {{file.title}}
            </v-list-tile-title>
            </v-list-tile-content>
            <v-spacer></v-spacer>
            <v-subheader>{{file.date}}</v-subheader>
            <v-list-tile-action>
              <v-btn flat icon color="danger"  @click.stop="hello()"><v-icon>delete</v-icon></v-btn>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn flat icon color="accent" @click.stop="download()"><v-icon>get_app</v-icon></v-btn>
            </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),

  computed: {
    files () {
      return this.$store.state.storage
    },
    isEmpty () {
      return !(this.files.length > 0)
    }
  },
  methods: {
    edit (id) {
      this.$router.replace('/' + id)
    },
    hello(){
      console.log("helo");
    }
  }

}
</script>

<style scoped>
.list{
    padding-bottom: 0px;
    padding-top: 0px;
}
.v-list__tile :hover{
    background-color: rgb(173, 173, 173) !important;
}
</style>
