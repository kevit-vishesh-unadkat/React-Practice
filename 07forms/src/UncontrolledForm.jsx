// uncontrolled components

import { useRef } from "react";

function UncontrolledForm() {
    const nameRef = useRef(null);

    function handleSubmit(event) {
        event.preventDefault();

        console.log(nameRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your name"
                ref={nameRef}
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm;