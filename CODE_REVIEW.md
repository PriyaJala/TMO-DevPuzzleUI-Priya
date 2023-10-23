Code Review:

This is a wonderful application built by the team. It is very clear and understanding the flow on running the app.

There are few code smells and modifications i found in the app include:

 
 * To enhance the quality and maintainability of the NgRx actions, it is always a good practice to define the action types as constants as the action names are consistent through out the application.( eg., in books.action.ts)

 *  When trying to enter the text on "Search for books", there can be an auto suggession implemented like list of topics to search for the books. (Example: Text: "Ja" should suggest the values like "Java, Javascript..." etc.,).

 *  After searching for the books, in the result, it is good to show the books that are yet to read than that are already added to reading list coming first. No sorting been implemented.

 *  There can be pagination implemented as the number of books increases, it takes too long to read all the books in a single page.

   There is small error found in the app:
   Steps: 
   i.    Click on "Javascript" link in home page.
   ii.   Go the back navigation of the page, at the place of Url.
   iii.  Come back again to the same pageby clicking forward arrow, in the current page of okreads, you find the same javascript being displayed overlapping on the placeholder of the search item.

 3. Accessibility issues using Lighthouse:
    * Buttons do not have an accessible name (i.e., For Search button in homepage)
    * Background and foreground colors do not have a sufficient contrast ratio


 Issues found during Manual testing:

    *  In most of the apps, usually there is a click functionality for the header like on "okreads" which redirects to the home screen.

    * There should be a cancel button in place of search after the user searches for a book.

   *  In the "Reading List", recently added book should be displayed on top for better accesibility of the book.





 


