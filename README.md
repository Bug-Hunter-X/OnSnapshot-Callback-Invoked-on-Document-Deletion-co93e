# Firebase onSnapshot Invoked on Document Deletion

This repository demonstrates a common issue with Firebase's `onSnapshot` function.  The callback provided to `onSnapshot` is invoked even when the document matching the query is deleted. This can lead to unexpected behavior in your application if you aren't handling the case where a document no longer exists.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a solution to address this issue.

## Problem
The provided code uses `onSnapshot` to listen for changes in a Firebase collection.  When a document is deleted, the callback still executes, leading to potential errors if your application isn't prepared to handle null or undefined values.

## Solution
The solution involves checking for the existence of the document data within the callback before accessing its properties.  This prevents errors by gracefully handling the case where the document has been removed.

## How to Reproduce
1. Clone this repository.
2. Ensure you have a Firebase project setup.
3. Replace placeholders like database path and UID with your project specific details
4. Run `bug.js` to see the unexpected behavior.
5. Run `bugSolution.js` to observe the corrected behavior.