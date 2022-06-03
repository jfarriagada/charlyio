import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const vuetify = new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#29b6f6',
				secondary: colors.lightBlue.accent1,
				accent: colors.lightBlue.accent4,
				error: colors.red.accent3,
			},
			dark: {
				primary: colors.blue.lighten3,
			},
		},
	},
})

export default vuetify