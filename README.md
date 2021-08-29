# Landing Page

Simple multi-section landing page, with a dynamically updating navigational menu based on the amount of content that is added to the page.

## Description

Often times, we don’t know how much content will be added to a page through a CMS or an API. To circumvent this problem, we can dynamically add the content to the page. We will be demonstrating this with the navigation menu.

To improve the user experience, the section actively being viewed should be differentiated in some way. Additionally, when a user clicks on a navigation item, the item should scroll you to the appropriate section rather than giving you the default jump.

## Getting Started

### Dependencies

This project works on any modern web browser


### Tools

* Add a Section
```
sectionslist.push(
  buildSection(SectionTitle, SectionDescription, sectionslist.length)
);
```

* Add Event Listener in buildSection function
```
// Active Section is in Viewport ?
window.addEventListener("scroll", (event) => {
    let nav = document.getElementById(section.id * -1);
    console.log(section);
    isInViewport(section)
      ? nav.classList.add("active")
      : nav.classList.remove("active");
  });

//Go to section
a.addEventListener("click", function () {
    document.getElementById(brevid).classList.remove("active");
    this.classList.add("active");
    window.event.preventDefault();
    brevid = this.id;
    document
      .getElementById(this.id * -1)
      .scrollIntoView({ behavior: "smooth" });
  });
```

* For each Section Added there is a Bubble created
```
let bubble = document.createElement("li");
  let rand = getRandomInt(100);
  bubble.style.left = `${(getRandomInt(screen.width) / screen.width) * 100}%`;
  bubble.style.width = `${rand}px`;
  bubble.style.height = `${rand}px`;
  bubble.style.animationDelay = `${i}s`;
  bubble.style.animationDuration = `${i * 20}s`;
  bubble.style.color = "#F19674";

  document.querySelector(".bubbles").appendChild(bubble);
```
 
* etc..

## Author

 Abdallah Mohamed El belkasy  


## Version History

* 0.2
    * Various bug fixes and optimizations
    * Added active section where the navbar highlights the section on viewport
* 0.1
    * Initial Release
