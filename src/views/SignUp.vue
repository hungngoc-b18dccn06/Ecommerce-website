<template>
  <div class="container">
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signup-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Create Account</h2>
          <form @submit="signup" class="pt-4 pl-4 pr-4">
            <span class="title">Email</span>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                v-model="email"
                required
              />
            </div>
            <div class="form-row">
              <div class="col">
                <span class="title">First Name</span>
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    v-model="firstName"
                    required
                  />
                </div>
              </div>
              <div class="col">
                <span class="title">Last Name</span>
                <div class="form-group">
                  <input
                    type="name"
                    class="form-control"
                    v-model="lastName"
                    required
                  />
                </div>
              </div>
            </div>
            <span class="title">Password</span>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="password"
                required
              />
            </div>
            <span class="title">Confirm Password</span>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="passwordConfirm"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary mt-2 py-0">
              Create Account
            </button>
          </form>
          <hr />
          <small class="form-text text-muted pt-2 pl-4 text-center"
            >Already Have an Account?</small
          >
          <p class="text-center">
            <router-link
              class="btn btn-dark text-center mx-auto px-5 py-1 mb-2"
              :to="{ name: 'Signin' }"
              >Signin Here
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
  export default{
  // eslint-disable-next-line vue/multi-word-component-names
  name:"signup",
  components:{},
  props: ["products", "baseURL", "categories"],
  data(){
      return{
        email: null,
        firstName: null,
        lastName: null,
        password: null,
        passwordConfirm: null,
      }
    },
    methods:{
      async signup(e){
        e.preventDefault();
        if(this.password === this.passwordConfirm){
          // eslint-disable-next-line no-unused-vars
          const newUser = {
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName,
            password: this.password,
            passwordConfirm: this.passwordConfirm
          }
          await axios.post(`${this.baseURL}user/signup`, newUser).then(() => {
            // redirect to home page
            this.$router.replace("/");
            localStorage.setItem("account_name", this.firstName + this.lastName)
            swal({
              text: "User signup successful. Please Login",
              icon: "success",
              closeOnClickOutside: false,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // passwords are not matching
        swal({
          text: "Error! Passwords are not matching",
          icon: "error",
          closeOnClickOutside: false,
        });
        }
      }
    }

  }
</script>

<style scoped>
.title {
  display: flex;
  margin-bottom: 10px;
}

.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

#background-div {
  background: url(../assets/home.png);
}

#heading {
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: "Josefin Sans", sans-serif;
}

#content {
  opacity: 0.8;
}

h2 {
  font-family: "Josefin Sans", sans-serif;
}

h2.pt-4.pl-4 {
  background-image: conic-gradient(#17a2b8, #ee4b2b, #00c2df);
  color: rgb(255, 255, 255);
  font-family: cursive;
  padding-bottom: 20px;
}
</style>
