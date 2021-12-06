// animasi AOS
const skillAni = document.querySelectorAll(".skill-ani");
const certAni = document.querySelectorAll(".cert-ani");
const resumeAni = document.querySelectorAll(".resume-ani");
const projectAni = document.querySelectorAll(".project-ani");

skillAni.forEach((img, i) => {
  img.dataset.aos = "fade-right";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 2000;
});

certAni.forEach((div, i) => {
  div.dataset.aos = "fade-up";
  div.dataset.aosDelay = i * 200;
  div.dataset.aosDuration = 2000;
});

resumeAni.forEach((div, i) => {
  div.dataset.aos = "fade-up";
  div.dataset.aosDuration = 2000;
});

projectAni.forEach((div, i) => {
  div.dataset.aos = "fade-up";
  div.dataset.aosDelay = i * 200;
  div.dataset.aosDuration = 2000;
});

AOS.init({
  duration: 2000,
});

// Animasi GSAP
gsap.registerPlugin(TextPlugin);
gsap.to(".type", { duration: 2.5, text: "Hello, there!_" });
