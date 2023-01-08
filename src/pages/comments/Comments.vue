<template>
  <div class="comment">
    <div class="comment-title">Отзывы наших клиентов:</div>
    <div class="comment-list">
      <div class="comment-list__item">
        <img src="img/comments/1.png" alt="Отзыв 1" />
      </div>
      <div class="comment-list__item">
        <img src="img/comments/2.png" alt="Отзыв 2" />
      </div>
      <div class="comment-list__item">
        <img src="img/comments/3.png" alt="Отзыв 3" />
      </div>
      <div class="comment-list__item">
        <img src="img/comments/4.png" alt="Отзыв 4" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
    min-width: 300px;
    max-width: 1300px;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 70px;
  &-title {
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 67px;
    text-align: center;
    color: #000000;
    margin-bottom: 20px;
  }

  &-list {
    display: flex;
    gap: 10px;
    &__item {
        img{
            width: 300px;
        }
    }
  }
}
</style>