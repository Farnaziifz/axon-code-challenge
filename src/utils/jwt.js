import store from '@/store';
import { AuthService } from '@/services';
const onRevokeToken = new CustomEvent('onRevokeToken');

class jwtService {
	refreshDispatched = false;
	tokenIsValid = true;

	getToken = async () => {
		if (this.tokenIsValid) {
			return store.state.appConfig.accessToken;
		} else {
			if (this.refreshDispatched) return await this.waitForNewToken();
			else return await this.revokeToken();
		}
	};
	revokeToken = async () => {
		this.refreshDispatched = true;

		const payload = {
			refreshToken: store.state.appConfig.refreshToken,
		};

		const res = await AuthService.refreshToken(payload);

		if (res) {
			const { token, refreshToken } = res.result;
			this.refreshDispatched = false;
			window.dispatchEvent(onRevokeToken);
			store.commit('appConfig/setAccessToken', token);
			store.commit('appConfig/setRefreshToken', refreshToken);

			return token;
		}
		store.commit('appConfig/clearAllConfigs');
	};
	waitForNewToken = async () => {
		return new Promise(resolve => {
			window.addEventListener('onRevokeToken', resolve, false);
		});
	};
}

export default new jwtService();
