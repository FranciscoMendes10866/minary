<template>
  <section>
    <div class="flex flex-auto justify-center items-center py-48">
      <Form
      email="example@outlook.com"
      password="********"
      :emailValue="loginEmail"
      :passwordValue="loginPassword"
      @emailInput="setLoginEmail"
      @passwordInput="setLoginPassword"
      @submitForm="SignIn"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Form: () => import('../components/SignInForm')
  },
  computed: {
    ...mapState('auth', [
      'loginEmail',
      'loginPassword'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setLoginEmail',
      'setLoginPassword'
    ]),
    ...mapActions('auth', [
      'SignIn'
    ])
  }
}
</script>
