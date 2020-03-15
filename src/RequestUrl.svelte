<script>
  export let text = "";
  export let icon;
  export let cli;

  $: url = `${location.protocol}//${
    location.host
  }/api/?text=${encodeURIComponent(text)}&icon=${icon}&cli=${encodeURIComponent(
    cli
  )}`;
</script>

<output
  contenteditable
  class="block font-mono bg-gray-900 text-white px-3 py-2 break-all">
  {url}
</output>

<img alt="" src={url} class="mt-8" />
