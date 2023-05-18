import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'
// React component is the combination of HTML(in the form of JSX), Javascript and sometimes css 

function ExpenseItem(props) {
  const description = props.title;
  const price = props.price.toFixed(2);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{description}</h2>
        <div className="expense-item__price">₹{price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;