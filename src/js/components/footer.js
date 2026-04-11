"use strict"
import { correctPath } from "./url.js";
const renderFooter  = () => {
  const startPath = correctPath(true);
    return `<footer class="footer">
      <div class="container footer-container">
        <div class="footer_block contact-order">
          <div class="footer_block_contacts">
            <a href = "${startPath}pages/contactUs/index.html" class="footer_block_contacts_title">Contact Us</a>
            <ul class="footer_block_contacts_list">
              <li class="footer_block_contacts_list_item">
                <span class="footer_block_contacts_list_item_title">Email</span>
                <a
                  class="footer_block_contacts_list_item_link"
                  href="mailto:example@gmail.com"
                  >example@gmail.com</a
                >
              </li>
              <li class="footer_block_contacts_list_item">
                <span class="footer_block_contacts_list_item_title">Phone</span>
                <a
                  class="footer_block_contacts_list_item_link"
                  href="tel:777 888 999"
                  >777 888 999</a
                >
              </li>
              <li class="footer_block_contacts_list_item">
                <span class="footer_block_contacts_list_item_title"
                  >Address</span
                >
                <address>
                  <a
                    class="footer_block_contacts_list_item_link"
                    href="https://maps.app.goo.gl/MJENx9dA7H9toyhe9"
                    >88 road, borklyn street, USA</a
                  >
                </address>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer_block fs3 middle-order">
          <div class="footer_block_middle">
            <a class="logo mb26">
              <div class="logo_img">
                <img src="${startPath}assets/logo/logo.svg" alt="logo" />
              </div>
              <span class="logo_text">Organic</span>
            </a>
            <p class="paragraph footer-paragraph mb50 text-center">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div class="footer_block_messages">
              <a href="#" class="messenger"
                ><div class="messenger_icon">
                  <img src="${startPath}assets/logo/insta.svg" alt="" /></div
              ></a>
              <a href="#" class="messenger"
                ><div class="messenger_icon">
                  <img src="${startPath}assets/logo/fb.svg" alt="" /></div
              ></a>
              <a href="#" class="messenger"
                ><div class="messenger_icon">
                  <img src="${startPath}assets/logo/twiter.svg" alt="" /></div
              ></a>
            </div>
          </div>
        </div>
        <div class="footer_block links-order">
          <div class="footer_block_links">
            <h3 class="footer_block_links_title">Utility Pages</h3>
            <ul class="footer_block_links_list">
              <li class="footer_block_links_list_item">
                <a href="#">Style Guide</a>
              </li>
              <li class="footer_block_links_list_item">
                <a href="#">Password Protected</a>
              </li>
              <li class="footer_block_links_list_item">
                <a href="#">Licences</a>
              </li>
              <li class="footer_block_links_list_item">
                <a href="#">Changelog</a>
              </li>
              <li class="footer_block_links_list_item">
                <a href="${startPath}pages/standards/index.html">Quality Standard</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class = "footer_copyright">
      <span>Copyright © Organick</span>
      </div>
    </footer>`;
}
export default renderFooter;