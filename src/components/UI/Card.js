import './Card.css';

// This is the reusable wrapper coponent.
// We use props.children to place the child components inside the opening and closing tag of wrapper component.

function Card(props) {
  let classes = "card " + props.className;
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Card;