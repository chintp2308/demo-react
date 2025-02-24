//class component
//function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state = {
//     listUser: [
//       { id: 1, name: "Chi", age: "16" },
//       { id: 2, name: "PC", age: "18" },
//       { id: 3, name: "Phuong Chi", age: "21" },
//     ],
//   };

//   handleAddNewUser = (userObj) => {
//     // let listUserNew = this.state.listUser;
//     // listUserNew.unshift(userObj);
//     // this.setState({
//     //   listUser: listUserNew,
//     // });
//     this.setState({
//       listUser: [userObj, ...this.state.listUser],
//     });
//   };
//   handleDeleteUser = (userId) => {
//     let listUserClone = this.state.listUser;
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     this.setState({
//       listUser: listUserClone,
//     });
//   };
//   //JSX
//   render() {
//     //DRY : don't repeat youseft
//     return (
//       <div>
//         <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfor
//           listUser={this.state.listUser}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </div>
//     );
//   }
// }

// const MyComponent = (props) => {
//   // const defaultData = [
//   //   { id: 1, name: "Chi", age: "16" },
//   //   { id: 2, name: "PC", age: "18" },
//   //   { id: 3, name: "Phuong Chi", age: "21" },
//   // ];
//   const [listUser, setListUser] = useState([
//     { id: 1, name: "Chi", age: "16" },
//     { id: 2, name: "PC", age: "18" },
//     { id: 3, name: "Phuong Chi", age: "21" },
//   ]);

//   const handleAddNewUser = (userObj) => {
//     setListUser((prevList) => [...prevList, userObj]);
//   };
//   const handleDeleteUser = (userId) => {
//     let listUserClone = [...listUser]; // Tạo bản sao của listUser
//     listUserClone = listUserClone.filter((item) => item.id !== userId);
//     setListUser(listUserClone); // Cập nhật lại state với mảng mới
//   };

//   return (
//     <div>
//       <AddUserInfor handleAddNewUser={handleAddNewUser} />
//       <br />
//       <br />
//       <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
//     </div>
//   );
// };
const MyComponent = (props) => {
  // const defaultData = [
  //   { id: 1, name: "Chi", age: "16" },
  //   { id: 2, name: "PC", age: "18" },
  //   { id: 3, name: "Phuong Chi", age: "21" },
  // ];
  const [listUser, setListUser] = useState([
    { id: 1, name: "Chi", age: "16" },
    { id: 2, name: "PC", age: "18" },
    { id: 3, name: "Phuong Chi", age: "21" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([...listUser, userObj]);
  };
  const handleDeleteUser = (userId) => {
    let listUserClone = listUser; // Tạo bản sao của listUser
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUser(listUserClone); // Cập nhật lại state với mảng mới
  };

  return (
    <div>
      <AddUserInfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};
export default MyComponent;
