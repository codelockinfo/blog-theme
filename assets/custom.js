$(window).resize(function(){
  headerChange();
})

function headerChange(){
  let $header = $('.header-wrapper')
  if($(window).width() <= 768 && $header.hasClass('overlay--active')){
    $header.removeClass('header-wrapper--overlay');
    $header.removeClass('overlay--active')
  }else if($(window).width() > 768 && !$header.hasClass('overlay--active')){
    $header.addClass('header-wrapper--overlay');
    $header.addClass('overlay--active')
  }
}

$(document).ready(function(){
  headerChange();
})

//append checklist on widget load
BOLD.common.eventEmitter.on("BOLD_RECURRING_ORDERS_widget_loaded", function () {
  let checkSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>`
  let checklistTemplate = "";
  let oneTimeChecklistTemplate = "";
  console.log(subscription,onetime);
  if(subscription == ""){
   checklistTemplate = 
    `<ul class="product-subscription-checklist">
      <li>${checkSVG} <span>10% off every order</span></li>
      <li>${checkSVG} <span>Special VIP offers</span></li>
      <li>${checkSVG} <span>Pause, skip or cancel anytime</span></li>
      <li>${checkSVG} <span>Delivery right to your door</span></li>
    </ul>`;
  }else{
      checklistTemplate += `<ul class="product-subscription-checklist">`;
      subscription.split(",").forEach((data) => {
         checklistTemplate += `<li>${checkSVG} <span>${data}</span></li>`
      })
    checklistTemplate += `</ul>`;
  }  

  if(onetime == ""){
   oneTimeChecklistTemplate = `<ul class="product-subscription-checklist">
      <li>${checkSVG} <span>Plant-based electrolytes</span></li>
      <li>${checkSVG} <span>Clean ingredients-- nothing artificial</span></li>
      <li>${checkSVG} <span>Hydrates & nourishes</span></li>
      <li>${checkSVG} <span>Certified organic</span></li>
    </ul>`;
  }else{
      oneTimeChecklistTemplate += `<ul class="product-subscription-checklist">`;
      onetime.split(",").forEach((data) => {
         oneTimeChecklistTemplate += `<li>${checkSVG} <span>${data}</span></li>`
      })
    oneTimeChecklistTemplate += `</ul>`;
  }
  $('.bold-ro__radio-div.bold-ro__recurring-div').append($(checklistTemplate));
  $('.bold-ro__radio-div.bold-ro__one-time-div').append($(oneTimeChecklistTemplate));
  console.log('hey')
});


