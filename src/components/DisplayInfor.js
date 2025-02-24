import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "../logo.svg";

//stateless(ko có state) vs stateful(có state)
// class DisplayInfor extends React.Component {
//   //Component = Template JSX (HTML) + Logic Javascript
//   render() {
//     const { listUser } = this.props;
//     return (
//       <div className="display-infor-container">
//         {true && (
//           <div>
//             {listUser.map((user, index) => {
//               return (
//                 <div key="id" className={+user.age > 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name's {user.name}</div>
//                     <div>My age's {user.age}</div>
//                   </div>

//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser } = props;
  console.log(listUser);

  const [isShowHideListUser, setShowHideListUser] = useState(true);
  //Destructuring assignment
  // this.state = {
  //   isShowHideListUser : true
  // }
  const handleShowHideListUser = () => {
    // this.setState({
    //   isShowHideListUser: true,
    // });

    setShowHideListUser(!isShowHideListUser);
  };

  console.log(">>>call me render");
  //giống componentDidMount, componentDidUpdate
  useEffect(() => {
    if (listUser.length === 0) {
      alert("You deleted all the users!");
    }
    console.log(">>> call me useEffect");
  }, [listUser]);

  return (
    <div className="display-infor-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, index) => {
              return (
                <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                  <div>
                    <div>My name's {user.name}</div>
                    <div>My age's {user.age}</div>
                  </div>

                  <div>
                    <button onClick={() => props.handleDeleteUser(user.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default DisplayInfor;
