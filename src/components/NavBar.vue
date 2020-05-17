<template>
    <div>
        <div>
            <v-tabs :vertical="window_width > 768 ? true : false" class="navbar-style" :height="`window_width > 768 ? '100vh' : none`" :width="`window_width > 768 ? none : '100vw'`" background-color="#00589d">
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
    data() {
        return {
            window_width: window.innerWidth,
        };
    },
}
</script>

<style>
    .navbar-style {
        position: fixed;
        width: auto;
        height: 100vh;
        margin: unset;
        padding: unset;
    }
    @media (max-width: 768px) {
        .navbar-style {
            position: fixed;
            bottom: 20px !important;
            width: 100vw;
            z-index: 1;
            height: 20px;
        }
    }
    .tab-style {
        font-size: 12px;
        text-align: left;
    }
    .active-class { 
        color: #FFFFFF !important;
        box-shadow: 1px 5px 5px 2px #777;
        /* background: #0089f422; */
    }
    
    .v-slide-group__prev {
        display: none !important;
    }
</style>