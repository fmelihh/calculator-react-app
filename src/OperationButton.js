import { ACTIONS } from "./App";

const OperationButton = ({dispatch, operation}) => {
    console.log(dispatch);
    console.log(operation);
    
    return (
        <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})}>
            {operation}
        </button>
    );
};


export default OperationButton;
