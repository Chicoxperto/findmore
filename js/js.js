var imgmenu = 0;

function OpenSideMenu() {
  var sidemenu = document.getElementById("side-menu-func");
  sidemenu.classList.toggle("side-menu-active");

  var imgsidemenu = document.getElementById("img-sidemenu");
  imgsidemenu.classList.toggle("logo-active");

  if (imgmenu == 0) {
    document.getElementById("img-sidemenu").src =
      "assets/ico/logo-sidemenu.svg";

    imgmenu++;
  } else {
    document.getElementById("img-sidemenu").src = "assets/ico/logo-mini.svg";

    imgmenu = 0;
  }

  var iconsidemenu = document.getElementById("btn-sidemenu");
  iconsidemenu.classList.toggle("iconrotation");
}

function OpenSideMenuMobile() {
  var sidemenumobile = document.getElementById("side-menu-mob");
  sidemenumobile.classList.add("active");
}

function CloseSideMenuMobile() {
  var sidemenumobileclose = document.getElementById("side-menu-mob");
  sidemenumobileclose.classList.remove("active");
}
