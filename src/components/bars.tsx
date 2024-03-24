import { v4 as uuidv4 } from 'uuid'

export default function Bars() {
  return (
    <div className="flex flex-col gap-2.5 w-full">
      {[...Array(5)].map(() => (
        <div key={uuidv4()} className="h-[2px] w-full bg-black" />
      ))}
    </div>
  )
}
