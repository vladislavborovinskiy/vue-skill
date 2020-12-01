<template>
  <header>
    <div class="header__logo">
      <img src="@/assets/images/logo.png" />
      <div>skillogram</div>

    </div>

    <div class="header__actions">
      <div class="header__filters">
        <span>По рейтингу</span>
        <span>Случайно</span>
      </div>


      <div class="header__search">
        <form>
          <span class="header__search-img">
              <img src="@/assets/images/search.png" />
          </span>
          <input type="text" value="" name="search" />
        </form>
      </div>

      <div class="header__auth">
        <button type="button" class="btn__secondary btn__flat">Вход</button>
        <button type="button" class="btn__primary">Регистрация</button>
      </div>

    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeaderApp extends Vue {

}
</script>
