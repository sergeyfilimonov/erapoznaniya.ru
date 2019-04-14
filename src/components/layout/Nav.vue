<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item sergeyfilimonov" href="/">
          <div class="text">
            <div class="is-size-5 is-size-5-mobile has-text-weight-bold" v-html="navbar.name"/>
            <div class="whatdoyoudo" v-html="navbar.profession"/>
          </div>
        </a>
        <a role="button" class="navbar-burger burger" @click="isActive = !isActive" :class="{ 'is-active' : isActive }" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active' : navbar.isActive }">
        <div class="navbar-end">
          <a class="navbar-item" v-scroll-to="'#works'" v-html="'Ссылка'" @click="isActive = false"/>
          <div class="navbar-item">
            <a href="#"
              click="isActive = false"
              class="button"
              target="_blank">CTA</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbar: {
        name: 'Getremont',
        describer: 'Всё о ремонте',
        isActive: false
      }
    }
  }
}
</script>

<style lang="scss">
nav {
  border-bottom: 1px solid #eee;
  .button {
    &:hover {
      border-color: #36ADE1;
      i {
        color: #36ADE1;
      }
    }
  }
  .active {
    color: var(--primary-color);
  }
}
.sergeyfilimonov {
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5rem;
    margin-bottom: 0;
    max-height: none !important;
    width: 50px;
    margin-left: -18px;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start !important;
    .whatdoyoudo {
      font-size: 8px;
      letter-spacing: 1px;
      text-transform: uppercase;;
    }
  }
}

.navbar-item {
  border-radius: 0 !important;
  transition: .2s !important;
  font-weight: 600;
  i {
    font-weight: 400;
  }
  &:hover {
    background: none !important;
    color: var(--primary-color);
  }
}

@media only screen and (max-width: 568px) {
  .navbar-brand {
    align-items: center !important;
  }
  .navbar-burger {
    &:hover {
      border-radius: 100px;
    }
  }
  .navbar-menu {
    padding: 1rem !important;
    border-radius: 8px;
  }
  .navbar-menu .navbar-item:hover {
    color: #8786FE !important;
  }
  .sergeyfilimonov {
    img {
      margin-left: -18px;
    }
  }
  .navbar {
    padding: 0rem 1rem;
    padding-top: 0rem;
  }
}
</style>
