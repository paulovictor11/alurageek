import { Rating } from "./Rating";

export type Props = {};

export function Review(props: Props) {
    return (
        <div className="grid grid-cols-4 items-start gap-4 py-8">
            <div className="flex flex-col gap-2 font-medium">
                <span className="text-lg">Risako M</span>
                <span className="text-zinc-400">May 16, 2021</span>
            </div>
            <Rating />
            <div className="col-span-2 flex flex-col gap-2 font-medium">
                <span className="text-lg">Can't say enough good things</span>
                <span className="text-zinc-400">
                    The product quality is amazing, it looks and feel even
                    better than I had anticipated. Brilliant stuff! I would
                    gladly recommend this store to my friends. And, now that I
                    think of it... I actually have, many times!
                </span>
            </div>
        </div>
    );
}
