<template>
  <div class="blog-post">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <p><strong>Date:</strong> {{ date }}</p>
    <hr />
    <div v-html="content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Les bases du C# pour débutants',
      description: 'Découvrez comment écrire vos premiers programmes C# avec variables, types et instructions.',
      date: '2025-12-31',
      content: `
        <h2>👋 Hello World</h2>
        <p>Pour commencer en C#, on écrit souvent un programme simple :</p>
        <pre><code class="language-csharp">
Console.WriteLine("Bonjour le monde !");
        </code></pre>
      `
    };
  }
};
</script>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
}

hr {
  margin: 2em 0;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}

code {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1em;
}
</style>