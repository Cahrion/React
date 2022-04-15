// rcc
import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from "reactstrap"; // let call the function

export default class CategoryList extends Component {
  render() {
    return (
      <div>
          <h3>Category List</h3>
          <ListGroup>  {/* List structure ==> ul */}
            <ListGroupItem>Cras justo odio</ListGroupItem>          {/* List structure ==> li */}
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>  {/* List structure ==> li */}
            <ListGroupItem>Morbi leo risus</ListGroupItem>          {/* List structure ==> li */}
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>  {/* List structure ==> li */}
            <ListGroupItem>Vestibulum at eros</ListGroupItem>       {/* List structure ==> li */}
          </ListGroup>
      </div>
    )
}
}
