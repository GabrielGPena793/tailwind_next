'use client'

import { useFileInput } from './Root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FIleItem } from './FIleItem'

export function FIleList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FIleItem
            name={file.name}
            size={file.size}
            key={file.name}
            state="error"
          />
        )
      })}
    </div>
  )
}
