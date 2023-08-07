<script>
  export let heroHead, heroText, heroImg
  import GradientBg from "./GradientBg.svelte"

</script>

<div class="hero min-h-[60vh] bg-white ">

  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img src="{heroImg}" class="sm:max-w-sm w-full h-3/4 rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">{heroHead}</h1>
      <p class="py-6">{heroText}</p>
      <!-- <button class="btn btn-primary">Get Started</button> -->
    </div>
  </div>
</div>
<div class="divider"></div> 