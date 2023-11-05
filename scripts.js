const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Helper function to find elements by ID and class
const selector = (id, className) => document.querySelector(`#${id} .${className}`);

/**
 * Gets references to the status, reserve, checkout, and checkin elements for a book.
 *
 * @param {string} bookId - The ID of the book.
 * @returns {Object} An object containing references to book elements.
 */

const getBookElements = (bookId) => {
  const book = selector(bookId, "status");
  const reserve = selector(bookId, "reserve");
  const checkout = selector(bookId, "checkout");
  const checkin = selector(bookId, "checkin");

  return { book, reserve, checkout, checkin };
};

// Changed variable names to be more descriptive (reserve, checkout, checkin)
const book1 = getBookElements("book1");
const book2 = getBookElements("book2");
const book3 = getBookElements("book3");

/**
 * Updates the status color for a book based on the STATUS_MAP.
 *
 * @param {Object} book - The book object containing references to book elements.
 * @param {string} status - The status of the book.
 */

const updateStatusColor = (book, status) => {
  const color = STATUS_MAP[status].color;
  book.style.color = color;
};

/**
 * Updates the button status for a book based on the STATUS_MAP.
 *
 * @param {Object} book - The book object containing references to book elements.
 * @param {string} status - The status of the book.
 */

const updateButtonStatus = (book, status) => {
  const { canReserve, canCheckout, canCheckIn } = STATUS_MAP[status];
  // Changed variable names to be more descriptive (reserve, checkout, checkin)
  book.reserve.disabled = !canReserve;
  book.checkout.disabled = !canCheckout;
  book.checkin.disabled = !canCheckIn;
};

// Updates status color and button status for each book
updateStatusColor(book1.book, book1.book.textContent);
updateButtonStatus(book1, book1.book.textContent);

updateStatusColor(book2.book, book2.book.textContent);
updateButtonStatus(book2, book2.book.textContent);

updateStatusColor(book3.book, book3.book.textContent);
updateButtonStatus(book3, book3.book.textContent);

// Additional adjustments
book1.checkin.style.color = ""; 
book2.checkin.style.color = ""; // Changed the color of the buttons in the DOM to the correct colors
book3.checkin.style.color = "";

// Function calls
statusColorController();
buttonController();


//////////////////////////////////////////////////////////////
//This is another way it could have been resolved but ran into too many bugs 


// Function to get elements by class name
// function selector(className) {
//     return document.getElementsByClassName(className);
//   }
  
//   // Update for book1
//   const status1 = selector("status")[0];
//   const reserve1 = selector("reserve")[0];
//   const checkout1 = selector("checkout")[0];
//   const checkin1 = selector("checkin")[0];
  
//   status1.style.color = STATUS_MAP[status1.textContent].color;
//   reserve1.disabled = !STATUS_MAP[status1.textContent].canReserve;
//   checkout1.disabled = !STATUS_MAP[status1.textContent].canCheckout;
//   checkin1.disabled = !STATUS_MAP[status1.textContent].canCheckIn;
  
//   // Update for book2
//   const status2 = selector("status")[1];
//   const reserve2 = selector("reserve")[1];
//   const checkout2 = selector("checkout")[1];
//   const checkin2 = selector("checkin")[1];
  
//   status2.style.color = STATUS_MAP[status2.textContent].color;
//   reserve2.disabled = !STATUS_MAP[status2.textContent].canReserve;
//   checkout2.disabled = !STATUS_MAP[status2.textContent].canCheckout;
//   checkin2.disabled = !STATUS_MAP[status2.textContent].canCheckIn;
  
//   // Update for book3
//   const status3 = selector("status")[2];
//   const reserve3 = selector("reserve")[2];
//   const checkout3 = selector("checkout")[2];
//   const checkin3 = selector("checkin")[2];
  
//   status3.style.color = STATUS_MAP[status3.textContent].color;
//   reserve3.disabled = !STATUS_MAP[status3.textContent].canReserve;
//   checkout3.disabled = !STATUS_MAP[status3.textContent].canCheckout;
//   checkin3.disabled = !STATUS_MAP[status3.textContent].canCheckIn;

//I could also use boolean (IF) to solve this challenge 