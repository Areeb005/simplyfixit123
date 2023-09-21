import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    setDoc,
    doc,
    updateDoc,
    deleteDoc,
    getCountFromServer
} from 'firebase/firestore'
import {
    fs,
    fbStorage,
    auth
} from './index'



export async function addEvent(data) {
    data.timestamp = Date.now();
    data.id = await count('event');
    const docRef = await addDoc(collection(fs, "event"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}

export function getEvent() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "event"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export function getSingleEvent(id) {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "event"), where('_id', '==', id))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}


export function editEvent(myData) {
    return new Promise((resolve, reject) => {
        const myDocRef = doc(fs, "event", myData._id);
        updateDoc(myDocRef, myData)
            .then(() => {
                resolve('ok');
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    })
}

export async function deleteEvent(id) {
    return await deleteDoc(doc(fs, "event", id))
        .then(data => {
            console.log(data);
            return true
        })
        .catch(() => {
            return false
        })
}

export async function addReview(data) {
    data.timestamp = Date.now();
    const docRef = await addDoc(collection(fs, "review"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}

export function getReview() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "review"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export function editReview(myData) {
    return new Promise((resolve, reject) => {
        const myDocRef = doc(fs, "review", myData._id);
        updateDoc(myDocRef, myData)
            .then(() => {
                resolve('ok');
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    })
}

export async function deleteReview(id) {
    return await deleteDoc(doc(fs, "review", id))
        .then(data => {
            console.log(data);
            return true
        })
        .catch(() => {
            return false
        })
}

export function getSingleReview(id) {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "review"), where('_id', '==', id))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export function getSingleUser(email) {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "user"), where('email', '==', email))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}


async function count(collectionName) {
    const coll = collection(fs, collectionName);
    const snapshot = await getCountFromServer(coll);

    return snapshot.data().count
}




export async function addEmail(data) {
    data.timestamp = Date.now();
    const docRef = await addDoc(collection(fs, "email"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}


export function getEmail() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "email"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export async function deleteEmail(id) {
    return await deleteDoc(doc(fs, "email", id))
        .then(data => {
            console.log(data);
            return true
        })
        .catch(() => {
            return false
        })
}





export async function addOrders(data) {
    data.timestamp = Date.now();
    data.id = await count('orders');
    const docRef = await addDoc(collection(fs, "orders"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}

export function getOrders() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "orders"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export function getSingleOrders(id) {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "orders"), where('_id', '==', id))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export function editOrders(myData) {
    return new Promise((resolve, reject) => {
        const myDocRef = doc(fs, "orders", myData._id);
        updateDoc(myDocRef, myData)
            .then(() => {
                resolve('ok');
                console.log("Document successfully updated!");
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    })
}

export async function deleteOrders(id) {
    return await deleteDoc(doc(fs, "orders", id))
        .then(data => {
            console.log(data);
            return true
        })
        .catch(() => {
            return false
        })
}

//Areeb Addition for getting Calendar date

export function getSingleCalendar(date) {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "calendar"), where('date', '==', date))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

export async function addCalendar(data) {
    data.timestamp = Date.now();
    data.id = await count('calendar');
    const docRef = await addDoc(collection(fs, "calendar"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}

export function getCalendar() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "calendar"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}

// export function editCalendar(myData) {
//     return new Promise((resolve, reject) => {
//         const c = query(collection(fs, "calendar"), where('date', '==', myData.date))
//         getDocs(c)
//             .then(querySnapshot => {
//                 let _date = [];
//                 querySnapshot.forEach(doc => {
//                     _date.push(doc.data())
//                 })
//                 console.log("date before",_date);

//                 for (const slot of _date[0].slots) {
//                     if (slot.time === myData.Time_Slot) {
//                         slot.bookes = true;
//                         break; // Exit the loop once the update is done
//                     }
//                 }

//                 const myDocRef = doc(fs, "calendar", _date[0]._id);
//                 updateDoc(myDocRef, _date[0])
//                     .then(() => {
//                         resolve('ok');
//                         console.log("Document successfully updated!");
//                     })
//                     .catch((error) => {
//                         // The document probably doesn't exist.
//                         console.error("Error updating document: ", error);
//                         reject(error)
//                     });

//                 resolve(_date);
//             })
//             .catch(e => {
//                 console.log(e);
//                 reject(e)
//             })

//     })
// }






export async function addInstantQuoteData(data) {
    data.timestamp = Date.now();
    data.id = await count('instant_quote_data');
    const docRef = await addDoc(collection(fs, "instant_quote_data"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}


export function getInstantQuoteData() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "instant_quote_data"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}



export async function addRateUsData(data) {
    data.timestamp = Date.now();
    data.id = await count('rate_us_data');
    const docRef = await addDoc(collection(fs, "rate_us_data"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}


export function getRateUsData() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "rate_us_data"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}



export async function addContactUsData(data) {
    data.timestamp = Date.now();
    data.id = await count('contact_us_data');
    const docRef = await addDoc(collection(fs, "contact_us_data"), data)
    console.log("Document written: ", docRef);
    console.log("Document id: ", docRef.id);

    await updateDoc(docRef, {
        _id: docRef.id
    });
}


export function getContactUsData() {
    return new Promise((resolve, reject) => {
        const q = query(collection(fs, "contact_us_data"))
        getDocs(q)
            .then(querySnapshot => {
                let business = [];
                querySnapshot.forEach(doc => {
                    business.push(doc.data())
                })
                resolve(business);
            })
            .catch(e => {
                console.log(e);
                reject(e)
            })
    })
}