<template>
<v-container class="pa-0">
<editor :file="file"></editor>
<v-layout>
    <v-spacer></v-spacer>
    <v-btn color="primary" @click="save()">Save</v-btn>
    <v-btn color="secondary" @click="showDialog()">Cancel</v-btn>
    <v-dialog class="dialog" v-model="dialog" width="500px">
            <v-card>
                <v-card-title class="headline primary" primary-title>
                Discard file
                </v-card-title>
                <v-card-text>
                    <h3>Are you sure?All progress will be lost.</h3>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="cancel()" color="danger">Yes</v-btn>
                <v-btn @click="dialog = false">No</v-btn>
                </v-card-actions>
                </v-card>
    </v-dialog>
</v-layout>
</v-container>
</template>

<script>
import editor from '@/components/editor'
// this function creates a unique id for files.
// taken from somewhere on the magical world of the internet.
function uuidv4 () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
export default {
  data: () => ({
    file: {
      title: '',
      body: '',
      id: null,
      date: null
    },
    dialog: false
  }),

  methods: {
    save () {
      if (this.file.title !== '') {
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
        this.$router.replace(this.file.id)
      } else {
        this.$notify({
          group: 'notification',
          text: 'File name required',
          type: 'error'
        })
      }
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
  },
  components: {
    'editor': editor
  }
}
</script>

<style>
.icon{
    padding-right: 10px;
}
.v-btn{
    margin-right: 0px;
}
</style>
