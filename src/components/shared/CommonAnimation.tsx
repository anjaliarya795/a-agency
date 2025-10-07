'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

function CommonAnimation({ children, className='', duration=0.75 }: { children: ReactNode, className?:string, duration?:number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 80 }} // Determine x based on index
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration }}
            variants={{
                visible: { opacity: 1, scale: 1, y: 0 }, // Animate to normal position (x: 0)
                hidden: { opacity: 0, scale: 0.5, y: 80 } // Set initial x based on index
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default CommonAnimation