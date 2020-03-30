<script>
  import Event from "./Event.svelte"
  import Events from "./Events.svelte"
  import 'bulma/css/bulma.css'
  let event;
  let events;
</script>

<style>
</style>

<h1 class="title">durm: dancing ur room</h1>
<main>
  <Events {events}/>
</main>
