<template>
  <div class="country-detail" v-if="country">
    <h3>{{country.name}} &#x1F310;</h3>
    <img class="flag" name="flag" :src="country.flag" />
    <p>Alt Name: {{country.nativeName}}</p>
    <p>
      Sub Region:
      <strong>{{country.subregion}}</strong>
    </p>
    <p>Pop Density: {{ (country.population / country.area).toFixed(2) }}</p>
    <p>Capital: {{country.capital}}</p>
    <div class="modal-container">
      <input type="checkbox" id="model-click" style="display:none" />
      <label for="model-click">
        <span class="button-theme">Full info &#x1F4D6;</span>
      </label>
      <div class="country_modal">
        <div class="modal_background">
          <img class="flag" name="flag" :src="country.flag" />
          <h3>
            {{country.name}} &#127760;
            <label for="model-click" class="btn-close">
              <span class="button-theme">
                <strong>Close &#10006;</strong>
              </span>
            </label>
          </h3>
          <ul>
            <li>Alternative Name: {{country.nativeName}}</li>
            <li>Capital: {{country.capital}}</li>
            <li>Region: {{country.region}}</li>
            <li>Sub Region: {{country.subregion}}</li>
            <li>Population: {{country.population}}</li>
            <li>Area: {{country.area}}</li>
            <li>Pop Density: {{ (country.population / country.area).toFixed(2) }}</li>
            <li>Demonym: {{country.demonym}}</li>
            <li>Gini Coefficient: {{country.gini}}</li>
            <li>Native Name: {{country.nativeName}}</li>
            <li>Languages:</li>
            <ul v-for="(ctry, index) in country.languages" :key="index">
              <li>&#128172; {{ctry.name}}</li>
            </ul>
            <li>Currencies:</li>
            <ul v-for="(cty, index) in country.currencies" :key="(index + country.length)">
              <li>&#128176; {{cty.name}}</li>
            </ul>
          </ul>
        </div>
      </div>
      <p>
        <a
          target="_blank"
          :href="`https://www.cia.gov/library/publications/the-world-factbook/geos/${country.alpha2Code.toLowerCase()}.html`"
        >CIA Factbook &#x1F4DA;</a>
      </p>
      <iframe width="420" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openlinkmap.org/small.php?lat=<LAT>&lon=<LON>&zoom=<ZOOM>" style="border: 1px solid black"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ["country"]
};
</script>

<style>
@import "../assets/styles/modal.css";
</style>



