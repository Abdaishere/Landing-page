function getRandomInt(max) {
  return 20 + Math.floor(Math.random() * max);
}

function buildSection(heading, description, i) {
  i++;
  // nav section
  let nav = document.createElement("li");
  let a = document.createElement("a");
  a.href = "#";
  a.className = "link";
  a.textContent = heading;
  a.id = i;
  nav.appendChild(a);
  document.getElementById("list").appendChild(nav);

  // adding the main section
  let section = document.createElement("section");
  section.id = i * -1;
  section.className = "shadow";
  let parent = document.createElement("div");
  parent.className = "sectoin";

  let head = document.createElement("h1");
  head.textContent = heading;
  parent.appendChild(head);

  let desc = document.createElement("p");
  desc.textContent = description;
  parent.appendChild(desc);

  // Active Section is in Viewport ?
  window.addEventListener("scroll", (event) => {
    let nav = document.getElementById(section.id * -1);
    isInViewport(section)
      ? nav.classList.add("active")
      : nav.classList.remove("active");
    });
    
  section.appendChild(parent);
  document.getElementById("sections").appendChild(section);

  //Go to section
  a.addEventListener("click", function () {
    window.event.preventDefault();
    document
      .getElementById(this.id * -1)
      .scrollIntoView({ behavior: "smooth" });
  });

  // bubbile
  let bubble = document.createElement("li");
  let rand = getRandomInt(100);
  bubble.style.left = `${(getRandomInt(screen.width) / screen.width) * 100}%`;
  bubble.style.width = `${rand}px`;
  bubble.style.height = `${rand}px`;
  bubble.style.animationDelay = `${i}s`;
  bubble.style.animationDuration = `${i * 20}s`;
  bubble.style.color = "#F19674";
  document.querySelector(".bubbles").appendChild(bubble);
  return section;
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

let sectionslist = [];
sectionslist.push(
  buildSection(
    "Section 1",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    sectionslist.length
  )
);
sectionslist.push(
  buildSection(
    "Section 2",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    sectionslist.length
  )
);
sectionslist.push(
  buildSection(
    "Section 3",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    sectionslist.length
  )
);
sectionslist.push(
  buildSection(
    "Section 4",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    sectionslist.length
  )
);
sectionslist.push(
  buildSection(
    "Section 5",
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    sectionslist.length
  )
);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

