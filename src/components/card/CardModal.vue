<template>
  <div class="modal-default" :class="{ 'none-modal': modal === false }">
    <div class="modal-close close btn-tr" @click="closeModal">
      <span></span>
      <span></span>
    </div>
    <div
      :class="[
        {
          'visible-modal': modal === true,
          'fade-modal': modal === false,
        },
        'modal-body',
      ]"
    >
      <div class="card" v-if="data">
        <div class="card-info">
          <div class="card-info__img">
            <img
              class="card-info__img-main"
              :src="'/img/goods/' + currentImage"
              alt=""
            />
            <div class="card-info__img-list">
              <img
                v-for="(item, idx) in data.images"
                :key="idx"
                :src="'/img/goods/' + item"
                :alt="data.title"
                @click="currentImage = item"
              />
            </div>
          </div>
          <div class="card-info__content">
            <div class="card-info__content-title">{{ data.title }}</div>
            <div class="card-info__content-code">Артикул: {{ data.id }}</div>
            <div class="card-info__content-price">
              <span>{{ data.price }} ₽</span>
              <span class="sale-price" v-if="data.sale == true">{{ data.saleprice }} ₽</span>
            </div>

            <div class="card-info__content-size" v-if="data.size">
              <div class="card-info__content-size--title">Размер</div>
              <select v-model="selectedSize" class="card-info__content-size--select">
                <option v-for="size in data.size" :key="size" :value="size">
                  {{ size }}
                </option>
              </select>
            </div>
            <div
              class="card-info__content-btn btn-tr"
              @click="addBasket(data)"
            >
              добавить в корзину
            </div>
            <p class="card-info__content-desc" v-html="data.description"></p>
          </div>
        </div>

        <div class="card-sales">
          <Card
            :card="item"
            v-for="(item, id) in $root.cards.slice(randomNum, randomNum + 4)"
            :key="id"
            @openCard="reopenCard(item)"
          />
        </div>
      </div>
    </div>
    <notifications classes="notif" />

  </div>
</template>


<script>
import { mapActions } from "vuex";
import Card from "@/components/card/Card.vue";
import $ from "jquery";
export default {
  props: ["modal", "data"],
  components: {
    Card,
  },
  data() {
    return {
      currentImage: null,
      selectedSize: null,
      randomNum: 5
    };
  },
  watch: {
    data(val) {
      this.random();

      this.currentImage = val.images[0];
      $("body").css("overflow", "hidden");
    },
    selectedSize(val){
      this.data.selectedSize = val;
    }
  },
  mounted() {
    this.random();
    const vm = this;
    $("body").click(function (event) {
      if ($(event.target).is(".modal-default")) {
        vm.closeModal();
      }
    });
  },
  methods: {
    ...mapActions({ addNewItem: "addNewItem" }),
    addBasket(id) {
      this.addNewItem(id);
      this.$root.showNotify("info", 'Товар был добавлен в корзину');
    },
    closeModal() {
      this.$emit("closeModal");
    },
    reopenCard(newItem) {
      $(".modal-default").scrollTop(0);
      this.$emit("reopen", newItem);
    },
    random() {
      var randomNum = Math.floor(Math.random() * this.$root.cards.length);
      if (randomNum > 4) {
        this.randomNum = randomNum - 4;
      } else {
        this.randomNum = randomNum;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &-default {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-top: 100px;
    padding-bottom: 100px;
    z-index: 9998;
    display: flex;
    justify-content: center;
  }
  &-body {
    width: 1200px;
    height: 1600px;
    padding: 60px 40px;
    background: #fff;
    box-sizing: border-box;
    border-radius: 15px;
  }
  &-close {
    margin-left: auto;
    position: absolute;
    top: 15px;
    right: 15px;
  }
}

.card {
  margin: 0 auto;
  &-info {
    margin-bottom: 200px;
    display: flex;
    &__img {
      width: 500px;
      &-main {
        width: inherit;
      }

      &-list {
        overflow: auto;
        display: flex;
        img {
          cursor: pointer;
          width: 32%;
          &:not(:last-child) {
            margin-right: 10px;
          }
        }
      }
    }

    &__content {
      margin-left: 50px;
      &-title {
        font-size: 24px;
        margin-bottom: 5px;
      }

      &-code {
        color: rgb(65, 65, 65);
        font-size: 18px;
        margin-bottom: 20px;
      }

      &-price {
        margin-bottom: 15px;
        span {
          font-size: 26px;
        }
      }

      &-size {
        margin-bottom: 30px;
        &--title {
          font-size: 16px;
          margin-bottom: 5px;
        }

        &--select {
          width: 100px;
        }
      }

      &-btn {
        width: 250px;
        height: 40px;
        background: #000;
        color: #fff;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
      }

      &-desc {
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
      }
    }
  }

  &-sales {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>