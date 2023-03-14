<template>
  <footer class="subscription-form">
    <svg class="subscription-form__wave subscription-form__wave--first">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <svg class="subscription-form__wave subscription-form__wave--second">
      <use xlink:href="../../assets/images/sprite.svg#wave"></use>
    </svg>
    <MillorContainer class="subscription-form__container">
      <form class="subscription-form__content">
        <MillorTitle>Подписка на новости и рассылку</MillorTitle>
        <p class="subscription-form__text">
          Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.
        </p>
        <div 
          :class="additionalClass"
          class="subscription-form__row"
        >
          <template v-if="!isFormSended">
            <input 
              @input="checkField()"
              v-model.trim="userEmail" 
              type="email"
              name=""
              class="subscription-form__field"
              placeholder="Ваш email"
            > 
            <MillorButton 
              @click="formSubmission()"
              theme="main" 
              size="s" 
              borderRadius="40" 
              class="subscription-form__btn"
            >
              Подписаться
            </MillorButton>
          </template>
          <p v-else class="subscription-form__info">
            Спасибо за подписку!
          </p>
        </div>
        <p class="subscription-form__label">
          Нажимая на кнопку “Подписаться”, вы принимаете правила <router-link to="/" class="subscription-form__link">пользовательского соглашения</router-link>
        </p>
      </form>
      <MillorPicture name="cup-with-coffee" class="subscription-form__image" />
    </MillorContainer>
  </footer>
</template>

<script>
import {defineComponent, ref } from "vue";

import MillorContainer from "../global/MillorContainer.vue";
import MillorPicture from "../global/MillorPicture.vue";
import MillorTitle from "../global/MillorTitle.vue";
import MillorButton from "../global/MillorButton.vue";

export default defineComponent({
  name: "SubscriptionForm",
  components: {
    MillorContainer,
    MillorPicture,
    MillorTitle,
    MillorButton,
  },
  setup() {
    const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isFormSended = ref(false);
    const userEmail = ref('');
    const additionalClass = ref('');

    const formSubmission = () => {
      if (EMAIL_REGEXP.test(userEmail.value)) {
        additionalClass.value = '';
        isFormSended.value = true;
      } else {
        additionalClass.value = 'subscription-form__row--theme-error';
      }      
    };  

    const checkField = () => {
      if (!userEmail.value) {
        additionalClass.value = '';
      }   
    };

    return {
      userEmail,
      isFormSended,
      formSubmission,
      additionalClass,
      checkField,
    };
  },
});
</script>

<styles scoped lang="scss">
@import "./styles/SubscriptionForm/component";
</styles>
