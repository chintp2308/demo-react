// import React from "react";

// class DisplayInfor extends React.Component {
//   state = {
//     isShowListUser: true,
//   };

//   handleShowHide = () => {
//     this.setState({
//       isShowListUser: !this.state.isShowListUser,
//     });
//   };

//   render() {
//     //destructuring array/object
//     const { listUser } = this.props;
//     //props => viết tắt properties
//     return (
//       <div>
//         <div>
//           <span
//             onClick={() => {
//               this.handleShowHide();
//             }}
//           >
//             Hide list user
//             {
//               (this.state.isShowListUser = true
//                 ? " Hide list user"
//                 : "Show list user")
//             }
//           </span>
//         </div>
//         {this.state.isShowListUser && (
//           <div>
//             {listUser.map((user, index) => {
//               console.log("check user", user);
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default DisplayInfor;

import React from "react";
class DisplayInfor extends React.Component {
  state = {
    showHide: true,
  };
  handleShowHide = () => {
    this.setState({
      showHide: !this.state.showHide,
    });
  };
  render() {
    const { listUser } = this.props;
    return (
      <div>
        <span
          onClick={() => {
            this.handleShowHide();
          }}
        >
          {this.state.showHide === true ? "Hide" : "Show"}
          {this.state.showHide && (
            <div>
              {listUser.map((user, index) => {
                return (
                  <div key="id" className={+user.age > 18 ? "green" : "red"}>
                    <div>My name's {user.name}</div>
                    <div>My name's {user.age}</div>
                    <hr />
                  </div>
                );
              })}
            </div>
          )}
        </span>
      </div>
    );
  }
}
export default DisplayInfor;
