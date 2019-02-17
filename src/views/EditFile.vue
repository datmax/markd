<template>
<v-container>
<editor :file="file"></editor>
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
import MarkdownIt from 'markdown-it'
import editor from '@/components/editor'
var md = new MarkdownIt()
export default {
  data: () => ({
    preview: false,
    dialog: false
  }),
  computed: {
    previewBody: function () {
      return md.render(this.file.body)
    },
    file: function () {
      // "file" object has this structure:
      // title: "",
      // body: "",
      // id: null,
      // date: null
      return this.$store.getters.getFile(this.$route.params.id)
    }
  },

  methods: {
    changeView (arg) {
      if (arg === 'code') {
        this.preview = false
      }
      if (arg === 'preview') {
        this.preview = true
      }
    },
    save () {
      this.file.date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      this.$store.dispatch('save', this.file)
      this.$notify({
        group: 'notification',
        text: 'File saved.',
        type: 'success'
      })
    },
    showDialog () {
      this.dialog = true
      // console.log(this.dialog);
    },
    deleteFile (id) {
      this.$store.commit('deleteFile', id)
      this.$router.replace('files')
      this.dialog = false
      this.$notify({
        group: 'notification',
        text: 'File deleted successfully.',
        type: 'success'
      })
    }
  },

  beforeDestroy () {
    this.$store.dispatch('updateStorage')
  },
  components: {
    'editor': editor
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
