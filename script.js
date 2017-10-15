window.onload = function () {
  var face      = document.getElementById('c-1-face');
  var nameLeft  = document.getElementById('c-1-name1');
  var nameRight = document.getElementById('c-1-name2');
  var job1      = document.getElementById('job-1');
  var job2      = document.getElementById('job-2');
  var job3      = document.getElementById('job-3');
  var edu       = document.getElementById('education');
  var edu1      = document.getElementById('c-4-left-container1');
  var edu2      = document.getElementById('c-4-left-container2');
  var edu3      = document.getElementById('c-4-left-container3');
  var skill     = document.getElementById('skills');
  var windMill  = document.getElementById('c-4-right-1');
  var exp       = document.getElementById('experience');
  var exp1      = document.getElementById('c-4-right-3-first');
  var exp2      = document.getElementById('c-4-right-3-second');
  var exp3      = document.getElementById('c-4-right-3-third');
  var yearCL    = document.getElementById('c-4-right-3-first-date');
  var yearCR    = document.getElementById('c-4-right-3-third-date');
  var yearL1    = document.getElementById('year-l-1');
  var yearL2    = document.getElementById('year-l-2');
  var yearR1    = document.getElementById('year-r-1');
  var yearR2    = document.getElementById('year-r-2');
  var tiL1      = document.getElementById('c-4-title-left-1');
  var tiL2      = document.getElementById('c-4-title-left-2');
  var tiR1      = document.getElementById('c-4-title-right-1');
  var tiR2      = document.getElementById('c-4-title-right-2');
  var info1     = document.getElementById('c-4-right-3-third-info1');
  var info2     = document.getElementById('c-4-right-3-third-info2');
  var hobby     = document.getElementById('hobby');
  var triangle1 = document.getElementById('triangle1');
  var triangle2 = document.getElementById('triangle2');
  var triangle3 = document.getElementById('triangle3');
  var triangle4 = document.getElementById('triangle4');
  var icons     = document.querySelectorAll('.icon');
  var work      = document.getElementById('work');
  var work1     = document.getElementById('work-1');
  var work2     = document.getElementById('work-2');
  var work3     = document.getElementById('work-3');
  var visible   = [face,nameLeft,nameRight,job1,job2,job3,edu,edu1,edu2,edu3,
    skill,windMill,exp,exp1,exp2,exp3,yearCL,yearCR,yearL1,yearL2,yearR1,yearR2,
    tiL1,tiL2,tiR1,tiR2,info1,info2,hobby,work,work1,work2,work3]
  for ( i = 0; i < visible.length; i++) {
    visible[i].style.opacity = '1';
  }
  face.style.transform = 'translateY(0)';
  nameLeft.style.transform = 'translateX(26px)';
  nameRight.style.transform = 'translateX(-27px)';
  job1.style.transform = 'translateX(0px)';
  job3.style.transform = 'translateX(14px)';
  edu1.style.transform = 'rotateX(0)';
  edu2.style.transform = 'translateY(-21px) rotateX(0)';
  edu3.style.transform = 'translateY(-42px) rotateX(0)';
  setTimeout(function() {
    edu2.style.transition = 'linear 0.5s';
    edu3.style.transition = 'linear 0.5s';
    edu2.style.transform  = 'translateY(0px) rotateX(0)';
    edu3.style.transform  = 'translateY(0px) rotateX(0)';
  }, 3700 );
  windMill.style.transform = 'translateX(0) rotate(0)';
  info1.style.transform = 'rotateX(0) rotate(-45deg) translate(-1px, -1px)';
  info2.style.transform   = 'rotateY(0) rotate(-45deg) translate(141px, -1px)';
  triangle1.style.transform = 'rotate(-18.5deg)';
  triangle2.style.transform = 'rotate(-71.8deg)';
  triangle3.style.transform = 'rotate(-125.1deg)';
  triangle4.style.transform = 'rotate(-161.7deg)';
  for ( let i = 0; i < icons.length; i++) {
    icons[i].style.opacity = '1';
  }
};
