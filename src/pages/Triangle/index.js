import { useState } from "react"

import {
    Input,
    Footer
} from "../../components"
export default function IsTriangle() {
    const [angle1, setAngle1] = useState(0);
    const [angle2, setAngle2] = useState(0);
    const [angle3, setAngle3] = useState(0);
    const [result, setResult] = useState("")

    const calculateSum = () => {
        return Number(angle1) + Number(angle2) + Number(angle3);
    }
    const ClickHandler = () => {
        if (calculateSum() === 180) {
            setResult("It is Triangle")
        }
        else {
            setResult("Opps! It's not a triangle ...Try another values of angles")
        }

    }
    return (
        <>
            <section className="Container">
                <h1 className="heading">Is Triangle ?</h1>
                <Input
                    label={"angle1 (in degrees)"}
                    type={"Number"}
                    placeholder={"Enter The value Of angle 1"}
                    callBack={(e) => {
                        setAngle1(e.target.value)
                    }}
                />
                <Input
                    label={"angle2 (in degrees)"}
                    type={"Number"}
                    placeholder={"Enter The value Of angle 2"}
                    callBack={(e) => {
                        setAngle2(e.target.value)
                    }}
                />
                <Input
                    label={"angle3 (in degrees)"}
                    type={"Number"}
                    placeholder={"Enter The value Of angle 3"}
                    callBack={(e) => {
                        setAngle3(e.target.value)
                    }}
                />

                <button onClick={ClickHandler}>Is Triangle</button>
                <h2>{result}</h2>
            </section>
            <Footer />
        </>
    )
}
