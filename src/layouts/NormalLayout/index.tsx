import React from 'react'

import Bread from "../Bread"
import styles from './index.module.less'

const NormalLayout = ({ children }) => {
    return (<section className="h-screen flex flex-col">
        <header className=" border-b border-solid border-divider p-4 text-secondary">
            <Bread />
        </header>
        <div className={` flex-1 bg-main ${styles['main-body']}`}>
            {children}
        </div>
    </section>)
}
export default NormalLayout