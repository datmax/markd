<template>
    <div class="text-xs-center">
      <h1 class="display-4">Markd</h1>
      <hr>
      <h2 class="display-2">A fast, easy to use markdown editor and previewer.</h2>
      <p class="danger">
        <v-alert dark :value="true" type="warning">NOTE: This is a work in progress. If you encounter some bugs,
        <a href="https://github.com/datmax/markd"> open an issue</a>.</v-alert>
     </p>
      <div class="headline text-md-left">
        <p>Features:</p>
        <ul>
        <li>Write in markdown and preview your work with a single click.</li>
        <li>No account required! All your files are saved in browser's local storage.</li>
        </ul>
        <p>Work in progress: </p>
        <ul>
          <li>Export markdown files in .md, .pdf and .html</li>
          <li>Dark theme</li>
          <li>Something else i don't remember that i wanted to implement</li>
        </ul>

      </div>
    </div>
</template>

<script>
export default{
    components:{

    }
}
</script>
<style scoped>
h2{
  padding-bottom: 50px;
}
</style>
