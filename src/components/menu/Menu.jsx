import "./menu.scss"

//:Todo: add the on click for the list items

function menu({menuOpen,setMenuOpen}) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
        <ul>
            <li >
                <a href="#intro">Home</a>
            </li>

            <li>
                <a href="#protfolio">Protfolio</a>
            </li>

            <li>
                <a href="#works">Works</a>
            </li>

            <li>
                <a href="#testimonial">Testimonials</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default menu