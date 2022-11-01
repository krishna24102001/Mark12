import { useState } from 'react'
import { Input, Footer } from "../../components"
export default function Hypotenuse() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [result, setResult] = useState(null);

    const sumOfSquares = (a, b) => {
        return a * a + b * b;
    }

    const calculateHypotenuse = () => {

        const sum = sumOfSquares(Number(A), Number(B))
        const result = Math.sqrt(sum);
        setResult(result)

    }


    return (
        <>
            <section className='Container'>
                <h1 className='heading'>Check Hypotenuse</h1>
                <h2 className='description'> Length of Hypotenuse = sqrt(a² + b²) </h2>
                <Input
                    label={"a="}
                    type={"Number"}
                    placeholder={"Enter The value Of angle a"}
                    callBack={(e) => {
                        setA(e.target.value)
                    }}
                />
                <Input
                    label={"b="}
                    type={"Number"}
                    placeholder={"Enter The value Of angle b"}
                    callBack={(e) => {
                        setB(e.target.value)
                    }}
                />

                <button onClick={calculateHypotenuse}>Check Hypotenuse </button>
                {result != null && <h2 > The Length of Hypotenuse is {result} cm</h2>}
            </section>
            <Footer/>
        </>
    )
}
