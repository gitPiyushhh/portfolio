////////////////////////////////////////////////////////////////////////
/////////////////// Menubar
const menubar = document.getElementById("menubar");
const menubar__line = document.getElementById("menubar__line");

const navbar_mobile = document.getElementById("navbar_mobile");

menubar.addEventListener("click", function (e) {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
});

/// closing the nav bar on every click
const homeNav = document.getElementById("homeNav");
const projectNav = document.getElementById("projectNav");
const certNav = document.getElementById("certNav");
const communityNav = document.getElementById("communityNav");
const contactNav = document.getElementById("contactNav");

homeNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign("index.html");
});

projectNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign("index.html#projects");
});

certNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");

  location.assign("index.html#certificates");
});

communityNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign("#");
});

contactNav.addEventListener("click", (e) => {
  e.preventDefault();
  menubar__line.classList.toggle("u-hide-nav-line");
  navbar_mobile.classList.toggle("u-hidden");
  location.assign("index.html#contact");
});

const snippetBack1 = document.getElementById("snippet-1back");
const snippetFwd1 = document.getElementById("snippet-1fwd");
const snippetBack2 = document.getElementById("snippet-2back");
const snippetFwd2 = document.getElementById("snippet-2fwd");
const snippetBack3 = document.getElementById("snippet-3back");
const snippetFwd3 = document.getElementById("snippet-3fwd");
const test1 = document.getElementById("test1");
const test2 = document.getElementById("test2");
const test3 = document.getElementById("test3");


const fwd = (e, i, test, cnt) => {
  e.preventDefault();
  console.log(i)
  test.innerHTML = `<img src="./drawables/frontend - ${i} --${cnt}.png" alt="Snippet 1" class="community-main__snippets-img" id="test"></img>`;
}

// Globals
i = 1;
snippetFwd1.addEventListener('click', function(e) {

  if (i == 9) {
    // ROllback
    i = 0;
  }

  e.preventDefault();
  ++i;
  fwd(e, 1, test1, i)
})

snippetBack1.addEventListener('click', function(e) {

  if (i == 0 || i-1 == 0) {
    // ROllback
    alert('No page behind 🙃');
    return;
  }

  e.preventDefault();
  --i;
  fwd(e, 1, test1, i)
})

snippetFwd2.addEventListener('click', function(e) {

  if (i == 9) {
    // ROllback
    i = 0;
  }

  e.preventDefault();
  ++i;
  fwd(e, 2, test2, i)
})

snippetBack2.addEventListener('click', function(e) {

  if (i == 0 || i-1 == 0) {
    // ROllback
    alert('No page behind 🙃');
    return;
  }

  e.preventDefault();
  --i;
  fwd(e, 2, test2, i)
})

snippetFwd3.addEventListener('click', function(e) {

  if (i == 8) {
    // ROllback
    i = 0;
  }

  e.preventDefault();
  ++i;
  fwd(e, 3, test3, i)
})

snippetBack3.addEventListener('click', function(e) {

  if (i == 0 || i-1 == 0) {
    // ROllback
    alert('No page behind 🙃');
    return;
  }

  e.preventDefault();
  --i;
  fwd(e, 3, test3, i)
})


///////////////////////////////////////////////
/// Static login functionality

const login__cta = document.getElementById('login__cta');
const content = document.getElementById('content');
const login = document.getElementById('login');

// login__cta.addEventListener('click', function(e) {
//   e.preventDefault();
//   const username = document.getElementById('login__input--name').value;
//   const password = document.getElementById('login__input--password').value;

//   if (username === 's' && password === 's') {
//     content.classList.remove('u-hidden');
//     login.classList.add('u-hidden');
//     alert('Welcome to community🥳');
//   } else {
//     alert('Either username or password is incorrect');
//   }
// })


///////////////////////////////////////////
/// Road map sections

const ds = document.getElementById('ds_cta');

ds.addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("ds_section").scrollIntoView({behavior: 'smooth'});
})

