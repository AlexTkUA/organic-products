"use strict"
const renderEmailForm = () => {
    return `<section class="emailForm">
        <div class="container emailForm-container">
          <div class="emailForm_block">
            <div class="emailForm_block_wrapper">
              <h2 class="emailForm_title">Subscribe to our Newsletter</h2>
              <form class="emailForm_form" id="emailForm" action="">
                <input
                  class="emailForm_form_emailInput"
                  required
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                />
                <input
                  class="emailForm_form_btn"
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </section>`
}
export default renderEmailForm;