import { CartCounter } from "@/components/cart/CartCounter"

export const metadata = {
    title: "Counter Page",
    description: "Counter page"
}

export default function CounterPage (){
    return (
        <div className="flex flex-col items-center justify-center w-full h-80 bg-slate-400">
            <CartCounter value={100}/>
        </div>
    )
}