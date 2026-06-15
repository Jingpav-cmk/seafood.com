


// this script for  button  catagories





const filterBtns = document.querySelectorAll(".menu-btn");
const cards = document.querySelectorAll(".sea-card");

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        // Active button
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card => {

            if(filter === "all" ||
               card.dataset.category === filter){

                card.style.display = "block";

                setTimeout(() => {
                    card.classList.add("show-card");
                },100);

            }else{

                card.classList.remove("show-card");

                setTimeout(() => {
                    card.style.display = "none";
                },200);
            }

        });

    });

});


  const nav = document.getElementById('fistNav');
  const SCROLL_THRESHOLD = 40;

  function updateNav(){
    if(window.scrollY > SCROLL_THRESHOLD){
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

