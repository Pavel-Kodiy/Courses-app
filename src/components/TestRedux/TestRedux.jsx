import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable prettier/prettier */
const TestRedux = () => {

   const dispatch = useDispatch();
   const cash = useSelector(state => state.cash.cash);
   console.log(cash)

   const addCash = (cash) => {
      dispatch({ type: 'ADD_CASH', payload: cash })
   }

   const getCash = (cash) => {
      dispatch({ type: 'GET_CASH', payload: cash })
   }

   return (
      <div>
         <div style={{ color: 'black' }}>{cash}</div>
         <button style={{ marginRight: '40px' }} onClick={() => addCash(Number(prompt()))}>Add sum</button>
         <button onClick={() => getCash(Number(prompt()))}>Remove sum</button>
      </div>
   );
};

export default TestRedux;
