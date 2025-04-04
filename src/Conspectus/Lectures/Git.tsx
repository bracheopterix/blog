import { useState } from 'react';
import styles from './Lectures.module.scss';

// all h3 should become buttons!


function Git() {

    const [isP1, setP1] = useState<boolean>(true);



    return (
        < div className={styles.lectures}>

            <p>Is a command line tool letting you to safely travel between versions and changes of your project.</p>



            <section>
                <button className={styles.sectionHeader} onClick={() => setP1((prev) => !prev) }>
                    <h3>
                        Setting up
                    </h3>
                </button>
                <div className={isP1 ? styles.sectionInner : styles.hidden}>
                    <p>
                        <h4>Installing:</h4>
                        <code>brew install git</code>
                        <div><a href="https://gitforwindows.org/" target="_blank">https://gitforwindows.org/</a> - for Windows.</div>
                    </p>

                    <p>
                        <h4>Adding your credentials</h4>
                        <div className={styles.codeBlock}>
                            <code>git config --global user.name "Your Name"</code>
                            <code>git config --global user.email "your_email@whatever.com"</code>
                        </div>

                    </p>

                    <p>
                        <h4>Default branch name.</h4>
                        <code>git config --global init.defaultBranch main</code>
                    </p>

                    <p>
                        <h4>Line endings treatment</h4>
                        For Mac:
                        <div className={styles.codeBlock}>
                            <code>git config --global core.autocrlf input</code>
                            <code>git config --global core.safecrlf warn</code>
                        </div>


                        For Windows:

                        <div className={styles.codeBlock}>
                            <code>git config --global core.autocrlf true</code>
                            <code>git config --global core.safecrlf warn</code>
                        </div>

                    </p>
                </div>


            </section>

            <section>

                <h3>Manipulations and navigation</h3>

                <p>
                    <h4>Showing content of the folder</h4>
                    <code>ls</code>
                </p>

                <p>
                    <h4>Navigation</h4>
                    <code>cd folderName</code>
                    <code>cd parentFolder/folderName</code>
                </p>

                <p>
                    <h4>Directory up </h4>
                    <code>cd .. </code>
                </p>

            </section>

            <section>
                <h3>Work</h3>

                <p>
                    <h4>Starting</h4>
                    <code>git init </code>
                </p>

                <p>
                    <h4>Adding your changes for the pre-send</h4>
                    <code>git add . </code>
                </p>

                <p>
                    <h4>Saving those changes to the git</h4>
                    <code>git commit -m "text here your explanations of this commit</code>
                </p>


            </section>


            <p>
                <h4>Title</h4>
                <code>code</code>
            </p>

        </div>
    )
}

export default Git