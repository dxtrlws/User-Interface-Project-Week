// JS goes here

// Toggle for navigation
const toggle = () => {
  menu.classList.toggle("menu-hidden");
  const menuOpen = document.querySelector(".menu");
  TweenMax.to(menuOpen, 10, { height: "100vh", width: "100%" });
  console.log(menuOpen);
};
const menuBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".menu-close");
const menu = document.querySelector(".menu-hidden");
const menuOpen = document.querySelector(".menu");
menuBtn.addEventListener("click", () => {
  menu.classList.remove("menu-hidden");
  // menuOpen = document.querySelector('.menu');
  TweenMax.to(menuOpen, 0.2, {
    height: "100vh",
    width: "100%",
    borderBottomLeftRadius: "0",
    ease:Linear.easeInOut
  });
});
closeBtn.addEventListener("click", () => {
  TweenMax.to(menuOpen, 0.2, {
    height: "0",
    width: "0",
    borderBottomLeftRadius: "100%",
    ease:Linear.easeInOut
  });
  setTimeout(() => {
    menu.classList.add("menu-hidden");
  }, 100);
});

// Classes for tabs on Services page
class TabLinks {
  constructor(tabs) {
    this.tabs = tabs;
    // Add click event listener to all the tabs
    this.tabs.addEventListener("click", this.select.bind(this));
    // Store the number of the <div class="tab-link" data-tab="2">Construction</div> = 2
    this.data = tabs.dataset.tab;
    // Store the corresponding tab content
    this.dataElement = document.querySelector(
      `.tab-item[data-tab="${this.data}"]`
    );
    // Craete new tab content class with the corresponding tab content
    this.tabContent = new TabContent(this.dataElement);
  }
  select() {
    // Remove the selected class from all tabs
    const links = document.querySelectorAll(".tab-link");
    links.forEach(link => {
      link.classList.remove("tab-link-selected");
    });
    // Add the selected class to the tab that was clicked
    this.tabs.classList.add("tab-link-selected");
    // Call the select method from TabContent class to display the correct tab content when the parent tab is clicked
    this.tabContent.select();
  }
}

class TabContent {
  constructor(content) {
    this.content = content;
  }
  select() {
    // Store all the tab content
    const items = document.querySelectorAll(".tab-item");
    // Remove the select class from all the tab content
    items.forEach(item => item.classList.remove("tab-item-selected"));
    // Add the selected class to the correct tab content so it displays
    this.content.classList.add("tab-item-selected");
    const tabSelected = document.querySelector(".tab-item-selected");
    const tabTween2 = document.querySelectorAll(".tab-item");
    tabTween2.forEach(tab => {
      TweenMax.to(tabTween2, 1, { opacity: "0" });
    });
    TweenMax.to(tabSelected, 1.5, { opacity: "1" });
  }
}

document.querySelectorAll(".tab-link").forEach(tab => new TabLinks(tab));

// Animation for H1 headdings

const heading = Array.from(document.querySelectorAll(".jumbo-text h1"));
spanWrap(heading);

function spanWrap(wordArray) {
  wordArray.forEach(word => {
    let letter = word.textContent.split("");
    word.innerHTML = letter.map(letter => `<span>${letter}</span>`).join("");
  });
}

// Shows inital tab selected content on page load
const initalTabLoad = document.querySelector(".tab-item-selected");
initalTabLoad.style.opacity = "1";
