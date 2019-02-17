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
              <v-btn flat icon color="danger"  @click.stop="showDialog(file.id)"><v-icon>delete</v-icon></v-btn>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-btn flat icon color="accent" @click.stop="download(file)"><v-icon>get_app</v-icon></v-btn>
            </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            </v-list>
            </v-card>
        </v-flex>
        <v-dialog class="dialog" v-model="dialog" width="500px">
            <v-card>
                <v-card-title class="headline green lighten-3" primary-title>
                Delete file
                </v-card-title>
                <v-card-text>
                    <h3>Are you sure you want to delete "{{currentFile.title}}.md?"</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="deleteFile(currentFile.id)" color="error">Delete</v-btn>
                <v-btn @click="dialog = false">Cancel</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
    </v-layout>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    currentFile: ''
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
    hello () {
      console.log('helo')
    },
    showDialog (id) {
      this.dialog = true
      this.currentFile = this.files.find(file => file.id === id)
    },
    deleteFile (id) {
      this.$store.commit('deleteFile', id)
      this.dialog = false
      this.$notify({
        group: 'notification',
        text: 'File deleted successfully.',
        type: 'success'
      })
    },
    download (file) {
      var element = document.createElement('a')
      element.setAttribute('href', 'data:file.body/plain;charset=utf-8,' + encodeURIComponent(file.body))
      element.setAttribute('download', file.title + '.md')

      element.style.display = 'none'
      document.body.appendChild(element)

      element.click()

      document.body.removeChild(element)
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
