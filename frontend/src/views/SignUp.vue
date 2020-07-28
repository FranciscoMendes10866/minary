<template>
  <section>
    <div class="flex flex-auto justify-center items-center py-48">
      <Form
      username="example"
      email="example@outlook.com"
      password="********"
      :usernameValue="registerUsername"
      :emailValue="registerEmail"
      :passwordValue="registerPassword"
      @usernameInput="setRegisterUsername"
      @emailInput="setRegisterEmail"
      @passwordInput="setRegisterPassword"
      @submitForm="SignUp"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    Form: () => import('../components/SignUpForm')
  },
  computed: {
    ...mapState('auth', [
      'registerUsername',
      'registerEmail',
      'registerPassword'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setRegisterUsername',
      'setRegisterEmail',
      'setRegisterPassword',
      'setRegisterError'
    ]),
    ...mapActions('auth', [
      'SignUp'
    ])
  }
}
</script>
