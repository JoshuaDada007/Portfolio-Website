import {useRef, useEffect} from "react";

export function LoginHelper() {
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            headerRef.current.classList.add("typing");
        }
        return () => {
            if (headerRef.current) {
                headerRef.current.classList.remove("typing");
            }
        }
    }, [])


    return (
        <>

        </>
    )
}