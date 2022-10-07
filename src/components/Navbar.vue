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
    <div class="navbar-control mr-5">
      <div class="dropdown mr-3 ml-3" style="display:flex" v-if="token">
        <button class="dropbtn account">AC</button>
        <div class="dropdown-content">
          <router-link class="nav-link text-light" style="color:black !important;padding-bottom: 5px; display:flex"
            :to="{ name: 'Admin' }"><i class="fa fa-user" style="color:black;padding-top: 3px;padding-right: 10px;"></i> Admin
          </router-link>
          <router-link class="nav-link text-light" style="color:black !important;padding-bottom: 5px; display:flex"
            :to="{ name: 'Wishlist' }"><i class="fa fa-heart" style="color:red;padding-top: 3px;padding-right: 5px;"></i> WishList
          </router-link>
          <a href="#" @click="logout" style="padding-left: 0px"><i class="fa fa-sign-out"></i> SignOut</a>
          
        </div>  
        <!-- <div class="shopping-cart">
          <a href="#" style="padding-left: 0px"><i class="fa fa-shopping-cart"></i> Sign </a>
        </div> -->
      </div>
      <div class="home-control" v-if="!token">
        <ul class="menu">
          <li><router-link class="nav-link text-light mr-3" style="color:#fff !important;padding-bottom: 0"
            :to="{ name: 'home' }"><i class="fa fa-fw fa-home"></i> Home
          </router-link>
          </li>
          <li>
            <router-link class="nav-link text-light" style="color:#fff !important;padding-bottom: 0"
            :to="{ name: 'Signin' }"><i class="fa fa-fw fa-user"></i> Login
          </router-link>
          </li>
        </ul>
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
      nameUser: '',
      isAdmin: false,
      token: null,
      EmailAdmin: 'hungngoc732000@gmail.com',
    };
  },
  methods: {
    // signout() {
    //   localStorage.removeItem("token");
    //   this.token = null;
    //   this.$emit("resetCartCount");
    //   this.$router.push({ name: "Home" });
    //   swal({
    //     text: "Logged you out. Visit Again",
    //     icon: "success",
    //     closeOnClickOutside: false,
    //   });
    // },
    logout() {
      localStorage.removeItem("token");
      this.token = null;
      this.$emit("resetCartCount");
      this.$router.push({ name: "home" });
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    this.EmailAdmin = localStorage.getItem("email");
    this.nameUser = localStorage.getItem('account_name')
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
  width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0 ;
  margin-top: 45px;
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
ul.menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-top: 10px;
    overflow: hidden;
    display: flex;
    font-size: 19px;
    margin-left: 15px;
}
ul.menu li{
  width: 100px;
}
</style>
