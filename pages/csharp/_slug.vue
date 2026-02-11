<template>
  <article>
    <h1>{{ document.title }}</h1>
    <p>{{ document.description }}</p>
    <p><strong>Date:</strong> {{ document.date }}</p>
    <hr />
    <nuxt-content :document="document" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const document = await $content('blog', params.slug).fetch()
    return { document }
  }
}
</script>

<style scoped>
article {
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
</style>