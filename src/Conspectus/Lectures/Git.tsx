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
    const [isP6, setP6] = useState<boolean>(false);






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
                </div>
            </section>

            <section>
                <button className={styles.sectionHeader} onClick={() => setP6((prev) => !prev)}>
                    <h3>Github Pages</h3>
                </button>
                <div className={isP6 ? styles.sectionInner : styles.hidden}>
                    <div>
                        <h4>Step-by-step guide to deploy a Vite app to GHP</h4>
                        <span>1. Check your <mark>vite.config.js/.ts</mark> for the <mark>base</mark> option</span>
                        <span>add a line to it</span>
                        <div className={styles.codeBlock}>
                            <code>{`import { defineConfig } from 'vite'`}</code>
                            <code>import react from '@vitejs/plugin-react'</code>
                            <code></code>
                            <code>{`export default defineConfig({`}</code>
                            <span> &nbsp; <code>{`plugins: [react()],`}</code></span>
                            <span> &nbsp; <code>{`  base: '/your-repo-name/', // <-- IMPORTANT!`}</code></span>
                            <code>{`})`}</code>
                        </div>
                        <span>If you want to be able to deploy AND use <mark>npm run dev</mark> option - change all <mark>export default config</mark> block</span>
                        <div className={styles.codeBlock}>
                            <code>{`export default defineConfig(({ command }) => ({`}</code>
                            <span> &nbsp; <code>{`plugins: [react()],`}</code></span>
                            <span> &nbsp; <code>{`base: command === 'build' ? '/blog/' : '/', // base only for production`}</code></span>
                            <code>{`}))`}</code>
                        </div>
                        <span>This would check input command and react accordingly</span>
                    </div>
                    <div>
                        <h4>{`2.Install gh-pages (only once) `}</h4>
                        <code>npm install --save-dev gh-pages</code>
                    </div>
                    <div>
                        <h4>3. Update your package.json</h4>
                        <span>This is how they were looking before</span>
                        <div className={styles.codeBlock}>
                            <code>{`"scripts": {`}</code>
                            <span> &nbsp; <code>{`"dev": "vite",`}</code></span>
                            <span> &nbsp; <code>{`"build": "tsc -b && vite build",`}</code></span>
                            <span> &nbsp; <code>{`"lint": "eslint .",`}</code></span>
                            <span> &nbsp; <code>{`"preview": "vite preview"`}</code></span>
                            <code>{`},`}</code>
                        </div>
                        <span>Add one more line</span>
                        <code>{`"deploy": "gh-pages -d dist"`}</code>
                        <span>Make sure your homepage is either omitted or matches the base path if you're using it.</span>
                        <span>Commit your changes</span>
                        <span></span>
                    </div>
                    <div>
                        <h4>4. Build and deploy</h4>
                        <code>npm run build</code>
                        <code>npm run deploy</code>
                        <span></span>
                    </div>
                    <div>
                        <h4>5. Enable GitHub Pages</h4>
                        <span> &nbsp; - go to your repo on GitHub</span>
                        <span> &nbsp; - click on Settings → Pages</span>
                        <span> &nbsp; - under Source, select from branch, gh-pages branch and root</span>
                        <span> &nbsp; - hit Save</span>
                    </div>
                    <div>
                        <h4>6. Wait a few seconds and go</h4>
                        <code>https://your-username.github.io/your-repo-name/</code>
                    </div>
                    <div>
                        <h4>Change all absolute img pathes to relative ones</h4>
                        <span>from <code>{`<img src="/assets/something.png">`}</code></span>
                        <span>to <code>{`<img src="./assets/something.png" />`}</code></span>
                        <span>Or import them for assets</span>
                        <div className={styles.codeBlock}>
                            <code>{`import logo from './assets/logo.png'`}</code><br />
                            <code>{`<img src={logo} />`}</code>
                        </div>
                    </div>
                </div>
            </section>

            <div>

            </div>

        </div>
    )
}

export default Git



