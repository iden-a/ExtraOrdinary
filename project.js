
// JS for shopping cart
function renderCart(items) {
			const $cart = document.querySelector(".cart")
			const $total = document.querySelector(".total")

			$cart.innerHTML = items.map((item) => `
					<tr>
						<td>#${item.id}</td>
						<td>${item.name}</td>
						<td>${item.quantity}</td>
						<td style="width: 60px;">	
							<button type="button" class=""
								onClick="cartLS.quantity(${item.id},1)">+</button>
						</td>
						<td style="width: 60px;">	
							<button type="button" class=""
								onClick="cartLS.quantity(${item.id},-1)">-</button>
						</td>
						<td class="text-right">$${item.price}</td>
						<td class="text-right"><Button class="" onClick="cartLS.remove(${item.id})">Delete</Button></td>
					</tr>`).join("")

			$total.innerHTML = "$" + cartLS.total()
		}
		renderCart(cartLS.list())
		cartLS.onChange(renderCart)


// Image One
// JS for making images change when hovering
const hoverImage = new Image();
hoverImage.src = "homeImages/image1-hover.jpeg";

// Get the image element
const myImage = document.getElementById("myImage");

// Change the image source on hover
myImage.addEventListener("mouseover", function () {
  myImage.src = "homeImages/image1-hover.jpeg";
});

// Change back to the original image on mouseout
myImage.addEventListener("mouseout", function () {
  myImage.src = "homeImages/d.jpeg";
});




// CODE FOR THE SECOND IMAGE
const hoverImage2 = new Image();
hoverImage2.src = "homeImages/image2-hover.jpeg";

// Get the image element
const myImage2 = document.getElementById("myImage2");

// Change the image source on hover
myImage2.addEventListener("mouseover", function () {
  myImage2.src = "homeImages/image3-hover.jpeg";
});

// Change back to the original image on mouseout
myImage2.addEventListener("mouseout", function () {
  myImage2.src = "homeImages/f.jpeg";
});





// CODE FOR THE THIRD IMAGE
const hoverImage3 = new Image();
hoverImage3.src = "homeImages/skin1.jpeg";

// Get the image element
const myImage3 = document.getElementById("myImage3");

// Change the image source on hover
myImage3.addEventListener("mouseover", function () {
  myImage3.src = "homeImages/skin1.jpeg";
});

// Change back to the original image on mouseout
myImage3.addEventListener("mouseout", function () {
  myImage3.src = "homeImages/b.jpeg";
});


// Blog function 
function blogAlert () {
	const blogForm = document.getElementById("blogForm");
	// const blogSubmit = blogForm.querySelector("button[type='submit']");

// adding an eventlistener, when the user clicks the submit button the alert pops up.
	blogForm.addEventListener('submit', function(event) {
		// eventPreventDefault is used to prevent the page from loading
		event.preventDefault()
		alert("Thank you for subscribing to our Newsletter!")
	})
}