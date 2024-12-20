const query = query(collection(db, 'users'), where('uid', '==', 'someUid'));

const unsubscribe = onSnapshot(query, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    if (doc.exists()) {
      console.log(doc.data());
    } else {
      console.log('Document does not exist');
      // Handle the case where the document is deleted
    }
  });
});