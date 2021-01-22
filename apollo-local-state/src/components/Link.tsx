import React from 'react'

import classnames from 'classnames'

type LinkProps = {
    setFilter: () => void;
    active: boolean;
    children: React.ReactNode;
}

const Link = ({ active, children, setFilter }: LinkProps) =>
(
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
        className={classnames({ selected: active })}
        style={{ cursor: 'pointer' }}
        onClick={() => setFilter()}
    >
        {children}
    </a>
)



export default Link
