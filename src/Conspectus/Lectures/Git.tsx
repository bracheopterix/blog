import { useState } from 'react';
import styles from './Lectures.module.scss';

// all h3 should become buttons!

type GitProps = {
    isGit: boolean,
}

function Git({ isGit }: GitProps) {

    const [isP1, setP1] = useState<boolean>(false);
    const [isP2, setP2] = useState<boolean>(false);
    const [isP3, setP3] = useState<boolean>(false);
    const [isP4, setP4] = useState<boolean>(false);
    const [isP5, setP5] = useState<boolean>(false);





    return (
        < div className={isGit ? styles.lectures : styles.hidden}>

            <p>Is a command line tool letting you to safely travel between versions and changes of your project.</p>



            <section>
                <button className={styles.sectionHeader} onClick={() => setP1((prev) => !prev)}>
                    <h3>
                        Setting up
                    </h3>
                </button>
                <div className={isP1 ? styles.sectionInner : styles.hidden}>
                    <div>
                        <h4>Installing:</h4>
                        <code>brew install git</code>
                        <span><a href="https://gitforwindows.org" target="_blank">https://gitforwindows.org</a> - for Windows.</span>
                    </div>

                    <div>
                        <h4>Adding your credentials</h4>
                        <p className={styles.codeBlock}>
                            <code>git config --global user.name "Your Name"</code>
                            <code>git config --global user.email "your_email@whatever.com"</code>
                        </p>

                    </div>

                    <div>
                        <h4>Default branch name.</h4>
                        <code>git config --global init.defaultBranch main</code>
                    </div>

                    <div>
                        <h4>Line endings treatment</h4>
                        For Mac:
                        <p className={styles.codeBlock}>
                            <code>git config --global core.autocrlf input</code>
                            <code>git config --global core.safecrlf warn</code>
                        </p>


                        For Windows:

                        <p className={styles.codeBlock}>
                            <code>git config --global core.autocrlf true</code>
                            <code>git config --global core.safecrlf warn</code>
                        </p>
                    </div>
                    <span>Do not forget to create a <mark>.gitignore</mark> with <code>node_modules</code> for example</span>

                </div>


            </section>

            <section>
                <button className={styles.sectionHeader} onClick={() => setP2((prev) => !prev)}>

                    <h3>Manipulations and navigation</h3>
                </button>
                <div className={isP2 ? styles.sectionInner : styles.hidden}>
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
                </div>
            </section>

            <section>
                <button className={styles.sectionHeader} onClick={() => setP3((prev) => !prev)}>
                    <h3>Work</h3>
                </button>
                <div className={isP3 ? styles.sectionInner : styles.hidden}>
                    <div>
                        <h4>Starting</h4>
                        Creating a folder
                        <p className={styles.codeBlock}>

                            <code>mkdir work
                            </code>
                            <code>
                                cd work
                            </code>
                            <code>
                                touch hello.html
                            </code>
                        </p>

                        <span>Initializing git reposetory</span>
                        <code>git init </code>
                    </div>

                    <div>
                        <h4>Adding your changes for the pre-send</h4>
                        <code>git add . </code>
                    </div>

                    <div>
                        <h4>Saving those changes to the git</h4>
                        <code>git commit -m "text here your explanations of this commit</code>
                    </div>

                    <div>
                        <h4>Cheking the status of the repository</h4>
                        <code>git status</code>
                    </div>

                    <div>
                        <h4>Moving branches</h4>
                        <span><code>git switch branchName</code>or </span>
                        <code>git checkout branchName</code>
                        <span>checkout can also restore working tree files as does the <code>restore</code> command </span>
                    </div>

                    <div>
                        <h4>Creating a branch</h4>
                        <code>git checkout -b branchName</code>
                    </div>

                    <div>
                        <h4>Merging branches</h4>
                        <span>Step on the branch you want to pour - for example </span>
                        <span><mark>newBranch</mark> into <mark>main</mark>, step on the <mark>newBranch</mark></span>
                        <code></code>
                    </div>
                </div>

            </section>

            <section>
                <button className={styles.sectionHeader} onClick={() => setP4((prev) => !prev)}>
                    <h3>Fixing</h3>
                </button>
                <div className={isP4 ? styles.sectionInner : styles.hidden}>

                    <div>
                        <h4>Listing commit history</h4>
                        <code>git log</code>
                        <span>To quit this mode if you don't see <mark>:</mark> - press<mark>Shift</mark> + <mark> :</mark></span>
                        <span>and then press <mark>Q</mark></span>
                    </div>

                    <div>
                        <h4>Deleting all changes and go to the last commit</h4>
                        <code>git reset --hard HEAD</code>
                        If you want to save your changes, type before resetting
                        <code>git stash</code>
                        And if you want return them back
                        <code>git stash pop</code>
                    </div>


                </div>
            </section>


            <section>
                <button className={styles.sectionHeader} onClick={() => setP5((prev) => !prev)}>
                    <h3>Remote</h3>
                </button>

                <div className={isP5 ? styles.sectionInner : styles.hidden}>
                    <div>
                        <h4>Showing remote reposetories</h4>
                        <code>git remote</code>
                    </div>

                    <div>
                        <h4>To view more information</h4>
                        <code>git remote show origin</code>
                        <span>Instead of <mark>origin</mark> use your repositpry name</span>
                    </div>

                    <div>
                        <h4>Setting remote</h4>
                        <code>git remote add {`[<options>] <name> <url>`}</code>
                        <span>But it is very comfortable to use standart <mark>origin</mark> as a name</span>
                    </div>

                    <div>
                        <h4>Looking at remote branches</h4>
                        <code>git branch -a</code>
                    </div>

                    <div>
                        <h4>Checking changes on repo</h4>
                        <code>git fetch</code>
                        <span> Combine with</span>
                        <span><code>git log --all</code> - to look at logs</span>
                        <span><code>git diff main origin/main</code> - to compare changes:</span>
                        <span><code>git merge origin/main</code> - to merge updates manually</span>
                        <span><code>git reset --hard origin/main</code> - to reset or match</span>
                        <span>As usual, leave through <mark>Shift</mark> + <mark>Q</mark></span>
                    </div>

                    <div>
                        <h4>Pulling data from remote repo</h4>
                        <code>git pull</code>
                    </div>

                    <div>
                        <h4>Push commited changes</h4>
                        <code>git push origin master</code>
                        <span>or just <code>git push</code> if you want to push whatever branch you're on</span>
                        <span>(working only if the upstream is already set)</span>
                    </div>

                    {/* was */}
                    {/* "scripts": {
                        "dev": "vite",
                    "build": "tsc -b && vite build",
                    "lint": "eslint .",
                    "preview": "vite preview"
                    }, */}



                </div>
            </section>


            <div>
                <h4>Title</h4>
                <code>code</code>
            </div>

        </div>
    )
}

export default Git



