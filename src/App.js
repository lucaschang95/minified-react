import React, { useEffect, useState, useCallback } from 'react';
const Child = (props) => {
    console.log('child render');
    return <>{props.count}</>;
};

function App() {
    const [count, setCount] = useState(0);

    const add = () => {
        debugger;
        setCount((c) => c);
    };

    return (
        <>
            <button onClick={add}>+1</button>
            <Child count={count} />
        </>
    );
}

export default App;
