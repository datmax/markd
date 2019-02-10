<template>
    <v-layout>
        <v-flex xs12>
            <v-card v-if="!isEmpty">
            <v-list class="list">
            <v-layout child-flex v-for="file in files" :key="file.id">
            <div>
            <v-list-tile class="tile" @click="edit(file.id)">
            <v-list-tile-title>
                {{file.title}}
            </v-list-tile-title>
            <v-spacer></v-spacer>
            <v-subheader>{{file.date}}</v-subheader>
            </v-list-tile>
            <v-divider></v-divider>
            </div>
            </v-layout>
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
    }
  }

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
    background-color: rgb(173, 173, 173) !important;
}
</style>
