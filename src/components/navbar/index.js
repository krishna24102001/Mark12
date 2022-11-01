import "./style.css"
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
  return (
    <nav>
        <h1 id="left">fun with triangles</h1>
        <div id="right"> 
        <ul>
            <li onClick={()=>navigate("/")}>is TriAngle ?</li>
            <li onClick={()=>navigate("/quiz")}>Quiz</li>
            <li onClick={()=>navigate("/hypotenuse")}>Hypotenuse</li>
            <li onClick={()=>navigate("/area")}>Area of Triangle</li>
        </ul>
        </div>
    </nav>
  )
}
