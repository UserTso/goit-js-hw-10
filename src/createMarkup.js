import {refs} from "./index"
export function createMarkupCountries(countries) {
  const countryMarkup = countries.map(
      ({ flags: { svg }, name: { official } }) => {
          return `<li><img src="${svg}" alt="${official}" width=50/><p>${official}</p></li>`
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
    const makeCountry = `<img src="${svg}" alt="${official}" width=30/>
    <h2>${official}</h2>
    <p><b>Capital: </b>${capital}</p>
    <p><b>Population: </b>${population}</p>
    <p><b>Languages: </b>${Object.values(languages).join(', ')}</p>`

    refs.boxInfo.innerHTML = makeCountry;
}