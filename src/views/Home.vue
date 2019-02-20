<template>
    <div class="text-xs-center">
      <h1 class="display-4">Markd</h1>
      <hr><br>
      <h2 class="display-2">A fast, easy to use markdown editor and previewer.</h2>
      <div class="headline text-md-left">
        <p class="display-1">Features:</p>
        <ul>
        <li>Write in markdown and preview your work with a single click.</li>
        <li>No account required! All your files are saved in browser's local storage.</li>
        <li>New🔥: Syntax highlighting supported!</li>
        </ul>
        <p>Work in progress: </p>
        <ul>
          <li>Custom themes, tab space, app theme(dark or light)</li>
          <li>Export markdown files in .md, .pdf and .html</li>
          <li>Add user authentication(maybe?)</li>
        </ul>
      </div>
      <div id="repo" class="headline">
        <p>Github repo: <a href="https://github.com/datmax/markd">https://github.com/datmax/markd</a></p>
      </div>
    </div>
</template>

<script>
export default{
  components: {

  }
}
</script>
<style scoped>
h2{
  padding-bottom: 50px;
}
#repo{
  padding-top: 20px;
}
</style>
