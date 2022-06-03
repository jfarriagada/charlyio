<template>
  <div justify="center" class="text-center">
    <img alt="Vue logo" style="padding:1em;" src="https://www.charly.io/wp-content/themes/charly-theme/img/logo-charly-n.png">
    <br>

    <v-row justify="center" class="text-center">
        <v-col cols="10" md="6">

            Total de Compañias : {{ total }} <br> 

            <v-select
            :items="arrStatus"
            v-model="status"
            label="Filtrar por Estado"
            item-text="status"
            return-object
            @change="onFilterStatus(status)"
            ></v-select>
            ordenar por : <v-btn @click="orderById()">id</v-btn> <v-btn @click="orderByName()">nombre</v-btn> <v-btn @click="orderByDate()">fecha</v-btn>
            <br> <br>
            <template v-for="(item, index) in companies">
              <v-col :key="index">
                <v-card
                  :key="index"
                  class="mx-auto"
                  outlined
                >
                <p>{{ item.id }} - {{ item.name }} - {{ item.status }} - {{ item.date }} </p>
                </v-card>
              </v-col>
            </template>

        </v-col>
    </v-row> 
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'Home',
  created() {
		this.$store.dispatch("fetchCompanies");
	},
  data(){
    return {
        status:'',
    }
  },
  computed: mapState({
		companies: (state) => state.companies,
    total: (state) => state.companies.length,
    arrStatus: (state) => state.arrStatus
	}),
  methods: mapActions(["onFilterStatus", "orderById", "orderByName", "orderByDate"]),
}
</script>
