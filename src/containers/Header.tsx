import React, {SyntheticEvent, useEffect, useState} from "react";
import SearchBox from "../components/SearchBox";
import * as PropTypes from "prop-types";

type ComponentProps = {
    searchChange(event: SyntheticEvent<HTMLInputElement>): void
}
const Header = ({searchChange}: ComponentProps) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 8);
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", () => handleScroll)
        }
    }, [])

    // console.log('repaint')
    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                textAlign: "center",
                width: "100%",
                height: "200px",
                zIndex: 100,
                boxShadow: scrolled ? "0 4px 4px rgba(0, 0, 0, 0.4)" : "none",
                transition: "all 0.2s ease-out",
            }}>
            <h1 className="f1 center">RoboFriends</h1>
            <SearchBox className={"ml-auto"} searchChange={searchChange}/>
        </header>
    )
};


Header.propTypes = {
    searchChange: PropTypes.func
};

export default React.memo(Header);
