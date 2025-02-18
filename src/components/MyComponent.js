//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Chi", age: "16" },
      { id: 2, name: "PC", age: "18" },
      { id: 3, name: "Phuong Chi", age: "21" },
    ],
  };
  //JSX
  render() {
    //DRY : don't repeat youseft
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}
export default MyComponent;
