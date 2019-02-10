<template>
<v-container>

<v-layout>
<v-flex xs12 md6>
    <v-text-field v-model="file.title" label="File name"></v-text-field>
</v-flex>
</v-layout>
<v-layout>
<v-flex xs12>
    <v-tabs color="grey lighten-5" slider-color="green lighten-3">
    <v-spacer></v-spacer>
    <v-tab @click="changeView('code')"><v-icon class="icon" >code</v-icon>Edit</v-tab>
    <v-tab @click="changeView('preview')"><v-icon class="icon">visibility</v-icon>Preview</v-tab>
    </v-tabs>
    <v-textarea no-resize full-width spellcheck="false" v-if="!preview" class="textarea" rows="5"
     placeholder="This seems pretty empty.."
     v-model="file.body"></v-textarea>
    <div class="preview" v-else ><p v-html="previewBody"></p></div>
</v-flex>
</v-layout>
<v-layout>
    <v-spacer></v-spacer>
    <v-btn color="success" @click="save()">Save</v-btn>
    <v-btn color="grey" @click="showDialog()">Cancel</v-btn>
    <v-dialog class="dialog" v-model="dialog" width="500px">
            <v-card>
                <v-card-title class="headline green lighten-3" primary-title>
                Delete file
                </v-card-title>
                <v-card-text>
                    <h3>Are you sure?All progress will be lost.</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="cancel()" color="error">Yes</v-btn>
                <v-btn @click="dialog = false">No</v-btn>
                </v-card-actions>
                </v-card>
    </v-dialog>
</v-layout>
</v-container>
</template>

<script>
// this function creates a unique id for files.
// taken from somewhere on the magical world of the internet.
import MarkdownIt from 'markdown-it'
function uuidv4 () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
var md = new MarkdownIt()
export default {
  data: () => ({
    file: {
      title: '',
      body: '',
      id: null,
      date: null
    },
    preview: false,
    dialog: false
  }),
  computed: {
    previewBody: function () {
      return md.render(this.file.body)
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
      if (this.file.id === null) {
        this.file.id = uuidv4()
      }
      this.file.date = new Date().toJSON().slice(0, 10).replace(/-/g, '/')
      this.$store.dispatch('save', this.file)
      this.$notify({
        group: 'notification',
        text: 'File saved',
        type: 'success'
      })
    },
    cancel () {
      console.log('cancel')
      this.$router.replace('/')
    },
    showDialog () {
      this.dialog = true
    }
  },
  mounted () {
    this.file.id = null
    this.$store.dispatch('updateStorage')
  }
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
.preview{
    border-top: 1px solid grey;
}
.v-btn{
    margin-right: 0px;
}
p{
    margin-top: 10px;
}
</style>
