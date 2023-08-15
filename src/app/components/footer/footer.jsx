import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="text-muted py-5">
                <div className="container">
                    <p className="float-end">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">
                        {/* ©  */}
                        Sohel Ansari | <a href="https://www.linkedin.com/in/sohelansarii/" target='_blank'>Linkedin</a>
                    </p>
                    <p className="mb-0">
                        {/* New to Bootstrap? <a href="/">Visit the homepage</a> or read our{" "}
                        <a href="../getting-started/introduction/">getting started guide</a>. */}
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;