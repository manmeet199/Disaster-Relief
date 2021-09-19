import React from "react";
import { getMissingPersonDetail } from "../../../helper/apiCalls";
import { Card } from "../../missing-card/card";

class MissingDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personInfo: [],
    };
  }

  componentDidMount() {
    this.loadMissingPersonInfo();
  }

  loadMissingPersonInfo() {
    getMissingPersonDetail()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          this.setState({ personInfo: data });
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Missing persons Detail</h1>
        {this.state.personInfo.map((info, index) => {
          return (
            <div key={index} className="info-card">
              <Card info={info} />
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MissingDetail;
