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
    <codemirror class="code" v-model="file.body" :options="preferences" v-if="!preview"></codemirror>
    <div class="preview" v-else ><p v-html="previewBody"></p></div>
</v-flex>
<v-flex xl6 class="hidden-lg-and-down lg">
  <div class="preview"><p v-html="previewBody"></p></div>
</v-flex>
</v-layout>
</div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown.js'
import mbo from 'codemirror/theme/mbo.css'
import base16 from 'codemirror/theme/base16-dark.css'
import solarized from 'codemirror/theme/solarized.css'
import material from 'codemirror/theme/material.css'
import monokai from 'codemirror/theme/monokai.css'

var md = new MarkdownIt()

export default {
  computed: {
    previewBody: function () {
      return md.render(this.file.body)
    },
    preferences: function () {
      return this.$store.state.preferences
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
  },
  components: {
    codemirror
  }
}
</script>

<style>
.CodeMirror{
  margin: 0 !important;
  height: auto;
}
.lg{
  border-top: 1px solid grey;
  margin-left: 20px;
  padding-right: 10px;
  padding-left: 10px;
}
.textarea{
    border: 1px solid grey;
    border-radius: 3px;
    width: 100%;
    height: 55vh;
    padding-top: 5px;
}

</style>
