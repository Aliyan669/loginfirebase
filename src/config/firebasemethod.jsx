import app from "./firebaseconfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, onValue ,push } from "firebase/database";
const auth = getAuth(app);

const database = getDatabase(app);

let signUpUser = (obj) => {
  let { email, password, userName, contact } = obj;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // user successfully registered in authntication////
        const user = userCredential.user;
        const reference = ref(database, `Admin/${user.uid}`);
        obj.id = user.uid;
        set(reference, obj)
          .then(() => {
            resolve("User Created Successfully and send to database");
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
};
let loginUser = (obj) => {
  let { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        const refernce = ref(database, `users/${user.uid}`);

        onValue(refernce, (data) => {
          // console.log (data.val());
          let status = data.exists();
          console.log(status);
          if (status) {
            resolve(data.val());
          } else {
            reject("Data Not Found");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        reject(errorMessage);
      });
  });
};
let checkUser = () => {
  // const user = auth.currentUser; 
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user)
        const uid = user.uid ;
        resolve(uid);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // ...
      } else {
        // console.log("No user")
        reject("user is not login..");

        // No user is signed in.
      }
    });
  });
};
  let sendData = (obj ,nodeName ,id) =>{  
  let postListRef ;

  return new Promise((resolve,reject)=>{
    if (id){                           
      postListRef = ref(database, `${nodeName} /${id}`);
    }else{
  
      let addRef = ref (database ,nodeName); 
  
      obj.id = push(addRef).key ;
  
      postListRef = ref(database, ` ${nodeName}/${obj.id}`);
    }
  set(postListRef,obj)
  .then((res)=>{
    resolve(`Data send Successfull ${nodeName}/${obj.id}`); 
  })
  .catch((err)=>{
    reject(err)
  })
  })
}
 let getData = (nodeName, id) => {
  let refernece = ref(database, `${nodeName}/${id ? id : ""}`);
  
  return new Promise((resolve, reject) => {
    onValue(refernece,
      (snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          // resolve(data)
          if (id) {
            resolve(data)
          } else {
            let arr = Object.values(data)
            resolve(arr)
          }
        } else {
          reject("No Data Found")
        }
      }, {
      onlyOnce: false
    }
    );
  });
};
// let getData = (nodeName) => {
  
//   return new Promise((resolve, reject) => {

//     const starCountRef = ref(database, `${nodeName}/`);

//     onValue(starCountRef, (snapshot) => {

//       // const data = Object.values(snapshot.val());

//      resolve(snapshot.val())

//     })
//   })
// }

export { signUpUser, loginUser, checkUser , sendData ,getData };
