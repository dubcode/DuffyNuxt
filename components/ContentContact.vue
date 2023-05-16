<template>
<!-- cards -->
<div id="cards" class="row">
    <div class="ctr">
        <div class="row">
            <h4 class="card__title">Duffy Motors</h4>
            <p>Duffy Motors (Manchester Ltd)<br/>16-17 Watson Street<br/>Manchester<br/>M3 4LP</p>
            <p><b>Call: 0161 834 4168</b></p>
        </div>
      <div class="row card__grid">
  
        <!-- card row -->
        <div class="card__row">
          <div class="card__cell card__thumb contact__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2374.5899538474187!2d-2.249125!3d53.475788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98569afb9486f4d!2sDuffy%20Motors%20(Manchester)%20Ltd!5e0!3m2!1sen!2suk!4v1669966843915!5m2!1sen!2suk" width="600" height="450" style="border:0;"></iframe>
          </div>
          <div class="card__cell card__excerpt">
            <div class="row contact__form">
                <iframe src="https://duffymotors.co.uk/api/contact-form/" title="Contact Form"></iframe>
            </div>
          </div>
        </div>
  
      </div>
    </div>
</div>
</template>
<style scoped>
.contact__map iframe,
.contact__form iframe {
  border: none;
  outline: 0;
  display: block;
  float: left;
  height: 1200px;
  width: 100%;
}

@media only screen and (min-width: 1300px) {
    .contact__map iframe,
    .contact__form iframe {
      height: 940px;
    }
}

</style>

