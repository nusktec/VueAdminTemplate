<template>
    <d-container fluid>
        <notifications group="alert"/>
        <vue-topprogress ref="topProgress"></vue-topprogress>
        <Meta-Data :title='title'/>
        <d-row>
            <!-- Main Sidebar -->
            <main-sidebar :items="sidebarItems"/>

            <d-col class="main-content offset-lg-2 offset-md-3 p-0" tag="main" lg="10" md="9" sm="12">

                <!-- Main Navbar -->
                <main-navbar/>

                <!-- Content -->
                <router-view/>

                <!-- Main Footer -->
                <main-footer/>
            </d-col>

        </d-row>
    </d-container>
</template>

<script>
  import MetaData from './../components/extra/MetaData';
  import getSidebarItems from '@/data/sidebar-nav-items';
  import { mapState } from 'vuex';

  // Main layout components
  import MainNavbar from '@/components/layout/MainNavbar/MainNavbar.vue';
  import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
  import MainFooter from '@/components/layout/MainFooter/MainFooter.vue';

  export default {
    name: 'analytics',
    components: {
      MetaData,
      MainNavbar,
      MainSidebar,
      MainFooter,
    },
    data() {
      return {
        sidebarItems: getSidebarItems(),
      };
    },
    mounted() {
      this.$refs.topProgress.start();
      setTimeout(() => {
        this.$refs.topProgress.done();
      }, 1000);
    },
    computed: mapState({
      title: state => state.title,
    })
  };
</script>

<style type="text/css" lang="scss">
    body {
        background-color: white;
    }
</style>

