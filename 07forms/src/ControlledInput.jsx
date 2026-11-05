// Controlled Components

import { useState } from "react";

function ControlledInput() {
    const [username, setUsername] = useState("");

    return (
        <div>
            <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />

            <p>Username: {username}</p>
        </div>
    );
}

export default ControlledInput;