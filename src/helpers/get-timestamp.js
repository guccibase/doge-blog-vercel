import firebase from "firebase";
import "firebase/firestore";

export default () => firebase.firestore.FieldValue.serverTimestamp();
