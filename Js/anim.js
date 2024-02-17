anime({
    targets: '.animated-heading',
    translateY: ['100vh', 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 200,
  });
  
  // For paragraph
  anime({
    targets: '.animated-paragraph',
    translateY: ['100vh', 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 400, // Delay slightly after heading
  });

  anime({
    targets: '.animated-buttons',
    translateY: ['100vh', 6],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 400, // Delay slightly after heading
  });

  const menuIcon = document.querySelector('.svg'); // Adjust selector for your icon
  const sidebar = document.querySelector('.sidebar');
  
  menuIcon.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      // On mobile, ignore the click
      return;
    }
    // On larger screens, toggle visibility
    sidebar.style.visibility = sidebar.style.visibility === 'visible' ? 'hidden' : 'visible';
  });
  

  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.visibility = 'visible'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.visibility = 'hidden'
  }



  


