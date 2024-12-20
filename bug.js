const query = query(collection(db, 'users'), where('uid', '==', 'someUid'));

const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // This callback is invoked even if the document doesn't exist,
    // resulting in unexpected behavior when a document is deleted.
    console.log(doc.data());
  });
});