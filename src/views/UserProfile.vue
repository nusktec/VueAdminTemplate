<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <Meta-Data title="Profile"/>
    <d-row no-gutters class="page-header py-2">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">User Profile</h3>
      </d-col>
    </d-row>

    <!-- Content -->
    <d-row>
      <d-col lg="4">
        <upl-user-details />
      </d-col>
      <d-col lg="8">
        <upl-user-account-details />
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import UserDetails from '@/components/user-profile-lite/UserDetails.vue';
import UserAccountDetails from '@/components/user-profile-lite/UserAccountDetails.vue';
import VueHeadful from 'vue-headful';
import MetaData from '../components/extra/MetaData';

export default {
  name: 'user-profile-lite',
  components: {
    MetaData,
    VueHeadful,
    uplUserDetails: UserDetails,
    uplUserAccountDetails: UserAccountDetails,
  },
};
</script>

