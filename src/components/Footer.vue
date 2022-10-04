<template>
  <footer class="bg-dark text-center text-white" style="background: #343a40 !important">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Social media -->

      <!-- Section: Social media -->

      <!-- Section: Form -->
      <section class="">
        <form action="">
          <!--Grid row-->
          <div class="row d-flex justify-content-center">
            <!--Grid column-->
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-5 col-12">
              <!-- Email input -->
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example21" class="form-control" />
              </div>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-auto">
              <!-- Submit button -->
              <button type="submit" class="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </form>
      </section>
      <!-- Section: Form -->

      <!-- Section: Text -->
      <section class="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio earum repellat quaerat voluptatibus placeat nam, commodi
          optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
          voluptate quas.
        </p>
      </section>
      <!-- Section: Text -->

      <!-- Section: Links -->
      <section class="footer-detail">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Get to Know Us</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a class="footer-link font-weight-light" href="#">About Us</a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Android App</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">iOS App</a><br />
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Connect With Us</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a class="footer-link font-weight-light" href="#">Facebook</a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Twitter</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Instagram</a><br />
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Make Money With Us</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a class="footer-link font-weight-light" href="#">Sell with Us</a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Become an Affiliate</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Advertise Your Products</a><br />
              </li>
            </ul>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Let Us Help You</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a class="footer-link font-weight-light" href="#">Return Centre</a>
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">100% Purchase Protection</a><br />
              </li>
              <li>
                <a class="footer-link font-weight-light" href="#">Help</a><br />
              </li>

            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </section>
      <!-- Section: Links -->
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  props: ["category"],
  methods: {},
};
</script>

<style>
footer {
  margin-top: 100px;
  background-color: #232f3e;
  font-size: 16px;
}

li {
  padding-left: 0;
  padding-bottom: 10px;
}

a {
  text-decoration: none;
}

.footer-link {
  color: #ddd;
}

#logo {
  width: 150px;
}

footer {
  font-family: "Roboto", sans-serif;
}
@media only screen and (max-width: 1024px) {
  section.footer-detail{
    display: none;
  };
  .mb-4 {
    display: none !important;
  }
}
</style>
