const NavLink = (
    {
        text,
        href,
        classNames
    }
)=>{
    return (
        <li>
            <a href={href} className={["navlink", ...classNames].join(' ')} >
                {text}
            </a>
        </li>
    );
};

export default NavLink;