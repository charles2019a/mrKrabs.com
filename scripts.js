function success() {
  Swal.fire(
    'Success!',
    'Thank you for your submission!',
    'success'
  )
}

let censored = "true";

function toggleSWF() {
  if (document.getElementById('switch').checked) {
    censored = false;
    document.getElementById('NSFW').style.color = "#ff3b3b"
    document.getElementById('SFW').style.color = "#ffff"
  } else {
    censored = true;
    document.getElementById('SFW').style.color = "#2196F3"
    document.getElementById('NSFW').style.color = "#ffff"
  }
}

function hoverEffect() {
  if (censored) {
    document.getElementById('censorBar').style.display = "block";
  } else {
    document.getElementById('censorBar').style.display = "none";
  }
}

function unhover() {
  document.getElementById('censorBar').style.display = "none";
}



function hoverEffectP() {
  let patrick = document.getElementById('patrickImagePhone');
  if (censored) {
    patrick.src = "Images/patrickHoverSWF.webp";
  } else {
    patrick.src = "Images/patrickHover.webp";
  }

  patrick.style.width = "201px";
  patrick.style.marginLeft = "-18%";
  patrick.style.marginTop = "-17.5%";



}

function unhoverP() {
  let patrick = document.getElementById('patrickImagePhone');

  patrick.src = "Images/patrick.webp";
  patrick.style.width = "100px";
  patrick.style.margin = "0";
}