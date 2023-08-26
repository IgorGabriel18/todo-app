import { GitBranch, GitMerge } from "phosphor-react";

import "./styles.scss";

export function Footer() {
    return (
        <footer className="footer">
            <h5 className="footer__title">Developed by Igor</h5>
            <GitBranch className="footer__icon" />
            <a
                href="https://github.com/IgorGabriel18"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
            >
                GitHub
            </a>
            <GitMerge className="footer__icon" />
        </footer>
    );
}
