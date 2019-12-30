import Vue from 'vue';

function update(el, bindings, vn)
{
  let max = bindings.value;
  let but = document.getElementById(el.buttonId);

  if (!but)
  {
    setTimeout(() => {update(el, bindings, vn);}, 100);
    return;
  }

  // Move button to the end of the parent element so it stays at the end of
  // the items list in case any new items were added
  but.parentNode.appendChild(but);

  // Hide all elements over max value
  if (vn.children.length - 1 > max && !el.showAll)
  {
    for (let x = max; x < el.children.length; ++x)      
      el.children[x].style.setProperty("display", "none");
    
    but.innerHTML = `+${vn.children.length - max}`;
    but.style.setProperty("display", ""); 
  }
  else
  {
    for (let x = 0; x < el.children.length; ++x)
      el.children[x].style.setProperty("display", "");

    but.style.setProperty("display", "none", "important");
  }
};

const MaxItems = {
  
  bind(el, bindings, vn)
  {    
    el.buttonId = "but" + Math.floor(new Date().valueOf() * Math.random());
    el.showAll = false;    

    let but = document.createElement("button");

    but.setAttribute("id", el.buttonId);
    but.innerHTML = el.buttonId;
    but.className = "v-max-items";
    but.style.setProperty("display", "none", "important");
    but.addEventListener("click", function()
    {
      el.showAll = true;
      update(el, bindings, vn);
    })
    
    el.appendChild(but);
  },
  componentUpdated(el, bindings, vn) 
  {
    update(el, bindings, vn);
  }
};

Vue.directive('max-items', MaxItems);
