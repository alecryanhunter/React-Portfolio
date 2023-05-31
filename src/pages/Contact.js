import {useState} from "react";

function Contact() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    function handleBtnClick(e) {
        e.preventDefault();
    }

    return <main>
        <section className="contact page">
            <h2 className="title">Contact Me</h2>
            <form>
                <input
                    name="name"
                    placeholder="Enter Name"
                    onChange={e => setName(e.target.value)}
                />
                <input
                    name="email"
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <textarea
                    cols="60"
                    rows="10"
                    placeholder="Enter Message"
                    onChange={e => setMessage(e.target.value)}
                />
                <button
                       onClick={handleBtnClick} 
                >submit</button>
            </form>
        </section>
    </main>
}

export default Contact;