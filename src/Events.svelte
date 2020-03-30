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

{#if events}
  {#each events as event}
    <ul>
      <li><Event {event}/></li>
    </ul>
  {/each}
{:else}
    <p class="loading">loading</p>
{/if}
