<template>
  <div class="container">
    <!--    Logo Div-->
    <!-- <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{ name: 'home' }">
          <img id="logo" src="../assets/logo_real.png" />
        </router-link>
      </div>
    </div> -->

    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signin-div" class="flex-item border">
          <h2 class="pt-4 pl-4">
            Sign-In
          </h2>
          <form @submit="signin" class="pt-4 pl-4 pr-4">
            <span class="title">Email</span>
            <div class="form-group">
              <input type="email" class="form-control" v-model="email" required />
            </div>
            <span class="title">Password</span>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" required />
            </div>
            <small class="form-text text-muted">By continuing, you agree to HưngSShopp's's Conditions of Use and Privacy Notice.</small>
            <button type="submit" class="btn btn-primary mt-2 py-0">
              Continue
              <div v-if="loading" class="spinner-border spinner-border-sm" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </button>
          </form>
          <hr />
          <small class="form-text text-muted pt-2 pl-4 text-center">New to HưngSShopp's?</small>
          <p class="text-center">
            <router-link :to="{ name: 'Signup' }" class="btn btn-dark text-center mx-auto px-5 py-1 mb-2">Create Your HưngSShopp's Account</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn-dark {
  background-color: #e7e9ec;
  color: #000;
  font-size: smaller;
  border-radius: 0;
  border-color: #adb1b8 #a2a6ac #a2a6ac;
}

.btn-primary {
  background-color: #f0c14b;
  color: black;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 0;
}

#logo {
  width: 150px;
}

@media only screen and (min-width: 992px) {
  #signin-div {
    width: 40%;
  }
}

.title {
  display: flex;
  margin-bottom: 10px;
}
h2.pt-4.pl-4{
  background-image: conic-gradient(#17a2b8, #ee4b2b, #00C2DF);
  color: rgb(255, 255, 255);
  font-family: cursive;
  padding-bottom: 20px;
}
</style>
