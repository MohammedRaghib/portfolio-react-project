import React from 'react'

function Contact() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900 min-h-screen">
                <header className="bg-blue-600 p-6 text-center">
                    <h1 className="text-white text-4xl font-bold">Contact Page</h1>
                </header>
                <main className="p-8">
                    <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-center mb-6">Get In Touch</h2>

                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b-2 py-4 text-left text-lg font-bold">Contact Information</th>
                                    <th className="border-b-2 py-4 text-left text-lg font-bold">Social Media Links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b py-4">mohammedmraghib@gmail.com</td>
                                    <td className="border-b py-4">
                                        <a href="https://linkedin.com" className="text-blue-500 hover:underline">
                                            LinkedIn
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b py-4">+254-111-111-111</td>
                                    <td className="border-b py-4">
                                        <a href="https://twitter.com" className="text-blue-500 hover:underline">
                                            Twitter
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b py-4">Nairobi, Kenya</td>
                                    <td className="border-b py-4">
                                        <a href="https://github.com" className="text-blue-500 hover:underline">
                                            GitHub
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <p className="text-center text-gray-600 mt-8">
                            Feel free to reach out via email or connect with me on social media!
                        </p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Contact
