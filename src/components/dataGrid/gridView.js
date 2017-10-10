import React, { Component } from "react";
export default class GridView extends Component {
  render() {
    return (
      <div className="gridWrap">
        <table>
          <thead>
            <tr>
              <td width="20%">Name </td>
              <td width="10%">Height </td>
              <td width="15%">Mass </td>
              <td width="20%">Created </td>
              <td width="20%">Edited </td>
              <td width="15%">Planet </td>
            </tr>
          </thead>
          {this.props.rows.map((people, i) => {
            return (
              <tbody>
                <tr key={"people-" + i}>
                  <td className="even"> {people.name}</td>
                  <td className="odd"> {people.height}</td>
                  <td className="even"> {people.mass} kg</td>
                  <td className="odd"> {people.created}</td>
                  <td className="even"> {people.edited}</td>
                  <td
                    className="odd"
                    onClick={() => this.props.onItemClick(people)}
                  >
                    <span>
                      <img
                        width="30"
                        height="30"
                        src={require("../../resources/images/planet.png")}
                      />{" "}
                    </span>
                    {people.planet}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}
