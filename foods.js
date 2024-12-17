const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Toggle hamburger animation
    navLinks.classList.toggle('active'); // Toggle nav-links visibility
});
// Function to search items
function searchItems() {
    // Get the search input
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all the items
    let items = document.querySelectorAll('.item');
    
    // Loop through all items and hide those that don't match the search query
    items.forEach(item => {
        let itemName = item.querySelector('p').textContent.toLowerCase();
        
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block'; // Show matching item
        } else {
            item.style.display = 'none'; // Hide non-matching item
        }
    });
}
//add to cart 
// Initialize the cart array
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        const image=button.getAttribute('data-image')

        // Add item to the cart array
        cart.push({ item, price,image });

        // Save cart data to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${item} has been added to the cart.`);
        console.log("Current Cart:", cart);

        // Navigate to the cart page
        window.location.href = "cart.html";
    });
});
        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', () => {
                const item = button.getAttribute('data-item');
                const price = button.getAttribute('data-price');
                const image=button.getAttribute('data-image')
                const confirmBuy = confirm(`Do you want to buy ${item} for Rs.${price}?`);
                if (confirmBuy) {
                    alert(`You have purchased ${item}. Thank you!`);
                    console.log(`Purchased: ${item}`);
                  
                }
            });
        });