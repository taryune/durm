<script>
  import Event from "./Event.svelte"
  import Events from "./Events.svelte"
  let event;
  let events;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello!</h1>
<main>
  <Events {events}/>
</main>
