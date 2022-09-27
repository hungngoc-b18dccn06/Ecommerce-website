<template>
    <div class="container">
      <!--    Logo Div-->
      <div class="row">
        <div class="col-12 text-center pt-3">
          <router-link :to="{ name: 'home' }">
            <img id="logo" src="../assets/icon.png" />
          </router-link>
        </div>
      </div>
  
      <div class="row">
        <div class="col-12 justify-content-center d-flex flex-row pt-5">
          <div id="signin-div" class="flex-item border">
            <h2 class="pt-4 pl-4">Sign-In</h2>
            <form @submit="signin" class="pt-4 pl-4 pr-4">
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
                  required
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                  required
                />
              </div>
              <small class="form-text text-muted"
                >By continuing, you agree to Simplecoding's Conditions of Use and
                Privacy Notice.</small
              >
              <button type="submit" class="btn btn-primary mt-2 py-0">
                Continue
                <div
                  v-if="loading"
                  class="spinner-border spinner-border-sm"
                  role="status"
                >
                  <span class="sr-only">Loading...</span>
                </div>
              </button>
            </form>
            <hr />
            <small class="form-text text-muted pt-2 pl-4 text-center"
              >New to Simplecoding?</small
            >
            <p class="text-center">
              <router-link
                :to="{ name: 'Signup' }"
                class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
                >Create Your Simplecoding Account</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  

<script>
    export default {
    
    }
</script>

<style lang="scss" scoped>

</style>