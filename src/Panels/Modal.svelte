<script>
  import Dialog, {Title, Content, Actions} from '@smui/dialog';
  import Button, {Label} from '@smui/button';
import { fade } from 'svelte/transition';
import LineRipple from '@smui/line-ripple';

function overlay_click(e) {
    if ('close' in e.target.dataset)
        show = false;
}

export let show = false;
</script>

{#if show}
<div>
<div class="modal-overlay" data-close on:click={overlay_click} transition:fade={{duration: 150}}>
<div class="modal-container">
  <Title id="dialog-title">Modal</Title>
  <LineRipple />
  <Content id="dialog-content">
    Text modal
  </Content>
 
 </div> 
</div>
</div>
{/if}