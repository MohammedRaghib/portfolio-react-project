import React from 'react'

function About() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900 min-h-screen">
                <header className="bg-blue-600 p-6 text-center">
                    <div id="Header">
                        <h1 className="text-white text-4xl font-bold">About Me</h1>
                    </div>
                </header>
                <main className="p-8">
                    <div id="Main" className="max-w-4xl mx-auto grid grid-cols-1 gap-8 items-center">
                        <div className="info-main bg-white p-6 shadow-lg rounded-lg">
                            <p className="text-lg leading-relaxed">
                                I am currently a student at <strong>Zindua Coding School</strong>,<br />
                                learning the basics of web development and design.<br />
                                I had done my O levels before starting this course<br />
                                and have scored excelling marks.<br />
                                In my free time, I sometimes play games, <br />
                                here are some of the games I play:
                            </p>
                            <ul className="list-disc ml-6 mt-4">
                                <li>Minecraft</li>
                                <li>Fortnite</li>
                                <li>Roblox</li>
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default About
