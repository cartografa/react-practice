import useInputState from "./hooks/useInputState";

// WITH INTERNAL HOOK
// export default function SimpleForm() {
//     const [email, setEmail] = useState("");
//     const handleChange = (e) => {
//         setEmail(e.target.value)
//     }
//     return (
//         <div>
//             <h1>The value is...{email}</h1>
//             <input type="text" value={email} onChange={handleChange}/>
//             <button>Submit</button>
//         </div>
//     )
// }

export default function SimpleForm() {
    const [email, updateEmail, resetEmail] = useInputState("");
    return (
        <div>
            <h1>The value is...{email}</h1>
            <input type="text" value={email} onChange={updateEmail}/>
            <button onClick={resetEmail}>Submit</button>
        </div>
    )
}