import React, { Component } from "react";
import GridView from "../dataGrid/gridView";
import PlanetInfoModel from "../planetInfoModal/planetInfoModal";
import Ajax from "../../api/ajax";
export const dataArray = [
  {
    id: 1,
    name: "Raheel",
    height: "5.4",
    mass: "70",
    created: "Today",
    edited: "Now",
    planet: "Earth"
  },
  {
    id: 2,
    name: "Ali",
    height: "5.3",
    mass: "55",
    created: "Tomorrow",
    edited: "Now",
    planet: "Mars"
  },
  {
    id: 3,
    name: "Faizan",
    height: "5.2",
    mass: "50",
    created: "Tomorrow",
    edited: "Now",
    planet: "Pluto"
  }
];

export default class PeopleList extends Component {
  state = {
    IsOpen: false,
    planetData: null,
    peopleData: []
  };
  componentWillMount() {
    Ajax.getPeople("https://swapi.co/api/people/").then(response => {
      this.setState({ peopleData: response.results });
    });
  }
  render() {
    return (
      <div>
        <PlanetInfoModel
          modalIsOpen={this.state.IsOpen}
          planetLink={this.state.planetData}
          closeModal={() => {
            this.setState({ IsOpen: false });
          }}
        />
        <div className="mainGrid">
          <GridView
            entity="people"
            onItemClick={e => {
              this.setState({ IsOpen: true, planetData: e.homeworld });
            }}
            rows={this.state.peopleData}
          />
        </div>
      </div>
    );
  }
}
