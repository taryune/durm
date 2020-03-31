<script>
  import{ onMount } from "svelte";
  import Button from 'svelma/src/components/Button.svelte'
  import Event from "./Event.svelte";
  let events = [];
  let loading = false;
  let inverted = "today";

function changeArrStats(arr, target){
  Object.keys(obj).forEach( function(key) {
    if(key == target){ this.key =true} else {this.key=false};
    });
  }

  async function loadEvents(start, end){
    loading = true;
    await fetch(`https://script.google.com/macros/s/AKfycbyFRvliLoM3QYdEkF6LkiQzJnC41wCEim4iaB2XNZRXoJ3Ge6do/exec?start=${start}&end=${end}`)
      .then(r => r.json())
      .then(data => {
        events = data;
        loading = false;
        if(start===0&&end===1){
          inverted = "today";
        } else if(start===0&&end===7){
          inverted = "week";
       } else if(start===-7&&end===0){
          inverted = "last";
       }
      });
  }

  onMount(async () => {
    await loadEvents(0,1);
  });

</script>

<div class="buttons are-large is-centered has-addons">
  {#if inverted == "last"}
    <Button type="is-warning"
            on:click={() => loadEvents(-7,0)}>
            Last week
    </Button>
  {:else}
    <Button type="is-white-ter"
            on:click={() => loadEvents(-7,0)}>
            Last week
    </Button>
    {/if}
  {#if inverted == "today"}
    <Button type="is-warning"
            on:click={() => loadEvents(0,1)}>
            Today
    </Button>
  {:else}
    <Button type="is-white-ter"
            on:click={() => loadEvents(0,1)}>
            Today
    </Button>
  {/if}
  {#if inverted == "week"}
    <Button type="is-warning"
            on:click={() => loadEvents(0,7)}>
            This week
    </Button>
  {:else}
    <Button type="is-white-ter"
            on:click={() => loadEvents(0,7)}>
            This week
    </Button>
  {/if}
</div>

<div class="column has-text-centered">
  <div class="column">
  {#if loading}
      <progress class="progress is-large is-warning" max="100">15%</progress>
  {:else}
    {#if !events.length}
      <p class="">😢 no party 😢</p>
    {/if}
  {/if}
  </div>
</div>

<div class="columns is-ancestor is-multiline">
{#if events}
  {#each events as event}
      <div class="column is-parent is-4">
          <Event {event}/>
      </div>
  {/each}
{/if}
</div>


