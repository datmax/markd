<template>
<div>
<v-layout>
    <v-flex xs12 md12 lg6 >
    <v-text-field :rules="[rules.required]" v-model="file.title" label="File name"></v-text-field>
    </v-flex>
</v-layout>
<v-layout>
    <v-flex xs12 md12 l12 xl6>
    <v-tabs class="hidden-xl-only" color="background" slider-color="primary">
    <v-tab @click="changeView('code')"><v-icon class="icon" >code</v-icon>Edit</v-tab>
    <v-tab @click="changeView('preview')"><v-icon class="icon">visibility</v-icon>Preview</v-tab>
    </v-tabs>
    <v-textarea full-width auto-grow spellcheck="false" v-if="!preview" class="textarea"
     placeholder="This seems pretty empty.."
     v-model="file.body"></v-textarea>
    <div class="preview" v-else ><p v-html="previewBody"></p></div>
</v-flex>
<v-flex xl6 class="hidden-lg-and-down">
  <div class="preview"><p v-html="previewBody"></p></div>
</v-flex>
</v-layout>
</div>
</template>

<script>
import MarkdownIt from 'markdown-it'
var md = new MarkdownIt()

export default {
  computed: {
    previewBody: function () {
      return md.render(this.file.body)
    }
  },
  data: () => ({
    preview: false,
    rules: {
      required: value => !!value || 'Required.'
    }
  }),

  props: {
    file: Object
  },

  methods: {
    changeView (arg) {
      if (arg === 'code') {
        this.preview = false
      }
      if (arg === 'preview') {
        this.preview = true
      }
    }
  }
}
</script>

<style>

</style>
