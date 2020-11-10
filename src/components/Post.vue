<template>
  <div class="poster__wrapper">
    <div class="poster_header">
      <div class="poster-avatar__wrapper">
        <img src="@/assets/images/avatar.png" />
      </div>
      <div>
        <div>@Trash</div>
        <div class="poster-time">три часа назад</div>
      </div>
    </div>

    <div class="poster__img">
      <img src="@/assets/images/poster.png" />
    </div>

    <div class="poster__footer">
      <div class="poster__like">
        <img src="@/assets/images/like.png">
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Post extends Vue {
  @Prop() avatarImg!: string;
  
}
</script>
