<template>
    <div id="ticker" class="row">
      <div class="ctr">
        <div class="row">
          <div class="flex">
            <h5>
              <span>
                <span>Customer Reviews</span>
              </span>
            </h5>
          </div>
          <div class="row">
            <h6>See what some of our clients have shared about Duffy Motors</h6>
            <p>We Encourage our customers to share their experiences with us.</p>
          </div>
          <div class="row">
            <iframe src="https://www.goodgaragescheme.com/garage/feedback_widget/6587/hori" title="Good Garage Scheme"></iframe>
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
#ticker {
  border-top: 5px solid var(--grey);
  border-bottom: 5px solid var(--grey);
  padding: 2rem 1rem;
}

#ticker iframe {
  border: none;
  display: block;
  outline: 0;
  height: 200px;
  margin: 0 auto;
  max-width: 768px;
  padding: 0 2rem;
  width: 100%;
}

#ticker h5 {
  margin: 0 auto 1rem auto;
}

#ticker h5 span {
  display: block;
}

#ticker h5 span span {
  background: var(--tertiary);
  color: #fff;
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  height: 36px;
  line-height: 36px;
  text-transform: uppercase;
  padding: 0 30px;
  position: relative;
}

#ticker h5 span span:before,
#ticker h5 span span:after {
  content:"";
  position:absolute;
  background: var(--tertiary);
  top:0;
  left:-15px;
  bottom: 0;
  width: 30px;
  -webkit-transform: skew(-20deg);
  -moz-transform: skew(-20deg);
  -ms-transform: skew(-20deg);
  transform: skew(-20deg);
}

#ticker h5 span span:after {
  left: auto;
  right:-15px;
}

#ticker h6 {
  color: var(--tertiary);
  margin: 0 0 1rem 0;
  text-align: center;
  font-size: 1rem;
}

#ticker p {
  color: var(--dgrey);
  margin: 0 0 2rem 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
  text-align: center;
}
@media only screen and (min-width: 600px) {
  #ticker h6 {
    font-size: 1.4rem;
    padding: 0 10%;
  }
}
@media only screen and (min-width: 1024px) {
  #ticker h6 {
    padding: 0 20%;
  }
}

@media only screen and (min-width: 1300px) {
  #ticker h6 {
    padding: 0 30%;
  }
}
</style>
