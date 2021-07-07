import axios from 'axios';

export default {
    namespaced: true,

    state: {
        quranList: [],
    },

    mutations: {
        setQuranList(state, data){
            state.quranList = data;
        }
    },

    actions: {

        getQuranList({commit}){
            axios.get('https://api.quran.sutanlab.id/surah')
            .then((resp) => {
                commit('setQuranList', resp.data.data);
            })
            .catch(e => {console.log(e);});
        },

        getSurah(_, {id: _id}){

            return new Promise((resolve) => {

                axios.get('https://api.quran.sutanlab.id/surah/' + _id)
                .then((resp) => {
                    resolve(resp.data)
                })
                .catch(e => {console.log(e);});

            });

        }


    },

    getters: {
        getQuranList: state => {return state.quranList},
    }
}