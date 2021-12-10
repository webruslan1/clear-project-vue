<template>
  <div class="main">
    <div class="main-header">
      <div class="container">
        <h1>
          Интернет - магазин верхней <br />
          мужской одежды
        </h1>
        <h2>
          Скидка 10% на <br />
          первый заказ
        </h2>
        <router-link to="/catalog" class="main-header__btn btn-tr"
          >В каталог</router-link
        >
      </div>
    </div>
    <div class="container">
      <div class="main-services">
        <div class="main-services__item">
          <div class="main-services__item-img">
            <img src="img/services1.png" alt="" />
          </div>
          <div class="main-services__item-text">
            Молодой магазин мужской верхней одежды в Москве
          </div>
        </div>
        <div class="main-services__item">
          <div class="main-services__item-img">
            <img src="img/services2.png" alt="" />
          </div>
          <div class="main-services__item-text">
            Более 500 моделей представлены в магазине
          </div>
        </div>
        <div class="main-services__item">
          <div class="main-services__item-img">
            <img src="img/services3.png" alt="" />
          </div>
          <div class="main-services__item-text">
            Бесплатная доставка по Москве при заказе от 5 000 руб
          </div>
        </div>
        <div class="main-services__item">
          <div class="main-services__item-img">
            <img src="img/services4.png" alt="" />
          </div>
          <div class="main-services__item-text">
            Есть оfline магазин в ТЦ Савёловский
          </div>
        </div>
      </div>
      <div class="main-grid">
        <router-link to="/catalog" class="main-grid__item">куртки</router-link>
        <router-link to="/catalog" class="main-grid__item">футболки</router-link>
        <router-link to="/catalog" class="main-grid__item">рюкзаки</router-link>
        <router-link to="/catalog" class="main-grid__item">рубашки</router-link>
        <router-link to="/catalog" class="main-grid__item">толстовки</router-link>
      </div>
      <div class="main-sale">
        <div class="main-sale__title">Акции</div>
        <div class="main-sale__list">
          <Card
            :card="item"
            v-for="(item, id) in $root.cards
              .filter((item) => item.sale)
              .slice(0, 5)"
            :key="id"
            @openCard="openCard(item)"
          />
        </div>
      </div>
    </div>
    <div class="main-map">
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A04448c2b876c832199d33c60a3285520b6fabf2ed054766abebdda124fa739bb&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe>
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
import Card from "@/components/card/Card.vue";
import CardModal from "@/components/card/CardModal.vue";
export default {
  components: {
    Card,
    CardModal,
  },
  data() {
    return {
      modal: false,
      modalData: null,
    };
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
.main {
  &-header {
    margin-bottom: 50px;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url("/img/main-bg.jpg");
    padding-top: 150px;
    padding-bottom: 300px;
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 100.4%;
      letter-spacing: -0.05em;
      margin-bottom: 30px;
      color: #fbf7f7;
    }

    h2 {
      font-style: normal;
      font-weight: 800;
      font-size: 60px;
      line-height: 92.4%;
      letter-spacing: -0.05em;
      margin-bottom: 30px;
      color: #fff;
      text-shadow: 9px 1px 4px rgba(0, 0, 0, 0.25);
    }

    &__btn {
      background: #fff;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 35px;
      width: 320px;
      height: 78px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
    }
  }

  &-services {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20%;
      &-text {
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        text-align: center;
        letter-spacing: -0.05em;
        width: 80%;
      }
    }
  }

  &-grid {
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    &__item {
      position: relative;
      border: 20px solid #fff;
      cursor: pointer;
      transition: all 300ms;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      text-transform: uppercase;
      color: #fff;
      &:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url("/img/grid1.jpg");
        background-size: contain;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }

      &:nth-child(2) {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url("/img/grid2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      &:nth-child(3) {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url("/img/grid3.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      &:nth-child(4) {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url("/img/grid4.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
      &:nth-child(5) {
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
          url("/img/grid5.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }
  }

  &-sale {
    &__title {
      font-size: 30px;
      margin-bottom: 50px;
      text-align: center;
    }

    &__list {
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      gap: 20px 10px;
      justify-content: space-between;
    }
  }
}
</style>