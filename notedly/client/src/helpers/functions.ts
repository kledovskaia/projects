import { MouseEvent } from "react"

export const stopBubbling = (event: MouseEvent) => event.stopPropagation()
