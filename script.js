// GOVIND BORWELL JAVASCRIPT 

document.addEventListener("DOMContentLoaded", function(){ 
    // 1. Navbar shrink effect on scroll 
    window.addEventListener('scroll', function() { 
        if (window.scrollY > 50) { 
            document.querySelector('.navbar').classList.add('shadow-lg'); 
        } else { 
            document.querySelector('.navbar').classList.remove('shadow-lg'); 
        } 
    }); 

    // 2. Form Validation 
    const form = document.querySelector('form'); 
    if(form) { 
        form.addEventListener('submit', function(e) { 
            const phone = document.querySelector('input[name="phone"]').value; 
            if(phone.length < 10) { 
                e.preventDefault(); 
                alert("Please enter a valid 10-digit mobile number."); 
            } 
        }); 
    } 
});