<script>
    import { page } from '$app/stores';
</script>

<div class= "flex items-centers justify-center h-screen" style="background-color: black;">
    <img src="https://http.cat/{$page.status}" alt="Cat error"/>
</div>