<script>
  import Events from "./Events.svelte"
  import 'bulma/css/bulma.css'
  let events;
</script>

<section class="hero">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">durm💃</h1>
      <h2 class="subtitle">dancing in ur room</h2>
      <a class="button is-danger" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScmJ6OjCaMVRvEre1lYLRZr_QWHDvCtWyIq-rrtocBCmMXECA/viewform">
        🥳 add ur party 🥳
      </a>
      <a class="button is-info"
         target="_blank"
         href="https://twitter.com/intent/tweet?text=durm:%20dancing%20in%20ur%20room%20-%20&url=https://durm.taryu.net/">
      Tweet</a>

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
