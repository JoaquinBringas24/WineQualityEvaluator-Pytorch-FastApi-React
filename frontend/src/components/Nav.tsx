import React from "react";

export default function Nav() {
    return (
        <nav className="bg-zinc-950">
            <ul className="flex justify-center text-white">
                <a className="m-4" href="#">
                    <li>Home</li>
                </a>
                <a className="m-4" href="#">
                    <li>Prediction</li>
                </a>
                <a className="m-4" href="#">
                    <li>Wine</li>
                </a>
                <a className="m-4" href="#">
                    <li>About</li>
                </a>
            </ul>
        </nav>
)
}