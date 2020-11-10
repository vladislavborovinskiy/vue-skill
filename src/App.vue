<template>
    <div class="main__wrapper">
      <header-app />

      <main>
        <div class="tags__wrapper">
          <div># Lol</div>
          <div># Runterra</div>
          <div># LeagueOfLegends</div>
          <div># Champion</div>
          <div># Skill</div>
          <div># Rank</div>
          <div># Typo</div>
          <div># Music</div>
          <div># Colors</div>
          <div># Win</div>
          <div># Noxus</div>
        </div>

        <div class="posters__wrapper">
          <post msg="Welcome to Your Vue.js App"/>
        </div>
      </main>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HeaderApp from './components/Header.vue';
import Post from './components/Post.vue';

@Component({
  components: {
    HeaderApp,
    Post,
  },
})
export default class App extends Vue {
  @Prop() msg!: string;

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
