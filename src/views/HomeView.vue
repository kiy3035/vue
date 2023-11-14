<template>
  <div class="home">
    <AddVideoComp/>
    <ShowVideoComp/>
  </div>
</template>


<script>
import AddVideoComp from "@/components/AddVideoComp.vue";
import ShowVideoComp from "@/components/ShowVideoComp.vue";

export default {
  components: {
    AddVideoComp,
    ShowVideoComp
  },
};
</script>
