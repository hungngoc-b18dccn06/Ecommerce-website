<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!--    Logo-->
    <router-link class="navbar-brand" :to="{ name: 'home' }">
      <img id="logo" src="../assets/logo_real.png" />
    </router-link>

    <!--    Burger Button-->


    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input size="100" type="text" class="form-control" placeholder="Search Items" aria-label="Username"
            aria-describedby="basic-addon1" />
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </span>
          </div>
        </div>
      </form>
    </div>

    <div class="dropdown mr-3">
      <button class="dropbtn account">AC</button>
      <div class="dropdown-content">
        <router-link class="nav-link text-light" style="color:black !important;padding-bottom: 0; display:flex"
          :to="{ name: 'Admin' }"><img class="personal" src="../assets/login.png" />
          <p class="mt-1"> Admin</p>
        </router-link>
        <a href="#" @click="logout" style="padding-left: 0px"><i class="fa fa-sign-in"></i> SignOut</a>
      </div>
    </div>

  </nav>
</template>

<script>
import swal from 'sweetalert';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  props: ["cartCount"],
  data() {
    return {
      isAdmin: false,
      token: null,
      EmailAdmin: 'hungngoc732000@gmail.com',
    };
  },
  methods: {
    signout() {
      localStorage.removeItem("token");

      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "Home" });
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    },
    logout(){
      console.log('sâs')
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.EmailAdmin = localStorage.getItem("email");
    console.log(localStorage)
  },
};
</script>

<style scoped>
.bg-dark {
  background-color: #222224 !important;
}

#logo {
  width: 80px;
  margin-left: 20px;
  margin-right: 20px;
}

.nav-link {
  color: rgba(255, 255, 255);
}

#search-button-navbar {
  background-color: #febd69;
  border-color: #febd69;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}

.dropbtn {
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {

  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

button.dropbtn.account {
  width: 45px;
  height: 45px;
  padding: 0px;
  border-radius: 50%;
}

img.personal {
  width: 30%;
  height: 30%;
  margin-right: 5px;
}
</style>
