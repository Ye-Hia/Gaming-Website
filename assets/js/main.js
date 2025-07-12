// Get the header container element
const headerContainer = document.querySelector('.header-container');
// Create the footer HTML as a string
const headerContent = `
            <header class="header" id="header">
            <!-- Left Section -->
             <div class="logo-container">
                <a href="">
                    <div class="logo-img-contianer" id="logo-img-contianer"><i class="fa-brands fa-gitkraken"></i></div>
                    <h1 class="header-title">Gaming Website</h1>
                </a>
             </div>
            <!-- Center Section -->
             <nav class="nav" aria-label="Main navigation" id="main-nav">
                <ul class="links">
                    <li>
                        <a href="/"><!-- <i class="fa-solid fa-house"></i> -->Home</a>
                    </li>
                    <li>
                        <a href="shop.html"><!-- <i class="fa-solid fa-bag-shopping"></i> -->Shop</a>
                    </li>
                    <li>
                        <a href="details.html"><!-- <i class="fa-brands fa-product-hunt"></i> -->Product Details</a>
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <!-- Right Section -->
            <form id="search" action="#">
                <div class="search-box">
                    <input class="search-input"type="text" name="" placeholder="Search">
                    <button class="serach-btn"><i class="fa-brands fa-searchengin"></i></button>
                </div>
            </form>
            <button class="login-btn btns" id="login-btn"><i class="fa-solid fa-right-to-bracket"></i>Login</button>
            <button class="sign-up-btn btns" id="sign-up-btn"><i class="fa-solid fa-user-plus"></i>Sign Up</button>
        </header>
`;
// Append the header content to the header container
headerContainer.innerHTML = headerContent;

const footerHTML = `
<div class="footer-container">
    <!-- Social Links -->
    <ul class="social-links">
        <li class="social-item">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f social-icon"></i>
            </a>
        </li>
        <li class="social-item">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter social-icon"></i>
            </a>
        </li>
        <li class="social-item">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram social-icon"></i>
            </a>
        </li>
        <li class="social-item">
            <a href="/contact">
                <i class="fas fa-envelope social-icon"></i>
            </a>
        </li>
    </ul>
    <!-- Copyright Text -->
    <p class="copyright">
    <i class="fa-solid fa-copyright"></i> 
    2025 Gaming Website. All rights reserved. | Built by gamers, 
    for gamers - the ultimate showcase platform.
    </p>
</div>
`;
// Get the footer element and append the HTML
document.querySelector('footer.site-footer').innerHTML = footerHTML;

const authModal = `
`;
// document.querySelector('.auth-container').innerHTML = authModal;
