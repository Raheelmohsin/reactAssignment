import React, { Component } from "react";
import Modal from "react-modal";

import Ajax from "../../api/ajax";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    height: 300,
    width: 980
  }
};

export default class PlanetInfoModel extends Component {
  state = {
    planetInfo: null
  };
  componentWillReceiveProps(props) {
    if (props.modalIsOpen && props.planetLink) {
      Ajax.getPeople(props.planetLink).then(response => {
        this.setState({ planetInfo: response });
        console.log(response);
      });
    }
  }
  getValidDate(date) {
    const validDate = new Date(date);
    const day = validDate.getDay();
    const month = validDate.getMonth();
    const year = validDate.getFullYear();
    return day + "/" + month + "/" + year;
  }
  render() {
    const { modalIsOpen } = this.props;
    const pInfo = this.state.planetInfo;
    return (
      <div className="">
        <Modal
          style={customStyles}
          className=""
          isOpen={modalIsOpen}
          onRequestClose={() => this.props.closeModal()}
          contentLabel="Example Modal"
        >
          <button className="closeBtn" onClick={() => this.props.closeModal()}>
            close
          </button>
          <div>
            <div>
              <span className="planetLbl">Planet Record </span>
            </div>
            <div style={{ width: "100%" }}>
              <table>
                <thead>
                  <tr>
                    <td width="5%">Climate </td>
                    <td width="5%">Created</td>
                    <td width="5%">Diamete </td>
                    <td width="5%">Edited </td>
                    <td width="5%">Gravity</td>
                    <td width="5%">Name</td>
                    <td width="10%">Orbital Period</td>
                    <td width="10%">Rotation Period </td>
                    <td width="10%">Surface Water </td>
                    <td width="5%">Population </td>
                    <td width="5%">Terrain </td>
                  </tr>
                </thead>
                <tbody>
                  {pInfo && (
                    <tr>
                      <td className="even">{pInfo.climate} </td>
                      <td className="odd">
                        {this.getValidDate(pInfo.created)}{" "}
                      </td>
                      <td className="even"> {pInfo.diameter} </td>
                      <td className="odd">
                        {this.getValidDate(pInfo.edited)}{" "}
                      </td>
                      <td className="even">{pInfo.gravity} </td>
                      <td className="odd">{pInfo.name} </td>
                      <td className="even">{pInfo.orbital_period} </td>
                      <td className="odd">{pInfo.rotation_period} </td>
                      <td className="even">{pInfo.surface_water} </td>
                      <td className="odd">{pInfo.population} </td>
                      <td className="even">{pInfo.terrain} </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/*<div>
                  <label> Climate: </label> {pInfo.climate}
                </div>

                <div>
                  <label> Created: </label> {pInfo.created}
                </div>

                <div>
                  <label> diameter: </label> {pInfo.diameter}
                </div>

                <div>
                  <label> edited: </label> {pInfo.edited}
                </div>

                <div>
                  <label> gravity: </label> {pInfo.gravity}
                </div>

                <div>
                  <label> name: </label> {pInfo.name}
                </div>
                <div>
                  <label> orbital_period: </label> {pInfo.orbital_period}
                </div>
                <div>
                  <label> rotation_period: </label> {pInfo.rotation_period}
                </div>
                <div>
                  <label> surface_water: </label> {pInfo.surface_water}
                </div>
                <div>
                  <label> population: </label> {pInfo.population}
                </div>
                <div>
                  <label> terrain: </label> {pInfo.terrain}
                </div>*/}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
