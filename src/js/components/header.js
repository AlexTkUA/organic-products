const renderHeader = () => {
    const html = `<header class = "header">
        <div class="container header-container">
          <a href="index.html" class = "logo">
            <div class = "logo_img">
              <img src="src/assets/logo/logo.svg" alt="logo">
            </div>
            <span class = "logo_text">Organick</span>
          </a>
          <div class = "burger show">
            <img src="src/assets/icons/burger-menu.svg" alt="menu">
          </div>
          <nav class = "nav">
            <ul class ="nav_list">
              <li class = "nav_list_item"><a href="#">About</a></li>
              <li class = "nav_list_item"><a href="#">Shop</a></li>
              <li class = "nav_list_item"><a href="#">Projects</a></li>
              <li class = "nav_list_item"><a href="#">News</a></li>
            </ul>
          </nav>
          <nav class = "nav_mob">
            <ul class ="nav_mob_list">
              <li class = "nav_mob_list_item"><a href="#">About</a></li>
              <li class = "nav_mob_list_item"><a href="#">Shop</a></li>
              <li class = "nav_mob_list_item"><a href="#">Projects</a></li>
              <li class = "nav_mob_list_item"><a href="#">News</a></li>
            </ul>
          </nav>
          <form id = "formForSearch" class = "search" action="">
            <div class = search_placeholder>
              <input class = "search_placeholder_input" type="text">
              <button type="submit" class="search_placeholder_btn"><div class="search_placeholder_btn_img"><img src="src/assets/icons/search.svg" alt=""></div></button>
            </div>
          </form>
          <div class = "cart_icon">
            <a href="#" class = "cart_icon_block"><div class = "cart_icon_block_img"><img src="src/assets/icons/cart.svg" alt=""></div></a>
            <span class = "cart_icon_count">Cart (0)</span>
          </div>
        </div>
    </header>`
    return html;
}
export default renderHeader;