import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     id: "",
//     name: "",
//     address: "DN",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault(); //Dùng để ngăn chặn reload lại trang

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name: </label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label>Your age: </label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// const AddUserInfor = (props) => {
//   const [dataUser, setDataUser] = useState([
//     {
//       id: "",
//       name: "",
//       address: "DN",
//       age: "",
//     },
//   ]);
//   const handleOnChangeInput = (event) => {
//     setDataUser((prevData) => ({
//       ...prevData, // Giữ lại các thuộc tính trước đó
//       name: event.target.value,
//     }));
//   };
//   const handleOnChangeAge = (event) => {
//     setDataUser((prevData) => ({
//       ...prevData, // Giữ lại các thuộc tính trước đó
//       age: event.target.value,
//     }));
//   };

//   const handleOnSubmit = (event) => {
//     event.preventDefault(); //Dùng để ngăn chặn reload lại trang

//     props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: dataUser.name,
//       age: dataUser.age,
//     });
//     setDataUser({
//       id: "",
//       name: "",
//       address: "DN",
//       age: "",
//     });
//   };
//   return (
//     <div>
//       My name is {dataUser.name} and I'm {dataUser.age}
//       <form onSubmit={(event) => handleOnSubmit(event)}>
//         <label>Your name: </label>
//         <input
//           value={dataUser.name}
//           type="text"
//           onChange={(event) => handleOnChangeInput(event)}
//         />
//         <label>Your age: </label>
//         <input
//           value={dataUser.age}
//           type="text"
//           onChange={(event) => handleOnChangeAge(event)}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };
const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault(); //Dùng để ngăn chặn reload lại trang

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name: </label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your age: </label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
