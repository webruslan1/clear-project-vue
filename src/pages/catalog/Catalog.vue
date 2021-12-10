<template>
  <div class="container">
    <div class="catalog">
      <div class="catalog-filter">
        <div class="catalog-filter__title">Фильтр</div>

        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Цена</div>
          <div class="catalog-filter__item-price">
            <input type="number" name="" id="" placeholder="1000" />
            <span> - </span>
            <input type="number" name="" id="" placeholder="30000" />
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">сортировать по</div>
          <div class="catalog-filter__item-list">
            <label for="rec" class="catalog-filter__item-list--li">
              рекомендуем
              <input type="checkbox" name="" id="rec" />
              <span class="checkmark"></span>
            </label>
            <label for="sale" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="sale" />
              <span class="checkmark"></span>
              скидки
            </label>
            <label for="new" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="new" />
              <span class="checkmark"></span>
              новинки
            </label>
            <label for="pricedown" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="pricedown" />
              <span class="checkmark"></span>
              цена по убыванию
            </label>
            <label for="priceup" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="priceup" />
              <span class="checkmark"></span>
              цена по возрастанию
            </label>
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Тип продукта</div>
          <div class="catalog-filter__item-list">
            <label for="hoody" class="catalog-filter__item-list--li">
              Толстовки
              <input type="checkbox" name="" id="hoody" />
              <span class="checkmark"></span>
            </label>
            <label for="shirt" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="shirt" />
              <span class="checkmark"></span>
              Рубашки
            </label>
            <label for="t-shirt" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="t-shirt" />
              <span class="checkmark"></span>
              Футболки
            </label>
            <label for="jackets" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="jackets" />
              <span class="checkmark"></span>
              Куртки
            </label>
            <label for="backpack" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="backpack" />
              <span class="checkmark"></span>
              Рюкзаки
            </label>
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Размер</div>
          <div class="catalog-filter__item-list">
            <label for="XXS" class="catalog-filter__item-list--li">
              XXS
              <input type="checkbox" name="" id="XXS" />
              <span class="checkmark"></span>
            </label>
            <label for="XS" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="XS" />
              <span class="checkmark"></span>
              XS
            </label>
            <label for="S" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="S" />
              <span class="checkmark"></span>
              S
            </label>
            <label for="M" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="M" />
              <span class="checkmark"></span>
              M
            </label>
            <label for="L" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="L" />
              <span class="checkmark"></span>
              L
            </label>
            <label for="XL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="XL" />
              <span class="checkmark"></span>
              XL
            </label>
            <label for="XXL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="XXL" />
              <span class="checkmark"></span>
              XXL
            </label>
            <label for="2XL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="2XL" />
              <span class="checkmark"></span>
              2XL
            </label>
            <label for="3XL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="3XL" />
              <span class="checkmark"></span>
              3XL
            </label>
            <label for="4XL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="4XL" />
              <span class="checkmark"></span>
              4XL
            </label>
            <label for="5XL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="5XL" />
              <span class="checkmark"></span>
              5XL
            </label>
            <label for="6XL" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="6XL" />
              <span class="checkmark"></span>
              6XL
            </label>
          </div>
        </div>
        <div class="catalog-filter__item">
          <div class="catalog-filter__item-title">Цвет</div>
          <div class="catalog-filter__item-list">
            <label for="black" class="catalog-filter__item-list--li">
              Черный
              <input type="checkbox" name="" id="black" />
              <span class="checkmark"></span>
            </label>
            <label for="grey" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="grey" />
              <span class="checkmark"></span>
              Серый
            </label>
            <label for="white" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="white" />
              <span class="checkmark"></span>
              Белый
            </label>
            <label for="blue" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="blue" />
              <span class="checkmark"></span>
              Синий
            </label>
            <label for="green" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="green" />
              <span class="checkmark"></span>
              зеленый
            </label>
            <label for="red" class="catalog-filter__item-list--li">
              <input type="checkbox" name="" id="red" />
              <span class="checkmark"></span>
              красный
            </label>
          </div>
        </div>
      </div>
      <div class="catalog-list">
        <div class="catalog-list__wrapper" v-if="$root.cards">
         <Card
            :card="item"
            v-for="(item, id) in $root.cards"
            :key="id"
            @openCard="openCard(item)"
          />
        </div>
      </div>
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
      modal: false,
      modalData: null,
    };
  },
  components: {
    Card,
    CardModal,
  },
 
  methods: {
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
.catalog {
  margin-top: 50px;
  display: flex;
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