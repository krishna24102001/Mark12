import { useState } from "react"
import {
    Input,
    Footer
} from "../../components"
export default function Area() {
    const [base, setBase] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState(null);

    const calculateArea = () => {
        const area = 0.5 * (Number(base) * Number(height));
        setResult(area)
    }

    return (
        <>
            <section className='Container'>
                <h1 className="heading">Check Area of Triangle</h1>
                <h2 className='description'> Area of a triangle = 1/2(Base * Height) </h2>
                <Input
                    label={"Base(in cm)"}
                    type={"Number"}
                    placeholder={"Enter The value Of base"}
                    callBack={(e) => {
                        setBase(e.target.value)
                    }}

                />
                <Input
                    label={"Height(in cm)"}
                    type={"Number"}
                    placeholder={"Enter The value Of Height"}
                    callBack={(e) => {
                        setHeight(e.target.value)
                    }}

                />
                <button onClick={calculateArea}>Check Triangle</button>
                {result !== null && <h2> The Area of Triangle is {result} cm²</h2>}
            </section>
            <Footer />
        </>
    )
}
