import {refs} from "./index"
export function createMarkupCountries(countries) {
  const countryMarkup = countries.map(
      ({ flags: { svg }, name: { official } }) => {
          return `<li><div class="item__style"><img src="${svg}" alt="${official}" width=40 height=25/><p class="text">${official}</p></div></li>`
      }
    );
    refs.list.innerHTML = countryMarkup.join("");
}

export function makeMarkupCountry([country]) {
    const {
        flags: { svg },
        name: { official },
        capital,
        population,
        languages,
    } = country;
    const makeCountry = `<div class="style"><img src="${svg}" alt="${official}" width=30 height=20/>
    <h2 class="title">${official}</h2></div>
    <p><b>Capital: </b>${capital}</p>
    <p><b>Population: </b>${population}</p>
    <p><b>Languages: </b>${Object.values(languages).join(', ')}</p>`

    refs.boxInfo.innerHTML = makeCountry;
}