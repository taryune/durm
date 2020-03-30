<script>
  export let event;
  let text = event.description.split('\n');
  function toStr(date){
    var d = new Date(date);
    var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}[${week[d.getDay()]}] 
            ${('0'+d.getHours()).slice(-2)}:${('0'+d.getMinutes()).slice(-2)}`;
  }

</script>

<article class="tile is-child box">
  <p class="title">{event.title}</p>
  <p class="subtitle">{event.genre}</p>
  {#if event.image}
  <figure class="image is-4by3">
    <img src={event.image} alt={event.image}/>
  </figure>
  {/if}
  <div class="containt">
    {#each event.description.split('\n') as t}
      <p>{t}</p>
    {/each}
    <p>-- info --</p>
    <p>OPEN :{toStr(event.open)}</p>
    <p>CLOSE: {toStr(event.close)}</p><br>
    <a target="_blank" href={event.url}>{event.url}</a>
  </div>
</article>
