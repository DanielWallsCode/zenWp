/* eslint-disable react/prop-types */

const EmailTemplate = ({message}) => {
    return (
        <div className="bg-slate-500">
            <h1 className="text-4xl font-bold">New Message!</h1>
            <p>{message}.</p>
        </div>
    )
}

export default EmailTemplate