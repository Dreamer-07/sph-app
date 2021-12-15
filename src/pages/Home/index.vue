<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/Childrens/ListContainer";
import Recommend from "@/pages/Home/Childrens/Recommend";
import Rank from "@/pages/Home/Childrens/Rank";
import Like from "@/pages/Home/Childrens/Like";
import Floor from "@/pages/Home/Childrens/Floor";
import Brand from "@/pages/Home/Childrens/Brand";

export default {
  name: "Home",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style scoped>

</style>
