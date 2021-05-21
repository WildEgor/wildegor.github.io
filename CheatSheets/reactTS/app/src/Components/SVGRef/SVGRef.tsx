import React from 'react'

interface ISVGProps {
    reference?: React.RefObject<SVGSVGElement>
}

  const SVGRef = (props: ISVGProps) => {
    return (
        <>
            <svg
                ref={props.reference}
                className={classes.Triangle}
                {...props} />
                <path d='M0,0 10,10 20,0' />
            </svg>
        </>
    )
    }

  // <SVG reference={myReference} />