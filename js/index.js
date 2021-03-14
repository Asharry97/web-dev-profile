
function fileLink() {
    let this_pathname = window.location.pathname;
    let this_origin = window.location.origin;
    let filePath = this_pathname.replace(/(.*?)[^/]*\..*$/, '$1');
    console.log("F ", filePath);
    console.log("F ", this_origin);
    console.log("F ", this_origin + filePath);
    return this_origin + filePath;
}

// Get Navbar
async function loadNavbar() {
    const this_loc = fileLink();
    document.querySelector(".navbar-component").innerHTML = await (await fetch(this_loc + '/navbar.html')).text();
    setActiveLink();
}

// Get Footer
async function loadFooter() {
    const this_loc = fileLink();
    document.querySelector(".footer-component").innerHTML = await (await fetch(this_loc + '/footer.html')).text();
}

function setActiveLink() {
    console.log("window.location.href => ", window.location.href);
    this_url = new URL(window.location.href);
    this_window_path_file = this_url.pathname.split("/").pop();

    let nav_links = document.querySelectorAll("nav .navbar-nav .nav-link");

    for (let index = 0; index < nav_links.length; index++) {
        let one_nav_link = nav_links[index];
        let this_nav_link_path_file = one_nav_link.href.split("/").pop().split("#")[0];
        if (this_nav_link_path_file === this_window_path_file) {
            console.log("this_nav_link_path_file: ", this_nav_link_path_file, "this_window_path_file: ", this_window_path_file, " NavLink: ", one_nav_link);
            one_nav_link.classList.add("active");
            break;
        } else if (one_nav_link.textContent.trim().toLowerCase() === this_window_path_file.split(".")[0].toLowerCase()) {
            console.log("this_nav_link_path_file: ", this_nav_link_path_file, "this_window_path_file: ", this_window_path_file, " NavLink: ", one_nav_link);
            one_nav_link.classList.add("active");
            break;
        }
        console.log("this_nav_link_path_file: ", this_nav_link_path_file, "this_window_path_file: ", this_window_path_file, " NavLink: ", one_nav_link);
    }

    console.log("this_window_path_file => ", this_window_path_file);
}

function main() {
    loadNavbar();
    loadFooter();

}

main();