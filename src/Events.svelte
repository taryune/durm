<script>
  import{ onMount } from "svelte";
  import Event from "./Event.svelte";
  let events;

  onMount(async () => {
    await fetch(`https://script.google.com/macros/s/AKfycbyFRvliLoM3QYdEkF6LkiQzJnC41wCEim4iaB2XNZRXoJ3Ge6do/exec`)
      .then(r => r.json())
      .then(data => {
        events = data;
      });
  });
</script>

<div class="columns is-ancestor is-multiline">
{#if events}
  {#each events as event}
      <div class="tile is-parent is-3">
          <Event {event}/>
      </div>
  {/each}
{:else}
    <div class="tile is-parent">loading</div>
{/if}
</div>


