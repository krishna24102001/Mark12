
import "./style.css"
export default function Input({ label,type,placeholder,callBack}) {
    return (
        <div className="InputContainer">
            <label htmlFor="Input">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={callBack}
                id ="Input"
            />
        </div>
    )
}
