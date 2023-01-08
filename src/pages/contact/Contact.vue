<template>
  <div class="contact">
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3A04448c2b876c832199d33c60a3285520b6fabf2ed054766abebdda124fa739bb&amp;source=constructor"
      width="100%"
      height="500"
      frameborder="0"
    ></iframe>
    <div class="contact-info">
      <div class="contact-info__title">Контакты</div>
      <div class="contact-info__text">
        Магазин “RYZMAN” г. Москва ул.Сущевский вал 5с1, <br />
        ТЦ "Савеловский", строение "Модный центр", Линия В, магазин 119. <br />
        с 10:00 до 21:00 без выходных
      </div>
      <a class="contact-info__mail" href="mailto:shopryzman@gmail.com"
        >shopryzman@gmail.com</a
      >
      <a class="contact-info__phone" href="tel:+79361054855">+7(936)105-48-55</a>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.contact {
  position: relative;
  &-info {
    width: 300px;
    padding: 30px;
    position: absolute;
    background: #fff;
    right: 300px;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;

    &__title {
      font-size: 18px;
      margin-bottom: 20px;
    }

    &__text {
        margin-bottom: 10px;
    }

    &__mail {
        display: block;
      color: #0a96fc;
    }

    &__phone {
        display: block;
    }
  }
}
</style>