import { auth } from '@/firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const state = () => ({
  user: null
});
const mutations = {
  setUser: (state, payload) => {
    state.user = payload
    console.log('user state changed:', state.user);
  },
}
const actions = {
  async signup (context, { email, password })  {
    const res =  await createUserWithEmailAndPassword(auth, email, password)
    if (res) {
      context.commit('setUser', res.user)
    } else {
      throw new Error('not compleat signup')
    }
  }
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
};