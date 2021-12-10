<template>
  <div class="card" @click="open($event)" v-if="card">
    <img :src="'/img/goods/' + card.images[0]" alt="" />
    <h3>{{ card.title }}</h3>
    <span>{{ card.price }} ₽</span>
    <span class="sale-price" v-if="card.sale">{{ card.saleprice }} ₽</span>
    <div class="card-add" @click="addBasket(card)">
      <svg
        width="23"
        height="20"
        stroke="#9e9e9e"
        viewBox="0 0 17 19"
        fill="none"
        class="wishlist-icon--add card-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.89 2c1.443 0 2.77.579 3.721 1.624C18.508 4.61 19 5.921 19 7.316c0 1.508-.6 2.904-1.864 4.358-.582.67-2.96 2.779-7.136 6.326-4.175-3.547-6.554-5.656-7.136-6.326C1.601 10.22 1 8.824 1 7.316c0-1.395.492-2.707 1.389-3.692C3.34 2.58 4.667 2 6.11 2c1.578 0 2.893.685 3.89 1.94C10.997 2.684 12.312 2 13.89 2z"
          stroke-width="1.1"
        ></path>
      </svg>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
import $ from "jquery";
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({ basket: "basket" }),
  },
  methods: {
    ...mapActions({ addNewItem: "addNewItem" }),
    addBasket(id) {
      this.addNewItem(id);
      this.$root.showNotify("info", 'Товар был добавлен в корзину');
    },
    open(event) {
      if (!$(event.target).closest(".card-add").is(".card-add")) {
        this.$emit("openCard");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 270px;
  height: 500px;
  cursor: pointer;
  text-align: center;
  position: relative;
  img {
    width: 100%;
  }

  &-add {
    position: absolute;
    top: 15px;
    right: 15px;
    &:hover {
      svg {
        fill: #9e9e9e;
      }
    }
  }
}
</style>