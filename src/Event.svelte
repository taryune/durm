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

<div class="box">
  <div class="panel-block">
    <a class="subtitle" target="_blank" href={event.url}>{event.title}</a>
  </div>
  <br>
  {#if event.image}
  <div class="card-image">
    <figure class="image is-4by3">
      <iframe class="has-ratio" width="640" height="360" src={event.image} title="image" frameborder="0"></iframe>
    </figure>
  </div>
  {/if}
  <br>
  <div class="pannel-block">
  {#each event.description.split('\n') as t}
    <p>{t}</p>
  {/each}
  <br>
  </div>
  <div class="panel-block"></div>
    <p class="">Genre: {event.genre}</p>
    <p>OPEN :{toStr(event.open)}</p>
    <p>CLOSE: {toStr(event.close)}</p>
    <a target="_blank" href={event.url}>{event.url}</a>
</div>
