<script>
  import Events from "./Events.svelte"
  import 'bulma/css/bulma.css'
  let events;
</script>

<style>
</style>

<section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        durm
      </h1>
      <h2 class="subtitle">
        dancing in ur room
      </h2>
    </div>
  </div>
</section>

<main>
  <div class="column">
    <Events {events}/>
  </div>
</main>

<footer class="footer">
  <div class="content has-text-centered is-small">
    <p>
      <strong>durm</strong> by <a href="https://twitter.com/rumitoast">rumitoast</a>.
    </p>
  </div>
</footer>
