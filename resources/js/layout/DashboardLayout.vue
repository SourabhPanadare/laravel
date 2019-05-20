<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/products">
          <i class="fas fa-utensils"></i>
          <p>Kitchen</p>
      </sidebar-link>
      <sidebar-link to="/admin/sales">
        <i class="fas fa-chart-bar"></i>
        <p>Sales</p>
      </sidebar-link>
      <sidebar-link to="/admin/profile">
        <i class="fas fa-user"></i>
        <p>Customers</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>

  </div>
</template>
<style>

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
