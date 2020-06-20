/**
 * Responsibilities of this file...
 *
 * We need background JS to contain the listeners that will then trigger our events.
 * So we'll need an event for gathering all of data from RMP.
 * We will also need some event for triggering manipulating the DOM to add in the RMP scores for profs names we find on the page
 *
 *
 */

/*
{
  "tDept": "History",
  "tSid": "1488",
  "institution_name": "University of Victoria",
  "tFname": "David",
  "tMiddlename": "",
  "tLname": "Zimmerman",
  "tid": 37985,
  "tNumRatings": 64,
  "rating_class": "average",
  "contentType": "TEACHER",
  "categoryType": "PROFESSOR",
  "overall_rating": "3.3"
}

This data is grabbed via this URL
https://www.ratemyprofessors.com/filter/professor/?&page=<PAGE_NUMBER>&filter=teacherlastname_sort_s+asc&query=*%3A*&queryoption=TEACHER&queryBy=schoolId&sid=1488
There are 20 names displayed per page, so we would need to send a request to each page and pull the data until it runs out


This is an example of the data we get PER PROF
If we want anything extra on top of this, we'd need to query this URL with their tid
https://www.ratemyprofessors.com/ShowRatings.jsp?tid=<tid>


*/

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ color: "#3aa757" }, function () {
    console.log("The color is green.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "developer.chrome.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});
