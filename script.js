window.onload = function () {
  function byId(id) {
    return document.getElementById(id);
  }
  var face      = byId('c-1-face');
  var nameLeft  = byId('c-1-name1');
  var nameRight = byId('c-1-name2');
  var job1      = byId('job-1');
  var job2      = byId('job-2');
  var job3      = byId('job-3');
  var edu       = byId('education');
  var edu1      = byId('c-4-left-container1');
  var edu2      = byId('c-4-left-container2');
  var edu3      = byId('c-4-left-container3');
  var skill     = byId('skills');
  var windMill  = byId('c-4-right-1');
  var exp       = byId('experience');
  var exp1      = byId('c-4-right-3-first');
  var exp2      = byId('c-4-right-3-second');
  var exp3      = byId('c-4-right-3-third');
  var yearCL    = byId('c-4-right-3-first-date');
  var yearCR    = byId('c-4-right-3-third-date');
  var yearL1    = byId('year-l-1');
  var yearL2    = byId('year-l-2');
  var yearR1    = byId('year-r-1');
  var yearR2    = byId('year-r-2');
  var tiL1      = byId('c-4-title-left-1');
  var tiL2      = byId('c-4-title-left-2');
  var tiR1      = byId('c-4-title-right-1');
  var tiR2      = byId('c-4-title-right-2');
  var info1     = byId('c-4-right-3-third-info1');
  var info2     = byId('c-4-right-3-third-info2');
  var hobby     = byId('hobby');
  var triangle1 = byId('triangle1');
  var triangle2 = byId('triangle2');
  var triangle3 = byId('triangle3');
  var triangle4 = byId('triangle4');
  var work      = byId('work');
  var work1     = byId('work-1');
  var work2     = byId('work-2');
  var work3     = byId('work-3');
  var icons     = document.querySelectorAll('.icon');
  var visible   = [face,nameLeft,nameRight,job1,job2,job3,edu,edu1,edu2,edu3,
    skill,windMill,exp,exp1,exp2,exp3,yearCL,yearCR,yearL1,yearL2,yearR1,yearR2,
    tiL1,tiL2,tiR1,tiR2,info1,info2,hobby,work,work1,work2,work3]
  for ( i = 0; i < visible.length; i++) {
    visible[i].style.opacity = '1';
  }
  function sT(e, t) {
    return e.style.transform = t;
  }
  sT(face,      'translateX(0)');
  sT(nameLeft,  'translateX(26px)');
  sT(nameRight, 'translateX(-27px)');
  sT(job1,      'translateX(0)');
  sT(job3,      'translateX(14px)');
  edu1.style.transform      = 'rotateX(0)';
  edu2.style.transform      = 'translateY(-21px) rotateX(0)';
  edu3.style.transform      = 'translateY(-42px) rotateX(0)';
  setTimeout(function() {
    edu2.style.transition   = 'linear 0.5s';
    edu3.style.transition   = 'linear 0.5s';
    edu2.style.transform    = 'translateY(0px) rotateX(0)';
    edu3.style.transform    = 'translateY(0px) rotateX(0)';
  }, 3700 );
  windMill.style.transform  = 'translateX(0) rotate(0)';
  info1.style.transform     = 'rotateX(0) rotate(-45deg) translate(-1px, -1px)';
  info2.style.transform     = 'rotateY(0) rotate(-45deg) translate(141px, -1px)';
  triangle1.style.transform = 'rotate(-18.5deg)';
  triangle2.style.transform = 'rotate(-71.8deg)';
  triangle3.style.transform = 'rotate(-125.1deg)';
  triangle4.style.transform = 'rotate(-161.7deg)';



  for ( let i = 0; i < icons.length; i++) {
    icons[i].style.opacity = '1';
  }
};
