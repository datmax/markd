<template>
    <div>
    <blockquote class="quote display-2 font-weight-bold">What is markdown?</blockquote>
    <p class="body-2">
        Taken from <a href="https://en.wikipedia.org/wiki/Markdown">Wikipedia</a>:
        Markdown is a lightweight markup language with plain text formatting syntax.
        Its design allows it to be converted to many output formats,
        but the original tool by the same name only supports HTML.
        Markdown is often used to format readme files, for writing messages in online discussion forums,
        and to create rich text using a plain text editor.
        Since the initial description of Markdown contained ambiguities and unanswered questions,
        the implementations that appeared over the years have subtle differences and many come with syntax extensions.
    </p>
    <blockquote class="quote display-2 font-weight-bold">How do I learn it?</blockquote>
    <p class="body-2">
        For a quick start,
        <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">check this out</a>.
        It should be enough for basic formatting and writing. If you're looking for something more,
        then <a href="https://daringfireball.net/projects/markdown">this</a> is a more deep dive into
        markdown and its usage.
    </p>
    <blockquote class="quote display-2 font-weight-bold">How is this app made?</blockquote>
    <p class="body-2">
        I made this app using <a href="https://vuejs.org/">Vue</a> and
        <a href="https://vuetifyjs.com">Vuetify</a> to make it pretty.
        <a href="https://github.com/datmax/markd">You can check the repo on github</a>.
        <br>
        Feel free to make it better!
    </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
blockquote{
    padding-bottom: 5px;
    padding-top: 20px;
}

</style>
