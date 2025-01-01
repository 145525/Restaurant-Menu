export function displayMenuItems(menuItems, sectionCenter) {
    let displayMenu = menuItems.map(function (item) {
      return `<div class="col-md-6 mb-4 border">
      <article class="menu-item  d-flex align-items-start" style="cursor: pointer;" onclick = "window.location.href = '/details/details.html?id=${item.id}'">
                  <img src="${item.img}" class="me-3 my-2" style="width: 25%;" alt=""/>
                  <div class="item-info">
                      <header class="d-flex justify-content-between mt-5">
                          <h4>${item.title}</h4>
                          <h4 class="price text-warning">$${item.price}</h4>
                      </header>
                      <p class="item-text">
                          ${item.desc}
                      </p>
                  </div>
               </article> </div>`;
    });
  
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }
