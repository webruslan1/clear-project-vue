<template>
  <div class="container">
    <div class="catalog">
      <div class="catalog-filter">
        <div class="catalog-filter__title">Фильтр</div>

        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Цена</div>
          <div class="catalog-filter__item-price">
            <input
              type="number"
              name=""
              id=""
              placeholder="1000"
              v-model="minPrice"
            />
            <span> - </span>
            <input
              type="number"
              name=""
              id=""
              placeholder="30000"
              v-model="maxPrice"
            />
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">сортировать по</div>
          <div class="catalog-filter__item-list">
            <label for="sale" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="sale" v-model="saleFilter" />
              <span class="checkmark"></span>
              скидки
            </label>
            <label for="new" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="new" v-model="newFilter" />
              <span class="checkmark"></span>
              новинки
            </label>
            <label for="pricedown" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="pricedown"
                v-model="pricedownFilter"
              />
              <span class="checkmark"></span>
              цена по убыванию
            </label>
            <label for="priceup" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="priceup"
                v-model="priceupFilter"
              />
              <span class="checkmark"></span>
              цена по возрастанию
            </label>
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Тип продукта</div>
          <div class="catalog-filter__item-list">
            <label for="hoodies" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="hoodies"
                v-model="category.hoodies"
              />
              <span class="checkmark"></span>
              Толстовки
            </label>
            <label for="shirt" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="shirt"
                v-model="category.shirt"
              />
              <span class="checkmark"></span>
              Рубашки
            </label>
            <label for="tshirt" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="tshirt"
                v-model="category.tshirt"
              />
              <span class="checkmark"></span>
              Футболки
            </label>
            <label for="jacket" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="jacket"
                v-model="category.jacket"
              />
              <span class="checkmark"></span>
              Куртки
            </label>
            <label for="backpack" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="backpack"
                v-model="category.backpack"
              />
              <span class="checkmark"></span>
              Рюкзаки
            </label>
            <label for="polo" class="catalog-filter__item-list--li">
              <input
                type="checkbox"
                name=""
                id="polo"
                v-model="category.polo"
              />
              <span class="checkmark"></span>
              Поло
            </label>
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Размер</div>
          <div class="catalog-filter__item-list">
            <label for="XXS" class="catalog-filter__item-list--li">
              <input v-model="size.xxs" type="checkbox" name="" id="XXS" />
              <span class="checkmark"></span>
              XXS
            </label>
            <label for="XS" class="catalog-filter__item-list--li">
              <input v-model="size.xs" type="checkbox" name="" id="XS" />
              <span class="checkmark"></span>
              XS
            </label>
            <label for="S" class="catalog-filter__item-list--li">
              <input v-model="size.s" type="checkbox" name="" id="S" />
              <span class="checkmark"></span>
              S
            </label>
            <label for="M" class="catalog-filter__item-list--li">
              <input v-model="size.m" type="checkbox" name="" id="M" />
              <span class="checkmark"></span>
              M
            </label>
            <label for="L" class="catalog-filter__item-list--li">
              <input v-model="size.l" type="checkbox" name="" id="L" />
              <span class="checkmark"></span>
              L
            </label>
            <label for="XL" class="catalog-filter__item-list--li">
              <input v-model="size.xl" type="checkbox" name="" id="XL" />
              <span class="checkmark"></span>
              XL
            </label>
            <label for="XXL" class="catalog-filter__item-list--li">
              <input v-model="size.xxl" type="checkbox" name="" id="XXL" />
              <span class="checkmark"></span>
              XXL
            </label>
            <label for="XXXL" class="catalog-filter__item-list--li">
              <input v-model="size.xxxl" type="checkbox" name="" id="XXXL" />
              <span class="checkmark"></span>
              XXXL
            </label>
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div class="catalog-list" v-if="loading" key="list">
          <div class="catalog-list__wrapper" v-if="cards">
            <Card
              :card="item"
              v-for="(item, id) in cards"
              :key="id"
              @openCard="openCard(item)"
            />
          </div>
        </div>
        <div class="catalog-search" v-else key="loading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin: auto; display: block; shape-rendering: auto"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              r="32"
              stroke-width="8"
              stroke="#3c0f0f"
              stroke-dasharray="50.26548245743669 50.26548245743669"
              fill="none"
              stroke-linecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
              />
            </circle>
          </svg>
        </div>
      </transition>
    </div>
    <CardModal
      :modal="modal"
      :data="modalData"
      @closeModal="closeModal"
      @reopen="reopen"
    />
  </div>
</template>


<script>
import $ from "jquery";
import CardModal from "@/components/card/CardModal.vue";
import Card from "@/components/card/Card.vue";
export default {
  data() {
    return {
      minPrice: null,
      maxPrice: null,
      modal: false,
      modalData: null,
      loading: false,
      saleFilter: false,
      newFilter: false,
      pricedownFilter: false,
      priceupFilter: false,
      category: {
        backpack: null,
        hoodies: null,
        shirt: null,
        tshirt: null,
        jacket: null,
        polo: null,
      },
      size: {
        xxs: false,
        xs: false,
        s: false,
        m: false,
        l: false,
        xl: false,
        xxl: false,
        xxxl: false,
      },
      cards: null,
    };
  },
  components: {
    Card,
    CardModal,
  },
  watch: {
    minPrice() {
      this.mainFilter();
    },
    maxPrice() {
      this.mainFilter();
    },
    saleFilter() {
      this.mainFilter();
    },
    newFilter() {
      this.mainFilter();
    },
    pricedownFilter(val) {
      if (val) {
        if (this.priceupFilter) {
          this.priceupFilter = false;
        } else {
          this.mainFilter();
        }
      } else {
        this.mainFilter();
      }
    },
    priceupFilter(val) {
      if (val) {
        if (this.pricedownFilter) {
          this.pricedownFilter = false;
        } else {
          this.mainFilter();
        }
      } else {
        this.mainFilter();
      }
    },
    size: {
      handler() {
        this.mainFilter();
      },
      deep: true,
    },
    category: {
      handler() {
        this.mainFilter();
      },
      deep: true,
    },
  },

  mounted() {
    this.cards = this.$root.cards;
    this.loading = true;
  },
  methods: {
    mainFilter() {
      this.loading = false;
      this.cards = [];
      var filterCategory = false;
      var filterSize = false;

      if (this.minPrice && this.maxPrice) {
        this.cards = this.$root.cards.filter(
          (item) =>
            item.price > parseInt(this.minPrice) &&
            item.price < parseInt(this.maxPrice)
        );
      } else if (this.minPrice) {
        this.cards = this.$root.cards.filter(
          (item) => item.price > parseInt(this.minPrice) && item.price < 100000
        );
      } else if (this.maxPrice) {
        this.cards = this.$root.cards.filter(
          (item) => item.price > 0 && item.price < parseInt(this.maxPrice)
        );
      }

      this.cards = this.cards.sort((a,b) => b.price - a.price)

      if (this.saleFilter) {
        if (this.cards.length == 0) {
          this.cards = this.$root.cards.filter((item) => {
            if (item.sale === true) {
              return item;
            }
          });
        } else {
          this.cards = this.cards.filter((item) => {
            if (item.sale === true) {
              return item;
            }
          });
        }
      }

      if (this.newFilter) {
        if (this.cards.length == 0) {
          this.cards = this.$root.cards.filter((item) => {
            if (item.new === true) {
              return item;
            }
          });
        } else {
          this.cards = this.cards.filter((item) => {
            if (item.new === true) {
              return item;
            }
          });
        }
      }

      if (this.pricedownFilter) {
        if (this.cards.length == 0) {
          this.cards = this.$root.cards.sort((a, b) => b.price - a.price);
        } else {
          this.cards = this.cards.sort((a, b) => b.price - a.price);
        }
      }

      if (this.priceupFilter) {
        if (this.cards.length == 0) {
          this.cards = this.$root.cards.sort((a, b) => a.price - b.price);
        } else {
          this.cards = this.cards.sort((a, b) => a.price - b.price);
        }
      }

      Object.keys(this.category).forEach((category) => {
        if (this.category[category]) {
          filterCategory = true;
        }
      });

      if (filterCategory) {
        if (this.cards.length == 0) {
          this.cards = this.$root.cards.filter((item) => {
            return Object.keys(this.category).some((category) => {
              if (
                this.category[category] === true &&
                item.category === category
              ) {
                return true;
              } else {
                return false;
              }
            });
          });
        } else {
          this.cards = this.cards.filter((item) => {
            return Object.keys(this.category).some((category) => {
              if (
                this.category[category] === true &&
                item.category === category
              ) {
                return true;
              } else {
                return false;
              }
            });
          });
        }
      }

      Object.keys(this.size).forEach((size) => {
        if (this.size[size]) {
          filterSize = true;
        }
      });

      if (filterSize) {
        if (this.cards.length == 0) {
          this.cards = this.$root.cards.filter((item) => {
            return Object.keys(this.size).some((size) => {
              if (this.size[size] && item.size) {
                if (this.size[size] === true && item.size[size] === true) {
                  return true;
                } else {
                  return false;
                }
              }
            });
          });
        } else {
          this.cards = this.cards.filter((item) => {
            return Object.keys(this.size).some((size) => {
              if (this.size[size] && item.size) {
                if (this.size[size] === true && item.size[size] === true) {
                  return true;
                } else {
                  return false;
                }
              }
            });
          });
        }
      }

      if (
        !filterCategory &&
        !filterSize &&
        !this.saleFilter &&
        !this.newFilter &&
        !this.priceupFilter &&
        !this.pricedownFilter &&
        !this.minPrice &&
        !this.maxPrice
      ) {
        this.cards = this.$root.cards;
      }

      setTimeout(() => {
        this.loading = true;
      }, 1000);
    },
    openCard(item) {
      this.modalData = item;
      this.modal = true;
    },
    closeModal() {
      $("body").css("overflow", "auto");
      this.modal = false;
    },
    reopen(newItem) {
      this.closeModal();
      this.openCard(newItem);
    },
  },
};
</script>


<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 300ms;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: all 300ms;
}

.catalog {
  margin-top: 50px;
  display: flex;
  &-search {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 500px);
    flex: 1;
  }

  &-filter {
    &__title {
      text-transform: uppercase;
      color: #9e9e9e;
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 0.04375rem;
      line-height: 1.25;
      padding-bottom: 0.625rem;
      text-transform: uppercase;
    }

    &__item {
      border: 0.0625rem solid #e4e4e4;
      margin-bottom: 0.625rem;
      padding: 0.625rem;
      &-title {
        text-transform: uppercase;
        color: #9e9e9e;
        font-size: 0.8125rem;
        font-weight: 700;
        letter-spacing: 0.04375rem;
        line-height: 1.25;
        padding-bottom: 0.7rem;
        text-transform: uppercase;
      }

      &-list {
        padding: 0 0 0 0.625rem;
        max-height: 200px;
        overflow-y: auto;
        &::-webkit-scrollbar {
          background: rgb(172, 172, 172);
          width: 2px;
        }

        &::-webkit-scrollbar-thumb {
          width: 1px;
          background: #000;
        }
        &--li {
          display: block;
          position: relative;
          padding: 0 0 0.0625rem 0;
          padding-left: 30px;
          margin-bottom: 10px;
          font-size: 0.75rem;
          text-transform: uppercase;
          cursor: pointer;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;

            &:checked ~ .checkmark:after {
              display: block;
            }
          }
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: #eee;

            &:after {
              content: "";
              position: absolute;
              display: none;
              left: 7px;
              top: 3px;
              width: 7px;
              height: 12px;
              border: solid #000;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
        }
      }

      &-price {
        margin: 0 auto;
        width: 200px;
        input {
          outline: none;
          height: 30px;
          border: 0.0625rem solid #d8d8d8;
          color: #000;
          font-size: 0.75rem;
          font-weight: 400;
          width: 80px;
          letter-spacing: 0.025rem;
          padding: 0.125rem 0.625rem;
          text-align: center;
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }
      }
    }
    width: 300px;
    margin-right: auto;
  }

  &-list {
    width: 75%;
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
}
</style>