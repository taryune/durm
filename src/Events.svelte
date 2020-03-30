<script>
  import{ onMount } from "svelte";
  import Button from 'svelma/src/components/Button.svelte'
  import Event from "./Event.svelte";
  let events;
  let loading = false;
  let inverted = "Week";

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
          inverted = "Today";
        } else if(start===0&&end===7){
          inverted = "Week";
        }
      });
  }

  onMount(async () => {
    await loadEvents(0,7);
  });

</script>
<div class="buttons">
  {#if inverted == "Today"}
    <Button type="is-light"
            inverted
            {loading}
            on:click={() => loadEvents(0,1)}>
            Today
    </Button>
  {:else}
    <Button type="is-light"
            {loading}
            on:click={() => loadEvents(0,1)}>
            Today
    </Button>
  {/if}
  {#if inverted == "Week"}
    <Button type="is-light"
            inverted
            {loading}
            on:click={() => loadEvents(0,7)}>
            Week
    </Button>
  {:else}
    <Button type="is-light"
            {loading}
            on:click={() => loadEvents(0,7)}>
            Week
    </Button>
  {/if}
</div>


<div class="columns is-ancestor is-multiline">
{#if events}
  {#each events as event}
      <div class="tile is-parent is-3">
          <Event {event}/>
      </div>
  {/each}
{/if}
</div>


