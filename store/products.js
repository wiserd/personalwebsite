export const state = () => {
return {
    items: [{
      id: 1,
      name: 'First Product',
      price: 100,
    }, {
      id: 2,
      name: 'Second Product',
      price: 120,
    }, {
      id: 3,
      name: 'Third Product',
      price: 80,
    }],
    current: null,
  };
};
export const actions = {
};
export const mutations = {
  SET_CURRENT(state, id) {
    state.current = state.items.filter((p) => p.id == id)[0];
  },
};
export const getters = {
  all: (state) => state.items,
  current: (state) => state.current,
};