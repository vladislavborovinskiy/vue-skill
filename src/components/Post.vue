<template>
  <div class="poster__wrapper">
    <div class="poster_header">
      <div class="poster-avatar__wrapper">
        <img :src="post.avatarImg" />
      </div>
      <div>
        <div>@{{ post.username }}</div>
        <div class="poster-time">{{ post.date }}</div>
      </div>
    </div>

    <div class="poster__img">
      <img :src="post.image" />
    </div>

    <div class="poster__footer">
      <div class="poster__like">
        <img src="@/assets/images/like.png">
          {{ post.likes }}
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

interface PostInterface {
  avatarImg: string;
  username: string;
  date: string;
  image: string;
}

@Component
export default class Post extends Vue {
  @Prop() post!: PostInterface;
  
}
</script>
