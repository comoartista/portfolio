// gsap.registerPlugin(Tween);

//   // Знаходимо елементи
//   const imgWrapper = document.querySelector('.project__img-wrapper');
//   const contentWrapper = document.querySelector('.project__content-wrapper');
//   const img = document.querySelector('.project__item-img');
//   const projectItem = document.querySelector('.project__item');

//   // Встановлюємо початкові значення GSAP
//   gsap.set(imgWrapper, { opacity: 0, visibility: 'hidden' });
//   gsap.set(contentWrapper, { gap: '0px' });
//   gsap.set(img, { marginLeft: '-300px', transform: 'translateX(-100%)' });

//   // Додаємо анімацію за допомогою GSAP
//   const tl = gsap.timeline({ paused: true, defaults: { ease: 'power2.inOut' } });

//   tl.to(imgWrapper, { opacity: 1, visibility: 'visible', duration: 0.6, delay: 0.3 });
//   tl.to(contentWrapper, { gap: '30px', duration: 0.6 }, '-=0.6');
//   tl.to(img, { marginLeft: '0', transform: 'translateX(0%)', duration: 0.6, delay: -0.3 });

//   // Додаємо обробник подій для hover
//   projectItem.addEventListener('mouseenter', () => tl.play());
//   projectItem.addEventListener('mouseleave', () => tl.reverse());