import React from "react";
import { Content1 } from "../menucontent/Content";
import { Content2 } from "../menucontent/Content";
import { Content3 } from "../menucontent/Content";



export class Menu extends React.Component {
  state = {
    visible1: true,
    visible2: true,
    visible3: true,
  };

  render() {
    return (
      <>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => {
                  this.setState({ visible1: !this.state.visible1 });
                }}>
                laptops
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => {
                  this.setState({ visible2: !this.state.visible2 });
                }}>
                Tabss
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => {
                  this.setState({ visible3: !this.state.visible3 });
                }}>
                Mobiles
              </button>
            </li>
          </ul>
        </nav>

        {this.state.visible1 ? <Content1 /> : null}
        {this.state.visible2 ? <Content2 /> : null}
        {this.state.visible3 ? <Content3 /> : null}
      </>
    );
  }
}