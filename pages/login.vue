<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                  />

                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <p>{{ user }}</p>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submit(event) {
      console.log(event)
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('user/fetchUser')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch user data'
      })
    }
  },
  computed: mapState({
    user: (state) => state.user.user
  })
}
</script>
