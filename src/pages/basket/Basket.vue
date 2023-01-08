<template>
  <div class="container">
    <div class="basket-title">
      <span>ВАША КОРЗИНА</span>
      <span>{{ allPrice }} ₽</span>
    </div>
    <div class="basket">
      <div class="basket-list">
        <div class="basket-list__item" v-for="(card, idx) in basket" :key="idx">
          <div class="basket-list__item-img">
            <img :src="'/img/goods/' + card.images[0]" alt="" />
          </div>
          <div class="basket-list__item-content">
            <div class="basket-list__item-title">{{ card.title }}</div>
            <div class="basket-list__item-price">ЦЕНА: {{ card.price }} ₽</div>
            <div class="basket-list__item-size" style="text-transform: uppercase" v-if="card.selectedSize">
              РАЗМЕР: {{ card.selectedSize }}
            </div>
            <div class="basket-list__item-size" v-else>РАЗМЕР: НЕ ВЫБРАНО</div>
            <div class="basket-list__item-col">КОЛИЧЕСТВО: 1</div>
            <div
              class="basket-list__item-delete btn-tr"
              @click="deleteBasket(idx)"
            >
              УДАЛИТЬ
            </div>
          </div>
        </div>
      </div>
      <div class="basket-form">
        <div class="basket-form__name">
          <input type="text" v-model="name" placeholder="Иван Иванов" />
        </div>
        <div class="basket-form__phone">
          <input type="number" v-model="phone" placeholder="+79251234567" />
        </div>
        <div class="basket-form__delivery">
          <div class="basket-form__delivery-title">Доставка:</div>
          <label for="dostavka">
            <input
              type="radio"
              v-model="delivery"
              value="dostavka"
              name="delivery"
              id="dostavka"
            />
            Доставка курьером по Москве и МО
          </label>
          <label for="sdek">
            <input
              type="radio"
              v-model="delivery"
              value="sdek"
              name="delivery"
              id="sdek"
            />
            Доставка СДЭК по РФ
          </label>
          <label for="sam">
            <input
              type="radio"
              v-model="delivery"
              value="sam"
              name="delivery"
              checked
              id="sam"
            />
            Самовывоз (улица Сущевский вал 5 стр 1, ТЦ "Савеловский", строение
            "Модный центр", Линия В, магазин 119.
          </label>
        </div>
        <div class="basket-form__address">
          <input
            type="text"
            placeholder="г.Москва, Улица Пушкина , д2к5 кв 100"
            v-model="address"
          />
        </div>
        <div class="basket-form__comment">
          <textarea v-model="comment" placeholder="Коментарий"></textarea>
        </div>

        <div class="basket-form__btn btn-tr" @click="sendForm">
          оформить заказ
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      name: null,
      phone: null,
      delivery: "dostavka",
      address: null,
      comment: null,

      // TG BOT
      token: "5026454320:AAEEXMW8tuohQ1j2zt-m5vSXB0MvfvbAO8k",
      chatid: -798489543,
    };
  },
  mounted() {
    console.log(this.basket);
  },
  computed: {
    ...mapState({ basket: "basket" }),
    allPrice() {
      var somePrice = 0;
      this.basket.forEach((element) => {
        somePrice = somePrice + element.price;
      });
      return somePrice;
    },
  },
  methods: {
    ...mapActions({ addNewItem: "addNewItem", deleteItem: "deleteItem" }),
    deleteBasket(id) {
      this.deleteItem(id);
      this.$root.showNotify("info", "Товар был удален из корзины");
    },
    sendForm() {
      var articles = this.basket.map((item) => item.id);
      var tovars = "";
      for (var i in articles) {
        tovars = tovars + articles[i] + "\n";
      }

      if(this.name == null){
        this.$root.showNotify("error", "Укажите Ваше имя.");
        return false
      }
      if(this.phone == null){
        this.$root.showNotify("error", "Укажите Ваш телефон.");
        return false
      }

      console.log(articles);
      var delivery = "";
      switch (this.delivery) {
        case "dostavka":
          delivery = "Доставка курьером";
          break;
        case "sdek":
          delivery = "Доставка СДЭК";
          break;
        case "sam":
          delivery = "Самовывоз";
          break;

        default:
          break;
      }
      const fullMessage = `Имя: ${this.name} \nТелефон: ${this.phone}\n${ this.address ? `Адрес: ${this.address}\n`: "" }Тип доставки: ${delivery} \n${this.comment ? `Коменнтарий: ${this.comment}\n` : ""}Товары: \n`;
      this.$http.post(
        `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${
          this.chatid
        }&text=${fullMessage + tovars}`
      ).then(() => {
        this.$root.showNotify("info", "Ваш заказ успешно оформлен.");
      })
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  margin-top: 20px;
  margin-bottom: 100px;
}
.basket {
  display: flex;
  &-title {
    margin-bottom: 30px;
    display: flex;
    span {
      font-size: 32px;
      &:last-child {
        margin-left: auto;
      }
    }
  }
  &-list {
    flex: 1;
    &__item {
      padding-top: 15px;
      padding-bottom: 15px;
      &:not(:last-child) {
        border-bottom: 1px solid #000;
      }
      display: flex;
      &-img {
        margin-right: 10px;
        width: 150px;
        img {
          width: inherit;
        }
      }

      &-title {
        font-size: 24px;
        margin-bottom: 5px;
      }
      &-price {
        margin-bottom: 30px;
      }
      &-size {
        font-size: 18px;
        margin-bottom: 5px;
      }

      &-col {
        font-size: 18px;
        margin-bottom: 36px;
      }

      &-delete {
        width: 250px;
        height: 40px;
        background: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &-form {
    width: 350px;
    margin-left: 50px;
    input,
    textarea {
      outline: none;
      border: 1px solid #000;
      border-radius: 5px;
      padding: 5px 10px;

      &:not([type="radio"]) {
        width: 100%;
      }
    }
    input {
      margin-bottom: 10px;
      &:not([type="radio"]) {
        height: 40px;
      }
    }
    label {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
    &__phone {
      input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
    }
    &__comment {
      textarea {
        height: 150px;
      }
    }

    &__delivery {
      &-title {
        margin-bottom: 10px;
        font-size: 16px;
      }
    }

    &__btn {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 20px;
      background: #000;
      color: #fff;
      font-weight: 700;
    }
  }
}
</style>