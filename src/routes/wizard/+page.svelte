<script>
  // import {Checkbox,Button,ComponentBox} from '$lib';
  import { WinC,Button } from '$lib';

  import {totalScore} from '$lib/stores'
  
  /** @type {{data: any}} */
  let { data } = $props();

</script>

<!-- check of er al een pakket is gekozen -->

<WinC
role="child"
title="Deloitte"
context='Strart nu de vragenlijst om een passend pakket te vinden'
color='lightblue'
class="main-panel"
>
<Button
type="/profile"
text="pas gegevens aan"
color="white"
/>
</WinC>

