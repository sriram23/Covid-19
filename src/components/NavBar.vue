<template>
    <div>
        <div>
            <v-tabs vertical class="navbar-style" height="100vh" color="#0089f4" background-color="#00589d55">
                <v-tab to="/global" class="tab-style" active-class="active-class">
                    Global
                </v-tab>
                <v-tab to="/india" class="tab-style" active-class="active-class">
                    India
                </v-tab>
                <v-tab to="/global-trend" class="tab-style" active-class="active-class">
                    Global trends
                </v-tab>
                <v-tab to="/india-trend" class="tab-style" active-class="active-class">
                    India trends
                </v-tab>
            </v-tabs>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
    .navbar-style {
        position: fixed;
        width: auto;
        height: 100vh;
        margin: unset;
        padding: unset;
    }
    .tab-style {
        font-size: 12px;
        text-align: left;
    }
    .active-class { 
        color: #0089f4;
        box-shadow: 1px 5px 5px 2px #777;
        background: #0089f422;
    }
    @media screen and (max-width: 600px) {
      .navbar-style{
        position: fixed;
        width: 100vw;
        // height: 100vh;
        margin: unset;
        padding: unset;
        bottom: 0;
      }  
    }
</style>