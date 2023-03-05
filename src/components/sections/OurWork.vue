<template>
  <section class="our-work">
    <MillorPicture
      name="our-work"
      format="jpg"
      class="our-work__bg"
    />
    <svg class="our-work__wave our-work__wave--top">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <svg class="our-work__wave our-work__wave--bottom">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <MillorContainer class="our-work__container">
      <MillorTitle light class="our-work__title">Как мы обжариваем наш кофе:</MillorTitle>
      <p class="our-work__text">
        Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
        в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
        для производства растворимой продукции.
      </p>
      <p class="our-work__text">
        Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом. <br>
        У нас свой подход к каждой партии зерна.
      </p>
      <p class="our-work__text">
        Мы раскрываем вкус каждого сорта кофе.
      </p>
      <MillorButton
          theme="main"
          size="l"
          class="our-work__btn"
      >
        Перейти в каталог
      </MillorButton>
    </MillorContainer>
  </section>
</template>

<script>
import MillorContainer from "../global/MillorContainer.vue";
import MillorTitle from "../global/MillorTitle.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorButton from "../global/MillorButton.vue";

export default {
  name: "OurAdvantage",
  components: {
    MillorContainer,
    MillorTitle,
    MillorPicture,
    MillorButton,
  },
  setup() {
    return {

    };
  },
};
</script>

<styles scoped lang="scss">
@import "./styles/OurWork/component";
</styles>
