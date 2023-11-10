"use client"
import { ModeToggle } from "@/components/ui/modeToggle"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import { Calendar } from "lucide-react"
import { useState } from "react"


export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
 <Button>Button</Button>
<ModeToggle></ModeToggle>
 <div className="bg-yellow-400">
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

 </div>
 
  <Calendar 
  mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"></Calendar>
 
    </>
  )
}
