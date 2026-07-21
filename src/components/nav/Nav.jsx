import NavLink from "./NavLinks";
const Nav = ({
    links
})=>{
    return (
        <nav>
          <ul>
            { (links ?? []).map((o)=> {
                return (<NavLink
                    key={o.text}
                    text={o.text}
                    href={o.href}
                    classNames={o.classNames ?? []} />);
            }) }
          </ul>
        </nav>
    );
}

export default Nav;