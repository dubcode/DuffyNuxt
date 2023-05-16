<template>
    <div id="brands" class="row">
      <div class="ctr">
        <div class="row">
          <span class="brands__title">We work with the following brands</span>
        </div>
        <div class="row">
          <ul>
            <li>
              <img src="~/assets/images/seat.png" width="107" height="80" alt="seat-logo" title="Seat" />
            </li>
            <li>
              <img src="~/assets/images/ford.png" width="206" height="80" alt="ford-logo" title="Ford" />
            </li>
            <li>
              <img src="~/assets/images/fiat.png" width="79" height="80" alt="fiat-logo" title="Fiat" />
            </li>
            <li>
              <img src="~/assets/images/renault.png" width="80" height="80" alt="renault-logo" title="Renault" />
            </li>
            <li>
              <img src="~/assets/images/peugeot.png" width="113" height="80" alt="peugeot-logo" title="Peugeot" />
            </li>
            <li>
              <img src="~/assets/images/land-rover.png" width="150" height="80" alt="land-rover-logo" title="Land Rover" />
            </li>
            <li>
              <img src="~/assets/images/mercedes.png" width="80" height="80" alt="mercedes-logo" title="Mercedes" />
            </li>
            <li>
              <img src="~/assets/images/skoda.png" width="80" height="80" alt="skoda-logo" title="Skoda" />
            </li>
            <li>
              <img src="~/assets/images/vw.png" width="80" height="80" alt="vw-logo" title="Volkswagen" />
            </li>
            <li>
              <img src="~/assets/images/audi.png" width="129" height="80" alt="audi-logo" title="Audi" />
            </li>
            <li>
              <img src="~/assets/images/bmw.png" width="80" height="80" alt="bmw-logo" title="BMW" />
            </li>
            <li>
              <img src="~/assets/images/vauxhall.png" width="80" height="80" alt="vauxhall-logo" title="Vauxhall" />
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style scoped>
#brands {
  display: none;
}
@media only screen and (min-width: 600px) {
  #brands {
    background: var(--grey);
    display: block;
    padding: 2rem 0;
  }

  .brands__title {
    display: block;
    color: var(--dgrey);
    font-size: 1.7rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    margin: 0 0 2rem 0;
  }

  #brands ul {
    position: relative;
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  #brands li {
    display: inline-block;
    padding: 1rem;
  }

  #brands li img {
    height: 80px;
    margin: 0 auto;
    width: auto;
  }

}
@media only screen and (min-width: 1024px) {
  #brands li img {
    height: 60px;
  }
}
@media only screen and (min-width: 1300px) {
  #brands li img {
    height: 50px;
  }
}
</style>
