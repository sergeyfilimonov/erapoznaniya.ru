<template>
  <footer>
    <div class="footer-main section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h4 class="is-size-5" v-html="'Заголовок'"/>
            <ul>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5" v-html="'Заголовок'"/>
            <ul>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5" v-html="'Заголовок'"/>
            <ul>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
            </ul>
          </div>
          <div class="column">
            <h4 class="is-size-5" v-html="'Заголовок'"/>
            <ul>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
              <li>Пункт</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
		</div>
	</footer>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
footer {
  .footer-main {
    background: #fbfbfb;
    border-top: 1px solid #eee;
    h4 {
      margin-bottom: 1rem;
    }
    ul {
      margin-bottom: 0 !important;
      margin-left: 0 !important;
    }
    li {
      a {
        color: #333;
        border-bottom: 2px solid #eee;
        &:hover {
          border-bottom: 2px solid rgba(0,0,0,0);
          opacity: 0.7;
        }
      }
      margin-bottom: 8px;
      &:last-child {
        margin-bottom: 0 !important;
      }
    }
  }
  .footer-last {
    border-top: 1px solid #18181F;
    padding-bottom: 2rem !important;
    padding-top: 2rem !important;
    background: #292C34;
    p, a, code, i, span {
      font-size: 14px !important;
      color: #D7DADF;
    }
    code {
      border-radius: 2px;
      padding: 0.2em 0.40em 0.25em;
      margin-left: 0.25em;
      margin-right: 0.4em;
    }
    a {
      &:hover {
        text-decoration: underline;
        color: #D7DADF;
        text-decoration: underline;
      }
    }
    i {
      margin-right: 0.2rem;
      position: relative;
      top: 1px;
    }
  }
}
</style>
