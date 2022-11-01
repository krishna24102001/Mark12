
import { useState } from "react"
import { Footer } from "../../components";
const quizDB = [
    {
        question: "Which of the following triangles are always similar?",
        options: ["A. Right triangle", "B. Obtuse triangle", "C. Equilateral triangle", "D. Isoceles triangle"],
        Ans: "C. Equilateral triangle"
    },
    {
        question: "What is the point of concurrency of the medians?",
        options: ["A. Orthocenter", "B. Circumcenter.", "C. Incenter", "D. Centroid"],
        Ans: "D. Centroid"
    },
    {
        question: "Which center is equidistant from the vertices of a triangle?",
        options: ["A. Median", "B. Midpoint.", "C. Angle Bisector", "D. Perpendicular Bisector"],
        Ans: "C. Angle Bisector"
    },


]



export default function Quiz() {
    const [score, setScore] = useState(null);
    const clickHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        let index = 0;
        let count = 0;

        for (let value of formData.values()) {
            if (value === quizDB[index].Ans) {

                count++;
                index++;
            }
            else {
                index++;
            }
        }
        setScore(count);

    }

    return (
        <>
            <div className="Container">
                <form onSubmit={(e) => clickHandler(e)}>
                    <h1 className="heading">Triangle Quiz</h1>
                    {
                        quizDB.map(q => {
                            return <div style={{ margin: "1rem" }} key={q.question}>
                                {q.question}
                                <span>
                                    {q.options.map(o => {
                                        return <div key={o}>
                                            <input type="radio" value={o} name={q.question} />
                                            {" "}
                                            <span>{o}</span>
                                        </div>
                                    })}
                                </span>
                            </div>
                        })
                    }
                    <button type="submit">SUBMIT</button>
                </form>
                {score != null && <h2>score : {score}</h2>}
            </div>
            <Footer />
        </>
    )
}
