import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
import { createMarkupCountries } from './createMarkup';
import { makeMarkupCountry } from './createMarkup';

import './css/styles.css';
const DEBOUNCE_DELAY = 300;

export const refs = {
    inputValue: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    boxInfo: document.querySelector('.country-info'),
};

refs.inputValue.addEventListener('input', debounce(onInputNameCountry, DEBOUNCE_DELAY));

function onInputNameCountry(event) {
    refs.list.innerHTML = '';
    refs.boxInfo.innerHTML = '';
   
    let userCountryName = event.target.value.trim();

    if (userCountryName) {
        fetchCountries(userCountryName).then(result => {
            if (!result.ok) {
                throw new Error(result.status);
            }
            return result.json()
        })
            .then(countries => {
                if (countries.length > 10) {
                    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
                    return;
                }
                if (countries.length > 1 && countries.length < 11) {
                    createMarkupCountries(countries);
                    return;
                }
                makeMarkupCountry(countries);
            }).catch((error) => {
                Notiflix.Notify.failure("Oops, there is no country with that name")
            })
        
    }
}
