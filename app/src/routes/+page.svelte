<script>
// @ts-nocheck

    let _link = ""
    let shortenedUrl = ""

    function createSlugFromLink() {
        fetch("/api/add", {
            method: "POST",
            body: JSON.stringify({
                link: _link
            })
        })
        .then((response) => response.json())
        .then((data) => {
            shortenedUrl = `http://127.0.0.1:5173/s/${data.slug}` 
        })
    }
</script>

<svelte:head>
    <title>URL Shortener</title>
    <meta name="description" content="URL Shortener for school">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.41.0/dist/full.css" rel="stylesheet" type="text/css" />
</svelte:head>

<main class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-gray-200 p-8 max-w-max rounded-md border-solid border-2 border-gray-300">
        
        <h1 class="font-bold text-2xl pb-2">URL Shortener</h1>
        
        <!-- Get link to short -->
        <div class="form-control w-full min-w-xs pb-4">
            <input 
                type="text" 
                placeholder="URL" 
                class="input input-bordered w-full max-w-xs" 
                bind:value={_link}
            />
        </div>

        <!-- Show shortened link -->
        {#if shortenedUrl != ""}
            <div class="form-control w-full min-w-xs pb-4" id="shortened-div">
                <input 
                    type="text" readonly 
                    placeholder="Shortened Link" 
                    class="input input-bordered w-full max-w-xs" 
                    value={shortenedUrl}
                    on:focus="{event => event?.target?.select()}"
                />
            </div>
        {/if}
        
        <!-- Short the link -->
        <input 
            class="btn btn-wide bg-gray-700" 
            type="submit" 
            value="Short link"
            on:click={createSlugFromLink} 
        />

    </div>
</main>
