

// var GroceryList = (props) => (
// <ul>
//   <GroceryListItem item={props.food[0]}/>
//   <GroceryListItem item={props.food[1]}/>
// </ul>
// );

// const liStyle = {};

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   onItemHover () {
//     console.log('running')
//     liStyle = {font-weight: bold}
//   }
  
//   render () {
//     return (
//       <li onHover={onItemHover} /*style={liStyle}>*/ {this.props.item} </li>
//     );
//   }
// }

// ReactDOM.render(<GroceryList food={['apples', 'oranges']}/>, document.getElementById('app'));



// CLASSES WORK
// var GroceryList = (props) => (
//   <ul>
//     <GroceryListItem item={props.food[0]} />
//     <GroceryListItem item={props.food[1]} />
//   </ul>
// );

// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return(
//       <li>{this.props.item}</li>  
//     );
//   }
// }

// ReactDOM.render(<GroceryList food={['apples', 'oranges']}/>, document.getElementById('app'));



// TRYING TO GET CLICK HANDLER TO WORK
var GroceryList = (props) => (
  <ul>
    <GroceryListItem item={props.food[0]} />
    <GroceryListItem item={props.food[1]} />
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.liStyle = {};
    this.state = {clicked: false};
  }
  
  clickHandler() {
    this.setState({clicked: !this.state.clicked});
  }
  
  render() {
    let style = {fontWeight: this.state.clicked ? 'bold' : 'normal'};
    return(
      <li onClick={this.clickHandler.bind(this)} style={style}>{this.props.item}</li>  
    );
  }
}

ReactDOM.render(<GroceryList food={['apples', 'oranges']}/>, document.getElementById('app'));

