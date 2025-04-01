import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { cn } from '@/lib/utils'

export function Grid() {
  return (
    <section id='about'>
        <BentoGrid >
            {[{title: "Title 1", description: "Hello there", id: 1 }].map((item) => (
                <BentoGridItem 
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}
