<script>
  export let event;
function toStr(date){
  var d = new Date(date);
  return d.toString();
  }
</script>

<article>
  <h1>{event.title}</h1>
  <a href={event.url}>{event.url}</a>
  <p>{event.genre}</p><br>
  <p>{toStr(event.open)}</p><br>
  <p>{toStr(event.close)}</p><br>
  <p>{event.description}</p><br>
  <p>{event.image}</p><br>
</article>
